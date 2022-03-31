const { Client } = require('pg');

const initDB = async () => {
  

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  await client.connect();
  return client;
}

module.exports = { initDB };