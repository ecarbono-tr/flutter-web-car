const { initDB } = require("../DB/connectDB");

const getDestinosmodel = async () => {
    let result;    
    try {
        const client = await initDB()
        result = await client.query('SELECT *,(Select c.nombre_cliente from public.clientes c where c.id_cliente = d.idcliente) as nombre_cliente FROM public.destinos d;');        

    } catch (error) {
        result = error;
        
    }
    
    return result;
}
const getDestinosmodelid = async (body) => {
    const values = [body.idcliente]
    let result;    
    try {
        const client = await initDB()
        result = await client.query('SELECT * FROM public.destinos where idcliente=$1;', values);        

    } catch (error) {
        result = error;
        
    }
    
    return result;
}
const setDestinosmodel = async (body) => {
    let result;
    const values = [body.nombre, parseInt(body.estado), parseInt(body.cliente)]
    try {
        client = await initDB()
        
        result = await client.query("INSERT INTO public.destinos (iddestino, nombre, estado, idcliente) VALUES (nextval('destinos_sequence'), $1, $2, $3)", values);
        result = "0";
        
    } catch (error) {
        result = "1";
    }
    console.log(result);
    return result;
}
const updateDestinosmodel = async (body) => {
    let result;
    const values = [parseInt(body.iddestinon), body.nombre, parseInt(body.estado),parseInt(body.idcliente)]
    try {
        client = await initDB()        
        result = await client.query('UPDATE public.destinos SET nombre = $2, estado = $3 , idcliente = $4 WHERE iddestino = $1', values);
        result = "0";
    } catch (error) {
        result = "1";
        console.log(error);
    }
    
    return result;
}

const deleteDestinosmodel = async (body) => {
    let result;
    const values = [body.iddestino]
    try {
        client = await initDB()        
        result = await client.query('DELETE FROM public.destinos WHERE iddestino = $1',values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}

module.exports = {
    getDestinosmodel,
    getDestinosmodelid,
    setDestinosmodel,
    updateDestinosmodel,
    deleteDestinosmodel
}