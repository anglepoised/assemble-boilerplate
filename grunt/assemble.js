module.exports = {
  options: {
    assets: '<%= settings.dist %>/assets',
    data: 'src/data/*.json',
    flatten: true,
    layout: 'layout.hbs',
    layoutdir: '<%= settings.src %>/templates/layouts',
    partials: ['<%= settings.src %>/templates/partials/**/*.{hbs,md}']
  },
  dev: {
    options: {
      dev: true,
      prod: false
    },
    expand: true,
    cwd: '<%= settings.src %>',
    src: [
      '**/*.hbs',
      '!templates/**/*.{hbs,md}',
    ],
    dest: '<%= settings.dist %>/',
    ext: '.html'
  },
  prod: {
    options: {
      dev: false,
      prod: true
    },
    expand: true,
    cwd: '<%= settings.src %>',
    src: [
      '**/*.hbs',
      '!templates/**/*.{hbs,md}',
    ],
    dest: '<%= settings.dist %>/',
    ext: '.html'
  }
};
