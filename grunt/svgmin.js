module.exports = {
  options: {
    plugins: [{
      removeViewBox: false
    }, {
      removeUselessStrokeAndFill: false
    }, {
      removeEmptyAttrs: false
    }]
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= settings.src %>/assets/images/static/',
      dest: '<%= settings.src %>/assets/images/static/',
      src: ['**/*.svg'],
      ext: '.svg'
    }]
  }
};
