import React from 'react';

export default class FilterGenre extends React.Component {
	render() {
		return (
			<div className='filter-eachCategory'>
				<label> Genre (must have): </label>
				<div className='filter-eachCategory-genres'>
					{this.props.allGenres.map((item) => (
						<button className='btn' id={item.id} key={item.id} onClick={this.props.onClick}>
							{item.genre}
						</button>
					))}
				</div>
			</div>
		);
	}
}