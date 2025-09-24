import React from 'react';
// Tüm component'lerimizi import ediyoruz
import Hero from '../components/sections/Main/Hero';
import FeaturesSection from '../components/sections/Main/FeaturesSection';
import ShowcaseSection from '../components/sections/Main/ShowcaseSection';
import MysticFeaturesSection from '../components/sections/Main/MysticFeaturesSection';
import TestimonialsSection from '../components/sections/Main/TestimonialsSection';
import CTASection from '../components/sections/Main/CTASection';
import FinalCTA from '../components/sections/Main/FinalCTA';

export default function HomePage() {
    return (
        <div className="bg-slate-50 font-sans">

            <div className="relative">
                <div className="-mt-16"> {/* Header'ın kapladığı boşluğu geri almak için negatif margin */}
                    <Hero />
                </div>
            </div>

            <main>
                <FeaturesSection />
                <ShowcaseSection />
                <MysticFeaturesSection />
                <TestimonialsSection />
                <CTASection />
                <FinalCTA />
            </main>
        </div>
    );
}
