import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: 'http://localhost:3030/data/albums?sortBy=_createdOn%20desc&distinct=name',
    create: 'http://localhost:3030/data/albums', 
    byId: 'http://localhost:3030/data/albums/', 
    del: 'http://localhost:3030/data/albums/',
    edit: 'http://localhost:3030/data/albums/', 
    search: 'http://localhost:3030/data/albums?where=name%20LIKE%20%22'
}

export async function getAll () {
    return api.get(endpoints.all)
}

export async function createAlbum (data) {
    return api.post(endpoints.create, data)
}

export async function getById (id) {
    return api.get(endpoints.byId + id)
}

export async function deleteSong (id) {
    return api.remove(endpoints.del + id)
} 

export async function editSong (id, data) {
    return api.put(endpoints.edit + id, data)
}   

export async function getBySearch (name) {
    return api.get(endpoints.search + `${name}%22`)
}