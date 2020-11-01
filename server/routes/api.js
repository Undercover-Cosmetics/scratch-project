const express = require('express');
const mainController = require('../controllers/mainController');
const sqlController = require('../controllers/sqlController');
const router = express.Router();

/* use getProducts when accessing default route */
router.get('/', mainController.getProducts,(req, res) => {
  return res.status(200).json(res.locals.products);
})

/* use getProducts when accessing default route */
router.get("/reviews", sqlController.getReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* Need to export module */
module.exports = router;