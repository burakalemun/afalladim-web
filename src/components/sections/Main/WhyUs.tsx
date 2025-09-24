export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 bg-background text-primary">
      <h2 className="text-2xl md:text-3xl font-semibold font-serif">Neden Farklıyız?</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-lg border border-primary/20 bg-foreground/10 p-6">
            <div className="font-medium font-serif">Başlık {i}</div>
            <p className="mt-2 font-sans text-primary/80">Kısa açıklama {i}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

