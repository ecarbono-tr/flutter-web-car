const {response} = require("express");
const { addViajemodel, selectViajemodel, seguimientomodel, setseguimientomodel, getUsuarioViaje, setdetalleviajemodel, deletedetalleviajemodel } = require("../models/viaje.models");

const createViaje = async (request, response) => {
  
    let result;
    try {
      result = await addViajemodel(request.body);  
      console.log(result);
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  const getViajeController = async (request, response) => {
  
    let result;
    try {
      result = await selectViajemodel(request.body);  
      result = result.rows[0];
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }


  const SeguimientoViajeController = async (request, response) => {
  
    let result;
    try {
      result = await seguimientomodel(request.body);  
      result = result.rows[0];
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  const setSeguimientoViajeController = async (request, response) => {
  
    let result;
    try {
      result = await setseguimientomodel(request.body);  
      result = result.rows[0];
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  const getUsuarioViajeController = async (request, response) => {
  
    let result;
    try {
      result = await getUsuarioViaje(request.body);  
      result = result.rows;
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  const createViajeDetalle = async (request, response) => {
  
    let result;
    try {
      result = await setdetalleviajemodel(request.body);  
      result=result.rows[0]['p_result']
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  const eliminarViajeDetalle = async (request, response) => {
  
    let result;
    try {
      result = await deletedetalleviajemodel(request.body);  
      result=result.rows[0]['p_result']
    } catch (error) {
      result = "1"; 
    }

    response.json(
      result
    );
    
  }

  
module.exports = {   
    createViaje,
    getViajeController,
    SeguimientoViajeController,setSeguimientoViajeController,getUsuarioViajeController,createViajeDetalle,eliminarViajeDetalle
  }