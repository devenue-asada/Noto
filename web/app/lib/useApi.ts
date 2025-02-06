import { METHOD } from '@/app/lib/const';
import { TApiMethods } from '@/app/lib/types';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

// clientコンポーネントから/api/[proxy]を経由してmodelに接続
export const useApi = () => {
    const router = useRouter();
    const ajax = useCallback(
        async (method: TApiMethods, modelName: string, payload = {}) => {
            try {
                const base = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                let options = {};

                options = {
                    ...base
                };

                if (method !== METHOD['GET']) {
                    options = {
                        ...options,
                        body: JSON.stringify(payload)
                    };
                }
                return await fetch(`/api/${modelName}`, options);
            } catch (e: any) {}
        },
        []
    );

    // レビュー投稿
    const postReview = useCallback(
        (payload: object) => ajax(METHOD['POST'], 'postReview', payload), // 第2引数に呼び出したいmodel名
        [ajax]
    );

    return {
        postReview
    };
};
