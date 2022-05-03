const { initDB } = require("../DB/connectDB");

const getBusesmodel = async () => {    
    const client = await initDB()
    const result = await client.query('SELECT * FROM public.buses b order by b.estado desc;');
    client.end();
    return result;
}
const setBusesmodel = async (body) => {
    let result;
    const values = [body.placa, body.modelo, body.estado, parseInt(body.capacidad)]
    try {
        client = await initDB()
        
        result = await client.query('INSERT INTO public.buses (placa, modelo, estado,capacidad_pasajeros) VALUES ($1, $2, $3, $4)', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}
const updateBusesmodel = async (body) => {
    let result;
    const values = [body.placa, body.modelo, body.estado, parseInt(body.capacidad)]
    try {
        client = await initDB()        
        result = await client.query('UPDATE public.buses SET modelo = $2, estado = $3, capacidad_pasajeros = $4 WHERE placa = $1', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    
    return result;
}

const deleteBusesmodel = async (body) => {    
    const values = [body.placa,parseInt(body.estado)]
    const client = await initDB()        
    const result = await client.query('UPDATE public.buses SET estado = $2 WHERE placa = $1',values);
    
    return result;
}

module.exports = {
    getBusesmodel,
    setBusesmodel,
    updateBusesmodel,
    deleteBusesmodel
}