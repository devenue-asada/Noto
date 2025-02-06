import {
    TPostReview,
    TReadReviewPageData,
    TReadStore,
    TReadStorePageData,
    TReadStores
} from '@/app/lib/types';
import { prisma, readOnly } from './utils';

//*****************************************
// Stores
//*****************************************
const readStores = async (): Promise<TReadStores> => {
    return await readOnly(prisma.stores.findMany({}));
};

// 店舗情報詳細
const readStore = async (id: number): Promise<TReadStore> => {
    return await readOnly(
        prisma.stores.findUnique({
            where: {
                id
            }
        })
    );
};

// 店舗画面取得
const readStorePageData = async (id: number): Promise<TReadStorePageData> => {
    const data = await readOnly(
        prisma.stores.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                url: true,
                name: true,
                started_at: true,
                ended_at: true,
                twenty_percent_discount_start_time: true,
                half_price_start_time: true,
                freshly_made_time: true,
                items: {
                    select: {
                        id: true,
                        name: true,
                        reviews: {
                            select: {
                                id: true,
                                item_id: true,
                                user_id: true,
                                discount_status_id: true,
                                star: true,
                                content: true,
                                tax_in_price: true,
                                purchase_time: true,
                                is_freshly_made: true,
                                user: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                }
                            },
                            orderBy: {
                                created_at: 'desc'
                            }
                        }
                    }
                }
            }
        })
    );
    if (!data) return null;
    const reviews = data.items.flatMap((i) => i.reviews);
    let total = 0;
    let average = 0;
    if (reviews.length) {
        total = reviews.reduce((sum, review) => sum + review.star, 0);
        average = Math.round((total / reviews.length) * 10) / 10;
    }

    return {
        store: {
            id: data.id,
            name: data.name,
            reviews: { average: average, count: reviews.length }
        },
        items: data.items,
        reviews
    };
};

// レビュー投稿画面取得
const readReviewPageData = async (
    storeId: number,
    userId: number
): Promise<TReadReviewPageData> => {
    const store = await readOnly(
        prisma.stores.findFirst({
            where: {
                id: storeId
            },
            select: {
                id: true,
                name: true,
                items: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    );
    const user = await readOnly(
        prisma.users.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true
            }
        })
    );
    if (!store || !user) return null;
    return { store, user };
};

// レビュー投稿
const postReview = async (data: TPostReview): Promise<TPostReview> => {
    return await prisma.reviews.create({ data });
};

export const models: any = {
    readStores,
    readStore,
    readStorePageData,
    readReviewPageData,
    postReview
};
