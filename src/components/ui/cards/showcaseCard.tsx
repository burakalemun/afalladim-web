import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';

type ShowcaseCardProps = {
    imageSrc: string;
    title: string;
    description: string;
    href: string;
};

const ShowcaseCard = ({ imageSrc, title, description, href }: ShowcaseCardProps) => {
    return (
        <Link href={href} className="group block">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 h-full
                          hover:bg-white/20 transition-all duration-500
                          hover:transform hover:-translate-y-4
                          border border-amber-500/20 hover:border-amber-500/40">

                <div className="mb-6 overflow-hidden rounded-2xl">
                    <Image
                        src={imageSrc}
                        alt={`${title} özelliği görseli`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <h3 className="text-2xl font-bold text-slate-50 mb-4 font-playfair">
                    {title}
                </h3>
                <p className="text-slate-300 leading-relaxed font-lato">
                    {description}
                </p>

                <div className="mt-6 flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
                    <span className="font-semibold">Keşfet</span>
                    <RiArrowRightLine className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default ShowcaseCard;
