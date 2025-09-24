import React from 'react';
import { RiAppleFill, RiGooglePlayFill } from 'react-icons/ri';
import { homePageContent } from '@/lib/content';

const FinalCTASection = () => {
    const { title, subtitle, description, infoItems } = homePageContent.finalCta;

    return (
        <section
            className="py-32 relative overflow-hidden"
            // Arka plan resminin doğru yüklendiğinden emin olalım
            style={{
                backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.8), rgba(46, 28, 43, 0.8)), url('/images/background-2.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl lg:text-7xl font-bold text-slate-50 mb-8 leading-tight">
                        <span className="block mb-4">{title}</span>
                        <span className="text-amber-400 block">{subtitle}</span>
                    </h2>

                    <p className="text-xl lg:text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-12 py-5 rounded-full font-bold text-2xl transition-all duration-300 hover:scale-110 cursor-pointer whitespace-nowrap flex items-center justify-center shadow-2xl">
                            <RiAppleFill className="mr-4 text-3xl" />
                            <div className="text-left">
                                <div className="text-sm opacity-80 font-semibold">Hemen İndir</div>
                                <div className="text-2xl font-bold leading-7">App Store</div>
                            </div>
                        </button>
                        <button className="bg-transparent border-4 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-900 px-12 py-5 rounded-full font-bold text-2xl transition-all duration-300 hover:scale-110 cursor-pointer whitespace-nowrap flex items-center justify-center shadow-2xl">
                            <RiGooglePlayFill className="mr-4 text-3xl" />
                            <div className="text-left">
                                <div className="text-sm opacity-80 font-semibold">Hemen İndir</div>
                                <div className="text-2xl font-bold leading-7">Google Play</div>
                            </div>
                        </button>
                    </div>

                    {/* 3'lü Bilgi Kartı */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/30">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {infoItems.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="flex flex-col items-center">
                                    <Icon className="text-4xl text-amber-400 mb-4" />
                                    {/* EKSİK CLASS'LARI GERİ EKLEDİM */}
                                    <h3 className="text-xl font-bold text-slate-200 mb-2">{title}</h3>
                                    <p className="text-slate-300">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animasyonlu Baloncuklar */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-amber-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-amber-400/20 rounded-full blur-lg animate-bounce"></div>
            <div className="absolute top-1/3 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-bounce [animation-delay:-0.5s]"></div>
        </section>
    );
};

export default FinalCTASection;
