const STEPS = [
  {
    icon: "visibility",
    number: "01",
    title: "See a home",
    description:
      "Spot a yard sign, listing, or a billboard ad with the 35353 code.",
    iconStyle: "bg-primary/10 text-primary",
  },
  {
    icon: "sms",
    number: "02",
    title: "Text the address",
    description:
      "Send the property address or unique code to 35353 instantly.",
    iconStyle: "bg-primary text-on-primary kinetic-gradient",
  },
  {
    icon: "bolt",
    number: "03",
    title: "Get Instant Details",
    description:
      "Receive photos, pricing, beds, and baths via secure text link.",
    iconStyle: "bg-secondary/10 text-secondary",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight">
            The Three-Step Connection
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Property information has never been this accessible. Experience the
            kinetic power of 35353.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest p-6 md:p-8 rounded-xl space-y-6 relative group overflow-hidden"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${step.iconStyle}`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {step.icon}
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-primary font-headline font-bold text-sm tracking-widest uppercase">
                  Step {step.number}
                </span>
                <h3 className="text-2xl font-headline font-bold text-on-surface">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
