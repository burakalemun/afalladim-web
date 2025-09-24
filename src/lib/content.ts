// src/lib/content.ts
import {
    RiTiktokFill, RiInstagramLine, RiTwitterXLine, RiYoutubeLine,
    RiCompass3Fill, RiMagicFill, RiUserHeartFill, RiStarFill, RiDownload2Line, RiShieldCheckFill,
    RiTimeLine, RiUserHeartLine, RiLockLine,RiStarLine, RiMoonLine, RiCompass3Line, RiHeartLine,
    RiBarChartLine, RiNotification2Line, RiGiftLine, RiSmartphoneLine, RiCustomerService2Line,
    RiLinkedinFill, RiMailFill, RiPhoneFill, RiMapPinFill, RiTimeFill
} from 'react-icons/ri';

// --- TİP TANIMLARI ---
export type Product = {
    title: string;
    description: string;
    imageSrc: string;
    category: string;
    rating: number;
};

// --- NAVİGASYON ---
export const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Keşfet', href: '/urunlerimiz' },
    { name: 'Hikayemiz', href: '/hakkimizda' },
    { name: 'İletişim', href: '/iletisim' },
];

// --- ANA SAYFA (page.tsx) İÇERİKLERİ ---
export const homePageContent = {
    hero: {
        headline: "Kişisel Rehberliğiniz",
        subHeadline: "Artık Cebinizde",
        description: "Mistik dünyanın kapılarını aralayın ve kadim bilgeliğin rehberliğinde kendi potansiyelinizi keşfedin. Afalladım, fal ve astrolojinin en kapsamlı halini parmaklarınızın ucuna getiriyor.",
        appStoreUrl: "#",
        googlePlayUrl: "#",
        infoPills: [
            { icon: RiStarFill, text: "4.8/5 Puan", iconColor: "text-amber-400" },
            { icon: RiDownload2Line, text: "500K+ İndirme" },
            { icon: RiShieldCheckFill, text: "%100 Güvenli" },
        ],
    },
    features: {
        title: "Neden Afalladım?",
        subtitle: "Geleneksel kehanet sanatlarını, modern teknoloji ve eşsiz bir kullanıcı deneyimiyle birleştirdik.",
        items: [
            {
                icon: RiTimeLine,
                title: 'Anında Yorumlar',
                description: 'Merak ettiğiniz sorulara saniyeler içinde, detaylı yanıtlar alın. Uzun bekleyişlere son verin, rehberliğe anında ulaşın.',
            },
            {
                icon: RiUserHeartLine,
                title: 'Tamamen Size Özel',
                description: 'Doğum haritanızdan isminizin analizine, tüm yorumlar size özel oluşturulur. Genel değil, tamamen kişisel bir deneyim yaşayın.',
            },
            {
                icon: RiLockLine,
                title: 'Sırlarınız Güvende',
                description: 'Paylaştığınız tüm bilgiler en üst düzey şifreleme ile korunur. Kişisel ve mistik yolculuğunuz sadece size aittir.',
            },
        ],
    },
    showcase: {
        title: "Neler Keşfedebilirsiniz?",
        subtitle: "Afalladım'ın zengin dünyasında yolculuğa çıkın. Her bir özellik, hayatınıza ışık tutmak için özenle tasarlandı.",
        items: [
            {
                imageSrc: '/Main/horoscope.png',
                title: 'Güne Yıldızlarla Başlayın',
                description: 'Size özel günlük astroloji yorumları',
                href: '/urunlerimiz#astroloji',
            },
            {
                imageSrc: '/Main/tarot.png',
                title: 'Kartların Bilgeliği',
                description: 'Mistik tarot ile geleceğinize bir kapı aralayın',
                href: '/urunlerimiz#tarot',
            },
            {
                imageSrc: '/Main/compatibility.png',
                title: 'İlişkinizin Şifreleri',
                description: 'Aşk ve burç uyumuyla bağlarınızı güçlendirin',
                href: '/urunlerimiz#iliski',
            },
            {
                imageSrc: '/Main/moon.png',
                title: 'Ay\'ın Ritmini Yakalayın',
                description: 'Ay döngülerinin hayatınızdaki etkilerini öğrenin',
                href: '/urunlerimiz#zaman',
            },
            {
                imageSrc: '/Main/personal.png',
                title: 'Kendinizi Tanıyın',
                description: 'Doğum haritanıza özel derinlemesine analizler',
                href: '/urunlerimiz#analiz',
            },
            {
                imageSrc: '/Main/guidance.png',
                title: 'Günlük İlham Alın',
                description: 'Her gün için özel hazırlanan mistik tavsiyeler',
                href: '/urunlerimiz#motivasyon',
            },
        ],
    },
    mysticFeatures: {
        title: "Mistik Özellikler",
        subtitle: "Afalladım, astroloji ve spiritüel rehberlik dünyasının en gelişmiş özelliklerini modern ve zarif bir deneyimle sunuyor.",
        features: [
            { icon: RiStarLine, title: 'Kişisel Horoskoplar', description: 'Sadece burcunuzu değil, yükselen ve ay burcunuzu da hesaba katan detaylı günlük, haftalık ve aylık yorumlarla gününüze yön verin.' },
            { icon: RiMoonLine, title: 'Ay Fazları Takibi', description: 'Ay\'ın döngülerini takip ederek enerjinizi doğru yönlendirin, önemli kararlarınız için en uygun zamanı belirleyin.' },
            { icon: RiCompass3Line, title: 'Tarot Kehanetleri', description: 'Aşk, kariyer ve kişisel gelişim gibi konularda kartların kadim bilgeliğine danışın, yolunuzu aydınlatacak ipuçları yakalayın.' },
            { icon: RiHeartLine, title: 'Aşk Uyumluluğu', description: 'Partnerinizle aranızdaki sırları çözün. Burç, isim ve numeroloji analizleriyle ilişkinizin dinamiklerini keşfedin.' },
            { icon: RiBarChartLine, title: 'Burç Analizi', description: 'Karakterinizin güçlü ve zayıf yönlerini, potansiyellerinizi ve yaşam amacınızı astrolojik bir derinlikle öğrenin.' },
            { icon: RiNotification2Line, title: 'Günlük Hatırlatmalar', description: 'Güne pozitif bir başlangıç yapmanızı sağlayacak motivasyon bildirimleri, olumlamalar ve astrolojik ipuçları alın.' },
        ],
        howItWorks: {
            title: "Nasıl Çalışır?",
            steps: [
                {
                    step: 1,
                    title: "Kayıt Olun",
                    description: "Doğum tarihi, saati ve yerinizi girerek kişisel profilinizi oluşturun.",
                },
                {
                    step: 2,
                    title: "Keşfedin",
                    description: "Size özel hazırlanan horoskoplar, tarot okumaları ve astrolojik analizleri inceleyin.",
                },
                {
                    step: 3,
                    title: "Rehberlik Alın",
                    description: "Günlük yaşamınızda mistik rehberliğin gücünü deneyimleyin.",
                },
            ],
        },
    },
    testimonials: {
        title: "Kullanıcılarımız Afalladı!",
        subtitle: "Binlerce kullanıcı Afalladım ile mistik yolculuğuna başladı. Onların deneyimlerine kulak verin.",
        testimonials: [
            {
                quote: '"Doğum haritası analizi inanılmaz kapsamlı. Kendimle ilgili daha önce fark etmediğim birçok şeyi öğrenmemi sağladı. Teşekkürler!"',
                name: 'Can T.',
                location: 'Ankara',
                avatarSrc: '/Main/can.png',
            },
            {
                quote: '"Gerçekten afalladım! Özellikle kahve falı yorumları bu kadar detaylı ve isabetli olamaz. Favori uygulamam oldu."',
                name: 'Elif S.',
                location: 'İstanbul',
                avatarSrc: '/Main/elif.png',
            },
            {
                quote: '"Uygulamanın tasarımı çok şık ve kullanımı kolay. Her sabah güne motivasyon mesajıyla başlamak harika hissettiriyor!"',
                name: 'Ayşe B.',
                location: 'İzmir',
                avatarSrc: '/Main/ayse.png',
            },
        ],
        stats: [
            {
                value: '4.8',
                label: 'Kullanıcı Puanı',
                stars: 5,
            },
            {
                value: '500K+',
                label: 'Mutlu Kullanıcı',
            },
            {
                value: '1M+',
                label: 'Yorumlanan Fal',
            },
        ],
    },
    cta: {
        title: "Mistik Yolculuğunuz Başlasın",
        subtitle: "Afalladım'ı indirin ve kişisel astroloji rehberliğinizin kapılarını açın. Premium deneyim için ücretsiz deneme sürümünü hemen başlatın.",
        imageSrc: "/Main/cta-phones.png",
        socialProof: [
            { icon: RiStarFill, text: '4.8/5' },
            { icon: RiDownload2Line, text: '10K+ İndirme' },
            { icon: RiShieldCheckFill, text: 'Güvenli' },
        ],
    },
    finalCta: {
        title: "Maceraya",
        subtitle: "Hazır mısın?",
        description: "İçsel yolculuğunuza başlamak ve evrenin size gönderdiği mesajları keşfetmek için uygulamayı hemen indirin.",
        infoItems: [
            {
                icon: RiGiftLine,
                title: 'Ücretsiz Keşfet',
                description: 'Temel özellikleri ücretsiz kullanın, dilediğinizde premium\'a geçin.',
            },
            {
                icon: RiSmartphoneLine,
                title: 'Anında Başla',
                description: 'Kolayca kayıt olun ve saniyeler içinde ilk yorumunuzu alın.',
            },
            {
                icon: RiCustomerService2Line,
                title: 'Her An Destek',
                description: 'Aklınıza takılan her konuda destek ekibimiz yanınızda.',
            },
        ],
    },
};

