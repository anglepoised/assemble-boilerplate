module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
    init: true,
    config: {
      settings: {
        src: 'src',
        dist: 'dist'
      },
      pkg: grunt.file.readJSON('package.json')
    },
    loadGruntTasks: {
      pattern: ['grunt-*'],
      config: require('./package.json'),
      scope: 'devDependencies'
    }
  });
};
