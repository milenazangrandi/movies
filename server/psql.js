const { Client } = require('pg');
var format = require('pg-format')

 class Psql{
    constructor(){
        this._client =  new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'Movies',
            password: 'milenalmerindo',
            port: 5432,
        });
        this._client.connect();
    }

    query(query){
       return this._client.query(query);
    }
    // insert(query, data)
    end(){
        return this._client.end();
    }
}

module.exports = new Psql()