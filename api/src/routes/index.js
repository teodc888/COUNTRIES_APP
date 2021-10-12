const { Router } = require('express');
const express = require("express")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getCountries = require("../controlers/getCountries.js")
const getCountriesName = require("../controlers/getCountriesName.js")
const postTuristico = require("../controlers/postTuristico");

const router = Router();
router.use(express.json()); 

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", getCountries);
router.use("/countriesData", getCountriesName)
router.use("/activity", postTuristico)


module.exports = router;
