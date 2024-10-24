const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
//app.set is used to use the ejs template enginr 
//ejs is a template engine which is used to add variables into templates or or in this case html files



app.get('/', (req, res) => {
    let sitename = "Pornhubibi"
    let sitetitle = "Free me sex dekho"
    let arr = ["Hello", "Welcome", "Bye Bye Bye" ]
    // res.sendFile("templates/index.html", {root:__dirname})
    // in case of ejs we use render to add variables to our html filen (in this case renamed as a .ejs file)
    //These variables can be accesed inside html using <%= variable %>
    
    res.render('index',{sitename : sitename , sitetitle : sitetitle , arr})  
    //{xyx:xyz , abc:abc} = {xyz, abc}

})

// app.get('/blogs/:slug', (req, res) => {
//     let blogname = 'Yhamsters'
//     let blogtitle = 'Paid sex bhi dekho'
//     res.sendFile("templates/index.ejs", {root:__dirname})
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})