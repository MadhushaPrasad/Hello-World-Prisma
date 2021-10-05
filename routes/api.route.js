const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')

//getAll products
router.get('/products', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
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
