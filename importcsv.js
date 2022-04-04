
const { Client } = require('pg');
const service = require("./service");
//const conn ="postgres://qcbovoabfmwfcd:37807c1a32260529888b854d8395bff747158126aefb04bc2629dc105a397b33@ec2-35-168-194-15.compute-1.amazonaws.com:5432/db6kvvs1k5b86t";
const conn ="postgres://postgres:admin@127.0.0.1:5432/postgres";
const client = new Client({
    connectionString: conn,
    ssl: false   
    // ssl: {
    //     rejectUnauthorized: false
    // }
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
        await insertando();

    });
stream.pipe(csvStream);

const insertando = async () => {
    let result;
    const datos = {};
    try {
        const query = 'INSERT INTO public.cuentas (tipo_document,user_id,username,celular,email,rol,password,client,centro) VALUES ($1, $2, $3, $4,$5, $6, $7, $8,$9)';
        csvData.forEach(row => {
            client.query(query, row, (err, res) => {
                if (err) {
                    console.log("ya existe");
                } else {
                    console.log("inserted " + res.rowCount + " row:", row[4]);
                    datos['correo'] = row[4];
                    datos['pass'] = row[6];
                    // if (datos.correo != "0" && datos.pass != "0") {
                    //     service.registerUser(datos);
                    // }
                }
            });
        });

    } catch (error) {
        result = error;
    }
};