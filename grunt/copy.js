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
  test: {
    files: [{
      cwd: '<%= settings.src %>/',
      dest: '<%= settings.dist %>/',
      expand: true,
      filter: 'isFile',
      src: [
        'index.html'
      ]
    }]
  }
};
