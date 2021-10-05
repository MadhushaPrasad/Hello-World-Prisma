const router = require('express').Router();

//getAll products
router.get('/products', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//getAll single product
router.get('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//add single product
router.post('/products/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//pudate single product
router.patch('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

//delete single product
router.delete('/products/:id', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
