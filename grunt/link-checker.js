module.exports = {
  options: {
    maxConcurrency: 20,
    callback: function(crawler) {
      crawler.addFetchCondition(function(parsedURL) {
        return !parsedURL.path.match(/\.js$/i);
      });
    }
  },
  dev: {
    site: '0.0.0.0',
    options: {
      initialPort: 9000,
    }
  },
  prod: {
    site: '0.0.0.0',
    options: {
      initialPort: 3000,
    }
  },
};
