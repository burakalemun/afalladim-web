import React from 'react';
import { IconType } from 'react-icons'; // İkon tipini react-icons'tan alıyoruz

type MysticFeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
};

const MysticFeatureCard = ({ icon: Icon, title, description }: MysticFeatureCardProps) => {
    return (
        // 1. KART KAPSAYICI: Hover animasyonları, geçişler, gölge, çerçeve ve padding burada
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl
                       transition-all duration-300 hover:-translate-y-2
                       border border-slate-200/50">

            {/* 2. İKON ARKA PLANI: Boyut, renk, gradyan ve boşluklar */}
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-6">
                <Icon className="text-2xl text-slate-900" />
            </div>

            {/* 3. METİN İÇERİĞİ: Fontlar, renkler ve boşluklar */}
            <h3 className="text-xl font-bold text-slate-800 mb-4 font-playfair">
                {title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-lato">
                {description}
            </p>
        </div>
    );
};

export default MysticFeatureCard;
