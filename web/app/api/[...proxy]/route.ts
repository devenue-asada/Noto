import { models } from '@/app/models';
import { NextRequest, NextResponse } from 'next/server';

const proxy = async (req: NextRequest) => {
    try {
        const { pathname } = req.nextUrl;
        const modelName = pathname.replace('/api/', '');
        const data = await req.json();
        const result = await models[modelName](data);

        return NextResponse.json(result);
    } catch (e: any) {
        return NextResponse.json({
            error: { message: e.message, statusCode: 500 }
        });
    }
};

export { proxy as DELETE, proxy as GET, proxy as PATCH, proxy as POST };
