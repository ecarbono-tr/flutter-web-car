const {response} = require("express");
const { getpmam } = require("../models/pmam.model");


const pmamcontroller = async (request, respo = response) => {
    let result;
    try {
      result = await getpmam();
      result = result.rows;
    } catch (error) {
      result = error;
    }
    respo.json(result);
  }
module.exports={pmamcontroller}