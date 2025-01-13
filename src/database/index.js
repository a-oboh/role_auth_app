import sequelize from './config/sequelize.js';
import PermissionModel from './models/permission.js';
import RoleModel from './models/role.js';
import UsersModel from './models/user.js';

const DB = {
  sequelize,
  User: UsersModel(sequelize),
  Permission: PermissionModel(sequelize),
  Role: RoleModel(sequelize),
};

export default DB;