type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function ProductCard({ title, description, icon }: Props) {
  return (
    <div className="rounded-lg border p-6 h-full">
      <div className="text-2xl">{icon ?? "🔮"}</div>
      <div className="mt-3 font-medium">{title}</div>
      <p className="text-muted-foreground mt-2 text-sm">{description}</p>
    </div>
  );
}

