// ligas a BD
// QUERY nos titulos limit;
// var arrayGeneros = QUERY nos generos

// array titulos.foreach(titulo=>
// var a = tituto.genres.split(',')
// a.forEach(genro=>{

//     var _genre = arrayGeneros.find(x=>x.genre===genro)
//     _genre.id = para associacao

//     // escreve na BD de associacao
//     _genre.id
//     titulo.id

// })

// const { Client } = require('pg');
// var format = require('pg-format')

// const client = new Client({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'Movies',
// 	password: 'milenalmerindo',
// 	port: 5432,
// });

// client.connect();


const Psql = require('./psql')

const MAPPING = [];
let GENRES = [];

const queryAllGenres = async () => {
	GENRES = await Psql.query(`SELECT * from genres`); // Psql.client.query(`SELECT * from genres`);
	console.log(Psql)
	GENRES = GENRES.rows;
	console.log(GENRES)
	return
	await query();
};
queryAllGenres()

const query = async () => {
	const movies = await Psql.query(`SELECT tconst, genres from titles`);
	movies.rows.forEach((movie) => {
		const { tconst, genres } = movie;
		const parsedGenres = genres ? genres.split(',') : ['NoGenre'];
		parsedGenres.forEach((genre) => {
			const genreId = genre !== 'NoGenre' ? GENRES.find((g) => g.genre === genre) : { id: 29 };
			
			MAPPING.push([tconst, genreId.id]);
		});
	});
};

function UpdateTable() {
	Psql.query(format('INSERT INTO title_genre (title_id, genre_id) VALUES %L', MAPPING),[], (err, result)=>{
		console.log(err);
		console.log(result);
	});
}

// queryAllGenres();