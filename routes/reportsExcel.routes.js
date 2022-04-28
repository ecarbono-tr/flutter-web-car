const { Router } = require("express");
const { reporteMes, getReportDestinosAnual } = require("../controllers/reportExcel.controller");
const router = new Router();



router.post('/reporteMes', reporteMes);

router.post('/reporteAnualDestino', getReportDestinosAnual);

module.exports = router;