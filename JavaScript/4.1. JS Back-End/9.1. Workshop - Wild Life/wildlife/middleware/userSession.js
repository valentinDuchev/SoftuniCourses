module.exports = () => (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
        res.locals.hasUser = true;
    }
    next();
}

//This is a middleware which will be used everywhere (in every controller), so we put it into the configuration of the app