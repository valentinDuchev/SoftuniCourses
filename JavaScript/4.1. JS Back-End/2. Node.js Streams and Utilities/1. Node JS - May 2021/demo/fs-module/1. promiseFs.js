const promiseFs = require('fs/promises')
console.log('before')
handleFiles()
console.log('after')

async function handleFiles () {
    const data = await promiseFs.readFile('./data.js')
    console.log(data.toString())
}

