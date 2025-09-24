import React from 'react';
import ShowcaseCard from '@/components/ui/cards/showcaseCard';
import { homePageContent } from '@/lib/content';


const ShowcaseSection = () => {
    const { title, subtitle, items } = homePageContent.showcase;

    return (
        <section className="py-24 bg-gradient-to-br from-slate-800 to-purple-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-6 font-playfair">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-lato">
                        {subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <ShowcaseCard
                            key={item.title}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
