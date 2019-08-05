const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, blogs) => {
        return sum+blogs.likes
    }
    return blogs.reduce(reducer,0)
}

const favouriteBlog = (blogs) => {
    let favouriteBlog = {
        likes: 0
    }
    for (let i = 0; i<blogs.length; i++){
        if (blogs[i].likes > favouriteBlog.likes){
            favouriteBlog = blogs[i]
        }
    }
    delete favouriteBlog._id
    delete favouriteBlog.__v
    delete favouriteBlog.url
    return favouriteBlog
}

const mostBlogs = (blogs) => {
    let currentAuthors = []
    let authors = []

    for (let i = 0; i<blogs.length; i++){
        // console.log(`Iteration: ${i}`)
        // console.log(`Current Authors: ${currentAuthors}`)
        // console.log(`Authors To Return: `, authors)

        const blog = blogs[i]
        // console.log(`Analizing blog:`, blog)

        if (currentAuthors.includes(blog.author)){
            // console.log(`Determined The Author is already included`)
            authors = authors.map(entry => {
                if (entry.author === blog.author){
                    // console.log(`Adding blog count to `, blog.author)
                    return({
                        author: entry.author,
                        blogs: entry.blogs + 1
                    })
                } else {
                    return({
                        author: entry.author,
                        blogs: entry.blogs
                    })
                }
            })
        } else {
            // console.log(`Determined The Author is not included`)
            currentAuthors.push(blog.author)
            authors.push({
                author: blog.author,
                blogs: 1
            })            
        }
    }
    let counter = 0
    authors.forEach(author => {
        if (author.blogs > counter){
            counter = author.blogs
        }
    })

    const authorToReturn = authors.find(author => {
        if (author.blogs === counter){
            return author
        }
    })

    // console.log(`Author with the most blogs is: `, authorToReturn)

    return authorToReturn
}

const mostLikes = (blogs) => {
    // console.log(`Starting mostLikes mess`)
    let allAuthors = []
    let authorsObjectList = []
    let likesCounter = 0
    blogs.forEach(blog => {
        // console.log(allAuthors)
        // console.log(authorsObjectList)
        // console.log(`Processing blog: `, blog)
        if (!allAuthors.includes(blog.author)){
            // console.log(`Author is not included `, blog.author)
            allAuthors.push(blog.author)
            authorsObjectList.push({
                author: blog.author,
                likes: blog.likes
            })
        } else {
            // console.log(`Author is included`)
            authorsObjectList.map(entry => {
                // console.log(`Checking if ${entry.author} is the same as ${blog.author}`)
                if (entry.author === blog.author){
                    // console.log(`Authors are the same, adding`)
                    if (likesCounter < entry.likes + blog.likes){
                        likesCounter = (entry.likes + blog.likes)
                    }
                    return ({
                        author: entry.author,
                        likes: entry.likes += blog.likes
                    })
                } else {
                    // console.log(`Authors are different, leaving alone`)
                    return ({
                        author: entry.author,
                        likes: entry.likes
                    })
                }
            })
        }
    })

    const authorToReturn = authorsObjectList.find(author => {
        if (author.likes === likesCounter){
            return author
        }
    })
    return authorToReturn
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}