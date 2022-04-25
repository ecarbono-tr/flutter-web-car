const { Client } = require('pg');

const initDB = async () => {
  
  const conn ="movilizat://movilizat:movilizat@127.0.0.1:5432/movilizat";
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