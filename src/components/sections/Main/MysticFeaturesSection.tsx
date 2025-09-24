import React from 'react';
import MysticFeatureCard from '@/components/ui/cards/MysticFeatureCard';
import { homePageContent } from '@/lib/content';


const MysticFeaturesSection = () => {
    // 2. content.ts'ten gelen veriyi daha kolay kullanmak için değişkenlere ayıralım
    const { title, subtitle, features, howItWorks } = homePageContent.mysticFeatures;

    return (
        <section id="ozellikler" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlık bölümü */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Özellik Kartları Grid'i */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <MysticFeatureCard key={feature.title} {...feature} />
                    ))}
                </div>

                {/* "Nasıl Çalışır?" Bölümü */}
                <div className="mt-20 bg-gradient-to-r from-slate-800 to-purple-900 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-50 mb-6">
                        {howItWorks.title}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {howItWorks.steps.map((step) => (
                            <div key={step.step} className="text-center">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-slate-900">{step.step}</span>
                                </div>
                                <h4 className="text-xl font-semibold text-slate-200 mb-3">{step.title}</h4>
                                <p className="text-slate-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MysticFeaturesSection;
