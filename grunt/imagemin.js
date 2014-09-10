module.exports = {
  all: {
    files: [{
      cwd: '<%= settings.src %>/assets/images',
      dest: '<%= settings.src %>/assets/images',
      expand: true,
      src: '**/*.{png,jpg,svg}'
    }]
  }
};
