import React from 'react';
import Image from 'next/image';
import { RiAppleFill, RiGooglePlayFill } from 'react-icons/ri';
import { homePageContent } from '@/lib/content';


const CTASection = () => {
    const { title, subtitle, imageSrc, socialProof } = homePageContent.cta;

    return (
        <section id="indir" className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <Image
                            src={imageSrc} // Değişkeni kullan
                            alt="Afalladım App Ekran Görüntüleri"
                            width={600}
                            height={500}
                            className="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                    <div className="text-center lg:text-left order-1 lg:order-2">
                        {/* 3. Metinleri değişkenlerle değiştiriyoruz */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
                            {title}
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            {subtitle}
                        </p>

                        {/* İndirme Butonları (Bu butonların metinlerini de content.ts'e taşıyabiliriz ama şimdilik böyle kalması da ok) */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg ...">
                                <RiAppleFill className="mr-3 text-2xl" />
                                <div className="text-left">
                                    <div className="text-xs opacity-80 font-medium">Download on the</div>
                                    <div className="text-lg font-bold leading-5">App Store</div>
                                </div>
                            </button>
                            <button className="bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg ...">
                                <RiGooglePlayFill className="mr-3 text-2xl" />
                                <div className="text-left">
                                    <div className="text-xs opacity-80 font-medium">Get it on</div>
                                    <div className="text-lg font-bold leading-5">Google Play</div>
                                </div>
                            </button>
                        </div>

                        {/* Sosyal Kanıt */}
                        <div className="flex items-center justify-center lg:justify-start space-x-8 text-slate-400">
                            {/* 4. socialProof dizisini map'liyoruz */}
                            {socialProof.map(({ icon: Icon, text }) => (
                                <div key={text} className="flex items-center">
                                    <Icon className="text-amber-400 mr-2" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
