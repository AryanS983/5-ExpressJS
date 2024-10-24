const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {         //Check on http://127.0.0.1:3000/blogs
  res.send('David Da puttar Rocks')
})
// define the about route
router.get('/boobies', (req, res) => {         //Check on http://127.0.0.1:3000/blogs/boobies
  res.sendFile("C:\\Users\\ASUS\\All fin Codes\\Harry Bhai ki jai ho\\ExpressJS\\2.  Response Request Routers\\templates\\index.html")
})

module.exports = router