import HERO_IMG from "../images/image.png";

export default function Hero({ onOpenDemo }) {
  return (
    <section id="home" className="pt-24 pb-16 px-4 md:pt-32 md:pb-20 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Copy */}
        <div className="md:w-1/2 space-y-5 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.1]">
            Found a home you'd like to see?{" "}
            <span className="text-primary italic">Text 35353</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg mx-auto md:mx-0 leading-relaxed">
            Get instant details, photos, and updates on any property — right
            from your phone. No apps, no logins, just speed.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={onOpenDemo}
              className="kinetic-gradient text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg kinetic-trigger transition-transform duration-200"
            >
              Try It Now
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-surface-container-high text-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg kinetic-trigger transition-transform duration-200"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="relative bg-surface-container-lowest p-4 rounded-[2.5rem] shadow-2xl border-4 border-surface-container max-w-[280px] md:max-w-sm">
            <img
              alt="Smartphone displaying 35353 SMS interaction"
              className="rounded-[2rem] w-full"
              src={HERO_IMG}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
