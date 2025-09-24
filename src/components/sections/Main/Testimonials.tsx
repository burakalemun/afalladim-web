export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 bg-background text-primary">
      <h2 className="text-2xl md:text-3xl font-semibold font-serif">Kullanıcı Yorumları</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {["Harika bir uygulama!", "Gerçekten yardımcı oldu.", "Tasarımı çok iyi."].map(
          (text, idx) => (
            <div key={idx} className="rounded-lg border border-primary/20 p-6 bg-foreground/10">
              <p className="font-sans">“{text}”</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}

