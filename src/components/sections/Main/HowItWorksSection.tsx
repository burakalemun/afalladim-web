import React from 'react';

const steps = [
    {
        step: '1',
        title: 'Kayıt Olun',
        description: 'Doğum tarihi, saati ve yerinizi girerek kişisel profilinizi oluşturun.',
    },
    {
        step: '2',
        title: 'Keşfedin',
        description: 'Size özel hazırlanan horoskop, tarot okumaları ve astrolojik analizleri inceleyin.',
    },
    {
        step: '3',
        title: 'Rehberlik Alın',
        description: 'Günlük yaşamınızda mistik rehberliğin gücünü deneyimleyin.',
    },
];

const HowItWorksSection = () => {
    return (
        // Bu section, bir önceki section'ın altına girmesi için negatif margin kullanır.
        <section className="relative z-10 -mt-24 rounded-t-[3rem] bg-gradient-to-br from-[#2A2045] to-[#21223A] py-24 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-serif text-4xl font-bold tracking-tight text-brand-light sm:text-5xl">
                        Nasıl Çalışır?
                    </h2>
                </div>

                <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
                    {steps.map((item) => (
                        <div key={item.step} className="flex flex-col items-center text-center">
                            {/* Numaralı Daire */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-yellow text-2xl font-bold text-brand-dark">
                                {item.step}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-brand-light">{item.title}</h3>
                            <p className="mt-2 text-base text-brand-light/70">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
