"use strict";

require('mdoc').run({
  inputDir: 'docs',
  outputDir: 'dist/views',
  assetsPath: 'dist/assets',
  mapOutName: function (outputName) {
   return outputName.replace('.html', '.handlebars');
  }
});
