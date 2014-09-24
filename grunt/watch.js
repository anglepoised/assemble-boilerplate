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
      'colorguard',
    ]
  },
  images: {
    files: [
      '<%= settings.src %>/assets/images/**/*.{jpg,png,svg}'
    ],
    tasks: [
      'newer:imagemin',
      'newer:copy:images',
      'grunticon',
    ]
  },
  scripts: {
    files: [
      '<%= settings.src %>/assets/scripts/*.js'
    ],
    tasks: [
      'newer:jshint:scripts',
      'newer:jsbeautifier:scripts',
      'newer:jscs:scripts',
      'newer:copy:scripts',
    ]
  },
  assemble: {
    files: [
      '<%= settings.src %>/**/*.hbs',
      '<%= settings.src %>/data/*.json',
      '<%= settings.src %>/content/*.md',
    ],
    tasks: [
      'newer:jshint:jsonData',
      'newer:jsbeautifier:jsonData',
      'assemble:dev'
    ]
  },
  dist: {
    files: [
      '<%= settings.dist %>/*.html',
      '<%= settings.dist %>/assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
      '<%= settings.dist %>/assets/scripts/*.js',
      '<%= settings.dist %>/assets/styles/*.css'
    ]
  },
};
