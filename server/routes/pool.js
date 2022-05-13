const pg = require('pg');

const pool = new pg.Pool({
  database: 'koala_pack',
  host: 'localhost',
  port: 5432, // default port for Postico
  max: 12, // max number of people can connect to it at the same time. this can change depending on the situation (usually not below 12)
  idleTimeoutMillis: 30000 // 30 seconds is pretty standard
});

module.exports = pool;