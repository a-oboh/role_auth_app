import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/sequelize.js';

class Role extends Model { }

const RoleModel = () => {
    Role.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: 'Role',
            tableName: 'Role',
            timestamps: false,
        }
    );

    return Role;
}

export default RoleModel;