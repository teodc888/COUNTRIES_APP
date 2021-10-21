const { Router } = require("express");
const router = Router();
const { Country, Turistico } = require("../db.js");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  if (req.query.name) {
    try {
      const { name } = req.query;
      await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      }).then((dbCountries) => {
        res.status(200).json(dbCountries);
      });
    } catch (error) {
      res.status(404).send(error);
    }
  } else {
    res.status(200).send("No hay nada que mostrar");
  }
});

router.get("/:idPais", async (req, res) => {
  const { idPais } = req.params;
  try {
    await Country.findAll({
      where: {
          id: idPais,
        },
        include: [Turistico],
    }).then((dbCountries) => {
      res.status(200).json(dbCountries);
    });
  } catch (error) {
    res.status(404).json("XD");
  }
});

module.exports = router;
