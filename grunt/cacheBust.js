module.exports = {
  options: {
    encoding: 'utf8',
    algorithm: 'md5',
    length: 16
  },
  assets: {
    files: [{
      expand: true,
      cwd: '<%= settings.dist %>',
      src: ['*.html'],
      dest: '<%= settings.dist %>'
    }]
  }
};
