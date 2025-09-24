import React from 'react';
import Image from 'next/image';
import { aboutPageContent } from '@/lib/content';

const StorySection = () => {
    const { title, paragraphs, imageSrc } = aboutPageContent.story;

    return (
        <section className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="prose prose-xl text-slate-700 max-w-none">
                        <h2 className="text-4xl font-bold text-slate-800 mb-6">
                            {title}
                        </h2>
                        {paragraphs.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={imageSrc}
                            alt="Mistik bir kütüphane"
                            width={600}
                            height={500}
                            class="rounded-2xl shadow-2xl object-cover w-full h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
