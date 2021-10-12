const {
    Router
} = require("express");
const router = Router();
const express = require("express")
const {
    Turistico
} = require("../db.js");
router.use(express.json());


router.post("/", async (req, res) => {
    const {
        name,
        dificultad,
        duracion,
        temporada
    } = req.body;

    try {
        const newTuristico = await Turistico.findOrCreate({
            where: {
                name,
                dificultad,
                duracion,
                temporada
            }
        });
        res.status(200).json(newTuristico);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;