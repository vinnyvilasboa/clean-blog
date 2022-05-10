const express = require('express')
const app = new express()
const path = require('path');
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost.js')
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })

/*With the below code we tell EXPRESS to use EJS as our templating engine, that any file ending in .ejs should be rendered with the EJS package*/
app.set('view engine', 'ejs')

//////////////MIDDLEWARE//////////////////
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
//////////////MIDDLEWARE//////////////////
//////////////////////////////////////////

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    console.log(blogposts)
    res.render('index', {
        //whenever the key:value pair are the same we can shorten it to just one word
        blogposts
    })
})

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res) => {
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')

})

app.get('/post/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', async (req, res) => {
    ///////////model aka collection creates a new document with browser database///////////
    ///////////we provide the req.body as the first argument and a callback function as the 2nd argument which is called when the create completes///////////
   await BlogPost.create(req.body)
        res.redirect('/')
})


app.listen(4000, () => {
    console.log('App running on port 4000')
})