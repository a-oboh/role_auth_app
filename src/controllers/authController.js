import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../services/prismaService.js';
import prisma from '../services/prismaClient.js';

export async function register(req, res) {
    const { email, password, roleIds } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({ email, password: hashedPassword });

        if (roleIds && roleIds.length > 0) {
            const userRoles = roleIds.map((roleId) => ({
                userId: user.id,
                roleId,
            }));
            await prisma.userRole.createMany({ data: userRoles });
        }

        user.password = undefined;

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error registering user", error });
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!user || !isPasswordValid) return res.status(401).json({ message: "Wrong credentials" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in user", error });
    }
}
