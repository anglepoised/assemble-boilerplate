module.exports = {
  options: {
    browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
  },
  all: {
    src: '<%= settings.dist %>/assets/styles/main.css',
    dest: '<%= settings.dist %>/assets/styles/main.css'
  }
};
