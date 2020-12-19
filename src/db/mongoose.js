const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('invalid email')
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error('not password Come on! be mature :)')
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0)
                throw new Error('Age must be +ve')
        }
    }
})

// const me = new User({
//     name: 'adi',
//     email: 'aditya@gmail.com',
//     password: '    password'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Err', err)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'learn the mongoose',
    completed: false
})

task.save().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})