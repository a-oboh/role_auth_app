import jwt from 'jsonwebtoken';
import { findUserRoles } from '../services/prismaService.js';

const authenticate = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Access denied. No token provided.' });

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

const authorize = (roleName) => async (req, res, next) => {
    try {
        const user = await findUserRoles(req.user.id);

        if (!user || !user.roles) {
            throw new Error('User or roles not found');
        }

        const hasRole = user.roles.some((userRole) => userRole.role.name === roleName);

        if (hasRole) {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "Forbidden" });
    }

};


export { authenticate, authorize };
