const promises1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('done')
    }, 2000)
})

promises1.then((res) => {
    console.log('come')
})