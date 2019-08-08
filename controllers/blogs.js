const Blog = require('../models/blog')
const app = require('../app')
const router = require('express').Router()

router.get('/', async(request,response) => {
  const toRespond = await Blog.find({})
  response.json(toRespond)
})


// router.get('/', (request, response) => {
//     Blog
//       .find({})
//       .then(blogs => {
//         response.json(blogs)
//       })
// })
  
router.post('/', async(request, response) => {
  const body = request.body

  if (body.title === undefined || body.url === undefined){
    response.status(400).end()
  } else {
    const blogToSave = new Blog({
      title:body.title,
      author:body.author,
      url:body.url,
      likes:body.likes || 0
    })
  
    const resultOfSaving = await blogToSave.save()
    response.status(200).json(resultOfSaving)  
  }
})

// router.post('/', (request, response) => {
//     const body = request.body
  
//     const blogToSave = new Blog ({
//       title: body.title,
//       author: body.author,
//       url: body.url,
//       likes: body.likes
//     })
  
//     blogToSave
//       .save()
//       .then(result => {
//         response.status(200).json(result)
//       })
// })
  
module.exports = router