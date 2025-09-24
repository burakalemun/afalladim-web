"use client";

import React from 'react';
import { productsPageContent } from '@/lib/content';

type ProductsFilterProps = {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
};

const ProductsFilter = ({ activeCategory, onCategoryChange }: ProductsFilterProps) => {
    const { categories } = productsPageContent.filter;

    return (
        <div className="py-12 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border
                                ${activeCategory === category
                                ? 'bg-slate-800 text-white border-slate-800'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                            }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsFilter;
