import { GET_GIFS } from '../actions/index';

export default function(state=[], action) {
	switch(action.type) {
		case GET_GIFS:
		return action.payload.data.data;
	}
	return state;
}