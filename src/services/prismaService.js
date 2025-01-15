import prisma from "./prismaClient.js";

const createUser = async ({ email, password }) => {
    return prisma.user.create({
        data: {
            email,
            password,
        },
    });
}

const findUserRoles = async (userId) => {
    return prisma.user.findUnique({
        where: { id: userId },
        include: { roles: { include: { role: true } } },
    });
}

const findUserByEmail = async (email) => {
    return prisma.user.findUnique({
        where: { email },
    });
}

const createNewRole = async ({ name }) => {
    return prisma.role.create({
        data: {
            name
        },
    });
}

export { createUser, findUserRoles, findUserByEmail, createNewRole };