const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost.js')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser: true});

//////////////CREATE//////////////////
BlogPost.create({
    title: 'Does God control everything that happens in my life?',
    body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem, pariatur blanditiis numquam, alias consectetur quae maxime autem accusamus commodi nulla quia harum eos? Temporibus quod voluptatum autem quos animi?'
}, (error, blogpost) => {
    console.log(error, blogpost)
}

)

// BlogPost.find({}, (error, blogpost)=> {
//     console.log(error, blogpost)
// })

//////////////FIND BY ID//////////////////
// var id = '6276ce634d719816572c82a1';
// BlogPost.findById(id,
//     (error, blogpost)=> {
//     console.log(error, blogpost)
// })

//////////////UPDATE//////////////////
// BlogPost.findByIdAndUpdate(id,{title:'New Title',
//     (error, blogpost)=> {
//     console.log(error, blogpost)
// })

//////////////DELETE//////////////////
// BlogPost.findByIdAndDelete(id,
//     (error, blogpost)=> {
//     console.log(error, blogpost)
// })