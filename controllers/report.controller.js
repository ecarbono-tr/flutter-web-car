const {response} = require("express");
const { getmesreport, getyearreportdestino } = require("../models/report.model");

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
  const reporteyeardestino = async (request, respo = response) => {
    let result;
    try {
      result = await getyearreportdestino(request.body);
      result = result.rows;
    } catch (error) {
      result = error;
    }
    respo.json(result.rows['p_result']);
  }
module.exports={reportemes,reporteyeardestino}