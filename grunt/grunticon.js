module.exports = {
  static: {
    files: [{
      expand: true,
      cwd: '<%= settings.src %>/assets/images/static',
      src: ['*.svg', '*.png'],
      dest: '<%= settings.dist %>/assets/images/static'
    }],
    options: {}
  }
};
