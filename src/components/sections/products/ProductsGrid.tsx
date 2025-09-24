import React from 'react';
import { productsPageContent } from '@/lib/content';
import ProductCard from '@/components/sections/products/ProductCard';

type ProductsGridProps = {
    activeCategory: string;
};

const ProductsGrid = ({ activeCategory }: ProductsGridProps) => {
    const { allProducts } = productsPageContent;

    const filteredProducts = activeCategory === 'Hepsi'
        ? allProducts
        : allProducts.filter(product => product.category === activeCategory);

    return (
        <div className="bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsGrid;
