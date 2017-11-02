import React, { Component } from 'react';

import GifsSearch from '../containers/gifs_search';
import GifsList from '../containers/gifs_list';

export default class App extends Component {
	render() {
		return (
				<div>
				<GifsSearch />
				<GifsList />
				</div>
			);
	}
}

