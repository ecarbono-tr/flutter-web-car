const { initDB } = require("../DB/connectDB");

const getClientmodel = async () => {    
    
    const client = await initDB()
    const result = await client.query('SELECT * FROM public.clientes;');
    client.end();
    return result;
}
const getClientIdmodel = async (body) => {
    const values =[parseInt(body.idcliente)];
    const client = await initDB()
    const result = await client.query('SELECT * FROM public.clientes where id_cliente=$1;',values);
    client.end();
    
    return result;
}

const setClientmodel = async (body) => {
   
    const values = [body.idcliente, body.nombre, body.telefono]
    const client = await initDB();        
    const result = await client.query('INSERT INTO public.clientes (id_cliente, nombre_cliente, telefono_cliente, estado_cliente) VALUES ($1, $2, $3 , 1)', values);
    client.end();

    return result;
}
const updateClientmodel = async (body) => {
    
    const values = [body.idcliente, body.nombre, body.telefono]
    const client = await initDB()        
    const result = await client.query('UPDATE public.clientes SET nombre_cliente = $2, telefono_cliente = $3 WHERE id_cliente = $1', values);    
    client.end();
    return result;
}

const deleteClientmodel = async (body) => {    
    const values = [parseInt(body.idcliente), parseInt(body.estado)]
    const client = await initDB()        
    const result = await client.query('UPDATE public.clientes SET estado_cliente = $2 WHERE id_cliente = $1',values);
    client.end();  
    return result;
}

module.exports = {
    getClientmodel,
    getClientIdmodel,
    setClientmodel,
    updateClientmodel,
    deleteClientmodel
}