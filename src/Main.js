import React from 'react';
import _ from 'lodash';

import ApiGet from './utils/http';
import SearchBox from './components/SearchBox/SearchBox';
import ShoppingList from './components/ShoppingList/ShoppingList';
import FilterBox from './components/FilterBox/FilterBox';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filmes: [],
			allGenres: [],
			genreList: [],
			allTypes: [],
			typeList: [],
		};

		this.todoNameRef = React.createRef();
		this.handleAddGenres();
	}

	//find all genres => query to genres table
	async handleAddGenres() {
		try {
			const data = await ApiGet({ path: '/genres' });

			this.setState({
				allGenres: data.data,
			});
		} catch (e) {
			console.log(e);
			this.setState({
				allGenres: [],
			});
		}
	}

	async handleAddTodo() {
		try {
			const pesquisa = this.todoNameRef.current.value;
			if (pesquisa === '') return;

			const data = await ApiGet({ path: `/titles`, params: { title: pesquisa } });

			this.setState({
				filmes: data.data,
			});
		} catch (e) {
			console.log(e);
		}
	}

	updateStateGenre(newGenderList) {
		console.log('newGenderList', newGenderList);
		this.setState({ genreList: _.xor(this.state.genreList, [newGenderList]) });
		console.log('lista de generos', this.state.genreList);
	}

	async handleGenre() {
		try {
			const data = await ApiGet({ path: `/titles`, params: { genreList: this.state.genreList } });
			this.setState({
				filmes: data.data,
			});
		} catch (e) {
			console.log('handleGenre ', e);
		}
	}

	render() {
		return (
			<>
				<div className='filter'>
					<FilterBox
						updateStateGenre={this.updateStateGenre.bind(this)}
						handleGenre={this.handleGenre.bind(this)}
						allGenres={this.state.allGenres}
						genreListMain={this.state.genreList}
					/>
				</div>
				{/* <SearchBox handleAddTodo={this.handleAddTodo.bind(this)} todoNameRef={this.todoNameRef} /> */}
				<ShoppingList filmes={this.state.filmes} />
			</>
		);
	}
}
