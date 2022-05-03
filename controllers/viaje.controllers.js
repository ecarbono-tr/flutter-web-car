const { response } = require("express");
const { addViajemodel, selectViajemodel, seguimientomodel, setseguimientomodel, getUsuarioViaje, setdetalleviajemodel, deletedetalleviajemodel, selectViajesmodel, selectViajeidviajemodel } = require("../models/viaje.models");

const createViaje = async(request, response) => {

    let result;
    try {
        result = await addViajemodel(request.body);
        result = result.rows[0]["p_estadoviaje"]
    } catch (error) {
        result = "1";
    }

    response.json(
        result
    );

}

const getViajeController = async(request, response) => {

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
const getViajeidviajeController = async(request, response) => {

    let result;
    try {
        result = await selectViajeidviajemodel(request.body);
        result = result.rows[0];
    } catch (error) {
        result = "1";
    }

    response.json(
        result
    );

}


const getViajesController = async(request, response) => {

    let result;
    try {
        result = await selectViajesmodel(request.body);
        result = result.rows;
    } catch (error) {
        result = "1";
    }

    response.json(
        result
    );

}


const SeguimientoViajeController = async(request, response) => {

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

const setSeguimientoViajeController = async(request, response) => {

    let result;
    try {
        result = await setseguimientomodel(request.body);
    } catch (error) {
        result = "1";
    }

    response.json(
        result.rows[0]["p_result"]
    );

}

const getUsuarioViajeController = async(request, response) => {

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

const createViajeDetalle = async(request, response) => {

    let result;
    try {
        result = await setdetalleviajemodel(request.body);
        result = result.rows[0]['p_result']
    } catch (error) {
        result = "1";
    }

    response.json(
        result
    );

}

const eliminarViajeDetalle = async(request, response) => {

    let result;
    try {
        result = await deletedetalleviajemodel(request.body);
        result = result.rows[0]['p_result']
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
    getViajesController,
    SeguimientoViajeController,
    setSeguimientoViajeController,
    getUsuarioViajeController,
    createViajeDetalle,
    eliminarViajeDetalle,
    getViajeidviajeController
}