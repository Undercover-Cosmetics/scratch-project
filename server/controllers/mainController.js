const fs = require('fs');
const path = require('path');

const mainController = {};

mainController.getProducts = (req, res, next) => {
  const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'UTF-8'));

  if (!results) {
    return next({
      log: 'fileController.getCharacters: ERROR: Error getting characters data from characters.json file',
      message: { err: 'Error occurred in fileController.getCharacters. Check server logs for more details.' },
    });
  }

  res.locals.products = results;
  next();
}


// use params for create user
// use params for ingredients
// use params for products



