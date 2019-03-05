const { Router } = require('express');
const {
  policiesActions: { getPolicies, getUserPolicies },
} = require('../actions');

const router = Router();

router.get('/:userId', (req, res) => {
  const {
    params: { userId },
  } = req;

  console.log(req.params);

  getUserPolicies(userId)
    .then((client) => res.status(200).send(client))
    .catch((error) => res.status(400).send(error));
});

router.get('/', (req, res) => {
  getPolicies()
    .then((clients) => res.status(200).send(clients))
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
