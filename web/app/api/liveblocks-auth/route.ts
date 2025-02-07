import { Liveblocks } from '@liveblocks/node';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

const liveblocks = new Liveblocks({
    secret: process.env.LIVEBLOCKS_SECRET_KEY!
});

export async function POST() {
    const liveSession = liveblocks.prepareSession(nanoid());

    liveSession.allow('*', liveSession.FULL_ACCESS);

    const { body, status } = await liveSession.authorize();
    return new NextResponse(body, { status });
}
