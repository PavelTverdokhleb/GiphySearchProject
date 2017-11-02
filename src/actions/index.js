import axios from 'axios';

const API_KEY = 'dc6zaTOxFJmzC';
const ROOT_URL = `http://api.giphy.com/v1/gifs/search`;
const GIF_ID_URL = `http://api.giphy.com/v1/gifs/`;

export const GET_GIFS = 'GET_GIFS';
export const SHOW_GIF = 'SHOW_GIF';

export function getGifs(gifname) {
	const url = `${ROOT_URL}?q=${gifname}&api_key=${API_KEY}`;

	const request = axios.get(url);

	return {
		type: GET_GIFS,
		payload: request
	};
}

export function showGif(id) {
	const request = axios.get(`${GIF_ID_URL}${id}?api_key=${API_KEY}`);

	return {
		type: SHOW_GIF,
		payload: request
	};
}