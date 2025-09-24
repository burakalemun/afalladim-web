import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import StorySection from '@/components/sections/about/StorySection';
import MissionSection from '@/components/sections/about/MissionSection';
import ValuesSection from '@/components/sections/about/ValuesSection';
import StatsSection from '@/components/sections/about/StatsSection';

export const metadata: Metadata = {
    title: 'Hakkımızda | Afalladım',
    description: 'Afalladım\'ın hikayesini, misyonunu ve değerlerini keşfedin.',
};

const AboutPage = () => {
    return (
        <main>
            <AboutHero />
            <StorySection />
            <MissionSection />
            <ValuesSection />
            <StatsSection />
        </main>
    );
};

export default AboutPage;
