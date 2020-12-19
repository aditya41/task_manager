const callback = (callb) => {
    setTimeout(() => {
        callb('This is my error!', undefined)
    }, 2000)

}

callback((err, res) => {
    if (err)
        return console.log('err');
    console.log('hello')
})