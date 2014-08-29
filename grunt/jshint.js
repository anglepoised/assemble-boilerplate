module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    jshintrc: '.jshintrc'
  },
  settings: {
    src: ['package.json', '.jshintrc', '.jsbeautify']
  },
  grunt: {
    with_overrides: {
      options: {
        node: true,
      },
      files: {
        src: ['Gruntfile.js', 'grunt/*.js'],
      }
    }
  }
};
