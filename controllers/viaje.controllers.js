const {response} = require("express");
const { addViajemodel } = require("../models/viaje.models");

const createViaje = async (request, response) => {
  
    let result;
    try {
      result = await addViajemodel(request.body);  
      console.log(result);
    } catch (error) {
      result = "1"; 
    }

    response.json({
      result
    });
    
  }



  
module.exports = {   
    createViaje,
  }