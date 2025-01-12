const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Role extends Model {}
Role.init({
    name: DataTypes.STRING,
}, { sequelize, modelName: 'Role' });

Role.associate = (models) => {
    Role.hasMany(models.Permission, { as: 'Permissions' });
    Role.belongsToMany(models.User, { through: 'UserRoles' });
  };

module.exports = Role;
