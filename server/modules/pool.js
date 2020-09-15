const pg = require('pg');
const Pool =pg.Pool;

const config = {
    database: 'todo',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new Pool(config);

pool.on('error', (client) =>{
    console.log('Unexpected error on Idle pg client', err);
    process.exit(-1)
    
});

module.exports = pool