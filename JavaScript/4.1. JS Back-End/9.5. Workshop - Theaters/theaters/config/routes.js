const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const createController = require('../controllers/create');
const detailsController = require('../controllers/details');
const likeController = require('../controllers/like');
const editController = require('../controllers/edit');
const deleteController = require('../controllers/delete');
const sortController = require('../controllers/sort');


module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(createController);
    app.use(detailsController)
    app.use(likeController);
    app.use(editController);
    app.use(deleteController);
    app.use(sortController)
}