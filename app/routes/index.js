import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('*', (req, res) => {
  res.status(404).send({ message: 'not found' });
});

export default router;
