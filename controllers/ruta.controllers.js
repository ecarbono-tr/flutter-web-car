const {response} = require("express");
const { getClientmodel, setClientmodel,updateClientmodel,deleteClientmodel } = require("../models/clients.models");


const getClient = async (request, respo = response) => {
  let result;
  try {
    result = await getClientmodel(request);
    result = result.rows;
  } catch (error) {
    result = error;
  }
  respo.json(result);
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
    "data": result
  });
}

const deleteClient = (request, response) => {
  
  let result;
  try {
    result = deleteClientmodel(request.body);
    result = "0"; 
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
  //Si es 0 todo ok si es 1 no elimino
}

module.exports = {
  getClient,
  createClient,
  updateClient,
  deleteClient,
}