import { useState, useEffect } from "react";

const SECTIONS = ["home", "how-it-works", "demo"];

function scrollTo(id) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "how-it-works", label: "How It Works" },
  { id: "demo", label: "Demo" },
];

export default function Navbar({ onOpenDemo }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <button
          onClick={() => scrollTo("home")}
          className="text-2xl font-black italic tracking-tighter text-primary font-headline"
        >
          35353
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`font-headline transition-colors duration-150 ${
                active === id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface font-medium hover:text-primary"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={onOpenDemo}
            className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold kinetic-trigger kinetic-gradient transition-transform duration-200"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 glass-nav">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                setMobileOpen(false);
                scrollTo(id);
              }}
              className={`font-headline text-left ${
                active === id
                  ? "text-primary font-bold"
                  : "text-on-surface font-medium"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenDemo();
            }}
            className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold kinetic-trigger kinetic-gradient transition-transform duration-200 w-fit"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
