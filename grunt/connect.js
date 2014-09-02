module.exports = {
  options: {
    base: '<%= settings.dist %>',
  },
  dev: {
    options: {
      livereload: true,
      port: 9000
    }
  },
  prod: {
    options: {
      port: 3000
    }
  }
};
