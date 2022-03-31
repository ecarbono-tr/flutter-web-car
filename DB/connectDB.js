const { Client } = require('pg');

const initDB = async () => {
  
  const conn ="postgres://wlynyuwvowepcg:c0eec84bb5d74388dd5def57d22d48dd90b3b1b941c5ae54739bba0cb213a0b0@ec2-52-3-60-53.compute-1.amazonaws.com:5432/d49j3228u6bd63";
  const client = new Client({
    connectionString: conn,
    ssl: {
      rejectUnauthorized: false
    }
  });

  await client.connect();
  return client;
}

module.exports = { initDB };