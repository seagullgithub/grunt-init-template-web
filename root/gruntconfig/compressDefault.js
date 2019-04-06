'use strict';
var grunt = require('grunt')

module.exports = {

  main: {
    options: {
      archive: '_export/<%= pkg.name %> _v<%= pkg.version %>.zip',
      mode: 'zip', // gzip, deflate, deflateRaw, tar, tgz (tar gzip), zip, brotli
      pretty: true
    },
    files: [
      {
        expand: true,
        cwd: 'build',
        src: ['**'],
        filter: 'isFile',
        dest: '/'
      }
    ]
  }
}
