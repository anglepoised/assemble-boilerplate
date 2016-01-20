module.exports = {
  options: {
    reporter: require('jshint-stylish'),
    bitwise: true,
    camelcase: true,
    curly: true,
    eqeqeq: true,
    indent: 2,
    latedef: true,
    newcap: true,
    noarg: true,
    nonbsp: true,
    quotmark: true,
    undef: true,
    unused: true,
    strict: false,
    eqnull: true,
    esnext: true,
    immed: true,
    trailing: true,
    smarttabs: true,
  },
  conf: {
    src: [
      '.jsbeautify',
    ]
  },
  pkg: {
    src: ['package.json']
  },
  grunt: {
    options: {
      node: true,
    },
    files: {
      src: [
        'Gruntfile.js',
        'grunt/*.js',
      ],
    },
  },
  jsonData: {
    src: ['<%= settings.src %>/data/*.json']
  },
  scripts: {
    options: {
      jquery: true,
      browser: true,
      devel: true,
    },
    files: {
      src: ['<%= settings.src %>/assets/scripts/*.js'],
    },
  },
};
