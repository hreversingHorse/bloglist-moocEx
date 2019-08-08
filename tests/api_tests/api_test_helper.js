const Blog = require('../../models/blog')
const initialBlogs = [
    {
        title: "Dummy title of blog 1",
        author: "tester",
        url: "http://something1.com",
        likes: 69
    },
    {
        title: "Dummy title of blog 2",
        author: "tester",
        url: "http://something2.com",
        likes: 70
    },
    {
        title: "Dummy title of blog 3",
        author: "tester",
        url: "http://something3.com",
        likes: 71
    },
]

const blogsInDb = async () => {
    const blogsToReturn = await Blog.find({})
    return blogsToReturn.map(blog => blog.toJSON())
}

const nonExistingId = async() => {
    const tempBlog = new Blog({
        title: "title",
        author: "temp",
        url: "192uhd01-u2d1",
        likes: 69
    })
    await tempBlog.save()
    await tempBlog.remove()
    return tempBlog._id.toString()
}

module.exports = {
    initialBlogs,
    blogsInDb,
    nonExistingId
}