'use client';

import {
    ClientSideSuspense,
    LiveblocksProvider,
    RoomProvider
} from '@liveblocks/react/suspense';
import { ReactNode } from 'react';

type TProps = {
    children: ReactNode;
};

export const Room: React.FC<TProps> = ({ children }) => {
    return (
        <LiveblocksProvider authEndpoint={'/api/liveblocks-auth'}>
            <RoomProvider id="test-room">
                <ClientSideSuspense fallback={<div>loading...</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
};
