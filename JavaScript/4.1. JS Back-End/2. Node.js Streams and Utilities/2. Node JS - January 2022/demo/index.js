const http = require('http');
const fs = require('fs');

const { get, post, match } = require('./src/router')

get('/', (req, res) => {
    res.write("Hello");
    res.end();
})

http.createServer((req, res) => {
    if (req.url == '/favicon.ico') {
        fs.createReadStream(`./static/favicon.ico`).pipe(res);
    } else if (req.url.startsWith('/public/')) {
        fs.createReadStream(`./static/${req.url.slice(8)}`).pipe(res);
    } else {
        match(req, res); 
    }

}).listen(3000);