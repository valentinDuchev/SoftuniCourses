import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: 'http://localhost:3030/data/memes?sortBy=_createdOn%20desc',
    byId: 'http://localhost:3030/data/memes/',
    edit: 'http://localhost:3030/data/memes/'
}

export async function getAll () {
    return api.get(endpoints.all)
}

export async function getById (id) {
    return api.get(endpoints.byId + id)
}

export async function editMeme (id, data) {
    return api.put (endpoints.edit + id, data)
}

