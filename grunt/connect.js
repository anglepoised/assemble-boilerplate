module.exports = {
  options: {
    base: '<%= settings.dist %>',
  },
  dev: {
    options: {
      livereload: true,
      port: 3000
    }
  },
  prod: {
    options: {
      port: 3000
    }
  }
};
