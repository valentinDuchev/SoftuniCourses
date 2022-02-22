const authController = require('../controllers/auth');
const createController = require('../controllers/create');
const homeController = require('../controllers/home');
const catalogController = require('../controllers/catalog');
const detailsController = require('../controllers/details');
const rentController = require('../controllers/rent');
const deleteController = require('../controllers/delete');
const editController = require('../controllers/edit');
const searchController = require('../controllers/search');
const notFoundController = require('../controllers/notFound');


module.exports = (app) => {
    app.use(authController);
    app.use(createController);
    app.use(homeController);
    app.use(catalogController);
    app.use(detailsController);
    app.use(rentController);
    app.use(deleteController);
    app.use(editController);
    app.use(searchController);

    app.use(notFoundController)
}