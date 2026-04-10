import { useState, useRef, useEffect, useCallback } from "react";

const SAMPLE_LISTINGS = [
  {
    price: "$849,000",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    tag: "HOT",
    img: "https://i0.wp.com/houseplans-3d.com/wp-content/uploads/2024/03/Simple-House-Design-25x39-Feet-House-Design-7.5x12-M-4-Beds-3-Bath-front-Cover.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    price: "$625,000",
    beds: 3,
    baths: 2,
    sqft: "1,920",
    tag: "NEW",
    img: "https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg",
  },
  {
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    tag: "HOT",
    img: "https://i.ytimg.com/vi/H3PASzbV2v4/maxresdefault.jpg",
  },
  {
    price: "$475,000",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    tag: "REDUCED",
    img: "https://i0.wp.com/houseplans-3d.com/wp-content/uploads/2024/03/Simple-House-Design-25x39-Feet-House-Design-7.5x12-M-4-Beds-3-Bath-front-Cover.jpg?fit=1920%2C1080&ssl=1",
  },
  {
    price: "$950,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    tag: "NEW",
    img: "https://www.bhg.com/thmb/TD9qUnFen4PBLDuB2hn9yhGXPv8=/1866x0/filters:no_upscale():strip_icc()/white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg",
  },
  {
    price: "$780,000",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    tag: "HOT",
    img: "https://i.ytimg.com/vi/H3PASzbV2v4/maxresdefault.jpg",
  },
];

function pickListing() {
  return SAMPLE_LISTINGS[Math.floor(Math.random() * SAMPLE_LISTINGS.length)];
}

