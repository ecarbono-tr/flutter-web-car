
const connectionString = 'postgres://vyxgnppokdwvqi:5da57ee2ec4d379bb15999a6522d23566e9ecb038699709f98100badf677e45c@ec2-34-205-209-14.compute-1.amazonaws.com:5432/d2c4ebai7v2e9b'
const { Client } = require('pg');

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const getUsers = async (request, response) => {
  let result;
  try {
    result = await client.query('SELECT * FROM public.accounts;');
    result = result.rows;
  } catch (error) {
    result = error;
    
  }

  response.json({
    "data": result
  });
}

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id)
  let result;
  try {
    result = await client.query('SELECT * FROM public.accounts WHERE user_id = $1;',[id]);
    result = result.rows;
  } catch (error) {
    result = error;
    
  }

  response.json({
    "data": result
  });
}
const createUser = async (request, response) => {
  const { id, name, pass, email, create, last } = request.body
  let result;
  try {
    result = await client.query('INSERT INTO public.accounts (user_id,username,password,email,created_on,last_login) VALUES ($1, $2, $3, $4, $5 ,$6)', [id, name, pass, email, create, last]);
    result = "OK";
  } catch (error) {
    result = error; 
  }
  response.json({
    "data": result
  });
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body  
  let result;
  try {
    result = client.query('UPDATE public.accounts SET username = $1, email = $2 WHERE user_id = $3',
    [name, email, id]);
    result = "OK";
  } catch (error) {
    result = error; 
  }
  response.json({
    "data": result
  });
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)
  let result;
  try {
    result = client.query('DELETE FROM public.accounts WHERE user_id = $1', [id]);
    result = "OK";
  } catch (error) {
    result = error; 
  }
  response.json({
    "data": result
  });
}
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  
}