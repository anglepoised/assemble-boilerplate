module.exports = {
  bsFiles: {
    src: [
      '<%= settings.dist %>/assets/**/*.*',
      '<%= settings.dist %>/**/*.html',
    ]
  },
  options: {
    open: false,
    watchTask: true,
    online: true,
    tunnel: true,
    server: {
      baseDir: './<%= settings.dist %>/'
    }
  }
};
