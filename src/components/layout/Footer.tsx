import React from 'react';
import Link from 'next/link';
// 1. Veriyi merkezi content dosyasından import ediyoruz
import { footerContent } from '@/lib/content';

const Footer = () => {
    // 2. content.ts'ten gelen veriyi daha kolay kullanmak için değişkenlere ayıralım
    const { brandName, description, socialLinks, linkGroups, copyright } = footerContent;

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Üst Kısım: Logo, Açıklama ve Linkler */}
                <div className="grid md:grid-cols-4 gap-8">

                    {/* Sol Bölüm: Logo ve Açıklama */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-amber-400 mb-4 font-pacifico" style={{ fontFamily: 'Pacifico, serif' }}>
                            {brandName}
                        </h3>
                        <p className="text-slate-400 mb-6 max-w-md font-lato">
                            {description}
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Grupları: "Sayfalar" ve "Destek" (Dinamik olarak oluşturuluyor) */}
                    {linkGroups.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-lg font-semibold text-slate-200 mb-4 font-playfair">
                                {group.title}
                            </h4>
                            <ul className="space-y-2 font-lato">
                                {group.links.map((link) => (
                                    <li key={link.title}>
                                        <Link href={link.href} className="hover:text-amber-400 transition-colors">
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Alt Kısım: Telif Hakkı ve Kredi */}
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm font-lato">
                        {copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
