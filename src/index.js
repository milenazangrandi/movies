import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Main from './Main'

ReactDOM.render(<Main />, document.getElementById('root'));


// Axios.get(`https://www.omdbapi.com/?i=${ttFilme}&apikey=${apiKey}`)
// .then(resp => {
//   const filme = resp;
//   console.log('filme:', filme);
// })
// .catch(console.log);

// Axios.get(`https://www.omdbapi.com/?s=Toxic Avenger&apikey=${apiKey}`)
// 	.then((data) => {
// 		const filmes = data.data.Search;
// 		ReactDOM.render(<Main filmes={filmes} />, document.getElementById('root'));
// 	})
// 	.catch(console.log);

// class Main extends React.Component {
// 	render() {
// 		console.log('Main', this);
// 		return (
// 			<div className='wrapper'>
// 				<SearchBox />
// 				<div id='mainWrapperList'>
// 				</div>
// 			</div>
// 		);
// 	}
// }