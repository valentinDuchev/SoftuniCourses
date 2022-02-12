const express = require('express');

const app = express();

const sessions = {};

function mySession (req, res, next) {
    const cookies = (req.headers.cookie || '')
            .split(';')
            .map(c => c.trim())
            .map(c => c.split('='))
            .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

        console.log('>>>', req.method, req.url, cookies)

        let user = sessions[cookies.sessionId];

        if (user == undefined) {
            const newId = ('000000' + (Math.random() * 999999).toString(16)).slice(-6);
            user = {
                visited: 1
            }
            sessions[newId] = user;

            res.setHeader('Set-Cookie', `sessionId = ${newId}; httpOnly`);
        } else {
            user.visited++;
        }
        req.session = user;

        next();
}

app.use(mySession);

app.get('/', (req, res) => {    
    res.send(`<p>Hello</p> <p>You have visited this page ${req.session.visited} times</p>`);
})

app.listen(3000, () => console.log('Server listening on port 3000'))