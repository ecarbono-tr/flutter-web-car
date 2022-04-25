const { initDB } = require("../DB/connectDB");

const getpmam = async () => {        
    const client = await initDB();
    const result = await client.query("SELECT cod_tabla, descripcion, meridiem FROM public.entrada_salidas;");
    client.end();
    return result;
}
module.exports = {getpmam};