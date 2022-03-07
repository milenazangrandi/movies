import React from 'react';
import ReactDOM from 'react-dom';


export default class Modal extends React.Component {
	closeModal() {
		// document.querySelector('#popup').innerHTML=""
		ReactDOM.unmountComponentAtNode(document.querySelector('#popup'));
	}

	render() {
		return (
			<>
			<div className='wrapper'>

				<div className='modal'>
					<div className='modal-content'>
						<div className='modal-image'>
							<img className='modal-poster' src={this.props.item.Poster}></img>
							<div className=' modal-mask'></div>
						</div>
						<div className='modal-description'>
							<h2>{this.props.item.Title}</h2>
						</div>
						<div className='modal-close-button' onClick={this.closeModal}>
							&times;
						</div>
					</div>
				</div>
				<div className='overlay'></div>
			</div>

			</>
		);
	}
}
