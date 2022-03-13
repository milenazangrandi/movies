import React from 'react';
import FilterGenre from '../FilterGenre/FilterGenre';

export default class FilterBox extends React.Component {

	async click(event) {
		const add = event.target.id
		console.log('lista main', this.props.genreListMain);
		this.props.updateStateGenre(Number(add))
		event.target.classList.toggle('active');
	}

	render() {
		return (
			<>
				<FilterGenre allGenres={this.props.allGenres} onClick={this.click.bind(this)} ></FilterGenre>
				<button onClick={this.props.handleGenre}> Search </button>
			</>
		);
	}
}