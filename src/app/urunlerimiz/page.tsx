"use client";

import React, { useState } from 'react';
import ProductsHero from '@/components/sections/products/ProductsHero';
import ProductsFilter from '@/components/sections/products/ProductsFilter';
import ProductsGrid from '@/components/sections/products/ProductsGrid';
import FinalCTA from  '@/components/sections/Main/CTASection';
import ProductCTA from '@/components/sections/products/ProductsCTA';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('Hepsi');

    return (
        <main className="bg-slate-50 min-h-screen">
            <ProductsHero />
            <ProductsFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />
            <ProductsGrid activeCategory={activeCategory} />
            <ProductCTA />
        </main>
    );
};

export default ProductsPage;
