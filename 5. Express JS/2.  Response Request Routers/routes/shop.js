const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {         //Check on http://127.0.0.1:3000/blogs
  res.send('David Da puttar 3rd Copy for sale')
})
// define the about route
router.get('/girlfriend', (req, res) => {         //Check on http://127.0.0.1:3000/blogs/boobies
  res.sendFile("./Sexy.webp",{root:__dirname})
})

module.exports = router