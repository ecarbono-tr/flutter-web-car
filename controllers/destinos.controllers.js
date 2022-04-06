const {response} = require("express");
const { getDestinosmodel,
  setDestinosmodel,
  updateDestinosmodel,
  deleteDestinosmodel,
  getDestinosmodelid} = require("../models/destinos.models");


const getDestinos = async (request,response) => {
  let result;
  try {
    result = await getDestinosmodel();
    result = result.rows;
  } catch (error) {
    result = error;
  }
  response.json(result);
}
const getDestinosId = async (request,response) => {
  let result;
  try {
    result = await getDestinosmodelid(request.body);
    result = result.rows[0];
  } catch (error) {
    result = error;
  }
  response.json(result);
}

const createDestinos = async (request, response) => {
  
  let result;
  try {
    result = await setDestinosmodel(request.body);
    result = "0"; 
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const updateDestinos = (request, response) => {
  
  let result;
  try {
    result = updateDestinosmodel(request.body);
    result = "0";
  } catch (error) {
    result = "1"; 
  }
  response.json({
    result
  });
}

const deleteDestinos = (request, response) => {
  
  let result;
  try {
    result = deleteDestinosmodel(request.body);
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
  getDestinos,
  getDestinosId,
  createDestinos,
  updateDestinos,
  deleteDestinos,
}