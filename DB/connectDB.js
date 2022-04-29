const { Client } = require('pg');

const initDB = async () => {
  //local: movilizat://movilizat:movilizat@127.0.0.1:5432/movilizat
  //heroku postgres://fwwctcptkimwhj:5acad2bcfd0ee586128699536f60a19d60319170749cd939253e174e72e51d3f@ec2-3-229-161-70.compute-1.amazonaws.com:5432/dc0f2adbt4j2ji

  const conn ="movilizat://movilizat:movilizat@127.0.0.1:5432/movilizat";
  const client = new Client({
    connectionString: conn,
    ssl: false 
    // ssl: {
    //   rejectUnauthorized: true
    // }
  });

  await client.connect();
  return client;
}


module.exports = { initDB };