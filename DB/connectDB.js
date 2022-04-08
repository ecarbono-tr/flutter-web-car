const { Client } = require('pg');

const initDB = async () => {
  
  const conn ="postgres://movilizat:movilizat@127.0.0.1:5432/postgres";
  const client = new Client({
    connectionString: conn,
    ssl: false 
    // ssl: {
    //   rejectUnauthorized: false
    // }
  });

  await client.connect();
  return client;
}


module.exports = { initDB };