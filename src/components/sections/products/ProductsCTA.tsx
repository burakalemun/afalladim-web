import React from 'react';
import { RiAppleFill, RiGooglePlayFill } from 'react-icons/ri';
import { productsPageContent } from '@/lib/content';

const ProductsCTA = () => {
    const { title, subtitle } = productsPageContent.cta;

    return (
        <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-slate-900 to-purple-900 rounded-3xl p-12 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-black text-white px-6 py-4 rounded-xl font-semibold ...">
                            <RiAppleFill className="text-3xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80">Download on the</div>
                                <div className="text-xl font-bold leading-5">App Store</div>
                            </div>
                        </button>
                        <button className="bg-black text-white px-6 py-4 rounded-xl font-semibold ...">
                            <RiGooglePlayFill className="text-3xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80">Get it on</div>
                                <div className="text-xl font-bold leading-5">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCTA;
