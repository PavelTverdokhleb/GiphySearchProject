import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class GifsList extends Component {
	renderGifs(data){
		return (<li className="col-md-4" key={data.id}><center><Link to={"gif/" + data.id} ><img className="item" src={data.images.downsized.url} width="280" height="260" /></Link></center></li>);
	}


	render() {
		const gifs = this.props.gifs;
		return (
			<ul className="list">
			{gifs.map(this.renderGifs)}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { gifs: state.gifs };
}

export default connect(mapStateToProps)(GifsList);

