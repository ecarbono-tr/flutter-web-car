const { initDB } = require("../DB/connectDB");

const getUsers = async () => {
    let result;
    try {
        const client = await initDB()
        result = await client.query('SELECT * FROM public.accounts;');
    } catch (error) {
        result = error;
    }
    return result;
}

module.exports = {
    getUsers
}