const Post = require('../models/post');
const createPath = require('../helpers/create_path');

const getPosts = (req,res) => {
  const title = 'Posts';
  Post
    .find()
    .then((posts)=>{res.render(createPath('posts'),{ title, posts });})
    .catch((err) => {
      console.log(`Some error: ${err}`);
      res.render(createPath('error'),{ title });
    }
    )
}

const getPost = (req, res) => {
  const title = 'Post';  
  Post
    .findById( req.params.id.replace(':',''))
    .then((post)=>{res.render(createPath('post'),{ title, post });})
    .catch((err) => {
      console.log(`Some error: ${err}`);
      res.render(createPath('error'),{ title });
    }
    )
}
const deletePost = (req, res) => {
  const title = 'Post';  
  Post
    .findByIdAndDelete( req.params.id.replace(':',''))
    .then((post)=>{
      res.sendStatus(200);
      res.redirect('/posts')})
    .catch((err) => {
      console.log(`Some error: ${err}`);
      res.render(createPath('error'),{ title });
    }
    )
}
const addPost = (req, res) => {
  const {title, text, author} = req.body
  const post = new Post({title, text, author});
  post
    .save()
    .then(()=> {
      res.sendStatus(200);
      res.redirect('/posts')})
    .catch((err) => {
      console.log(`Some error: ${err}`);
      res.render(createPath('error'),{ title });
    }
    )
}

const getAddPost = (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'),{ title });
}

module.exports = {
  getPosts,
  getPost,
  deletePost,
  addPost,
  getAddPost
}