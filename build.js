//
// This file contains all available settings.
//

var mdoc = require('mdoc');

mdoc.run({

    // === required settings === //

    inputDir : 'content',
    outputDir : 'doc',


    // === basic settings === //

    baseTitle : 'P2P VPS Documentation',
    //indexContentPath : '../basic/index.mdown',


    // === advanced settings === //

    templatePath : 'custom_template',

    //by default it will look at an `assets_` folder inside the `templatePath`
    assetsPath : 'custom_assets',

    //indexContent will take precedence over `indexContentPath`
    indexContent : '<h1>P2P VPS Documentation</h1><p>Welcome to the official documenation of the P2P VPS project.</p>',

    mapOutName : function(outputName) {
        //change file output name
        return outputName.replace('.html', '_doc.html');
    },

    mapTocName : function(fileName, tocObject){
        //change the name displayed on the sidebar and on the index TOC
        return fileName.replace('_doc.html', '');
    },

    // pattern that matches files that should be parsed
    // this is the default value...
    include : '*.mdown,*.md,*.markdown',

    // pattern that matches files that shouldn't be parsed
    //exclude : 'array.*',

    //filterFiles : function(fileInfo) {
        // return `false` to remove files and `true` to keep them
    //    return (/math/).test(fileInfo.input);
    //},

    // sets which heading should be treated as a section start (and is used for
    // TOC) defaults to `2`
    headingLevel : 2

});
