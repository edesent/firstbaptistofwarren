export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 py-20 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-sky-200 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
