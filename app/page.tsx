"use client";

import { useState } from "react";

export default function Home() {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setChatMessages((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <main className="min-h-screen bg-[#fff5f7] flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full">

        {/* TITLE */}
        <div className="mb-10 text-center">
          <h1 className="text-[28px] md:text-[34px] font-semibold text-[#5e3c47] leading-snug drop-shadow-sm">
            Cute & Feminine One-Page Website
          </h1>
          <p className="mt-2 text-sm text-[#b68a93]">
            Pastel design with Location Map & Internal Chat ✨
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid gap-8 md:grid-cols-2 items-start">

          {/* LOCATION MAP */}
          <div className="bg-white rounded-[32px] shadow-sm p-4 md:p-6 border border-[#ffdae3]">
            <p className="text-sm font-medium text-[#d9859e] mb-3 flex items-center gap-1">
              📍 Our Location
            </p>

            <div className="rounded-[28px] overflow-hidden border border-[#ffe3ea] bg-[#fff0f4] h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.233087473565!2d174.77114467583783!3d-36.788961472250314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d377d853487ef%3A0xda2a11e81bd1f65b!2z44K_44Kr44OX44OK5Zuz5pu46aSo!5e0!3m2!1sja!2snz!4v1764301401720!5m2!1sja!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6">

            {/* INTERNAL CHAT BOX */}
            <div className="bg-[#ffe4eb] rounded-[32px] shadow-sm p-6 border border-[#ffd1dd]">
              <h2 className="text-base font-semibold text-[#5e3c47] mb-3">
                💬 Chat Directory
              </h2>

              <div className="bg-white h-60 overflow-y-auto rounded-[18px] p-3 mb-3 text-xs text-[#58404a]">
                {chatMessages.length === 0 && (
                  <p className="text-[#c9a5ae]">No messages yet… ✿</p>
                )}

                {chatMessages.map((msg, i) => (
                  <div key={i} className="mb-2 flex items-start">
                    <div className="bg-[#ffb6c9] text-white px-3 py-1.5 rounded-[14px] text-xs shadow">
                      {msg}
                    </div>
                  </div>
                ))}
              </div>

              {/* INPUT */}
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type message… ✿"
                  className="flex-1 rounded-full border border-[#f4b6c4] bg-white px-4 py-2 text-xs focus:ring-2 focus:ring-[#ffb9cc]"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-[#ffb6c9] rounded-full text-white text-xs font-semibold hover:brightness-110 transition"
                >
                  Send 💌
                </button>
              </div>
            </div>

            {/* MEMBER REGISTRATION */}
            <div className="bg-[#ffe9ef] rounded-[32px] shadow-sm p-6 border border-[#ffd6df]">
              <h2 className="text-base font-semibold text-[#5e3c47] mb-2 flex items-center gap-1">
                🤍 Member Registration
              </h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name ✿"
                  className="w-full rounded-full border border-[#f7c1cc] bg-white px-4 py-2 text-xs"
                />
                <input
                  type="email"
                  placeholder="Email ✿"
                  className="w-full rounded-full border border-[#f7c1cc] bg-white px-4 py-2 text-xs"
                />
                <button className="w-full rounded-full bg-[#ffb6c9] text-white text-xs font-semibold py-2.5">
                  Sign Up 💗
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[#ffe4eb] rounded-[32px] shadow-sm p-6 border border-[#ffd1dd]">
              <h2 className="text-base font-semibold text-[#5e3c47] mb-2">
                ❓ FAQ
              </h2>
              <ul className="space-y-2 text-xs text-[#8a6975]">
                <li>・How can I create an account?</li>
                <li>・What payment methods do you accept?</li>
                <li>・How do I reset my password?</li>
                <li>・How can I contact support?</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}