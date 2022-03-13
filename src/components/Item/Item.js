import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal/modal';
import OmdbapiGet from '../../service/Omdbapi';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			descript: [],
		};
	}
	async openModal() {
		try {
			const resp = await OmdbapiGet(`/?i=${this.props.item.tconst}`);

			this.setState({ descript: resp.data });

			console.log('descript:', this.state.descript);

			ReactDOM.render(<Modal item={this.state.descript} />, document.getElementById('popup'));
		
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className='item' onClick={this.openModal.bind(this)}>
				<div className='item-image'>
					<img src={this.props.item.Poster}></img>
				</div>
				<div className='item-data'>
					<span>{this.props.item.primarytitle}</span>
					<span>{this.props.item.startyear}</span>
					<span>{this.props.item.genres}</span>
				</div>
			</div>
		);
	}
}
