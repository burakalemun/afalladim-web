import React from 'react';
import { IconType } from 'react-icons'; // ⚠️ sadece type import

type DownloadButtonProps = {
    store: 'App Store' | 'Google Play';
    icon: IconType;
    href: string;
};

const DownloadButton = ({ store, icon: Icon, href }: DownloadButtonProps) => {
    const isAppStore = store === 'App Store';
    const baseClasses = "flex items-center items-center gap-3 px-6 py-3 rounded-full font-bold transition-transform hover:scale-105";
    const storeClasses = isAppStore
        ? "bg-amber-500 hover:bg-amber-600 text-slate-900 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center shadow-2xl"
        : "bg-black/20 backdrop-blur-md text-white border border-white/20"; // hover atıcaz

    return (
        <a href={href} className={`${baseClasses} ${storeClasses}`}>
            {Icon && <Icon size={24} />} {/* ⚠️ null check */}
            <div className="text-left">
                <p className="text-xs">{isAppStore ? 'İndir' : 'indir'}</p>
                <p className="text-lg leading-tight">{store}</p>
            </div>
        </a>
    );
};

export default DownloadButton;
