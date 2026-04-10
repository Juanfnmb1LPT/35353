export default function FinalCTA({ onOpenDemo }) {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 kinetic-gradient opacity-5" />
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 relative">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tighter leading-tight md:leading-none">
          Next time you see a home you like, <br />
          <span className="text-primary italic underline decoration-secondary">
            just text 35353
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <button
            onClick={onOpenDemo}
            className="kinetic-gradient text-on-primary px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl kinetic-trigger shadow-xl"
          >
            Try the Demo
          </button>
          <div className="text-on-surface-variant font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">
              flash_on
            </span>
            Join 50k+ savvy house hunters
          </div>
        </div>
      </div>
    </section>
  );
}
