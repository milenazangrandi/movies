const express = require('express');
const app = express();
var cors = require('cors');
const Psql = require('./psql');

var corsOptions = {
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/titles', cors(corsOptions), async function (req, res) {
	let res3 = { rows: [] };
	try {
		const titleToSearch = req.query.title || 'game';
		const genreToSearch = req.query.genreList;
		console.log(req.query)
		const res2 = await Psql.query(`SELECT * FROM titles WHERE primarytitle LIKE '%${titleToSearch}%'`);
		res3 = await Psql.query(
			`SELECT * from titles WHERE tconst IN(SELECT title_id FROM title_genre WHERE genre_id IN (${genreToSearch}) limit 100)`
		);
		// console.log(res2);
		
		// await Psql.end();
	} catch (e) {
		console.log(e);
	}
	res.json(res3.rows);
});

app.get('/genres', cors(corsOptions), async function (req, res) {
	const res2 = await Psql.query(`SELECT * FROM genres`);
	console.log(res2);
	// await Psql.end();
	res.json(res2.rows);
});

app.get('/genres2', cors(corsOptions), async function (req, res) {
	const res2 = await Psql.query(`SELECT * FROM genres`);
	console.log(res2);
	// await Psql.end();
	res.json(res2.rows);
});

app.listen(3001);
