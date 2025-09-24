"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
// 1. Veriyi import et
import { navLinks } from '@/lib/content';

// const navLinks = [ ... ]; // BU SATIRLARI SİLİYORUZ

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/">
                        <h3
                            className="text-2xl font-bold text-amber-400"
                            style={{ fontFamily: 'Pacifico, serif' }}
                        >
                            Afalladım
                        </h3>
                    </Link>

                    {/* Desktop Navigasyon: Artık veriyi content'ten alıyor */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => ( // 2. Değişiklik yok, zaten `navLinks` kullanıyordu.
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-200 hover:text-amber-400 transition-colors font-lato"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* ... (geri kalanı aynı) ... */}
                </div>
            </div>
            {/* ... (mobil menü aynı) ... */}
        </header>
    );
};

export default Header;