function TypingIndicator() {
  return (
    <div className="flex flex-col items-start">
      <div className="bg-surface-container-high px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
        <span className="w-2 h-2 bg-on-surface-variant/40 rounded-full animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 bg-on-surface-variant/40 rounded-full animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 bg-on-surface-variant/40 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

function PropertyCard({ listing, code }) {
  return (
    <div className="flex flex-col items-start">
      <div className="bg-white border border-surface-container rounded-2xl rounded-tl-none overflow-hidden max-w-[90%] shadow-md">
        <img
          alt="Property"
          className="w-full h-32 object-cover"
          src={listing.img}
        />
        <div className="p-3 space-y-2">
          <div className="text-xs font-bold text-on-surface truncate">
            {code}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-primary">{listing.price}</span>
            <span className="text-[10px] bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">
              {listing.tag}
            </span>
          </div>
          <div className="flex gap-4 text-xs font-headline font-semibold text-on-surface-variant">
            <span>{listing.beds} BEDS</span>
            <span>{listing.baths} BATHS</span>
            <span>{listing.sqft} SQFT</span>
          </div>
        </div>
      </div>
      <span className="text-[9px] text-on-surface-variant mt-1 opacity-70">
        Just now
      </span>
    </div>
  );
}

function ChatBubble({ from, children }) {
  if (from === "user") {
    return (
      <div className="flex flex-col items-end">
        <div className="bg-primary text-on-primary px-4 py-2 rounded-2xl rounded-tr-none text-sm font-medium max-w-[85%]">
          {children}
        </div>
        <span className="text-[9px] text-on-surface-variant mt-1 opacity-70">
          Just now
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start">
      <div className="bg-surface-container-high text-on-surface px-4 py-3 rounded-2xl rounded-tl-none text-sm leading-relaxed max-w-[85%] shadow-sm">
        {children}
      </div>
      <span className="text-[9px] text-on-surface-variant mt-1 opacity-70">
        Just now
      </span>
    </div>
  );
}

export default function DemoModal({ open, onClose }) {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const chatRef = useRef(null);
  const inputRef = useRef(null);

  // Reset chat when modal opens
  useEffect(() => {
    if (open) {
      setMessages([]);
      setTyping(false);
      setInput("");
      setBusy(false);
      setDone(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Auto-scroll on new messages / typing
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const addMessage = useCallback(
    (msg) => setMessages((prev) => [...prev, msg]),
    []
  );

  function handleSubmit(e) {
    e.preventDefault();
    const code = input.trim();
    if (!code || busy || done) return;

    setBusy(true);
    setInput("");

    // 1. Show user message
    addMessage({ type: "user", text: code });

    // 2. Show typing indicator after a beat
    setTimeout(() => setTyping(true), 400);

    // 3. "Looking up" system message
    setTimeout(() => {
      setTyping(false);
      addMessage({
        type: "system",
        text: `🔍 Looking up "${code}"...`,
      });
    }, 1400);

    // 4. Typing again before property card
    setTimeout(() => setTyping(true), 1800);

    // 5. Property found + card
    const listing = pickListing();
    setTimeout(() => {
      setTyping(false);
      addMessage({
        type: "system",
        text: "✅ Property found! Here are the details:",
      });
    }, 3000);

    setTimeout(() => {
      addMessage({ type: "card", listing, code });
    }, 3200);

    // 6. Typing before agent message
    setTimeout(() => setTyping(true), 3800);

    // 7. Agent follow-up
    setTimeout(() => {
      setTyping(false);
      addMessage({
        type: "system",
        text: "An agent will contact you shortly to schedule a showing. Reply STOP to opt out.",
      });
      setBusy(false);
      setDone(true);
    }, 5000);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 demo-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-surface-container-lowest w-full max-w-md max-h-[95vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 md:px-8 md:py-6 border-b border-surface-container flex justify-between items-center shrink-0">
          <h3 className="text-xl md:text-2xl font-headline font-extrabold text-on-surface">
            Text <span className="text-primary italic">35353</span>
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant">
              close
            </span>
          </button>
        </div>

        {/* Phone UI */}
        <div className="p-3 md:p-6 bg-surface-container-low flex-1 min-h-0 overflow-hidden">
          <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] h-[60vh] md:h-[500px] flex flex-col overflow-hidden border border-outline-variant/30 shadow-inner">
            {/* Chat header */}
            <div className="bg-white px-5 py-4 border-b border-surface-container flex items-center gap-3">
              <div className="w-10 h-10 rounded-full kinetic-gradient flex items-center justify-center text-on-primary font-bold text-sm">
                35
              </div>
              <div>
                <div className="font-bold text-sm text-on-surface">
                  35353
                </div>
                <div className="text-[10px] text-green-500 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Active Now
                </div>
              </div>
            </div>

            {/* Messages area */}
            <div
              ref={chatRef}
              className="flex-1 p-4 space-y-4 overflow-y-auto"
            >
              {/* Empty state */}
              {messages.length === 0 && !typing && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4 gap-3 opacity-60">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    sms
                  </span>
                  <p className="text-sm text-on-surface-variant">
                    Type a property code or address below to see 35353 in action
                  </p>
                </div>
              )}

              {messages.map((msg, i) => {
                if (msg.type === "user") {
                  return (
                    <ChatBubble key={i} from="user">
                      {msg.text}
                    </ChatBubble>
                  );
                }
                if (msg.type === "card") {
                  return (
                    <PropertyCard
                      key={i}
                      listing={msg.listing}
                      code={msg.code}
                    />
                  );
                }
                return (
                  <ChatBubble key={i} from="system">
                    {msg.text}
                  </ChatBubble>
                );
              })}

              {typing && <TypingIndicator />}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white border-t border-surface-container flex gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={10}
                autoComplete="off"
                disabled={busy || done}
                className="flex-1 bg-surface-container-low border-none focus:ring-2 focus:ring-primary/20 rounded-full px-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none disabled:opacity-50"
                placeholder={
                  done
                    ? "Demo complete"
                    : busy
                      ? "Waiting for response..."
                      : "Enter a property code..."
                }
                type="text"
              />
              <button
                type="submit"
                disabled={busy || done}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-on-primary transition-all ${done ? "opacity-30 cursor-not-allowed bg-on-surface-variant" : "kinetic-gradient hover:opacity-90 active:scale-95 disabled:opacity-50"}`}
              >
                <span className="material-symbols-outlined text-sm font-bold">
                  arrow_upward
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="px-5 py-3 md:px-8 md:py-4 text-center bg-surface-container-lowest shrink-0">
          <p className="text-[11px] text-on-surface-variant font-medium">
            This is a demo. Standard message and data rates may apply.
          </p>
        </div>
      </div>
    </div>
  );
}