// --- ÜRÜNLER SAYFASI (/urunler) İÇERİKLERİ ---
export const productsPageContent = {
    hero: {
        title: "Keşfedin: Mistik Dünyanın Araçları",
        subtitle: "Afalladım, kendinizi ve geleceğinizi anlamanız için tasarlanmış 13 farklı mistik aracı bir araya getiriyor. Her biri, yolculuğunuzun farklı bir alanına ışık tutmak için burada.",
    },
    filter: {
        categories: [
            'Hepsi', 'Geleneksel', 'Kartlar', 'Analiz', 'Rüya', 'Astroloji',
            'İlişki', 'Zaman', 'Motivasyon', 'Numeroloji', 'Enerji'
        ],
    },
    cta: {
        title: "Tüm Araçları Keşfet",
        subtitle: "Uygulamayı indirerek 13 farklı mistik aracın tamamına erişim sağlayın ve kişisel yolculuğunuza başlayın",
    },
    allProducts: [
        {
            title: 'Kahve Falı',
            description: 'Fincanınızdaki sembollerin ardındaki sırları çözün. Geleneksel kahve keyfinizi, usta yorumcuların analizleriyle birleştirin.',
            imageSrc: '/products/coffe.png',
            category: 'Geleneksel',
            rating: 4.9,
        },
        {
            title: 'Tarot Falı',
            description: 'Geçmiş, şimdi ve gelecek... Kartların kadim bilgeliğine danışarak hayatınızdaki dönüm noktaları için rehberlik alın.',
            imageSrc: '/products/tarot.png',
            category: 'Kartlar',
            rating: 4.8,
        },
        {
            title: 'El Falı',
            description: 'Avucunuzdaki çizgiler kaderiniz ve karakteriniz hakkında ne söylüyor? Elinizin fotoğrafıyla kişiliğinizin derinliklerini keşfedin.',
            imageSrc: '/products/palm.png',
            category: 'Geleneksel',
            rating: 4.6,
        },
        {
            title: 'Rüya Tabirleri',
            description: 'Bilinçaltınızın size gönderdiği gizemli mesajları çözün. Gördüğünüz sembollerin anlamını binlerce yıllık bilgelikle aydınlatın.',
            imageSrc: '/products/dream.png',
            category: 'Rüya',
            rating: 4.7,
        },
        {
            title: 'Doğum Haritası',
            description: 'Doğduğunuz anın göksel haritasıyla potansiyelinizi, yeteneklerinizi ve yaşam amacınızı detaylı bir şekilde öğrenin.',
            imageSrc: '/products/birthchart.png',
            category: 'Astroloji',
            rating: 4.9,
        },
        {
            title: 'Burç Yorumları',
            description: 'Günlük, haftalık ve aylık yorumlarla gezegenlerin enerjisini lehinize çevirin. Aşk, sağlık ve iş hayatınıza hazırlıklı olun.',
            imageSrc: '/products/horoscope.png',
            category: 'Astroloji',
            rating: 4.8,
        },
        {
            title: 'Aşk Uyumu',
            description: 'İlişkinizin dinamiklerini astrolojik ve numerolojik olarak analiz edin. Partnerinizle uyumunuzu ve bağınızı güçlendirin.',
            imageSrc: '/products/love.png',
            category: 'İlişki',
            rating: 4.7,
        },
        {
            title: 'Günün Ay Takvimi',
            description: 'Ay\'ın fazlarına göre enerjinizi yönetin. Yeni başlangıçlar ve önemli kararlar için en doğru zamanı yakalayın.',
            imageSrc: '/products/moon.png',
            category: 'Zaman',
            rating: 4.8,
        },
        {
            title: 'Günün Motivasyonu',
            description: 'Güne ilham dolu bir başlangıç yapın. Size özel olumlamalar ve pozitif mesajlarla enerjinizi anında yükseltin.',
            imageSrc: '/products/motivation.png',
            category: 'Motivasyon',
            rating: 4.9,
        },
        {
            title: 'Transit Harita',
            description: 'Anlık gezegen hareketlerinin doğum haritanızı nasıl etkilediğini görün. İçinde bulunduğunuz dönemin fırsatlarını önceden bilin.',
            imageSrc: '/products/transit.png',
            category: 'Astroloji',
            rating: 4.6,
        },
        {
            title: 'Güneş Dönüşü Haritası',
            description: 'Doğum gününüzden bir sonraki doğum gününüze kadar sizi nelerin beklediğini öğrenin. Yıllık temanızı ve potansiyellerinizi ortaya çıkarın.',
            imageSrc: '/products/solar.png',
            category: 'Zaman',
            rating: 4.7,
        },
        {
            title: 'Numeroloji Analizi',
            description: 'İsminiz ve doğum tarihinizin ardındaki sayısal sırları çözün. Yaşam yolu numaranız ve kader sayınızla kendinizi yeniden keşfedin.',
            imageSrc: '/products/numerology.png',
            category: 'Numeroloji',
            rating: 4.8,
        },
        {
            title: 'Aura Okuma',
            description: 'Enerji alanınızın rengini ve anlamını keşfedin. Auranızın mevcut durumu hakkında bilgi alarak ruhsal ve duygusal dengenizi sağlayın.',
            imageSrc: '/products/aura.png',
            category: 'Enerji',
            rating: 4.5,
        },
    ] as Product[],
};

