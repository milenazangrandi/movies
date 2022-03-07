const express = require('express');
const app = express();
var cors = require('cors');
const { Client } = require('pg');
const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'Movies',
	password: 'milenalmerindo',
	port: 5432,
});

client.connect();

const tables = [
	{ name: 'akas', col: 'title' },
	{ name: 'person', col: 'primaryname' },
	{ name: 'titles', col: 'primarytitle' },
];
var corsOptions = {
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

tables.forEach((table) => {
	app.get(`/${table.name}`, cors(corsOptions), async function (req, res) {
		const titleToSearch = req.query.title || 'game';
		const res2 = await client.query(`SELECT * FROM ${table.name} WHERE ${table.col} LIKE '%${titleToSearch}%'`);
		console.log(res2);
		// await client.end();
		res.json(res2.rows);
	});
});

app.get('/crew', async function (req, res) {
	const res2 = await client.query('SELECT * FROM crew Limit 1');
	console.log(res2);
	// await client.end();
	res.json(res2.rows);
});

app.get('/episode', async function (req, res) {
	const res2 = await client.query('SELECT * FROM episode Limit 1');
	console.log(res2);
	// await client.end();
	res.json(res2.rows);
});

app.get('/principals', async function (req, res) {
	const res2 = await client.query('SELECT * FROM principals Limit 1');
	console.log(res2);
	// await client.end();
	res.json(res2.rows);
});

app.get('/ratings', async function (req, res) {
	console.log(req.query);
	const res2 = await client.query(`SELECT * FROM ratings Limit ${req.query.limit}`);
	// console.log(res2);
	// await client.end();
	res.json(res2.rows);
});

app.listen(3000);
