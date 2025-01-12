const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Permission extends Model {}
Permission.init({
    name: DataTypes.STRING,
}, { sequelize, modelName: 'Permission' });

Permission.assiciate = (models) => {
    Permission.belongsTo(models.Role);
}

module.exports = Permission;
