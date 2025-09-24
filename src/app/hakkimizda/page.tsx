import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/sections/About/AboutHero';
import StorySection from '@/components/sections/About/StorySection';
import MissionSection from '@/components/sections/About/MissionSection';
import ValuesSection from '@/components/sections/About/ValuesSection';
import StatsSection from '@/components/sections/About/StatsSection';

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
