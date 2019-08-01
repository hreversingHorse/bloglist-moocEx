const Blog = require('../models/blog')
const app = require('../app')
const router = require('express').Router()

router.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
})
  
router.post('/', (request, response) => {
    const body = request.body
  
    const blogToSave = new Blog ({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes
    })
  
    blogToSave
      .save()
      .then(result => {
        response.status(201).json(result)
      })
})
  
module.exports = router