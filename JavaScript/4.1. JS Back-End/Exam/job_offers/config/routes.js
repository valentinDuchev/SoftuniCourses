const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const createController = require('../controllers/create');
const catalogController = require('../controllers/catalog');
const detailsController = require('../controllers/details');
const applyController = require('../controllers/apply');
const editController = require('../controllers/edit');
const deleteController = require('../controllers/delete');
const searchController = require('../controllers/search');

const notFoundController = require('../controllers/notFound');



module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(createController);
    app.use(catalogController);
    app.use(detailsController);
    app.use(applyController);
    app.use(editController);
    app.use(deleteController);
    app.use(searchController);


    app.use(notFoundController)
}