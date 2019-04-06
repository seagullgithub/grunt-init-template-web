'use strict';
var grunt = require('grunt')

module.exports = {


      options: {
        livereload: 35730,
        cwd: 'src'
      },
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass'],
      },
      html: {
        files: ['*.html']
      },
      js: {
        files: ['js/*.js']
      }

}
