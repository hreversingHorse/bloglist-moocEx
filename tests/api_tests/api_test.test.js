const mongoose  = require('mongoose')
const supertest = require('supertest')
const app       = require('../../app')
const api       = supertest(app)
const Blog      = require('../../models/blog')
const helper    = require('./api_test_helper')

beforeEach(async() => {
    await Blog.deleteMany({})

    for (let blog of helper.initialBlogs){
        let toSave = new Blog(blog)
        await toSave.save()
    }
})

test('returns correct amount of blogs as json', async() => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('blog posts have id entry instead of _id', async() => {
    const toCheck = await api.get('/api/blogs')
    const singleEntry = toCheck.body[0]
    expect(singleEntry.id).toBeDefined()
})

test('blog can be saved to DB', async() => {
    const newBlog = {
        title: "Dummy title of blog 4",
        author: "tester",
        url: "http://something4.com",
        likes: 420
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const blogsAfterOperation = await helper.blogsInDb()
    expect(blogsAfterOperation.length).toBe(helper.initialBlogs.length + 1)

    const contents = blogsAfterOperation.map(blog => blog.title)
    expect(contents).toContain(
        'Dummy title of blog 4'
    )
})

test('req with blog.likes = undefined can be added with likes = 0', async() => {
    const newBlogWithNoLikes = {
        title: "Dummy title of blog 4",
        author: "tester",
        url: "http://something4.com"
    }

    await api
        .post('/api/blogs')
        .send(newBlogWithNoLikes)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const blogsAfterOperation = await helper.blogsInDb()
    const lastEntry = blogsAfterOperation[3]
    expect(lastEntry).toBeDefined()
    expect(lastEntry.likes).toBeDefined()
    expect(lastEntry.likes).toBe(0)
})

test('400 if title/url missing', async() => {
    const blogWithMissingProps = {
        author: 'tester'
    }

    await api
        .post('/api/blogs')
        .send(blogWithMissingProps)
        .expect(400)
})

afterAll(() => {
    mongoose.connection.close()
})