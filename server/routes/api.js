const express = require('express');
const mainController = require('../controllers/mainController');
const sqlController = require('../controllers/sqlController');
const router = express.Router();

/* USER NOT LOGGED IN ACITONS: View PRODUCTS */
/* use getProducts when accessing default route */
router.get('/', mainController.getProducts,(req, res) => {
  // console.log('in getProducts route')
  return res.status(200).json(res.locals.products);
})

/* USER NOT LOGGED IN ACITONS: View REVIEWS */
router.post("/review", sqlController.getReview, (req, res)=> {
  // console.log('in reviews route')
  return res.status(200).json(res.locals.reviews);
})

/* AUTHENTICATION ACITONS: Find User */
router.get("/user", sqlController.findOneUser, (req, res)=> {
  // console.log('in find user route')
  return res.status(200).json(res.locals.user);
})

/* AUTHENTICATION ACITONS: Create User */
router.post("/createuser", sqlController.createUser, (req, res)=> {
  // console.log('in create user route')
  return res.status(200).json(res.locals.user);
})

/* USER LOGGED IN ACITONS: ADD REVIEW */
router.post("/addreview", sqlController.addReview, (req, res)=> {
  // console.log('in add reviews route')
  return res.status(200).json(res.locals.newReview);
})

/* USER LOGGED IN ACITONS: UPDATE REVIEW */
router.post("/editreview", sqlController.editReview, (req, res)=> {
  console.log('in editreview route')
  return res.status(200).json(res.locals.newReview);
})

/* USER LOGGED IN ACITONS: DELETE REVIEW */
router.post("/deletereview", sqlController.deleteReview, (req, res)=> {
  // console.log('in delete reviews route')
  return res.status(200).json(res.locals.newReview);
})

/* Need to export module */
module.exports = router;