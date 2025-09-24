import React from 'react';
import FeatureCard from '@/components/ui/cards/FeatureCard';
import { homePageContent } from '@/lib/content';


const FeaturesSection = () => {
    const { title, subtitle, items } = homePageContent.features;

    return (
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm-px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-playfair">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto font-lato">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {items.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
