const express = require('express');
const router = express.Router()

//MIddleware used to handle requests from "/blogs" route
router.use((req,res,next)=>{                            //Middleware inside router is router-level Middleware
    req.bro = "Im Aryan"        //We can change the value of req.bro 
    console.log("Someone Entered blogs" )
    next()
})

router.get('/', (req, res)=>{
    res.send("HEllo And welcome to blogs" + req.bro)
})

module.exports = router