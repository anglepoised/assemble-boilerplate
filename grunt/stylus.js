module.exports = {
  all: {
    options: {
      compress: false
    },
    files: {
      '<%= settings.dist %>/assets/styles/main.css': '<%= settings.src %>/assets/styls/main.styl'
    }
  }
};
