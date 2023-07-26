const { Sequelize, DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    // perfil: DataTypes.ENUM('ADMINISTRADOR', 'CLIENTE'),
    cep: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    senha: DataTypes.STRING,
  },
  {
    sequelize: connection,
    tableName: "usuario",
    freezeTableName: true,
    updatedAt: false,
  }
);
