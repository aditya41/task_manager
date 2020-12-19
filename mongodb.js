const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.getTimestamp())
// console.log(id.id)

mongodb.MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('unable to connect to database')
    const db = client.db(databaseName)
    db.collection('users').findOne({ name: 'jen' }, (err, user) => {
            if (err)
                return console.log('err')
            console.log(user);
        })
        // db.collection('users').insertOne({

    //         name: 'manav',
    //         age: 21
    //     }, (err, result) => {
    //         if (err)
    //             return console.log('incorrect')
    //         console.log(result.ops)
    //     })
    // db.collection('users').insertMany([{
    //     name: 'jen',
    //     age: 1
    // }, { 
    //     name: 'kamlesh',
    //     age: 456

    // }], (err, result) => {
    //     if (err)
    //         return console.log('ert')
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //         description: 'clean the house',
    //         completed: true
    //     }, {
    //         description: 'renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'pot plants',
    //         completed: false
    //     }
    // ], (err, res) => {
    //     if (err)
    //         return console.log('np')
    //     console.log(res.ops)
    // })
})