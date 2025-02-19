import { JotaiProviders } from '@/app/components/common/JotaiProviders';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import theme from './theme';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

export const metadata: Metadata = {
    title: 'Note'
};
export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <head>
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className={roboto.variable}>
                <JotaiProviders>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </AppRouterCacheProvider>
                </JotaiProviders>
            </body>
        </html>
    );
}
