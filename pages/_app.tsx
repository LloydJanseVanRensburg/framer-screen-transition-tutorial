import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Navbar />
            <AnimatePresence initial={false}>
                <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
        </>
    );
}
