module.exports = {
  uglify: {
    files: [{
      expand: true,
      cwd: '<%= settings.dist %>/assets/scripts/',
      dest: '<%= settings.dist %>/assets/scripts/',
      src: '**/*.js',
    }]
  },
};
