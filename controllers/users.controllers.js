const {response} = require("express");
const { getUsermodel, setUsers } = require("../models/users.models");


const getUser = async (request, respo = response) => {
  let result;
  try {
    result = await getUsermodel(request);
    result = result.rows[0];
  } catch (error) {
    result = error;
  }
  respo.json(result);
}
const createUser = async (request, response) => {
  const body= { user_id, username, password, email, tipo_document, celular, rol, cliente, centro } = request.body
  let result;
  try {
    result = await setUsers(body);
  } catch (error) {
    result = "1"; 
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
  getUser,
  createUser,
  updateUser,
  deleteUser,
}