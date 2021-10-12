const axios = require("axios");
const {
    Router
} = require("express");
const router = Router();
const {
    Country
} = require("../db.js")


router.get("/", async (req, res, next) => {
    try {

        const country = (await axios(`https://restcountries.com/v3/all`)).data
    
        country?.forEach(async e => {
            const {
                name,
                flags,
                region,
                area,
                population,
            } = e;
    
            await Country?.findOrCreate({
                where: {
                    name: name.common,
                    imagen: flags[0],
                    continente: region,
                    subregion: e?.subregion ? e.subregion : "no tiene subregion",
                    poblacion: population,
                    area: area,
                    capital: e?.capital ? e.capital[0] : "No tiene capital"
    
                }
                
            })
    
            Country.findAll()
            .then(dbCountries => {
                res.status(200).send(dbCountries)
            })
            
    
        })
    }catch (err){
        next(err);
    }

})

module.exports = router