// --- HAKKIMIZDA SAYFASI (/hakkimizda) İÇERİKLERİ ---
export const aboutPageContent = {
    hero: {
        title: "Hikayemiz",
        subtitle: "Kadim bilgelik ve modern teknolojinin kesişim noktasında, kişisel rehberliğiniz için güvenilir platformunuz.",
    },
    story: {
        title: "Afalladım'ın Doğuşu",
        paragraphs: [
            "Afalladım, kadim bilgelik ve modern teknolojinin kesişim noktasında doğdu. Herkesin kendini keşfetme yolculuğunda güvenilir, anlaşılır ve erişilebilir bir rehbere sahip olması gerektiğine inandık.",
            "Bu inançla, astroloji, tarot ve diğer mistik öğretileri, hayatın hızlı temposunda herkesin kolayca ulaşabileceği dijital bir platforma taşıdık.",
            "Amacımız, sorduğunuz sorulara yanıt bulmanıza ve içinizdeki potansiyeli ortaya çıkarmanıza yardımcı olmaktır.",
        ],
        imageSrc: "/about/story.jpg",
    },
    mission: {
        title: "Misyonumuz",
        text: "Misyonumuz, teknolojiyi kullanarak kişisel farkındalığı artırmak, insanların kendileriyle ve evrenle daha derin bir bağ kurmalarını sağlamak ve bu yolculukta onlara güvenilir bir yol arkadaşı olmaktır.",
    },
    values: {
        title: "Değerlerimiz",
        imageSrc: "/about/values.jpg",
        items: [
            { icon: RiCompass3Fill, title: 'Rehberlik', description: 'Kullanıcılarımıza sadece bir cevap değil, aynı zamanda hayat yollarında onlara ışık tutacak bir perspektif sunarız.' },
            { icon: RiMagicFill, title: 'Mistik Bilgelik', description: 'Kadim öğretilerin derinliğini ve bilgeliğini, modern ve anlaşılır bir dille günümüz insanına ulaştırırız.' },
            { icon: RiUserHeartFill, title: 'Empati', description: 'Her kullanıcının yolculuğunun benzersiz olduğunu bilir, bu sürece saygı ve anlayışla yaklaşırız.' },
        ],
    },
    stats: {
        title: "Rakamlarla Afalladım",
        items: [
            { value: '1M+', label: 'Yorumlanan Fal' },
            { value: '500K+', label: 'Mutlu Kullanıcı' },
            { value: '4.8', label: 'Ortalama Puan' },
            { value: '13', label: 'Farklı Mistik Araç' },
        ],
    }
};

