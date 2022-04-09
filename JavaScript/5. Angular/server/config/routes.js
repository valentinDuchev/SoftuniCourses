// const authController = require('../controllers/auth');
const testController = require('../routes/test');


module.exports = (app) => {
    // app.use(authController);
    app.use(testController)
}