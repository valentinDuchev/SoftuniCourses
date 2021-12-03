import * as api from './api.js'

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: 'http://localhost:3030/data/games?sortBy=_createdOn%20desc', 
    home: 'http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category', 
    create: 'http://localhost:3030/data/games', 
    details: 'http://localhost:3030/data/games/',
    edit: 'http://localhost:3030/data/games/', 
    delete: 'http://localhost:3030/data/games/', 
    allComments: `http://localhost:3030/data/comments?where=gameId%3D%22`, 
    createCom: 'http://localhost:3030/data/comments'
}

export async function getAll () {
    return api.get(endpoints.all)
}

export async function getForHome () {
    return api.get(endpoints.home)
}

export async function createGame (data) {
    return api.post(endpoints.create, data)
}

export async function getDetails (id) {
    return api.get(endpoints.details + id)
}

export async function editGame (id, data) {
    return api.put(endpoints.edit + id, data)
} 
 
export async function deleteGame (id) {
    return api.remove(endpoints.delete + id)
}

export async function loadComments (id) {
    return api.get(endpoints.allComments + `${id}%22`)
}

export async function createComment (data) {
    return api.post(endpoints.createCom, data)
}
