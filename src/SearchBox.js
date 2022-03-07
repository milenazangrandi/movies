import React from 'react';

export default class SearchBox extends React.Component {
	render() {
		return (
			<div className='input'>
				<input ref={this.props.todoNameRef} type='text' />
				<button onClick={this.props.handleAddTodo}>Search</button>
			</div>
		);
	}
}

