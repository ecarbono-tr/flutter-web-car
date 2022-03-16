const {response} = require("express");
const { getUsers } = require("../models/users.models");


const getUsersCon = async (request, respo = response) => {
  let result;
  try {
    result = await getUsers();
    result = result.rows;
  } catch (error) {
    result = error;
  }

  respo.json({
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
  const body= { user_id, username, password, email, tipo_document, celular, rol, cliente, centro } = request.body
  let result;
  try {
    result = await client.query('INSERT INTO public.accounts (user_id, username, password, email, tipo_document, celular, rol, client, centro) VALUES ($1, $2, $3, $4, $5 ,$6,$7,$8,$9)', [user_id, username, password, email, tipo_document, celular, rol, cliente, centro]);
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
  getUsersCon,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}