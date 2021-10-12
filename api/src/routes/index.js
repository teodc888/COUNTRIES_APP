const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getCountries = require("../controlers/getCountries.js")
const getCountriesName = require("../controlers/getCountriesName.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", getCountries);
router.use("/countriesData", getCountriesName)


module.exports = router;
