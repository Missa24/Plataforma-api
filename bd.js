const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',    // o la IP del servidor BD
  database: 'PlataformaEducativaBD',
  password: 'localhost',
  port: 5432,           // puerto por defecto de PostgreSQL
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
