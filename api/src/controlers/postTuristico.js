const { Router } = require("express");
const router = Router();
const express = require("express");
const { Turistico, Country } = require("../db.js");
router.use(express.json());

router.post("/", async (req, res) => {
  const { name, dificultad, duracion, temporada, countries } = req.body;
  try {
    const newTuristico = await Turistico.create({
      name,
      dificultad,
      duracion,
      temporada,
    });

    let dbTuris = await Country.findAll({ where: { id: countries } });

    newTuristico.addCountry(dbTuris);

    res.status(200).json(newTuristico);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
