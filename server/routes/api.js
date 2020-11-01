const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

/* use getProducts when accessing default route */
router.get('/',mainController.getProducts,(req, res) => {
  console.log("I'm in api router");
  return res.status(200).json(res.locals.products);
})

/* Need to export module */
module.exports = router;