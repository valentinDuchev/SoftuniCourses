export async function getLikes (id, likeBtn) {
    const url = `http://localhost:3030/data/likes`
    const token = sessionStorage.getItem('token')
    try {
        const response = await fetch (url, {
            method: 'post', 
            headers: {
                'Content-Type': 'application/json', 
                'X-Authorization': token
            },
            body: JSON.stringify({
                movieId: id
            })
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error (error.message)
        }

        const result = await response.json();
        sessionStorage.setItem(`${result.movieId}`, result._ownerId)
        likeBtn.remove()
        getLikesNum(id)
        //location.reload()
        console.log(result)
    } catch (error) {
        alert (error.message)
    }
}

export async function getLikesNum (id) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`;
    const response = await fetch (url);
    const result = await response.json();
    return result;
}

export async function getUserLike (id, user) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${user}%22`;
    const response = await fetch (url);
    const result = await response.json();
    if (result[1] != undefined) {
        alert ('You have already liked this movie.')
    }
    console.log(result[1]) 

}