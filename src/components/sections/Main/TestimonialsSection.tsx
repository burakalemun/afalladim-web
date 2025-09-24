"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import StatCard from '@/components/ui/cards/StatCard';
import { RiStarFill } from 'react-icons/ri';
import { homePageContent } from '@/lib/content';


const TestimonialsSection = () => {
    const { title, subtitle, testimonials, stats } = homePageContent.testimonials;

    const [activeIndex, setActiveIndex] = useState(0);
    const currentTestimonial = testimonials[activeIndex];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Başlık Bölümü */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Yorum Kartı */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200/50">
                        <div className="text-center">
                            <Image
                                alt={currentTestimonial.name}
                                src={currentTestimonial.avatarSrc}
                                width={80}
                                height={80}
                                className="w-20 h-20 rounded-full mx-auto mb-6 shadow-lg"
                            />
                            <div className="flex justify-center mb-4">
                                {[...Array(5)].map((_, i) => <RiStarFill key={i} className="text-amber-400 text-xl" />)}
                            </div>
                            <blockquote className="text-xl lg:text-2xl text-slate-700 italic mb-6 leading-relaxed">
                                {currentTestimonial.quote}
                            </blockquote>
                            <div className="text-lg">
                                <p className="font-bold text-slate-800">{currentTestimonial.name}</p>
                                <p className="text-slate-500">{currentTestimonial.location}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Pagination Noktaları */}
                <div className="flex justify-center mt-8 space-x-3">
                    {testimonials.map((_, index) => ( // 'testimonials' dizisini kullanıyoruz
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                                activeIndex === index ? 'bg-amber-500' : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                            aria-label={`Yorum ${index + 1}`}
                        />
                    ))}
                </div>

                {/* İstatistik Kartları */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {stats.map((stat) => ( // 'stats' dizisini kullanıyoruz
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
