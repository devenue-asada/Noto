'use client';

import { Provider } from 'jotai';

type TProps = {
    children?: React.ReactNode;
};

export const JotaiProviders: React.FC<TProps> = ({ children }) => {
    return <Provider>{children}</Provider>;
};
