const { Router } = require('express');
const { getClients } = require('../actions/clientsActions');

const router = Router();

router.get('/:id', (req, res) => {
  const { params } = req;

  res.status(200).send(params.id);
});

router.get('/', (req, res) => {
  getClients()
    .then((clients) => res.status(200).send(clients))
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
