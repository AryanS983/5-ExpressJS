const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {    
    res.send('This is get request')
}).post('/', (req, res) => {    
    res.send('This is post request')
}).put('/', (req, res) => {    
    res.send('This is put request')
})

app.get('/index', (req, res) => {    
    res.sendFile('./templates/index.html', {root: __dirname})       
    //Used to serve html file on the server using relative path
})

app.get('/json',(req, res)=>{
    res.json({a:1, b:2, c:3, name:["Champa" ,"Chameli"]})
})

app.get('/redirect',(req, res)=>{
    res.redirect("https://www.pornhub.org")
})

//Routes:-      ( Reference - https://expressjs.com/en/guide/routing.html )
//Instead of cluttering every request in a single file we can use express.router() to use multiple files for hanling multiple requests
//for Example lets take "/blogs" and "/shop" requests and blog.js and shop.js to handle them respectively

const blog = require('./routes/blogs')
const shop = require('./routes/shop')

app.use('/blogs', blog)
app.use('/shop', shop)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


  

