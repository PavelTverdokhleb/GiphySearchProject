import { SHOW_GIF } from '../actions/index';

export default function(state=null, action) {
	switch(action.type) {
		case SHOW_GIF:
		return action.payload.data.data;
	}
	return state;
}