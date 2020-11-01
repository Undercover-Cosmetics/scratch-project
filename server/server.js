const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});
/**
 * require routers
 */
const productsRouter = require(path.join(__dirname, './routes/api.js'));

/**
 * handle parsing request body
 */
app.use(express.json());
console.log('express.json working');
/**
 * define route handlers
 */

app.use('/api', productsRouter);
console.log('api working');

// 
//fetch request for the products database 
// fetch('https://makeup-api.herokuapp.com/api/v1/products.json/')
//     .then(data => data.json()).then(data => {
//         console.log(data)
//     })

/* Error Handler */
app.use((req, res) => {
    return res.sendStatus(404);
});

// catch-all route handler for any requests to an unknown route
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).send(errorObj.message);
});


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

module.exports = app