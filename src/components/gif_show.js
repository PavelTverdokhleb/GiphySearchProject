import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showGif } from '../actions/index';
import { Link } from 'react-router';

class GifShow extends Component {
	componentWillMount() {
		this.props.showGif(this.props.params.id);
	}

	onClickHandler() {
		delete this.props.gif;
	}

	render() {
		const { gif } = this.props;
		if (!gif) {
			return <div>Loading...</div>;
		}
		console.log(gif);
		return (
			<div>
				<div className="header_container">
					<Link to="/" className="back_link" onClick={this.onClickHandler} ><span className="arrow"></span>Back to search</Link>
					<h3 className="title">{gif.title}</h3> 
				</div>
			<center><img src={gif.images.downsized.url} width="600" height="460" /></center>
			<div className="description">
				<h4>Type: <i>{gif.type}</i></h4>
				<h4>Rating: <i>{gif.rating}</i></h4>
				<h4>Import at: <i>{gif.import_datetime}</i></h4>
				<a href={gif.source} target="_blank">Source</a>
			</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { gif: state.gif };
}

export default connect(mapStateToProps, { showGif })(GifShow); 