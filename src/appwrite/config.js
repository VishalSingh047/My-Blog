import conf from "../conf/conf.js";
import {Client, ID, Databases, Storage, Query} from "appwrite"


export class Service{
  client = new Client()
  databases;
  bucket;           // or "storage" 
  constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId, 
        slug,                    // as a document ID (we can also use Unique ID rather than slug)
        {
          title,
          // slug,                  // slug chahiye toh kar sakte hain but yaha nhi chahiye
          content, 
          featuredImage,
          status, 
          userId,
        }
       )
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error)
    }
  }

  async updatePost(slug, {title, content, featuredImage, status}){ // slug is the document ID and we want to get document id first to update

    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId, 
        conf.appwriteCollectionId, 
        slug,
        {
          title,
          content, 
          featuredImage,
          status, 
        }
       )
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error)
    }
  }

  async deletePost(slug){  //  needs only doc ID to delete.
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error", error)
      return false;
    }
  }

//  ---------------------- To get a SINGLE POST ----------
  async getPost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error)
      return false;
    }
  }

  //  ---------------------- To get All Active POSTs ----------
  async getPosts(queries = [Query.equal("status", "active")]){  //  queries is an array of Query objects
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error)
      return false;
    }

  }

//  --------------- FILE UPLOAD SERVICE ----------

  async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error)
    }
  }

// 2. +++++++++++++++++++++ DELETE FILE ++++++++++++++++++++++++

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId,
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error)
      return false;
    }
  }

// 3. +++++++++++++++++++++ File Preview ++++++++++++++++++++++++

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId,
    )
  }
}
const service = new Service()
export default service;

