import React from 'react';
import { contactPageContent } from '@/lib/content';

const ContactHero = () => {
    const { title, subtitle } = contactPageContent.hero;

    return (
        <section className="bg-slate-900 pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
                    {title}
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
