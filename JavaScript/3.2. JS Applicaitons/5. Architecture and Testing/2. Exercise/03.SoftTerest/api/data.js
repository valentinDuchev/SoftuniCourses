import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllIdeas () {
    return api.get('http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export async function getIdeaById (id) {
    return api.get('http://localhost:3030/data/ideas' + id);
}

export async function createIdea (idea) {
    return api.post('http://localhost:3030/data/ideas', idea);
} 

export async function deleteIdea (id) {
    return api.remove('http://localhost:3030/data/ideas/' + id);
}
