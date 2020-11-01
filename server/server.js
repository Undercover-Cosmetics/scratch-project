const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080

/* Render Default Page */
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

/* Require Routers */
const productsRouter = require(path.join(__dirname, './routes/api.js'));

/* Parsing Request Body */
app.use(express.json());

/* Define Route Handler */
app.use('/api', productsRouter);

/* Error Handler */
app.use((req, res) => {
  return res.sendStatus(404);
});

/* Catchall Error Handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj  = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

/* Port listener */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

module.exports = app