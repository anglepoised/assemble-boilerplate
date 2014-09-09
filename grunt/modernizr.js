module.exports = {
  dist: {
    devFile: '<%= settings.src %>/assets/scripts/lib/modernizr.js',
    outputFile: '<%= settings.dist %>/assets/scripts/lib/modernizr.js',
    extra: {
      shiv: true,
      printshiv: false,
      load: true,
      mq: true,
      cssclasses: true
    },
    extensibility: {
      addtest: false,
      prefixed: false,
      teststyles: false,
      testprops: false,
      testallprops: false,
      hasevents: false,
      prefixes: false,
      domprefixes: false
    },
    uglify: false,
    tests: [],
    parseFiles: true,
    files: {
      src: [
        '*.js',
        '*.css',
      ]
    },
    matchCommunityTests: false,
  }
};
