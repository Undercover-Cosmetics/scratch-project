const express = require('express');
const mainController = require('../controllers/mainController');
const sqlController = require('../controllers/sqlController');
const router = express.Router();

/* USER NOT LOGGED IN ACITONS: View PRODUCTS */
/* use getProducts when accessing default route */
router.get('/', mainController.getProducts,(req, res) => {
  return res.status(200).json(res.locals.products);
})

/* USER NOT LOGGED IN ACITONS: View REVIEWS */
router.post("/reviews", sqlController.getReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* AUTHENTICATION ACITONS: Find User */
router.get("/user", sqlController.findOneUser, (req, res)=> {
  return res.status(200).json(res.locals.user);
})

/* AUTHENTICATION ACITONS: Create User */
router.post("/createuser", sqlController.createUser, (req, res)=> {
  return res.status(200).json(res.locals.user);
})

/* USER LOGGED IN ACITONS: ADD REVIEW */
router.post("/addreviews", sqlController.addReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* USER LOGGED IN ACITONS: UPDATE REVIEW */
router.post("/updatereviews", sqlController.updateReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* USER LOGGED IN ACITONS: DELETE REVIEW */
router.post("/deletereviews", sqlController.deleteReview, (req, res)=> {
  return res.status(200).json(res.locals.reviews);
})

/* Need to export module */
module.exports = router;