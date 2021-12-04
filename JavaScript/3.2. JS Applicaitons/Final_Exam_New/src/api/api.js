import { clearUserData } from "../util.js";

async function request (url, options) {
    try {
        const response = await fetch (url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                sessionStorage.removeItem('userData');
            } 
            const error = await response.json();
            throw new Error (error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions (method='get', data) {
    const options = {
        method, 
        headers: {}
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData != null) {
        options.headers['X-Authorization'] = userData.token;
    }
    return options; 
} 

export async function get (url) {
    return request(url, createOptions())
}

export async function post (url, data) {
    return request (url, createOptions('post', data));
} 

export async function put (url, data) {
    return request (url, createOptions('put', data));
}

export async function remove (url, data) {
    return request (url, createOptions('delete', data))
}


export async function login (email, password) {
    const result = await post ('http://localhost:3030/users/login', { email, password });

    const userData = {
        email: result.email,
        id: result._id, 
        token: result.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function register (email, password) {
    const result = await post ('http://localhost:3030/users/register', {email, password});

    const userData = {
        email: result.email,
        id: result._id, 
        token: result.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout () {
    await get ('http://localhost:3030/users/logout')
    clearUserData();
}