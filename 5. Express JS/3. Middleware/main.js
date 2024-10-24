const express = require('express')
const app = express()
const port = 3000
const fs =  require('fs')
const blogs = require("./routes/blogs") 
//Middleware can be used to intercept the request and send response or pass the control to the next middleware. It is implimented using app.use
//Middleware 1
app.use((req,res,next)=>{
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Im Middleware 1 and I can handle the request")         //Can also hanle the request         
    next()      //Sends the control to middleware 2         
    //If next function is not given the control willl not pass on to the next middleware or handler
})
//Middleware 2
//One major use of middleware is that we can track the login records 
app.use((req,res,next)=>{                   //If we dont specify any particular url then a middleware chercks for all the requests
    console.log("M2");
    // console.log(req.headers);
    req.bro = 69            //Adding bro = 69 to request object         
    fs.appendFileSync("Login.txt",`${Date.now()} is a ${req.method}\n`)
    next()
})

app.get('/', (req, res) => {
    res.send('Hallllloooooooooooouuuuuuu World '+ req.bro)
})


// We can use middleware to handle responses from particular routes

app.use ("/blogs", blogs)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//Middleware 1 & 2 are application-level Middleware
//app.use(express.static()) is a built-in Middleware