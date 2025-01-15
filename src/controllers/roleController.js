import { createNewRole } from '../services/prismaService.js';
import prisma from '../services/prismaClient.js';

const createRole = async (req, res) => {
    const { name, permissionNames } = req.body;

    try {
        const role = await createNewRole({ name });

        if (permissionNames && permissionNames.length > 0) {
            if (permissionNames && permissionNames.length > 0) {
                const permissions = permissionNames.map((name) => ({
                    name,
                    roleId: role.id,
                }));
                await prisma.permission.createMany({ data: permissions });
            }
        }


        res.status(201).json({ message: 'Role created successfully', role });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating role', error });
    }
};

export { createRole };
