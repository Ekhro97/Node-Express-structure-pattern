const { Router } = require('express');
const clientsController = require('./clientsController');

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/clients', clientsController);

router.get('*', (req, res) => {
  res.status(404).send({ message: 'not found' });
});

module.exports = router;
