module.exports = {
  compile: {
    expand: true,
    cwd: '<%= settings.dist %>/assets/scripts/',
    src: ['*.js'],
    dest: '<%= settings.dist %>/assets/scripts/',
    ext: '.js'
  },
};
