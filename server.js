'use strict';

const Express = require('express');
const bodyParser = require('body-parser');
const router = require('./lib');

const app = Express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text({type: '*/*', limit: "50mb"}));
app.use('/api/', router);

app.get('/', function(req, res){
  res.redirect('/api');
});

app.listen(port, function () {
  console.log('Server started on port', port);
});
