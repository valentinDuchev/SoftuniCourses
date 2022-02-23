const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const createController = require('../controllers/create');
const catalogController = require('../controllers/catalog');
const detailsController = require('../controllers/details');
const shareController = require('../controllers/share');
const deleteController = require('../controllers/delete');
const editController = require('../controllers/edit');
const profileController = require('../controllers/profile');




module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(createController);
    app.use(catalogController);
    app.use(detailsController);
    app.use(shareController);
    app.use(deleteController);
    app.use(editController);
    app.use(profileController);
}