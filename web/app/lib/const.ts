// API methods
export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
} as const;

export const RESULT_CODE = {
    SUCCESS: 200,
    CLIENT_ERROR: 400,
    SERVER_ERROR: 500
} as const;

// 投稿ボタン分岐
export const POST_BUTTON_ACTIONS = {
    EXEC: 'EXEC',
    NEXT_PAGE: 'NEXT_PAGE'
} as const;
