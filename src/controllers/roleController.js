import DB from '../database/index.js';

const assignRole = async (req, res) => {
    const { userId, roleId } = req.body;

    const user = await DB.User.findByPk(userId);
    const role = await DB.Role.findByPk(roleId);

    if (!user || !role) return res.status(404).json({ message: 'User or role not found' });

    await user.addRole(role);
    res.status(200).json({ message: 'Role assigned successfully' });
}

const createRole = async (req, res) => {
    const { name, permissionIds } = req.body;

    try {
        // Create the role
        const role = await DB.Role.create({ name });

        // Associate the role with permissions
        if (permissionIds && permissionIds.length > 0) {
            const permissions = await DB.Permission.findAll({
                where: { id: permissionIds }
            });
            await role.addPermissions(permissions);
        }

        res.status(201).json({ message: 'Role created successfully', role });
    } catch (error) {
        res.status(500).json({ message: 'Error creating role', error });
    }
};

export { assignRole, createRole };
