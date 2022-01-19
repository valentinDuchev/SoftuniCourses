// synchronised read file
const fs = require('fs');

const data = fs.readFileSync('./data.js')

console.log('Synchronised reading file: ')
console.log(data.toString())
console.log('------')

//sync writing file
const newData = fs.writeFileSync('./data_copy.js', data) // creates new file with name data_copy.js which has written data

//sync reWriting file  
const newDataRewrite = fs.writeFileSync('./data_copy.js', '"test Strring"') //changes the content of the file with the given parameter




