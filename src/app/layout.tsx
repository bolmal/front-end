import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/nav/navigation';
import AuthProvider from '@/components/providers/SessionProvier';

export const metadata: Metadata = {
    title: '볼래말래',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <Navigation></Navigation>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
