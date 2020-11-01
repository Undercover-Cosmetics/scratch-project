const fs = require('fs');
const path = require('path');

const mainController = {};

mainController.getProducts = (req, res, next) => {
  // const {name} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'UTF-8'));
  const result = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'UTF-8'));
  console.log("I'm in main controller");
  // console.log(result);
  if (!result) {
    return next({
      log: 'mainController.getProducts: ERROR: Error getting products data from products.json file',
      message: { err: 'Error occurred in mainController.getProducts. Check server logs for more details.' },
    });
  }

  res.locals.products = result;
  return next();
}


// use params for create user
// use params for ingredients
// use params for products

module.exports = mainController;


