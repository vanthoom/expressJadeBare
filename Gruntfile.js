var path = require('path');
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'path/to/dest.html': ['path/to/templates/*.pug', 'another/path/tmpl.pug']
        }
      }
    },
    express: {
        options: {
          port: 3000,
          server: path.resolve(__dirname, 'src/expxress.js'),
          delay:0,
          serverreload: true,
          bases: ['src']
        }        
        // if you do not define a port it will start your server at port 3000
    }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-express');
  // Default task(s).
  grunt.registerTask('default', ['express']);

};