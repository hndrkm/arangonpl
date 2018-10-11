'use strict';
const createRouter =require('@arangodb/foxx/router');
const router = createRouter();

module.context.use(router);

router.get('/hola_mundo', function (req, res) {
    res.send('hola mundo!');
  })
  .response(['text/plain'], 'A generic greeting.')
  .summary('Generic greeting')
  .description('Prints a generic greeting.');