// --- İLETİŞİM SAYFASI (/iletisim) İÇERİKLERİ ---
export const contactPageContent = {
    hero: {
        title: "İletişim",
        subtitle: "Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşmaktan çekinmeyin. Alanında uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.",
    },
    details: {
        title: "Bizimle İletişime Geçin",
        contactInfo: [
            { icon: RiMailFill, title: 'E-posta', line1: 'destek@afalladim.app', line2: '24 saat içinde yanıtlıyoruz' },
            { icon: RiPhoneFill, title: 'Telefon', line1: '+90 (XXX) XXX XX XX', line2: 'Hafta içi: 09:00 - 18:00' },
            { icon: RiMapPinFill, title: 'Adres', line1: '[Şirket Adresiniz Buraya Gelecek]' },
            { icon: RiTimeFill, title: 'Çalışma Saatleri', line1: 'Hafta içi: 09:00 - 18:00' },
        ],
        socials: {
            title: "Sosyal Medya",
            links: [
                { icon: RiInstagramLine, href: 'https://www.instagram.com/afalladim.app', label: 'Instagram' },
                { icon: RiTwitterXLine, href: 'https://x.com/afalladimapp', label: 'Twitter' },
                { icon: RiTiktokFill, href: 'https://www.tiktok.com/@afalladim', label: 'TikTok' },
                { icon: RiLinkedinFill, href: 'https://www.linkedin.com/company/afalladim', label: 'LinkedIn' },
            ],
        },
    },
    form: {
        title: "Bize Yazın",
        fields: {
            name: { label: "Ad Soyad *", placeholder: "Lütfen adınızı ve soyadınızı girin" },
            email: { label: "E-posta *", placeholder: "Size ulaşabileceğimiz e-posta adresiniz" },
            subject: {
                label: "Konu *",
                placeholder: "Mesajınızın konusunu seçin",
                options: ["Teknik Destek", "Öneri & Geri Bildirim", "İş Birliği", "Basın", "Diğer"],
            },
            message: { label: "Mesajınız *", placeholder: "Merhaba Afalladım ekibi, ..." },
        },
        submitButton: "Mesajımı Gönder",
    },
};

