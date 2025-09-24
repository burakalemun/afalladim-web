import React from 'react';
import { aboutPageContent } from '@/lib/content';

const StatsSection = () => {
    const { title, items } = aboutPageContent.stats;

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((stat) => (
                        <div key={stat.label} className="bg-white p-8 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 font-playfair">
                                {stat.value}
                            </div>
                            <p className="text-slate-600 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
