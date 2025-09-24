import React from 'react';
import { aboutPageContent } from '@/lib/content';

const MissionSection = () => {
    const { title, text } = aboutPageContent.mission;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
