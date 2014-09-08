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
  jsonData: {
    src: ['<%= settings.src %>/data/*.json'],
  },
};
