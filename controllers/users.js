const usersRouter = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')

usersRouter.get('/', async(request, response) => {
    const foundUsers = await User.find({}).populate('blogs')
    response.json(foundUsers.map(u => u.toJSON()))
})

usersRouter.post('/', async(request, response) => {
    try {
        const body = request.body

        if (body.password.length <= 3 || !body.password){
            response.status(422).json({
                error: 'Password too short or undefined'
            })
        }

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User ({
            username: body.username,
            name: body.name,
            passwordHash
        })

        const savedUser = await user.save()

        response.json(savedUser.toJSON())
    } catch (exception){
        console.log(exception)
    }
})

module.exports = usersRouter