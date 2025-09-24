export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold font-serif">Mistik Özellikler</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="rounded-lg border border-primary/20 p-6 bg-background text-primary">
            <div className="font-medium font-serif">Özellik {idx + 1}</div>
            <p className="mt-2 font-sans text-primary/80">Kısa açıklama.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

