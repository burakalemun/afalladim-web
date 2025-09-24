import React from 'react';
import { IconType } from 'react-icons';

// Prop tiplerini tanımlayalım (TypeScript kullanıyorsanız bu iyi bir pratiktir)
type InfoPillProps = {
    icon: IconType;
    text: string;
    iconClassName?: string; // Bu prop'un opsiyonel olduğunu belirtiyoruz
};

const InfoPill = ({ icon: Icon, text, iconClassName = '' }: InfoPillProps) => {
    // Gelen renk class'ını (örn: "text-amber-400") temel class'lar ile birleştiriyoruz.
    const finalIconClasses = `mr-2 text-xl ${iconClassName}`;

    return (
        <div className="flex items-center">
            {/* İkona dinamik olarak oluşturduğumuz class'ları veriyoruz */}
            <Icon className={finalIconClasses} />
            <span className="font-semibold">{text}</span>
        </div>
    );
};

export default InfoPill;
