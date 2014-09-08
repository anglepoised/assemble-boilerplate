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
    src: ['<%= settings.src %>/*.hbs'],
    dest: '<%= settings.dist %>/'
  },
  prod: {
    options: {
      dev: false,
      prod: true
    },
    src: ['<%= settings.src %>/*.hbs'],
    dest: '<%= settings.dist %>/'
  }
};
