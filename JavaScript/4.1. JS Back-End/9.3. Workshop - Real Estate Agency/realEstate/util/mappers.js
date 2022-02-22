function mapErrors (err) {
    if (Array.isArray(err)) {
        return err;
    } else if (err.name == 'ValidationError') {
        return Object.values(err.errors).map(e => ({ msg: e.message }))
    } else if (typeof err.message == 'string') {
        return [{ msg: err.message }];
    } else {
        return [{ msg: 'Request error' }];
    }
}

function housingViewModel (housing) {
    return {
        _id: housing._id,
        name: housing.name, 
        type: housing.type, 
        year: housing.year, 
        city: housing.city, 
        homeImage: housing.homeImage, 
        description: housing.description, 
        pieces: housing.pieces,
        rented: housing.rented.map(rentedViewModel), 
        owner: ownerViewModel(housing.owner)
    }
}

function ownerViewModel (user) {
    return {
        _id: user._id, 
        fullName: user.fullName, 
        username: user.username
    }
}

function rentedViewModel (user) {
    return {
        _id: user._id, 
        fullName: user.fullName, 
        username: user.username
    }
}

function searchViewModel (housing) {
    return {
        _id: housing._id, 
        name: housing.name, 
        description: housing.description, 
        homeImage: housing.homeImage
    }
}

module.exports = {
    mapErrors, 
    housingViewModel, 
    searchViewModel
};