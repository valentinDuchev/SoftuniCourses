const authController = require('../controllers/auth');
const homeController = require('../controllers/home')
const createController = require('../controllers/create')


module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(createController)
}