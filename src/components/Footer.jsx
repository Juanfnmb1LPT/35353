const LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Carrier Disclosure", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-10 md:py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 w-full max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-2">
          <div className="font-headline font-extrabold text-2xl md:text-3xl text-primary italic">
            35353
          </div>
          <p className="text-sm text-on-surface-variant font-body">
            Kinetic Real Estate Data. Powered by Precision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              className="text-outline hover:text-primary transition-all text-sm font-body"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-xs md:text-sm text-on-surface-variant font-body">
          &copy; {new Date().getFullYear()} 35353 Kinetic Real Estate. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
