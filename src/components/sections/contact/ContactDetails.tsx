import React from 'react';
import { contactPageContent } from '@/lib/content';

const ContactDetails = () => {
    const { title, contactInfo, socials } = contactPageContent.details;

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">{title}</h2>
            <div className="space-y-8">
                {contactInfo.map(({ icon: Icon, title, line1, line2 }) => (
                    <div key={title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-xl text-amber-600" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
                            <p className="text-slate-600">{line1}</p>
                            {line2 && <p className="text-slate-500 text-sm mt-1">{line2}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6">{socials.title}</h3>
                <div className="flex space-x-4">
                    {socials.links.map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} aria-label={label} className="w-12 h-12 bg-slate-900 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors">
                            <Icon className="text-lg text-white" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
