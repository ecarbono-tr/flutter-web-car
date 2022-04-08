const {response} = require("express");
const { getBusesmodel,
  setBusesmodel,
  updateBusesmodel,
  deleteBusesmodel} = require("../models/bus.models");


const getBuses = async (request,response) => {
  let result;
  try {
    result = await getBusesmodel();
    result = result.rows;
  } catch (error) {
    result = error;
  }
  

  response.json(result);
}

const createBuses = async (request, response) => {
  
  let result;
  try {
    result = await setBusesmodel(request.body);
    result = "0"; 
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const updateBuses = (request, response) => {
  const body ={ id_cliente, nombre_cliente, telefono_cliente } = request.body  
  let result;
  try {
    result = updateBusesmodel(body);
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const deleteBuses = (request, response) => {
  
  let result;
  try {
    result = deleteBusesmodel(request.body);
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
  getBuses,
  createBuses,
  updateBuses,
  deleteBuses,
}