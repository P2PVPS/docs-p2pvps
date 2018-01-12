"use strict";

require('mdoc').run({
  inputDir: 'docs',
  outputDir: 'dist/views',

  indexContentPath : 'README.md',

  mapOutName: function (outputName) {
   return outputName.replace('.html', '.handlebars');
  }
});
