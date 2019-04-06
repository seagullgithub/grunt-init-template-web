'use strict';

module.exports = function(grunt) {

  // load configuration
  var config = {};
  config.pkg = grunt.file.readJSON('package.json'),
  config.sass = require('./gruntconfig/sassDefault.js');
  grunt.initConfig(config);


  // load tasks
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-svgmin');

  // register tasks
  grunt.registerTask('default', 'start watch (all files) and localserver', function(arg) {
    grunt.log.writeln('using livereload:'['green']);
    let livereload_snippet = '<script src="//localhost:' + grunt.config.get('watch.options.livereload') + '/livereload.js"></script>'
    grunt.log.writeln(livereload_snippet['green'].bold);
    grunt.task.run(['http-server','watch']);
  });

};
