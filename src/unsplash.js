import { API_KEY } from './secrets';

const BASE = "https://api.unsplash.com";
const COUNT = 25;

export const getRandom = () => {
    const URL = `${BASE}/photos/random/?client_id=${API_KEY}&count=${COUNT}`
    return fetch(URL)
}

export const searchImages = (searchTerm) => {
    const URL = `${BASE}/search/photos/?client_id=${API_KEY}&per_page=${COUNT}&query=${searchTerm}`
    return fetch(URL)
}