module.exports = {
  pkg: {
    files: [
      'package.json',
    ],
    tasks: [
      'newer:jsbeautifier:pkg',
      'newer:jshint:pkg',
    ]
  },
  conf: {
    files: [
      '.jshintrc',
      '.jsbeautify',
    ],
    tasks: [
      'newer:jsbeautifier:conf',
      'newer:jshint:conf',
    ]
  },
  grunt: {
    files: [
      'Gruntfile.js',
      'grunt/*.js',
    ],
    tasks: [
      'newer:jsbeautifier:grunt',
      'newer:jshint:grunt',
    ]
  },
  css: {
    files: [
      '<%= settings.src %>/assets/styls/**/*.styl'
    ],
    tasks: [
      'stylus',
      'autoprefixer',
    ]
  }
};
