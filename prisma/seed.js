import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding roles and users...');

    const hashedPassword = await bcrypt.hash('securepassword', 10);

    // Seed roles
    const adminRole = await prisma.role.upsert({
        where: { name: 'Admin' },
        update: {},
        create: {
            name: 'Admin',
        },
    });

    const userRole = await prisma.role.upsert({
        where: { name: 'User' },
        update: {},
        create: {
            name: 'User',
        },
    });

    console.log('Roles created:', { adminRole, userRole });

    // Seed users
    const adminUser = await prisma.user.upsert({
        where: { email: 'admin@test.com' },
        update: {},
        create: {
            email: 'admin@test.com',
            password: hashedPassword,
        },
    });

    const regularUser = await prisma.user.upsert({
        where: { email: 'user@test.com' },
        update: {},
        create: {
            email: 'user@test.com',
            password: hashedPassword,
        },
    });

    console.log('Users seeded:', { adminUser, regularUser });

    // Seed user roles
    await prisma.userRole.upsert({
        where: { userId_roleId: { userId: adminUser.id, roleId: adminRole.id } },
        update: {},
        create: {
            userId: adminUser.id,
            roleId: adminRole.id,
        },
    });

    await prisma.userRole.upsert({
        where: { userId_roleId: { userId: regularUser.id, roleId: userRole.id } },
        update: {},
        create: {
            userId: regularUser.id,
            roleId: userRole.id,
        },
    });

    console.log('User roles seeded');
}

main()
    .then(() => {
        console.log('Seeding completed.');
        prisma.$disconnect();
    })
    .catch((error) => {
        console.error('Error during seeding:', error);
        prisma.$disconnect();
        process.exit(1);
    });
