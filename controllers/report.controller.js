const {response} = require("express");
const { getmesreport } = require("../models/report.model");

const reportemes = async (request, respo = response) => {
    let result;
    try {
      result = await getmesreport(request.body);
      result = result.rows;
    } catch (error) {
      result = error;
    }
    respo.json(result);
  }
module.exports={reportemes}