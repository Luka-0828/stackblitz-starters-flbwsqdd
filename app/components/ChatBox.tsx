"use client";

import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  // REAL-TIME FIREBASE LISTENER
  useEffect(() => {
    const q = query(
      collection(db, "internalChat"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => doc.data());
      setMessages(list);
    });
    return () => unsubscribe();
  }, []);

  // SEND MESSAGE
  const sendMessage = async () => {
    if (!message.trim()) return;

    await addDoc(collection(db, "internalChat"), {
      text: message,
      timestamp: serverTimestamp(),
    });

    setMessage("");
  };

  return (
    <div className="bg-[#ffe4eb] p-6 rounded-[32px] border border-[#ffd1dd] shadow-sm">
      <h2 className="text-base font-semibold text-[#5e3c47] mb-3">
        💬 Chat with us (Real-time)
      </h2>

      {/* MESSAGE LIST */}
      <div className="bg-white h-60 overflow-y-auto rounded-[18px] p-3 mb-3 text-xs text-[#58404a]">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 flex items-start">
            <div className="bg-[#ffb6c9] text-white px-3 py-1.5 rounded-[14px] text-xs shadow">
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
  );
}