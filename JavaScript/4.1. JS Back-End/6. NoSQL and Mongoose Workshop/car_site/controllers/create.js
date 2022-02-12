module.exports = {
    get(req, res) {
        res.render('create', { title: 'Create Listing' });
    },
    async post(req, res) {
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl || undefined,
            price: Number(req.body.price)
        };

        try {
            await req.storage.createCar(car);
            res.redirect('/');
            console.log(car)
        } catch (err) {
            console.log('Error creating new record')
            res.redirect('/create')
        }
    }
};