import DB from '../database/index.js';

const createPermission = async (req, res) => {
  const { name } = req.body;

  try {
    // Create the permission
    const permission = await DB.Permission.create({ name });

    res.status(201).json({ message: 'Permission created successfully', permission });
  } catch (error) {
    res.status(500).json({ message: 'Error creating permission', error });
  }
};

export { createPermission };