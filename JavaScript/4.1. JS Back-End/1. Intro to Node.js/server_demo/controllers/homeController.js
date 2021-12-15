const layout = require('../views/layout.js')

const homePage = `
<div>
    <h1> My Page </h1>
    <p> Welcome to My Page! </p>
</div>
`

 
module.exports = (req, res) => {
    res.write(layout(homePage));
    res.end()
}

