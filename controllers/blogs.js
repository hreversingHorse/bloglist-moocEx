const Blog = require('../models/blog')
const blogsRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async(request,response) => {
  const toRespond = await Blog.find({}).populate('user')
  response.json(toRespond)
})
  
const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    return authorization.substring(7)
  }
}

blogsRouter.post('/', async(request, response) => {
  const body = request.body

  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token,process.env.SECRET)

    if (!token || !decodedToken.id){
      return response.status(401).json({error: 'token missing/invalid'})
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user._id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
    } catch(exception) {
      console.log(exception)
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

  const users = await User.find({})
  const firstUser = users[0]

  const blogToPut = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: firstUser
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