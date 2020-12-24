import express from 'express';
import validateObjectMW from '#routes/middleware/validateObject';
import productSchema from './validator';

const router = express.Router();

router.post('/', validateObjectMW(productSchema), (req, res) => {
  const { body: product } = req;
  console.log('Nice! We made it past the validation.');
  console.log(JSON.stringify(product, null, 2));
  res.json(product);
});

export default router;
