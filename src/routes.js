import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/main';
import App from './components/app';
import GifShow from './components/gif_show';

export default (
	<Route path="/" component={Main} >
		<IndexRoute component={App} />
		<Route path="gif/:id" component={GifShow} />
	</Route>
);
