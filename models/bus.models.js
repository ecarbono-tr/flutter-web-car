const { initDB } = require("../DB/connectDB");

const getBusesmodel = async () => {    
    const client = await initDB()
    const result = await client.query('SELECT * FROM public.buses b order by b.estado desc;');
    client.end();
    return result;
}
const setBusesmodel = async (body) => {
    let result;
    const values = [body.placa, body.modelo, body.estado]
    try {
        client = await initDB()
        
        result = await client.query('INSERT INTO public.buses (placa, modelo, estado) VALUES ($1, $2, $3)', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}
const updateBusesmodel = async (body) => {
    let result;
    const values = [body.placa, body.modelo, body.estado]
    try {
        client = await initDB()        
        result = await client.query('UPDATE public.buses SET modelo = $2, estado = $3 WHERE placa = $1', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}

const deleteBusesmodel = async (body) => {
    let result;
    const values = [body.placa]
    try {
        client = await initDB()        
        result = await client.query('DELETE FROM public.buses WHERE placa = $1',values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}

module.exports = {
    getBusesmodel,
    setBusesmodel,
    updateBusesmodel,
    deleteBusesmodel
}