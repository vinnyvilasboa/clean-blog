const express = require('express')
const app = new express()
const path = require('path');
const ejs = require('ejs')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.set('view engine', 'ejs')
/*With the above code we tell EXPRESS to use EJS as our templating engine, that any file ending in .ejs should be rendered with the EJS package*/
app.use(express.static('public'))
app.listen(4000, ()=>{
    console.log('App running on port 4000')
})

app.get('/', (req, res) =>{
    // res.sendFile(path.resolve(__dirname,'pages/index.html'))
    res.render('index')
 
})

app.get('/about', (req, res) =>{
    // res.sendFile(path.resolve(__dirname,'pages/about.html'))
    res.render('about')
})

app.get('/contact', (req, res) =>{
    // res.sendFile(path.resolve(__dirname,'pages/contact.html'))
    res.render('contact')
})

app.get('/post', (req, res) =>{
    // res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')

})

app.get('/post/new',(req, res) => {
    res.render('create')
})
