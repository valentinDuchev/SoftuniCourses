const promiseFs = require('fs/promises')

//demo ()
async function demo () {
    const files = await promiseFs.readdir('.') // reading all files in a directory --> returns an array with all files
    console.log(files)
}

console.log('----------------------------------------------------------------------------------------------------------')

//secondDemo()
async function secondDemo () {
    const newDir = await promiseFs.mkdir('./myDir') // makes new directory 
} 

//thirdDemo ()
async function thirdDemo () {
    await promiseFs.rmdir('./myDir')  // removes directory
}

//fourthDemo() 
async function fourthDemo() {
    await promiseFs.rename('./myDir', './newName') //renames the given directory with the second given parameter
}

fifthDemo()
async function fifthDemo () {
    await promiseFs.unlink('./fs-module/ex.js') //deletes the given FILE (not directory)
}