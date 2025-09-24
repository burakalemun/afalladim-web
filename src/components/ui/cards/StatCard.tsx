import React from 'react';

type StatCardProps = {
    value: string;
    label: string;
    // İkonu opsiyonel yapıyoruz, yıldızlar için ayrı bir element olacak
    icon?: React.ReactNode;
    stars?: number; // Yıldız sayısını prop olarak alalım
    className?: string;
};

const StatCard = ({ value, label, icon, stars, className }: StatCardProps) => {
    return (
        // Renk ve temel stil sınıflarını burada birleştiriyoruz
        <div className={`text-white rounded-2xl p-8 text-center ${className}`}>
            <div className="text-4xl font-bold mb-2">{value}</div>

            {/* Yıldızları veya ikonu koşullu olarak render ediyoruz */}
            {stars && (
                <div className="flex justify-center mb-2">
                    {[...Array(stars)].map((_, i) => (
                        // Hedef tasarımdaki gibi içi boş (sadece çerçeveli) yıldızlar için RiStarLine,
                        // dolu yıldızlar için RiStarFill kullanabilirsiniz. Burada dolu varsayıyorum.
                        <i key={i} className="ri-star-fill text-amber-300 text-xl"></i>
                    ))}
                </div>
            )}
            {icon && <div className="text-amber-300 text-2xl mb-2">{icon}</div>}

            <div className="font-semibold">{label}</div>
        </div>
    );
};

export default StatCard;
