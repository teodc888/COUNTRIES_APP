const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,

        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV1,
        // allowNull: false,
        // primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      continente: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.FLOAT,
      },
      poblacion: {
        type: DataTypes.INTEGER,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );

  sequelize.define(
    "turistico",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      temporada: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
