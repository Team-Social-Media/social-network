import { Pool } from 'pg';
const env = require('env');
let connect;

if (!connect) {
  connect = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    database: process.env.PGSQL_DATABASE,
  });
}

export default connect ;


