module.exports = {
    async home(req, res) {
        res.render('home', { title: 'Home Page' });
    }
}