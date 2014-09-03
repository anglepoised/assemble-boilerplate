module.exports = {
  all: {
    options: {
      compress: false
    },
    files: {
      '<%= settings.dist %>/assets/styles/core.css': '<%= settings.src %>/assets/styls/core.styl'
    }
  }
};
