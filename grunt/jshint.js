module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    jshintrc: '.jshintrc'
  },
  conf: {
    src: [
      '.jshintrc',
      '.jsbeautify',
    ]
  },
  pkg: {
    src: ['package.json']
  },
  grunt: {
    with_overrides: {
      options: {
        node: true,
      },
      files: {
        src: [
          'Gruntfile.js',
          'grunt/*.js',
        ],
      }
    },
  },
  jsonData: {
    src: ['<%= settings.src %>/data/*.json']
  },
};
