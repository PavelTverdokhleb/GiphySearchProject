import { combineReducers } from 'redux';
import GifsReducer from './gifs_reducer';
import GifReducer from './gif_reducer';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  gif: GifReducer
});

export default rootReducer;
