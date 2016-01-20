module.exports = {
  staticFiles: {
    files: [{
      cwd: '<%= settings.src %>',
      dest: '<%= settings.dist %>',
      expand: true,
      filter: 'isFile',
      dot: true,
      src: [
        '**/**',
        '!**/*.DS_Store',
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
        '**/*.map',
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
