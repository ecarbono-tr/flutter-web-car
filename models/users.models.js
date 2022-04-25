const { initDB } = require("../DB/connectDB");



const getUsermodel = async (request) => {
    
    const { email, pass} = request.body
    let result;    
    const client = await initDB(); 
    result = await client.query('SELECT tipo_document,user_id,username,celular,email,password,client,ROL.nombrerol as rol,AR.nombrearea as centro,CL.nombre_cliente as cliente FROM public.usuarios US JOIN roles ROL ON ROL.idrol = US.rol JOIN areas AR ON AR.idarea = US.centro JOIN clientes CL ON CL.id_cliente = US.client WHERE email = $1 and password= $2',[email,pass]);        
    client.end(); 
    
    return result;
}
const getUserIdmodel = async (request) => {      
    
    const client = await initDB()
    const result = await client.query('select * from public.usuarios u where u.user_id = $1',[request.body.idcliente]);
    client.end(); 
    
    return result;
}
const setUsers = async (body) => {
    let result;
    try {
        client = await initDB()
        const values = [body.user_id, body.username, body.password, body.email, body.tipo_document, body.celular, body.rol, body.client, body.centro]
        result = await client.query('INSERT INTO public.usuarios (user_id, username, password, email, tipo_document, celular, rol, client, centro) VALUES ($1, $2, $3, $4, $5 ,$6,$7,$8,$9)', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    client.close()
    return result;
}

module.exports = {
    getUsermodel,
    setUsers,getUserIdmodel
}