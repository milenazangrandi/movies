import React from 'react';
import './styles.scss';
import SearchBox from './SearchBox';
import ShoppingList from './ShoppingList';
import Axios from 'axios';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			descript: []
		};
		this.todoNameRef = React.createRef();
		this.handleAddTodo = this.handleAddTodo.bind(this);
	}

	handleAddTodo() {
		const pesquisa = this.todoNameRef.current.value;
		if (pesquisa === '') return;


		Axios.get(`http://localhost:3000/titles?title=${pesquisa}`)
			.then((data) => {
				this.setState({ todos: data.data });
			})
			.catch();
	}
	openModal() {
		console.log('this', this);
	}
	render() {
		return (
			<>
				<SearchBox handleAddTodo={this.handleAddTodo} todoNameRef={this.todoNameRef} />
				<ShoppingList openModal={this.openModal} filmes={this.state.todos} />
			</>
		);
	}
}
