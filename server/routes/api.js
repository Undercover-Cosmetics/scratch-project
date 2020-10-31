const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/', mainController.getProducts, (req, res) => {
  return res.status(200).json({products: res.locals.products,});
})

// router.post('/', )
module.exports = router;