const {
    Router
} = require("express");
const router = Router();
const {
    Country,
    Turistico
} = require("../db.js");
const {
    Op
} = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const {
            name
        } = req.query;
        await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: name
                    }
                },
                includes: {
                    Turistico
                },

            })
            .then(dbCountries => {
                res.status(200).json(dbCountries);
            })

    } catch (error) {
        res.status(404).send(error);
    }

})

router.get("/:idPais", async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await Country.findAll({
                where: {
                    id: "e9928800-2b82-11ec-9027-25d007b8fd9d"
                }
            })
            .then(dbCountries => {
                res.status(200).json(dbCountries);
            })
    } catch (error) {
        res.status(404).json(error);
    }

})

module.exports = router