'use strict';
var grunt = require('grunt')

module.exports = {

  dist: {
    options: {
      style: 'expanded',
      // sourcemap: 'none',
      trace: true,
      style: 'compressed' // nested, compact, compressed, expanded
    },
    files: {
      'build/assets/css/style.css': 'src/sass/style.scss'
    }
  }

}
