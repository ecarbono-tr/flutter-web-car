const { initDB } = require("../DB/connectDB");
const client={};
const getUsermodel = async (request) => {
    const { email, pass} = request.body
    let result;    
    try {
        client = await initDB()
        result = await client.query('SELECT * FROM public.cuentas WHERE email = $1 and password= $2;',[email,pass]);        
    } catch (error) {
        result = error;
        
    }
    client.close()
    return result;
}
const setUsers = async (body) => {
    let result;
    try {
        client = await initDB()
        const values = [body.user_id, body.username, body.password, body.email, body.tipo_document, body.celular, body.rol, body.client, body.centro]
        result = await client.query('INSERT INTO public.cuentas (user_id, username, password, email, tipo_document, celular, rol, client, centro) VALUES ($1, $2, $3, $4, $5 ,$6,$7,$8,$9)', values);
        result = "0";
    } catch (error) {
        result = "1";
    }
    client.close()
    return result;
}

module.exports = {
    getUsermodel,
    setUsers
}