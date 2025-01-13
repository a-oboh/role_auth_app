import DB from "../index.js";

const associate = () => {
  // User-Role: Many-to-Many
  DB.User.belongsToMany(DB.Role, { through: 'UserRoles' });
  DB.Role.belongsToMany(DB.User, { through: 'UserRoles' });

  // Role-Permission: Many-to-Many
  DB.Role.belongsToMany(DB.Permission, { through: 'RolePermissions' });
  DB.Permission.belongsToMany(DB.Role, { through: 'RolePermissions' });
};

export default associate;