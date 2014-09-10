module.exports = {
  dist: {
    options: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    },
    files: [{
      cwd: '<%= settings.dist %>/',
      dest: '<%= settings.dist %>/',
      expand: true,
      src: ['**/*.html']
    }]
  },
};
