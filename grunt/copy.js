module.exports = {
  options: {
    noProcess: ['.DS_Store', '.gitignore', 'node_modules', 'data', 'template']
  },
  test: {
    files: [{
      cwd: '<%= settings.src %>/',
      dest: '<%= settings.dist %>/',
      expand: true,
      filter: 'isFile',
      src: ['index.html']
    }]
  }
};
