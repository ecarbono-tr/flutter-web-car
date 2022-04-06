const { initDB } = require("../DB/connectDB");

const getClientmodel = async () => {
    
    
    let result;    
    try {
        client = await initDB()
        result = await client.query('SELECT * FROM public.clientes;');        

    } catch (error) {
        result = error;
        
    }
    
    return result;
}
const getClientIdmodel = async (body) => {
    
    const values = [body.idcliente]
    let result;    
    try {
        client = await initDB()
        result = await client.query('SELECT * FROM public.clientes where id_cliente=$1;',values);        

    } catch (error) {
        result = error;
        
    }
    
    return result;
}
const setClientmodel = async (body) => {
    let result;
    const values = [body.idcliente, body.nombre, body.telefono]
    try {
        client = await initDB()
        
        result = await client.query('INSERT INTO public.clientes (id_cliente, nombre_cliente, telefono_cliente) VALUES ($1, $2, $3)', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}
const updateClientmodel = async (body) => {
    let result;
    const values = [body.idcliente, body.nombre, body.telefono]
    try {
        client = await initDB()        
        result = await client.query('UPDATE public.clientes SET nombre_cliente = $2, telefono_cliente = $3 WHERE id_cliente = $1', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}

const deleteClientmodel = async (body) => {
    let result;
    const values = [body.idcliente]
    try {
        client = await initDB()        
        result = await client.query('DELETE FROM public.clientes WHERE id_cliente = $1',values);
        result = "0";        
    } catch (error) {
      result = "1";
    }      
}

module.exports = {
    getClientmodel,
    getClientIdmodel,
    setClientmodel,
    updateClientmodel,
    deleteClientmodel
}