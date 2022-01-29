const express = require('express');
const hbs = require('express-handlebars');

const homeController = require('./src/home.js')
const catalogRouter = require('./src/catalog');
const aboutController = require('./src/about')

const port = 3001;
const app = express();


app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true})); 
app.use('/content', express.static('static'));

app.get('/', homeController);
app.use('/catalog', catalogRouter);
app.use('/about', aboutController)

app.listen(port, () => console.log(`Server listening on port ${port}`));

/* 
Home page
Catalog
--list of products 
--create products
--edit product
--delete product
// * shopping cart
About us 
*/