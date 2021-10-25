const { Router } = require("express");
const router = Router();
const { Turistico, Country} = require("../db.js");

router.get("/", async (req, res) =>{
    try {
        await Turistico.findAll({ include: [Country]}).then((dbTuristicos) => {
            res.status(200).json(dbTuristicos)
        })
    } catch (error){
        res.status(404).send(error)
    }
})

module.exports= router;