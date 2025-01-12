const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
}, { sequelize, modelName: 'User' });

User.associate = (models) => {
    User.belongsToMany(models.Role, { through: 'UserRoles' });
  };

module.exports = User;
