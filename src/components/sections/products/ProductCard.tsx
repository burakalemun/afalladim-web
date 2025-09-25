import React from 'react';
import Image from 'next/image';
import { RiStarFill } from 'react-icons/ri';
import { type Product } from '@/lib/content';

const ProductCard = ({ title, description, imageSrc, category, rating }: Product) => {
    const renderStars = () => {
        return [...Array(5)].map((_, i) => (
            <RiStarFill key={i} className={i < Math.round(rating) ? 'text-amber-500' : 'text-slate-300'} />
        ));
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer">
            <div className="relative overflow-hidden">
                <Image
                    alt={title}
                    src={imageSrc}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors font-playfair">
                    {title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4 font-lato h-20">
                    {description}
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center">
                        <div className="flex text-lg">{renderStars()}</div>
                        <span className="ml-2 text-sm text-slate-500">{rating.toFixed(1)}</span>
                    </div>
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors cursor-pointer whitespace-nowrap font-lato">
                        Deneyin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
