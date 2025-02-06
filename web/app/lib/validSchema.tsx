'use client';
import { z } from 'zod';

const s = z.string();
const n = z.number();

// 最小文字数チェック用
export const minCharacters = (targetField: string, limit: number): string => {
    return `${targetField}は${limit}文字以上で入力してください`;
};

// 最大文字数チェック用
export const maxCharacters = (targetField: string, limit: number): string => {
    return `${targetField}は${limit}文字以内にしてください`;
};

// 文字数制限用
export const LIMIT = {
    1: 1
} as const;

// nullを0に変換
const convertFromNull2Zero = <T extends Parameters<typeof z.preprocess>[1]>(
    schema: T
) =>
    z.preprocess((v) => {
        return v ?? 0;
    }, schema);

//*****************************************
// レビュー投稿画面バリデーション
//*****************************************
// 星の数
const star = n.refine((v) => v !== 0, {
    message: '星を5段階で選択してください'
});
// レビュー投稿内容
const content = s.refine((v) => v.length !== 0, {
    message: 'レビューは必須です'
});

export const postContentValid = z.object({
    star: convertFromNull2Zero(star),
    content
});

export type TPostContentValid = z.infer<typeof postContentValid>;
