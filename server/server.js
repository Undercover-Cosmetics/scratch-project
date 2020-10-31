const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080

// 
//fetch request for the products database 
// fetch('https://makeup-api.herokuapp.com/api/v1/products.json/')
//     .then(data => data.json()).then(data => {
//         console.log(data)
//     })


app.get('/', (req, res) => {
    console.log('in get block')
    res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'))
}
);
// app.use('/', express.static(path.resolve(__dirname, '../public/index.html')))








app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

module.exports = app