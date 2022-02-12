const express = require('express');
//const cookieParser = require('cookie-parser'); 
const expressSession = require('express-session') //ako iskame da pazim sesiq, ne ni e nujen cookieParser, a expressSession

const app = express();

//app.use(cookieParser());
app.use(expressSession({
    secret: 'super secret', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: 'auto' }
}))

app.get('/', (req, res) => {
    //res.setHeader('Set-Cookie', 'theme=dark');
    //res.cookie('CookieParser_Cookie', 'hello') //setvane na cookie
    //console.log(req.cookies);
    if (req.session.visited) {
        req.session.visited++;
    } else {
        req.session.visited = 1;
    }
    res.send(`<p>Hello</p><p>You have visited this page ${req.session.visited} times`);
})

app.listen(3001, () => console.log('Server listening on port 3001'));