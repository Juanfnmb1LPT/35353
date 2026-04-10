const DATA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeP_Ocwc21H1VTraMKCU6lQUHEeRgp5R5mrKCKgt3MWo3c9PUz15UDfpavakqSZ__aHZtIebOIUyYn_bK3EOszo4cG8SIRHYKUtN5fhQVTL0oAPL83dFcUc3ZLh3q_V34XmT2TvoLPBjJwl_8HPfxqoVZ-WnnGaiL7wFNh25783zhm1Q7-Sf99aapNdQitMKJ9un8BfJvYt2lAxk-NQCjHu96RZ-dOpy1WftC_xyIbhheRFrTiyxMNM6sMTZVCI19pUBih5u4uoNNt";

export default function ValueGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight">
            The Instant Access Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[240px]">
          {/* Card 1 — wide */}
          <div className="md:col-span-8 bg-surface-container-lowest p-6 md:p-8 rounded-xl flex flex-col justify-end group hover:bg-primary transition-colors duration-300">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">
                mobile_friendly
              </span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold text-on-surface group-hover:text-on-primary transition-colors mb-2">
                No apps. Just text.
              </h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/80 transition-colors">
                See a home you like? Skip the apps and websites. Text 35353 and
                get the details instantly in your messages.
              </p>
            </div>
          </div>

          {/* Card 2 — narrow */}
          <div className="md:col-span-4 bg-secondary p-6 md:p-8 rounded-xl flex flex-col justify-end text-on-primary kinetic-trigger">
            <div className="mb-auto flex justify-end">
              <span className="material-symbols-outlined text-4xl">
                location_on
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">
                Capture interest on the spot.
              </h3>
              <p className="opacity-80">
                Standing in front of a property or driving by? Get the
                information you need right then — no searching required.
              </p>
            </div>
          </div>

          {/* Card 3 — narrow */}
          <div className="md:col-span-4 bg-surface-container-lowest p-6 md:p-8 rounded-xl flex flex-col justify-between border-b-4 border-primary gap-4 md:gap-0">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">
                notifications_active
              </span>
            </div>
            <div>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                Instant response.
              </h3>
              <p className="text-on-surface-variant text-sm">
                Receive property details, pricing, and next steps within
                seconds. No delays, no forms, no friction.
              </p>
            </div>
          </div>

          {/* Card 4 — wide gradient */}
          <div className="md:col-span-8 bg-primary p-6 md:p-8 rounded-xl flex items-center gap-6 md:gap-8 text-on-primary kinetic-gradient">
            <div className="w-1/3 hidden md:block">
              <img
                alt="Real-time data"
                className="rounded-xl shadow-lg rotate-3"
                src={DATA_IMG}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-headline font-bold mb-2">
                Connected to a real agent.
              </h3>
              <p className="opacity-80">
                Your request is instantly routed to a local agent who can help
                you with questions or scheduling a showing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
