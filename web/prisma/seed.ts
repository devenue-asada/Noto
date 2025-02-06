import { PrismaClient } from '@prisma/client';
import seedData from './mock';
const prisma = new PrismaClient();

const exec = async () => {
    const upserts = [
        ...seedData.companies.map((d) => {
            const { id, ...data } = d;
            return prisma.companies.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.stores.map((d) => {
            const { id, ...data } = d;
            return prisma.stores.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.items.map((d) => {
            const { id, ...data } = d;
            return prisma.items.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.users.map((d) => {
            const { id, ...data } = d;
            return prisma.users.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.discountStatuses.map((d) => {
            const { id, ...data } = d;
            return prisma.discount_statuses.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.reviews.map((d) => {
            const { id, ...data } = d;
            return prisma.reviews.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        }),
        ...seedData.goods.map((d) => {
            const { id, ...data } = d;
            return prisma.goods.upsert({
                where: { id: d.id },
                update: { ...data },
                create: { ...data }
            });
        })
    ];

    await prisma.$transaction(upserts);
};

exec()
    .then(() => {
        console.log('完了しました');
    })
    .catch((e) => {
        console.error('エラーが発生しました:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
