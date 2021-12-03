import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: 'http://localhost:3030/data/catalog', 
    byId: 'http://localhost:3030/data/catalog/', 
    myItems: (userId) => `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`, 
    create: 'http://localhost:3030/data/catalog/', 
    edit: 'http://localhost:3030/data/catalog',
    delete: 'http://localhost:3030/data/catalog' 
}

export async function getAll () {
    return api.get(endpoints.all)
}

export async function getById (id) {
    return api.get(endpoints.byId + id)
}

export async function getMyItems (userId) {
    return api.get(endpoints.myItems(userId))
}

export async function createItem (data) {
    return api.post(endpoints.create, data)
}  

export async function editItem (id, data) {
    return api.put(endpoints.edit + id, data)
}

export async function deleteItem (id) {
    return api.remove(endpoints.delete + id)
}