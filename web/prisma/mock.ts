const companies = [
    { id: 1, name: 'マルエツ' },
    { id: 2, name: 'いなげや' },
    { id: 3, name: 'オーケー' }
];

const stores = [
    {
        id: 1,
        company_id: 1,
        url: 'https://tokubai.co.jp/%E3%83%9E%E3%83%AB%E3%82%A8%E3%83%84/188559',
        name: 'マルエツ 登戸駅前店',
        started_at: '2024-11-25T00:00:00+09:00',
        ended_at: '2024-11-25T00:12:00+09:00',
        twenty_percent_discount_start_time: null,
        half_price_start_time: null,
        freshly_made_time: null,
        tel: '044-9342-277',
        address: '神奈川県川崎市多摩区登戸2428番地',
        access: '小田急小田原線、JR東日本南武線「登戸駅」西口から徒歩約1分',
        parking: '駐車場なし',
        payment_method: '現金'
    },
    {
        id: 2,
        company_id: 1,
        url: 'https://tokubai.co.jp/%E3%83%9E%E3%83%AB%E3%82%A8%E3%83%84/188559',
        name: 'いなげや 川崎生田店',
        started_at: null,
        ended_at: null,
        twenty_percent_discount_start_time: null,
        half_price_start_time: null,
        freshly_made_time: null,
        tel: '044-934-2277',
        address: '神奈川県川崎市多摩区三田4-5548-1',
        access: '',
        parking: '駐車場あり (88台)',
        payment_method: ''
    },
    {
        id: 3,
        company_id: 1,
        url: 'https://tokubai.co.jp/%E3%83%9E%E3%83%AB%E3%82%A8%E3%83%84/188559',
        name: 'オーケー 生田店',
        started_at: null,
        ended_at: null,
        twenty_percent_discount_start_time: null,
        half_price_start_time: null,
        freshly_made_time: null,
        tel: '044-934-2277',
        address: '神奈川県川崎市多摩区三田4丁目1-1',
        access: '',
        parking: '駐車場あり (47台)',
        payment_method: ''
    }
];

const items = [
    {
        id: 1,
        store_id: 1,
        name: '鶏のから揚げ',
        image: 'https://example.com/images/karage.jpg'
    },
    {
        id: 2,
        store_id: 1,
        name: 'ローストビーフ',
        image: 'https://example.com/images/roastbeef.jpg'
    },
    {
        id: 4,
        store_id: 1,
        name: '唐揚げ定食',
        image: 'https://example.com/images/karagedon.jpg'
    },
    {
        id: 5,
        store_id: 1,
        name: 'ハンバーグステーキ',
        image: 'https://example.com/images/hamburg.jpg'
    },
    {
        id: 6,
        store_id: 1,
        name: 'エビフライ',
        image: 'https://example.com/images/ebifry.jpg'
    },
    {
        id: 7,
        store_id: 1,
        name: 'カツ丼',
        image: 'https://example.com/images/katsudon.jpg'
    },
    {
        id: 8,
        store_id: 1,
        name: 'ビーフシチュー',
        image: 'https://example.com/images/beefstew.jpg'
    },
    {
        id: 9,
        store_id: 1,
        name: '海鮮丼',
        image: 'https://example.com/images/kaisendon.jpg'
    },
    {
        id: 10,
        store_id: 1,
        name: '焼き鳥定食',
        image: 'https://example.com/images/yakitori.jpg'
    },
    {
        id: 3,
        store_id: 2,
        name: '焼き魚定食',
        image: 'https://example.com/images/yakizakana.jpg'
    },
    {
        id: 11,
        store_id: 2,
        name: '天ぷら定食',
        image: 'https://example.com/images/tempura.jpg'
    },
    {
        id: 12,
        store_id: 2,
        name: 'うな重',
        image: 'https://example.com/images/unajyu.jpg'
    }
];

const users = [
    { id: 1, name: '吉田' },
    { id: 2, name: '佐藤' },
    { id: 3, name: '田中' }
];

const reviews = [
    {
        id: 1,
        item_id: 1,
        user_id: 1,
        discount_status_id: 1,
        star: 5,
        content: 'とてもおいしい！外はカリカリで中はジューシー。',
        tax_in_price: 500,
        purchase_time: '2024-11-25T00:00:00+09:00',
        is_freshly_made: true
    },
    {
        id: 2,
        item_id: 2,
        user_id: 2,
        discount_status_id: 2,
        star: 4,
        content: 'ローストビーフが柔らかくて美味しい。もう少しソースが欲しい。',
        tax_in_price: 1200,
        purchase_time: '2024-11-25T00:00:00+09:00',
        is_freshly_made: false
    },
    {
        id: 3,
        item_id: 3,
        user_id: 3,
        discount_status_id: 1,
        star: 4,
        content: '焼き魚定食が定番で美味しいけど、ご飯が少し硬かった。',
        tax_in_price: 800,
        purchase_time: '2024-11-25T00:00:00+09:00',
        is_freshly_made: true
    }
];

const goods = [
    { id: 1, user_id: 1, review_id: 1 },
    { id: 2, user_id: 2, review_id: 2 },
    { id: 3, user_id: 3, review_id: 3 }
];

const discountStatuses = [
    { id: 1, status_id: 1, name: 'list_price', percent: 0 },
    {
        id: 2,
        status_id: 2,
        name: 'twenty_percent_discount_price',
        percent: 20
    },
    { id: 3, status_id: 3, name: 'half_price', percent: 50 }
];

export default {
    companies,
    stores,
    items,
    users,
    reviews,
    goods,
    discountStatuses
} as const;
