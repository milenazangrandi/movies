import React from 'react';
import Item from './Item'


export default class ShoppingList extends React.Component {
	render() {
		return (
			<div className='list'>
				{this.props.filmes.map((element) => {
					return <Item key={element.tconst} openModal={this.props.openModal} item={element} />;
				})}
			</div>
		);
	}
}