const connectionString = 'postgres://vyxgnppokdwvqi:5da57ee2ec4d379bb15999a6522d23566e9ecb038699709f98100badf677e45c@ec2-34-205-209-14.compute-1.amazonaws.com:5432/d2c4ebai7v2e9b'
const { Client } = require('pg');
const service = require("./service");
const client = new Client({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();

const fs = require("fs");
const fastcsv = require("fast-csv");
let stream = fs.createReadStream("INSERT.csv");
let csvData = [];

let csvStream = fastcsv
    .parse()
    .on("data", function (data) {
        csvData.push(data);
    })
    .on("end", async function () {

        csvData.shift();
        insertando();

    });
stream.pipe(csvStream);

const insertando = async () => {
    let result;
    const datos = {};
    try {
        const query = 'INSERT INTO public.accounts (tipo_document,user_id,username,celular,email,rol,password,client,centro) VALUES ($1, $2, $3, $4,$5, $6, $7, $8,$9)';
        csvData.forEach(row => {
            client.query(query, row, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("inserted " + res.rowCount + " row:", row[4]);
                    datos['correo'] = row[4];
                    datos['pass'] = row[6];
                    if (datos.correo != "0" && datos.pass != "0") {
                        service.registerUser(datos);
                    }
                }
            });
        });

    } catch (error) {
        result = error;
    }
};