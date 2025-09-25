import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Bu kısım aynı kalıyor
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Bu kısım da aynı kalıyor
        const body = await request.json();
        const { name, email, subject, message } = body;

        const data = await resend.emails.send({
            from: 'Afalladim İletişim Formu <onboarding@resend.dev>',
            to: ['afalladim.app@gmail.com'],
            subject: `Yeni İletişim Formu Mesajı: ${subject}`,
            html: `
                <h1>Afalladım İletişim Formundan Yeni Mesaj</h1>
                <p><strong>Gönderen:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Konu:</strong> ${subject}</p>
                <hr />
                <h2>Mesaj:</h2>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Mesajınız başarıyla gönderildi!', data });

    } catch (error) {
        // --- DEĞİŞİKLİK BURADA BAŞLIYOR ---

        // 1. Hata mesajını güvenli bir şekilde alalım
        const errorMessage = error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.";

        // 2. Göndereceğimiz hata objesini ayrı bir değişkende oluşturalım
        const errorResponse = {
            message: "Mesaj gönderilirken sunucuda bir hata oluştu.",
            error: errorMessage,
        };

        // 3. Şimdi bu temiz objeyi response'a verelim.
        return NextResponse.json(errorResponse);

        // --- DEĞİŞİKLİK BURADA BİTİYOR ---
    }
}
