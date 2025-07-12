// src/components/rte-config.js

// --- Core TinyMCE setup ---
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme'; // ✅ Required theme
import 'tinymce/icons/default/icons'; // ✅ Required icons
import 'tinymce/models/dom/model';    // ✅ DOM model

// --- TinyMCE skin (UI styling) ---
import 'tinymce/skins/ui/oxide/skin.min.css';

// --- TinyMCE plugins ---
import 'tinymce/plugins/advlist/plugin';
import 'tinymce/plugins/autolink/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/image/plugin';
import 'tinymce/plugins/charmap/plugin';
import 'tinymce/plugins/preview/plugin';
import 'tinymce/plugins/anchor/plugin';
import 'tinymce/plugins/searchreplace/plugin';
import 'tinymce/plugins/visualblocks/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/fullscreen/plugin';
import 'tinymce/plugins/insertdatetime/plugin';
import 'tinymce/plugins/media/plugin';
import 'tinymce/plugins/table/plugin';
import 'tinymce/plugins/help/plugin';
import 'tinymce/plugins/wordcount/plugin';
