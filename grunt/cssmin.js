module.exports = {
  options: {
    report: 'min',
  },
  prod: {
    files: {
      '<%= settings.dist %>/assets/styles/main.css': '<%= settings.dist %>/assets/styles/main.css'
    }
  }
};
