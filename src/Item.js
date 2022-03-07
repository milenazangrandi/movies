import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import Axios from 'axios';
const apiKey = '4759e14d';

export default class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			descript: [],
		};
	}
	async openModal() {
		await Axios.get(`https://www.omdbapi.com/?i=${this.props.item.tconst}&apikey=${apiKey}`)
			.then((resp) => {
				const filme = resp;
				console.log('filme:', filme);
				this.setState({ descript: filme.data });

			})
			.catch(console.log);
			console.log('descript:', this.state.descript)
		ReactDOM.render(<Modal item={this.state.descript} />, document.getElementById('popup'));
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
