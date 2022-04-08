const { initDB } = require("../DB/connectDB");

const aaaa = async (request) => {
    
    const body = [parseInt(request.idconductor) , request.idvehiculo,parseInt(request.idruta),request.fechainicio,request.estado]
    let result;
    let resultvalidator;  
    try {
        const client = await initDB()
        resultvalidator = await selectViajemodel(request);
        if(resultvalidator.rows==0){
            result = await client.query("INSERT INTO public.viajes (id_viaje, id_conductor, id_vehiculo, id_ruta, fecha_inicio, fecha_fin, estado) VALUES (nextval('viaje_sequence'), $1, $2, $3, $4, null, $5)", body);      
            result="0";
        }else{            
            result="1";
        }
        

    } catch (error) {
        result = error;
        
    }
    
    return result;
}

const selectViajemodel = async (request) => {
    
    const body = [parseInt(request.idconductor)]
    let result;    
    try {
        const client = await initDB()
        result = await client.query("SELECT * FROM public.viajes where id_conductor = $1 AND estado = 'I';", body);      
        
    } catch (error) {
        result = error;
        
    }
    
    return result;
}

const addViajemodel = async (request, response) => {
    const body = [parseInt(request.idconductor) , request.idvehiculo,parseInt(request.idruta),request.fechainicio,request.estado]
    
    let result;    
    try {
        const client = await initDB()
        result = await client.query("CALL public.sitpr_crearviaje($1, $2, $3, $4, $5, '');",body);      
        result = result.rows[0]["p_estadoviaje"];
    } catch (error) {
        result = error;
        
    }
    
    
    return result;
}
module.exports = {addViajemodel,selectViajemodel}