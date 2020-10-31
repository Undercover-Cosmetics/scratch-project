const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/',mainController.getProducts,(req, res) => {
  console.log("I'm in api router")
  //  
  // return res.status(200).json(res.locals.products);
  return res.status(200);
})

// router.post('/', )
module.exports = router;