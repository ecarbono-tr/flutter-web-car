require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;


app.use(express.static("public"));

app.get("api/care_pan", (req, res) => {
    res.json({
        "saludo": "Hola care pan"
    });
});

app.listen(port, () => {
    console.log(`aplicacion corriendo en el puerto ${port}`);
})