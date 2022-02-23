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

function artViewModel (art) {
    return {
        _id: art._id, 
        title: art.title, 
        technique: art.technique, 
        picture: art.picture, 
        certificate: art.certificate, 
        author: authorViewModel(art.author),
        shared: art.shared, //TODO --> sharedViewModel, 
        sharedCount: art.sharedCount
    }
}

function authorViewModel (user) {
    return {
        _id: user._id, 
        username: user.username, 
        address: user.address,
        shared: user.shared, 
        added: user.added
    }
}

module.exports = {
    mapErrors, 
    artViewModel, 
    authorViewModel
};