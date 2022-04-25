const { initDB } = require("../DB/connectDB");

const getDestinosmodel = async () => {
    
    const client = await initDB()
    const result = await client.query('SELECT d.iddestino, d.nombre, d.estado, d.idcliente,S.nombre_cliente FROM public.destinos d INNER JOIN CLIENTES S ON S.ID_CLIENTE = d.idcliente;');        
    client.end();
    
    return result;
}
const getDestinosmodelid = async (body) => {
    const values = [body.idcliente]
    const client = await initDB()
    const result = await client.query('SELECT * FROM public.destinos where idcliente=$1;', values);        
    client.end();
    return result;
}
const setDestinosmodel = async (body) => {
    
    const values = [body.nombre, parseInt(body.estado), parseInt(body.cliente)]
    const client = await initDB()
        
    const result = await client.query("INSERT INTO public.destinos (iddestino, nombre, estado, idcliente) VALUES (nextval('destinos_sequence'), $1, $2, $3)", values);
    result = "0";
    client.end();
    
    return result;
}
const updateDestinosmodel = async (body) => {
    const values = [parseInt(body.iddestinon), body.nombre, parseInt(body.estado),parseInt(body.idcliente)]
    const client = await initDB()        
    const result = await client.query('UPDATE public.destinos SET nombre = $2, estado = $3 , idcliente = $4 WHERE iddestino = $1', values);
    result = "0";
    client.end();
    return result;
}

const deleteDestinosmodel = async (body) => {
    
    const values = [body.iddestino]
    const client = await initDB()        
    const result = await client.query('DELETE FROM public.destinos WHERE iddestino = $1',values);
    result = "0";
    client.end();
    return result;
}

module.exports = {
    getDestinosmodel,
    getDestinosmodelid,
    setDestinosmodel,
    updateDestinosmodel,
    deleteDestinosmodel
}