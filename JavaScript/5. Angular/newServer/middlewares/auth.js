const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

function authenticateToken (req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return res.status(401).send('Access Denied');
    }

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    })
}

function generateAccessToken (username) {
    return jwt.sign({ data: username }, secret, {
        expireIn: "1h"
    });
}

module.exports = {
    authenticateToken,
    generateAccessToken
}