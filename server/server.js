'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');
const path = require('path');
var errorHandler = require('strong-error-handler');

const app = module.exports = loopback();

app.use(errorHandler({
  debug: true,
  log: true,
}));

app.start = function() {
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

const server = require('./app');

const PORT = process.env.PORT || 3000;

// We're telling the app to listen for network requests on port 3000
server.listen(PORT, () => {
  console.debug(`Server is listening on http://localhost:${PORT}`);
});

boot(app, __dirname, function(err) {
  if (err) throw err;

  if (require.main === module)
    app.start();
});

app.get('/about-me', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});
