import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: 'http://localhost:3030/data/books?sortBy=_createdOn%20desc',
    create: 'http://localhost:3030/data/books', 
    my: 'http://localhost:3030/data/books?where=_ownerId%3D%22',
    byId: 'http://localhost:3030/data/books/', 
    del: 'http://localhost:3030/data/books/', 
    edit: 'http://localhost:3030/data/books/', 
    like: 'http://localhost:3030/data/likes', 
    getLike: 'http://localhost:3030/data/likes?where=bookId%3D%22', 
    getSpecificLike: 'http://localhost:3030/data/likes?where=bookId%3D%22'
}

export async function getAll () {
    return api.get(endpoints.all);
}

export async function createBook (data) {
    return api.post(endpoints.create, data)
}

export async function myBooks (userId) {
    return api.get(endpoints.my + `${userId}%22&sortBy=_createdOn%20desc`);
}

export async function getById (id) {
    return api.get(endpoints.byId + id)
}

export async function delBook (id) {
    return api.remove(endpoints.del + id)
}

export async function editBook (id, data) {
    return api.put(endpoints.edit + id, data)
}

export async function likeBook (data) {
    return api.post(endpoints.like, data)
}

export async function getLikes (id) {
    return api.get(endpoints.getLike + `${id}%22&distinct=_ownerId&count`)
}

export async function getSpecificLike (bookId, userId) {
    return api.get(endpoints.getSpecificLike + `${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}