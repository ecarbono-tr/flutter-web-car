const { initDB } = require("../DB/connectDB");

const getmesreport = async(request) => {
    const body = [
        parseInt(request.idcliente),
        parseInt(request.cod_tabla),
        parseInt(request.iddestino),
        request.mes, request.year
    ];
    const client = await initDB();
    const result = await client.query(`SELECT ID_VIAJE as idviaje,
                                              USERNAME as username,
                                              USER_ID as userid,
                                              CELULAR as cel,
                                              HORARIO as horario,
                                              NOMBRE_RUTA as nombreruta,
                                              FECHA_INICIO as fechaini,
                                              FECHA_FIN as fechafin
                                      FROM PUBLIC.REPORTE_VIAJE_MES RVM 
                                      WHERE RVM.IDCLIENTE = $1 AND 
                                            RVM.COD_HORARIO = $2 AND 
                                            RVM.IDDESTINO = $3 AND 
                                            TO_CHAR(TO_DATE(RVM.FECHA_INICIO,'DD/MM/YYYY'),'MM') = $4 
                                            AND TO_CHAR(TO_DATE(RVM.FECHA_INICIO,'DD/MM/YYYY'),'YYYY') = $5;`, body);
    client.end();
    return result;
}

const getReportAnualDestinos = async(vigencia = "2022", destino = "100",idcliente=0) => {
    let result;
    try {
        const client = await initDB();
        result = await client.query(`CALL public.sitpr_gnrar_report_anual_dstno(
            $1, 
            $2,
            $3,
            '{}');`, [vigencia, destino,idcliente]);

        client.end();
    } catch (error) {
        result = {
            error: 1,
            msj: error
        };
        console.error("error el el modelo del report", error);
        throw Error("error el el modelo del report -->" + error);
    }
    return result;
};

module.exports = {
    getmesreport,
    getReportAnualDestinos
};