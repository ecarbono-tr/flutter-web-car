const { response } = require("express");
const { getmesreport, getReportAnualDestinos } = require("../models/reportExcel.model");

const reporteMes = async(request, respo = response) => {
    let result;
    try {
        result = await getmesreport(request.body);
        result = result.rows;
    } catch (error) {
        result = error;
    }
    respo.json(result);
}

const getReportDestinosAnual = async(request, respo = response) => {
    let result;
    const { vigencia, destino,idcliente} = request.body;
    try {
        result = await getReportAnualDestinos(vigencia, destino,idcliente);
        if (!(result.rows.length > 0)) {
            return respo.json({
                code: 1,
                msj: "No se encontre información respecto al reporte que solicito."
            });
        }
        return respo.json(result.rows[0].p_result);
    } catch (error) {
        result = {
            code: 1,
            msj: error.message
        }
        return respo.status(500).json(result);
    }

}

module.exports = {
    reporteMes,
    getReportDestinosAnual
}