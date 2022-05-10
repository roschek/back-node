const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const createPath = require('../helpers/create_path');
const {getPosts, getPost, deletePost, addPost, getAddPost} = require('../controllers/post-controller.js');


router.get('/posts:id', getPost);

router.delete('/posts/:id', deletePost);

router.get('/posts', getPosts);

router.post('/add-post', addPost);

router.get('/add-post', getAddPost)

module.exports = router;