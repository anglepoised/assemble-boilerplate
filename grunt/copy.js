module.exports = {
  options: {
    noProcess: [
      '.DS_Store',
      '.gitignore',
      'node_modules',
      'data/*.json',
      'template',
    ]
  },
  staticFiles: {
    files: [{
      cwd: '<%= settings.src %>',
      dest: '<%= settings.dist %>',
      expand: true,
      filter: 'isFile',
      src: [
        '**/.*',
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
      ]
    }]
  }
};
