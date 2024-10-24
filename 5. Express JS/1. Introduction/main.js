const express = require('express')
const app = express()
const port = 3000
//req is the request which we make through searching on the search bar
//res is the response which we get from the server

//app.get or app.post are used to handle 

app.get('/', (req, res) => {          //Check by http://127.0.0.1:3000
  res.send('<h1 style = "color: red">Hello World</h1>')
})

app.get('/about', (req, res) => {           //Check by http://127.0.0.1:3000/about
  res.send('Im a good boiiii')
})

app.get('/blogs', (req, res) => {           //Check by http://127.0.0.1:3000/blogs
  res.send('Please get me a girlfriend')
})

app.get('/blogs/life', (req, res) => {    //Check by http://127.0.0.1:3000/blogs/life
  res.send('Tbh Im screwed')
})

app.use(express.static('public'))
//Static is used serve public files which can be accessed by all
//Example: http://127.0.0.1:3000/Aryan.txt
//The above url can be used to access Aryan.txt 
//Note: As the public folder is made public using static, therefore any file inside this folder can be accessed in the same way including main.js or package.json if they are kept inside the public folder 💀


//Instead of making this many pages we can also use variables to define multiple pages. for example
app.get('/blogs/:slug', (req, res) => {    //for URL:  http://127.0.0.1:3000/blogs/Duniya?mode=dark&font=calibri
  console.log(req.params);    //Retuns  { slug: 'Duniya' } 
  console.log(req.query);    //Retuns  { mode: 'dark', font: 'calibri' }
  res.send(`${req.params.slug} mere lode pe`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