// --- FOOTER ---
export const footerContent = {
    brandName: "Afalladım",
    description: "Kişisel kehanetleriniz ve mistik yolculuğunuz için güvenilir rehberiniz. Evrenin sırlarını parmaklarınızın ucuna getirdik.",
    socialLinks: [
        { icon: RiInstagramLine, href: 'https://www.instagram.com/afalladim.app', label: 'Instagram' },
        { icon: RiTwitterXLine, href: 'https://x.com/afalladimapp', label: 'Twitter' },
        { icon: RiTiktokFill, href: 'https://www.tiktok.com/@afalladim', label: 'TikTok' },
        { icon: RiLinkedinFill, href: 'https://www.linkedin.com/company/afalladim', label: 'Linkedin' },
    ],
    linkGroups: [
        {
            title: "Afalladım",
            links: [
                { title: 'Ana Sayfa', href: '/' },
                { title: 'Keşfet', href: '/urunlerimiz' },
                { title: 'Hikayemiz', href: '/hakkimizda' },
            ],
        },
        {
            title: "Destek",
            links: [
                { title: 'İletişim', href: '/iletisim' },
                { title: 'S.S.S.', href: '/sss' },
                { title: 'Gizlilik Politikası', href: '/gizlilik' },
                { title: 'Kullanım Şartları', href: '/sartlar' },
            ],
        }
    ],
    copyright: `© ${new Date().getFullYear()} Afalladım. Tüm hakları saklıdır.`,
};

