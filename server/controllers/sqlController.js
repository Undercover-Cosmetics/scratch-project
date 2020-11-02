const db = require("../models/sqlModel.js")

const sqlController = {}

/* BEFORE LOGIN */
/* User not logged in, but wants to see reviews */
sqlController.getReview = (req, res, next) => {
  const { id } = req.body;
  const review = `SELECT * FROM reviews WHERE product_key = ${id}`;
  db.query(review)
  .then((data) => {
    res.locals.reviews = data.rows;
    next()
  })
  .catch((err) => {
    console.log(err)
    next(err)
  }) 
}

/* AUTHENTICATION PROCESS */
/* AUTHENTICATION: Getting one matching from the database */
sqlController.findOneUser = (req, res, next) => {
  const { username } = req.body; 
  try{
    const user = `SELECT DISTINCT * FROM users WHERE 1=1 AND username = ${username}`;
    db.query(user)
    .then((data) => {
      res.locals.user = data
      console.log(data);
      next()
    })
  }
  catch(err){
    console.log("findOneUser issue: invalid user name passed")
    next(err)
  }
}

sqlController.findUserDetail = (req, res, next) => {
  
}

/* AUTHENTICATION: signup creating user in the users database */
sqlController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const makeUser = `INSERT INTO users (username, password) VALUES (${username}, ${password}) RETURNING *`;
  const params = [username, password];
  db.query(makeUser, params)
  .then((data) => {
    res.locals.user = data.rows[0]
    next()
  })
  .catch( (err) => {
    console.log("createUser issue: possible duplicate username passed")
    next(err)
  }) 
}

/* USER LOGGED IN ACITONS */
/* USER LOGGED IN ACITONS: Add review */
sqlController.addReview = (req, res, next) => {
  console.log('in add review function')
  const { reviewRating, reviewText, productKey } = req.body;
  console.log(req.body);
  const addReview = `INSERT INTO reviews(review_rating, review_text, product_key) VALUES (${reviewRating}, '${reviewText}', ${productKey}) RETURNING *`;
  db.query(addReview)
  .then((data) => {
    console.log('in query for add review')
    res.locals.newReview = data.rows[0]
    next()
  })
  .catch( (err) => {
    console.log(err)
    console.log("write review issue: review could not be created due to datatype issue")
    next(err)
  }) 
}


/* USER LOGGED IN ACITONS: Update review */
sqlController.editReview = (req, res, next) => {
  console.log('in edit review controller')
  const { reviewRating, reviewText, reviewId} = req.body;
  console.log(reviewRating, reviewText, reviewId)
  const editReview = `UPDATE reviews SET review_rating=${reviewRating}, review_text=${reviewText} WHERE review_id=${reviewId}`;

  db.query(editReview)
  .then((data) => {
    console.log('in db query(editReview')
    res.locals.newReview = data.rows[0]
    next()
  })
  .catch( (err) => {
    console.log(err)
    console.log("edit review issue: invalid parameters passed in")
    next(err)
  }) 
}


/* USER LOGGED IN ACITONS: Delete review */
sqlController.deleteReview = (req, res, next) => {
  console.log('in delete review')
  const { reviewId } = req.body;
  const deleteReview = `DELETE FROM reviews WHERE _id=${reviewId}`;
  db.query(deleteReview)
  .then((data) => {
    console.log('in query delete review')
    res.locals.newReview = data.rows[0]
    console.log(res.locals.newReview)
    next()
  })
  .catch( (err) => {
    console.log(err)
    console.log("delete review issue: invalid parameters passed in")
    next(err)
  }) 
}

// `SELECT * FROM reviews LEFT JOIN users ON users.user_id=reviews.user_id WHERE 1=1 AND 2=2`;



/* Need to export module */
module.exports = sqlController;



