const Blog = require('../models/blog')
const app = require('../app')
const blogsRouter = require('express').Router()

blogsRouter.get('/', async(request,response) => {
  const toRespond = await Blog.find({})
  response.json(toRespond)
})
  
blogsRouter.post('/', async(request, response) => {
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

blogsRouter.delete('/:id', async(request, response) => {
  const id = request.params.id

  try{
    await Blog.findByIdAndDelete(id)
    response.status(204).end()
  } catch (error) {
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return response.status(400).send({ error: 'malformatted id' })
    }
  }
})
  
blogsRouter.put('/:id', async(request, response) => {
  const body = request.body

  const blogToPut = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  }

  try {
    const result = await Blog.findByIdAndUpdate(request.params.id, blogToPut, {new: true})
    response.json(result.toJSON())  
  } catch (exception) {
    console.log(exception)
    response.status(404).end()
  }
})


module.exports = blogsRouter