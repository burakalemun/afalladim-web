import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactDetails from '@/components/sections/contact/ContactDetails';
import ContactForm from '@/components/sections/contact/ContactForm';

export const metadata: Metadata = {
    title: 'İletişim | Afalladım',
    description: 'Soru, öneri ve işbirliği talepleriniz için bizimle iletişime geçin.',
};

const ContactPage = () => {
    return (
        <main>
            <ContactHero />
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <ContactDetails />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
