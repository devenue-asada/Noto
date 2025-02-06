import { METHOD, POST_BUTTON_ACTIONS } from '@/app/lib/const';
import { reviews, stores, users } from '@prisma/client';

export type TApiMethods = (typeof METHOD)[keyof typeof METHOD];

export type TPostButtonAction =
    (typeof POST_BUTTON_ACTIONS)[keyof typeof POST_BUTTON_ACTIONS];

export type TSearchParams = Promise<{
    [key: string]: string | string[] | undefined;
}>;

export type TPartialStore = Partial<stores>;

// models
type TOmitBase = 'created_at' | 'updated_at' | 'deleted_at';

export type TReadStores = stores[] | null;

export type TReadStore = stores | null;

export type TReadStorePageDataItems = Pick<stores, 'id' | 'name'>[] | [];

export type TOmitBaseUsers = Omit<users, TOmitBase>[];
export type TReadStorePageDataItemReviews = Omit<reviews, TOmitBase> | any | [];

export type TReadStorePageData = {
    store: any;
    // store: Pick<stores, 'id' | 'name'>;
    items: TReadStorePageDataItems;
    reviews: TReadStorePageDataItemReviews;
} | null;

export type TPostContent = {
    store: Pick<stores, 'id' | 'name'>;
    user: Pick<stores, 'id' | 'name'>;
};

export type TReadReviewPageData = TPostContent | null;

export type TPostReview = Omit<reviews, TOmitBase>;
