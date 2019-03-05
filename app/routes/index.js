const { Router } = require('express');
const clientsController = require('./clientsController');
const policiesController = require('./policiesController');

const router = Router();

router.get('/', (req, res) => {
  res.send('Service is working fine!');
});

router.use('/clients', clientsController);
router.use('/policies', policiesController);

router.get('*', (req, res) => {
  res.status(404).send({ message: 'not found' });
});

module.exports = router;
