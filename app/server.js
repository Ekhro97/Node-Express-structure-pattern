const express = require('express');

const routes = require('./routes');
const { server } = require('../config');

const app = express();

app.use(routes);
app.listen(server.port, () =>
  // eslint-disable-next-line no-console
  console.log(`app running on http://${server.url}${server.port}`),
);