// --- SSS SAYFASI (/sss) İÇERİKLERİ ---
export const faqPageContent = {
    hero: {
        title: "Sıkça Sorulan Sorular",
        subtitle: "Aklınıza takılan bir soru mu var? Cevabı büyük ihtimalle burada.",
    },
    faqItems: [
        {
            question: "Afalladım uygulaması ücretli mi?",
            answer: "Afalladım'ı indirmek ve kahve falı, günlük burç yorumları gibi temel özellikleri kullanmak tamamen ücretsizdir. Doğum haritası analizi gibi daha derinlemesine özellikler için premium abonelik seçeneklerimiz bulunmaktadır.",
        },
        {
            question: "Yorumlar gerçek kişiler tarafından mı yapılıyor?",
            answer: "Platformumuz, geleneksel yorumcu bilgeliğini ve gelişmiş yapay zeka algoritmalarını birleştiren hibrit bir model kullanır. Bu sayede hem hızlı hem de isabetli ve derinlikli yorumlar sunabiliyoruz.",
        },
        {
            question: "Kişisel bilgilerim güvende mi?",
            answer: "Kesinlikle. Kullanıcı gizliliği en büyük önceliğimizdir. Tüm verileriniz, kimseyle paylaşılmadan ve en üst düzey güvenlik standartlarıyla şifrelenerek korunur.",
        },
        {
            question: "Premium aboneliğimi nasıl iptal edebilirim?",
            answer: "Aboneliğinizi App Store veya Google Play Store'daki abonelikler bölümünden istediğiniz zaman kolayca yönetebilir ve iptal edebilirsiniz.",
        },
        {
            question: "Hangi cihazlarda kullanabilirim?",
            answer: "Afalladım hem iOS (iPhone, iPad) hem de Android (telefon, tablet) cihazlarla tam uyumludur. İlgili uygulama mağazasından ücretsiz olarak indirebilirsiniz.",
        },
    ],
};
