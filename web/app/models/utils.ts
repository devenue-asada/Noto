import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
    log: ['query', 'error', 'info', 'warn']
});

// 処理
export const readOnly = <T>(v: Promise<T>): Promise<T> =>
    v
        .then((v) => {
            return v;
        })
        .catch((e) => {
            console.error('Error:', e);
            throw e;
        });

// トランザクション処理
export const withTransaction = async <T>(
    operation: () => Promise<T>
): Promise<T> => readOnly(prisma.$transaction(operation));
