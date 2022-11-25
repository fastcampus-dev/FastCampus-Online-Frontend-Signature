const express = require('express');
const postsController = require('../controllers/posts.controller');
const postsRouter = express.Router();

postsRouter.get('/', postsController.getPost);

module.exports = postsRouter;


