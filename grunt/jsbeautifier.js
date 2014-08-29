module.exports = {
  options: {
    config: '.jsbeautifyrc',
  },
  pkg: {
    src: ['package.json'],
  },
  grunt: {
    src: ['Gruntfile.js', 'grunt/*.js'],
  },
};
