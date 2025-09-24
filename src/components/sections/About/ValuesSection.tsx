import React from 'react';
import Image from 'next/image';
import { aboutPageContent } from '@/lib/content';

const ValuesSection = () => {
    const { title, imageSrc, items } = aboutPageContent.values;

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <Image
                            alt={title}
                            src={imageSrc}
                            width={600}
                            height={500}
                            className="rounded-2xl shadow-2xl object-cover w-full h-96"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
                            {title}
                        </h2>
                        <div className="space-y-8">
                            {/* 3. `items` dizisini map'liyoruz */}
                            {items.map(({ icon: Icon, title, description }) => (
                                <div key={title} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="text-xl text-amber-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">
                                            {title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
