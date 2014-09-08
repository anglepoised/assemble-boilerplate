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
  },
  assemble: {
    files: [
      '<%= settings.src %>/**/*.hbs',
      '<%= settings.src %>/data/*.json'
    ],
    tasks: [
      'newer:jshint:jsonData',
      'newer:jsbeautifier:jsonData',
      'assemble:dev'
    ]
  },
  dist: {
    options: {
      livereload: true,
    },
    files: [
      '<%= settings.dist %>/*.html',
      '<%= settings.dist %>/assets/images/*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= settings.dist %>/assets/scripts/*.js',
      '<%= settings.dist %>/assets/styles/*.css'
    ]
  },
};
