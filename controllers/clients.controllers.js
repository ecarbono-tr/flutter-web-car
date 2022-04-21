const {response} = require("express");
const { getClientmodel, getClientIdmodel,updateClientmodel,deleteClientmodel, setClientmodel } = require("../models/clients.models");


const getClient = async (request,response) => {
  let result;
  try {
    result = await getClientmodel();
    result = result.rows;
  } catch (error) {
    result = error;
  }
  response.json(result);
}
const getClientId = async (request,response) => {
  let result;
  try {
    result = await getClientIdmodel(request.body);
    result = result.rows[0];
  } catch (error) {
    result = error;
  }
  response.json(result);
}

const createClient = async (request, response) => {
  
  let result;
  try {
    result = await setClientmodel(request.body);
    result = "0"; 
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const updateClient = (request, response) => {
  const body ={ id_cliente, nombre_cliente, telefono_cliente } = request.body  
  let result;
  try {
    result = updateClientmodel(body);
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const deleteClient = (request, response) => {
  
  let result;
  try {
    result = deleteClientmodel(request.body);   
        
  } catch (error) {
    console.error(error.stack);
  }
  response.json(
    result
  );  
}

module.exports = {
  getClient,
  getClientId,
  createClient,
  updateClient,
  deleteClient,
}