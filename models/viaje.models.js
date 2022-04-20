const { initDB } = require("../DB/connectDB");

const selectViajesmodel = async (request) => {    
    const body = [parseInt(request.idconductor)]
  
    const client = await initDB()
    const result = await client.query("SELECT V.ID_VIAJE,V.ID_CONDUCTOR,V.ID_VEHICULO,V.ID_RUTA,V.ESTADO,V.FECHA_INICIO,V.FECHA_FIN,P.NOMBRE,S.ID_CLIENTE,S.NOMBRE_CLIENTE,SV.descripcion,SV.orden FROM PUBLIC.VIAJES V INNER JOIN DESTINOS P ON P.IDDESTINO = V.ID_RUTA INNER JOIN CLIENTES S ON S.ID_CLIENTE = P.IDCLIENTE INNER JOIN SEGUIMIENTO_VIAJE SV ON SV.ID_VIAJE = V.ID_VIAJE WHERE V.ID_CONDUCTOR = $1 AND SV.orden = (SELECT MAX(ORDEN) from SEGUIMIENTO_VIAJE h where h.ID_VIAJE = V.ID_VIAJE);", body);              
    client.end();
    return result;
}

const selectViajemodel = async (request) => {    
    const body = [parseInt(request.idconductor)]
  
    const client = await initDB()
    const result = await client.query("SELECT V.ID_VIAJE,V.ID_CONDUCTOR,V.ID_VEHICULO,V.ID_RUTA,V.ESTADO,V.FECHA_INICIO,V.FECHA_FIN,P.NOMBRE,S.ID_CLIENTE,S.NOMBRE_CLIENTE,SV.descripcion,SV.orden FROM PUBLIC.VIAJES V INNER JOIN DESTINOS P ON P.IDDESTINO = V.ID_RUTA INNER JOIN CLIENTES S ON S.ID_CLIENTE = P.IDCLIENTE INNER JOIN SEGUIMIENTO_VIAJE SV ON SV.ID_VIAJE = V.ID_VIAJE WHERE V.ID_CONDUCTOR = $1 AND V.ESTADO = 'I' AND SV.orden = (SELECT MAX(ORDEN) from SEGUIMIENTO_VIAJE h where h.ID_VIAJE = V.ID_VIAJE);", body);              
    client.end();
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

const seguimientomodel = async (request, response) => {
    const body = [parseInt(request.id_viaje)]
    const client = await initDB()
    const result = await client.query("SELECT * FROM public.detalle_viaje",body);
    client.end();    
    return result;
}

const setseguimientomodel = async (request, response) => {
    const body = [parseInt(request.id_viaje),request.descripcion, request.orden, request.fecha_seguimiento]
        
    const client = await initDB()
    const result = await client.query("CALL public.sitpr_seguimientoviaje($1, $2, $3, $4, '');",body);
    client.end();
    
    
    return result;
}

const setdetalleviajemodel = async (request, response) => {
    const body = [parseInt(request.id_viaje),request.id_usuario, request.fecha]
        
    const client = await initDB()
    const result = await client.query("CALL public.sitpr_creardetalleviaje($1, $2, $3,'');",body);      
    client.end();
    
    
    return result;
}
const deletedetalleviajemodel = async (request, response) => {
    const body = [parseInt(request.id_viaje),request.id_usuario]
        
    const client = await initDB()
    const result = await client.query("CALL public.sitpr_eliminadetalleviaje($1, $2,'');",body);      
    client.end();
    
    
    return result;
}

const getUsuarioViaje = async (request, response) => {
    const body = [parseInt(request.id_viaje)]   
    const client = await initDB();
    const result = await client
        .query('SELECT * FROM PUBLIC.USUARIOS U INNER JOIN PUBLIC.detalle_viaje V ON V.id_usuario = U.user_id WHERE V.id_viaje = $1', body);  
    client.end();
    
    return result;
}
module.exports = {addViajemodel,selectViajesmodel,selectViajemodel,seguimientomodel,setseguimientomodel,getUsuarioViaje,setdetalleviajemodel,deletedetalleviajemodel}