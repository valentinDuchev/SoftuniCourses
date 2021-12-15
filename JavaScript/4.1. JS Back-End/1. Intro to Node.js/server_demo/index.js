const http = require('http');

const router = require('./router.js')

const aboutController = require('./controllers/aboutController.js');
const homeController = require('./controllers/homeController.js');
const catalogController = require('./controllers/catalogController.js');
const createController = require('./controllers/createController.js');
const deleteController = require('./controllers/deleteController.js');


router.get('/', homeController)
router.get('/about', aboutController)
router.get('/catalog', catalogController)

router.post('/create', createController)

router.get('/delete', deleteController)


const server = http.createServer(requestHandler)
const port = 3000;


function requestHandler (req, res) {
    const uri = new URL(req.headers.host + req.url)
    console.log(uri)
    console.log('>>>>>', req.url, req.method);
    const handler = router.match(req.method, req.url);
    handler(req, res);
}

server.listen(port, () => console.log('Server listening on port' + port))