const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

//variable name -> access database using mongoose.model
//the first argument is the singular name of the collection your model is for. The second is the Schema that's to be used
const BlogPost = mongoose.model('BlogPost',BlogPostSchema)

//we export the blogPost variable sot hat wehn the other files require this file, they know to grab BLOGPOST. You can only export 1 variable.
module.exports = BlogPost