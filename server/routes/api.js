const express = require('express');
const mainController = require('../controllers/mainController');
const sqlController = require('../controllers/sqlController');
const router = express.Router();

/* use getProducts when accessing default route */
router.get('/', mainController.getProducts,(req, res) => {
  return res.status(200).json(res.locals.products);
})

/* use getReview when accessing the review route */
router.post("/reviews", sqlController.getReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* use findOneUser when accessing the user route */
router.get("/user", sqlController.findOneUser, (req, res)=> {
  return res.status(200).json(res.locals.user);
})

/* use createUser when accessing the user route */
router.post("/createuser", sqlController.createUser, (req, res)=> {
  return res.status(200).json(res.locals.user);
})

/* Need to export module */
module.exports = router;