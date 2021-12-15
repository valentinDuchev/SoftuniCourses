module.exports = (req, res) => {

    console.log(req.url) 
    
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end()
}