module.exports = {
  options: {
    report: 'min',
  },
  prod: {
    files: {
      '<%= settings.dist %>/assets/styles/core.css': '<%= settings.dist %>/assets/styles/core.css'
    }
  }
};
