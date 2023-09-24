'use client';
import useDarkMode from 'use-dark-mode';

import { Providers } from '../app/providers';

import type { ChildrenContainer } from '@/types/common';

export default function RootLayout({ children }: ChildrenContainer) {
    const darkMode = useDarkMode(true);
    const themeClass = darkMode.value ? 'dark' : 'light';

    return (
        <html lang='en' className={`${themeClass}`}>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}