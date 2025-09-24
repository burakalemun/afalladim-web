"use client";

import React from 'react';
import { motion, Variants } from "framer-motion";
import { RiAppleFill, RiGooglePlayFill, RiArrowDownLine } from 'react-icons/ri';
import InfoPill from "@/components/InfoPill";
import { homePageContent } from '@/lib/content';


const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Hero = () => {
    const { headline, subHeadline, description, appStoreUrl, googlePlayUrl, infoPills } = homePageContent.hero;

    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(10, 2, 20, 0.6), rgba(10, 2, 20, 0.6)), 
                    url('/images/nebula-background.jpg')
                `,
            }}
        >
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        className="text-5xl lg:text-7xl font-bold text-slate-50 mb-8 leading-tight font-playfair"
                        variants={itemVariants}
                    >
                        <span className="block mb-4">{headline}</span>
                        <span className="text-amber-400 block">{subHeadline}</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-lato"
                        variants={itemVariants}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                        variants={containerVariants}
                    >
                        <motion.a
                            href={appStoreUrl}
                            className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center shadow-2xl"                            variants={itemVariants}
                        >
                            <RiAppleFill className="mr-3 text-3xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80 font-semibold">İndir</div>
                                <div className="text-lg font-bold leading-5">App Store</div>
                            </div>
                        </motion.a>

                        <motion.a
                            href={googlePlayUrl}
                            className="bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 hover:bg-white/20 px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center shadow-2xl"                            variants={itemVariants}
                        >
                            <RiGooglePlayFill className="mr-3 text-3xl" />
                            <div className="text-left">
                                <div className="text-xs opacity-80 font-semibold text-white/80">İndir</div>
                                <div className="text-lg font-bold leading-5">Google Play</div>
                            </div>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center flex-wrap gap-x-12 gap-y-4 text-slate-400 text-lg"
                        variants={itemVariants}
                    >
                        {infoPills.map((pill) => (
                            <InfoPill
                                key={pill.text}
                                icon={pill.icon}
                                text={pill.text}
                                iconClassName={pill.iconColor}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <RiArrowDownLine className="text-amber-400 text-3xl" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
