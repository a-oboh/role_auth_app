import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Permission extends Model { }

const PermissionModel = () => {
    Permission.init(
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
            modelName: "Permission",
            tableName: "Permission",
            timestamps: false,
        }
    );

    return Permission;
}

export default PermissionModel;