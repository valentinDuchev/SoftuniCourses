const bcrypt = require('bcrypt');

const pass1 = '123456';
const hash = '$2b$10$J1MDSML26fXCHdC8fWSncOI94waYtiQMikqsQm6B4xQ.s4uDPJyHS'

async function start () {
    /*
    const hash = await bcrypt.hash(pass1, '$2b$10$J1MDSML26fXCHdC8fWSncO');
    console.log(hash)
    */

    console.log(await bcrypt.compare(pass1, hash))
}

start();