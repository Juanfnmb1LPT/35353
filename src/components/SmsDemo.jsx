const HOUSE_IMG =
  "https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg";

export default function SmsDemo({ onOpenDemo }) {
  return (
    <section id="demo" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left copy */}
        <div className="md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
              Seeing is Believing. <br />
              <span className="text-secondary">Try the Interactive Demo.</span>
            </h2>
            <p className="text-on-surface-variant text-lg">
              Watch how 35353 curates the property experience in milliseconds.
              It's like having a real estate agent in your pocket.
            </p>
          </div>
          <div className="bg-surface-container p-6 rounded-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                verified
              </span>
              <span className="font-bold text-on-surface">
                100% Secure &amp; No Spam
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                speed
              </span>
              <span className="font-bold text-on-surface">
                Average Response: 0.8 Seconds
              </span>
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="kinetic-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg kinetic-trigger transition-transform duration-200"
          >
            Try Demo
          </button>
        </div>

        {/* Right phone mockup */}
        <div className="md:w-1/2 w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
          <div className="bg-on-surface rounded-[2.5rem] p-3 shadow-2xl">
            <div className="bg-[#f5f6f7] rounded-[2rem] h-[500px] sm:h-[600px] flex flex-col overflow-hidden border border-outline-variant/20">
              {/* Chat Header */}
              <div className="bg-white px-6 py-4 border-b border-surface-container flex items-center gap-4">
                <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center text-on-primary font-bold">
                  35
                </div>
                <div>
                  <div className="font-bold text-sm">35353</div>
                  <div className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Active Now
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {/* User message */}
                <div className="flex flex-col items-end">
                  <div className="bg-primary text-on-primary px-4 py-2 rounded-2xl rounded-tr-none text-sm font-medium max-w-[80%]">
                    123 Main St
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1">
                    10:42 AM
                  </span>
                </div>

                {/* System text */}
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-surface-container px-4 py-2 rounded-2xl rounded-tl-none text-sm text-on-surface max-w-[80%] shadow-sm">
                    Here are the details for 123 Main St...
                  </div>
                </div>

                {/* Property card */}
                <div className="flex flex-col items-start">
                  <div className="bg-white border border-surface-container rounded-2xl rounded-tl-none overflow-hidden max-w-[90%] shadow-md">
                    <img
                      alt="Modern House"
                      className="w-full h-32 object-cover"
                      src={HOUSE_IMG}
                    />
                    <div className="p-3 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary">$849,000</span>
                        <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">
                          HOT
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs font-headline font-semibold text-on-surface-variant">
                        <span>4 BEDS</span>
                        <span>3 BATHS</span>
                        <span>2,850 SQFT</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant mt-1">
                    10:42 AM
                  </span>
                </div>
              </div>

              {/* Input mock */}
              <div className="p-4 bg-white border-t border-surface-container flex gap-2">
                <div className="flex-1 bg-surface-container-low rounded-full px-4 py-2 text-sm text-on-surface-variant">
                  Text a property address...
                </div>
                <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-sm">
                    arrow_upward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
