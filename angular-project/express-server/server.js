const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const engines = require('consolidate');
const DIST_FOLDER = path.join(process.cwd(), '..', '..');
var serveStatic = require('serve-static');

// server-side-endering
// load the single view file (angular will handle the page changes on the front-end)
function angularRouter(req, res) {
    res.render('index', { req, res });
    res.render(DIST_FOLDER + '/browser/index.html');
}

// configuration
const app = express();
app.set('views', path.join(DIST_FOLDER, 'browser'));
app.set('view engine', 'html');
app.use(serveStatic(DIST_FOLDER + '/browser'))
app.engine('html', engines.mustache);

app.get('/', angularRouter);
app.get('*', angularRouter);

// start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
