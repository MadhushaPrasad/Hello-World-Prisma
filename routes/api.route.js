const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//getAll products
router.get('/products', async (req, res, next) => {
  try {
    //get product data within categories
    const products = await prisma.product.findMany({
      include: { category: true },
    });

    //get data only category
    const categories = await prisma.category.findMany({});

    res.json({ products, categories });
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
  try {
    const product = await prisma.product.create({
      data: req.body,
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
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
