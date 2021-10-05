const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//getAll products
router.get('/products', async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({});
    res.json(products);
  } catch (error) {
    next(error);
  }
});

//get single product
router.get('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//add single product
router.post('/products/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//update single product
router.patch('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//delete single product
router.delete('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
