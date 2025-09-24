import React from 'react';
import { IconType } from 'react-icons';

type FeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
    return (
        // 1. KART KAPSAYICI: Hover efektleri, grup ve geçişler burada tanımlanıyor
        <div className="text-center group hover:transform hover:-translate-y-4 transition-all duration-500">

            {/* 2. İKON ARKA PLANI: Dairesel, gradient ve gölge stilleri */}
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Icon className="text-3xl text-slate-900" />
            </div>

            {/* 3. METİN İÇERİĞİ: Doğru font aileleri uygulanıyor */}
            <h3 className="text-2xl font-bold text-slate-800 mb-6 font-playfair">
                {title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-sm mx-auto font-lato">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;

