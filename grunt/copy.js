module.exports = {
  options: {
    noProcess: [
      '.DS_Store',
      '.gitignore',
      'node_modules',
    ]
  },
  staticFiles: {
    files: [{
      cwd: '<%= settings.src %>',
      dest: '<%= settings.dist %>',
      expand: true,
      filter: 'isFile',
      src: [
        '**/*.*',
        '!**/*.hbs',
        '!data/**/*.*',
        '!content/**/*.*',
        '!templates/**/*.*',
        '!assets/images/**/*.*',
        '!assets/scripts/**/*.*',
        '!assets/styls/**/*.*',
      ]
    }]
  },
  scripts: {
    files: [{
      cwd: '<%= settings.src %>/assets/scripts/',
      dest: '<%= settings.dist %>/assets/scripts/',
      expand: true,
      filter: 'isFile',
      src: [
        '**/*.js',
      ]
    }]
  },
  images: {
    files: [{
      cwd: '<%= settings.src %>/assets/images/',
      dest: '<%= settings.dist %>/assets/images/',
      expand: true,
      filter: 'isFile',
      src: ['**/*.{png,jpg,svg}']
    }]
  },
};
