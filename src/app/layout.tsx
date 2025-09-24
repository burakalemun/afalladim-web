import type { Metadata } from 'next'
import { Lato, Playfair_Display, Pacifico } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
    variable: '--font-lato',
})

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    weight: ['400', '700'],
})

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-script',
})

export const metadata: Metadata = {
    title: 'Afalladım: Modern Fal ve Kişisel Astroloji Rehberin',
    description: 'Geleneksel fal ve astrolojiyi modern bir tasarımla keşfedin. Kişiye özel kahve falı, tarot yorumları ve detaylı doğum haritası ile mistik yolculuğunuza başlayın.',
    icons: {
        icon: '/icon.png',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="tr" className={`${lato.variable} ${playfair.variable} ${pacifico.variable}`}>
        <body>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
