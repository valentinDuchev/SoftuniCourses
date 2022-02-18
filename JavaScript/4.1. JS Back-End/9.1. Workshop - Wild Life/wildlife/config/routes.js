const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const createController = require('../controllers/post');
const catalogController = require('../controllers/catalog');
const detailsController = require('../controllers/details');
const editController = require('../controllers/edit');
const deleteController = require('../controllers/delete')

module.exports = (app) => {
    app.use(homeController);
    app.use(authController);
    app.use(createController);
    app.use(catalogController);
    app.use(detailsController);
    app.use(editController);
    app.use(deleteController)
}