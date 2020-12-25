const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/users')
const taskRouter = require('./routes/tasks')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('maintainance buddy')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const pet = {
    name: 'hal'
}
pet.toJSON = function() {
    console.log(this)
    return this
}
console.log(JSON.stringify(pet))