import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chat with Astrologer | Dharmagya",
  description:
    "Consult an experienced Dharmagya astrologer through a focused chat session.",
};

const chatMessages = [
  {
    id: 1,
    sender: "user",
    text: "I want to know about my career and future prospects.",
    time: "10:31 AM",
    status: "read",
  },
  {
    id: 2,
    sender: "astrologer",
    text: "Sure Rahul ji, let me check your chart and I will guide you.",
    time: "10:32 AM",
  },
  {
    id: 3,
    sender: "audio",
    time: "10:32 AM",
    duration: "0:45",
  },
  {
    id: 4,
    sender: "user",
    text: "Thank you for the information.",
    time: "10:33 AM",
    status: "read",
  },
];

const userDetails = [
  { label: "Name", value: "Rahul Sharma" },
  { label: "DOB", value: "15 Aug 1995" },
  { label: "Time", value: "10:30 AM" },
  { label: "Place", value: "Jaipur, Rajasthan" },
];

function StarIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  );
}

function RupeeIcon() {
  return (
    <svg className="h-4 w-4 text-[#16a34a]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 5h10M7 9h10M7 5c5.8 0 7.4 6.5 1.2 8.1L17 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h.01M12 12h.01M19 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m4 12 16-7-4.8 14-3.2-5.8zm0 0 8 1.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.8 14.2c1.6 1.5 4.8 1.5 6.4 0M9.2 10h.01M14.8 10h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5.8v12.4c0 .8.9 1.3 1.6.9l9.2-6.2a1.1 1.1 0 0 0 0-1.8L9.6 4.9C8.9 4.5 8 5 8 5.8Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3h6M12 8v5l3 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function ChatWithAstrologerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:py-7">
        <nav className="mb-5 text-xs font-semibold text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <Link href="/astrology" className="transition hover:text-primary">
            Astrology
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Chat with Astrologer</span>
        </nav>

        <section className="overflow-hidden rounded-lg border border-border bg-surface shadow-lg shadow-primary/5">
          <header className="flex flex-col gap-4 border-b border-border bg-secondary-soft px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  src="/images/home/astrologer-neha.png"
                  alt="Dr. Neha Joshi"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-primary/15"
                  priority
                />
                <span className="absolute bottom-1 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-base font-extrabold text-primary-deep sm:text-lg">Dr. Neha Joshi</h1>
                <p className="mt-0.5 text-xs font-semibold text-muted">Vedic Astrology</p>
                <div className="mt-1 flex items-center gap-1 text-xs font-extrabold text-muted">
                  <StarIcon />
                  <span>4.8 (98)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:min-w-80">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-[#ecfdf5] px-3 py-2 text-sm font-extrabold text-primary-deep ring-1 ring-[#bbf7d0]">
                <RupeeIcon />
                <span>75/min</span>
              </div>
              <Link
                href="/astrology"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#f97316]/35 bg-white px-4 text-xs font-extrabold text-[#ea580c] shadow-sm transition hover:bg-[#fff7ed]"
              >
                End Chat
              </Link>
            </div>
          </header>

          <div className="grid min-h-[680px] lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="border-b border-border bg-secondary-soft/60 p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <section className="rounded-lg border border-border bg-surface shadow-sm">
                <div className="border-b border-border px-4 py-3">
                  <h2 className="text-xs font-extrabold uppercase text-primary-deep">Chat Information</h2>
                </div>
                <div className="divide-y divide-border">
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="flex items-center gap-2 text-xs font-bold text-muted">
                      <TimerIcon />
                      Time Elapsed
                    </span>
                    <span className="font-mono text-xs font-extrabold text-[#f97316]">00:00:34</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <span className="text-xs font-bold text-muted">Balance</span>
                    <button
                      type="button"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#f97316] px-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#ea580c]"
                    >
                      Add Money
                    </button>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-extrabold text-primary-deep">Rs450.00</p>
                    <p className="mt-1 text-[11px] font-semibold text-muted">Available for this session</p>
                  </div>
                </div>
              </section>

              <section className="mt-4 rounded-lg border border-border bg-surface shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <h2 className="text-xs font-extrabold uppercase text-primary-deep">Your Details</h2>
                  <button type="button" className="text-xs font-extrabold text-[#f97316] transition hover:text-[#ea580c]">
                    Edit
                  </button>
                </div>
                <div className="divide-y divide-border">
                  {userDetails.map((item) => (
                    <div key={item.label} className="grid grid-cols-[76px_1fr] gap-3 px-4 py-3 text-xs">
                      <span className="font-bold text-muted">{item.label}</span>
                      <span className="font-extrabold text-primary-deep">{item.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-4 rounded-lg border border-border bg-surface px-4 py-3 shadow-sm">
                <p className="text-xs font-bold text-muted">Question Category</p>
                <p className="mt-1 text-sm font-extrabold text-primary-deep">Career</p>
              </section>
            </aside>

            <section className="flex min-h-[640px] flex-col bg-[#fffaf2]">
              <div className="flex items-center justify-between border-b border-border bg-surface/70 px-4 py-3 sm:px-5">
                <div>
                  <h2 className="text-sm font-extrabold text-primary-deep">Live Consultation</h2>
                  <p className="mt-0.5 text-xs font-semibold text-muted">Online now</p>
                </div>
                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface text-muted transition hover:border-primary hover:text-primary"
                  aria-label="More chat options"
                >
                  <MoreIcon />
                </button>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
                {chatMessages.map((message) => {
                  if (message.sender === "audio") {
                    return (
                      <div key={message.id} className="flex items-end gap-2">
                        <Image
                          src="/images/home/astrologer-neha.png"
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full object-cover ring-1 ring-primary/15"
                        />
                        <div className="max-w-[78%]">
                          <div className="flex min-w-52 items-center gap-3 rounded-lg rounded-bl-sm border border-border bg-white px-3 py-2 shadow-sm">
                            <button
                              type="button"
                              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition hover:bg-primary hover:text-white"
                              aria-label="Play voice message"
                            >
                              <PlayIcon />
                            </button>
                            <div className="flex flex-1 items-center gap-1">
                              <span className="h-2 w-1 rounded-full bg-muted/30" />
                              <span className="h-3 w-1 rounded-full bg-muted/35" />
                              <span className="h-5 w-1 rounded-full bg-muted/45" />
                              <span className="h-3 w-1 rounded-full bg-muted/35" />
                              <span className="h-4 w-1 rounded-full bg-muted/40" />
                              <span className="h-2 w-1 rounded-full bg-muted/30" />
                              <span className="h-5 w-1 rounded-full bg-muted/45" />
                              <span className="h-3 w-1 rounded-full bg-muted/35" />
                            </div>
                            <span className="text-xs font-bold text-muted">{message.duration}</span>
                          </div>
                          <p className="mt-1 text-right text-[11px] font-semibold text-muted">{message.time}</p>
                        </div>
                      </div>
                    );
                  }

                  const isUser = message.sender === "user";

                  return (
                    <div key={message.id} className={`flex items-end gap-2 ${isUser ? "justify-end" : ""}`}>
                      {!isUser && (
                        <Image
                          src="/images/home/astrologer-neha.png"
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full object-cover ring-1 ring-primary/15"
                        />
                      )}
                      <div className={`max-w-[82%] sm:max-w-[65%] ${isUser ? "text-right" : ""}`}>
                        <div
                          className={`rounded-lg px-4 py-3 text-sm font-semibold leading-6 shadow-sm ${
                            isUser
                              ? "rounded-br-sm bg-[#c9efc6] text-[#17381f]"
                              : "rounded-bl-sm border border-border bg-white text-foreground"
                          }`}
                        >
                          {message.text}
                        </div>
                        <p className={`mt-1 flex items-center gap-1 text-[11px] font-semibold text-muted ${isUser ? "justify-end" : ""}`}>
                          <span>{message.time}</span>
                          {message.status === "read" && (
                            <span className="text-primary" aria-label="Read">
                              <CheckIcon />
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <form className="border-t border-border bg-surface px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
                  <label className="sr-only" htmlFor="chat-message">
                    Type your message
                  </label>
                  <input
                    id="chat-message"
                    type="text"
                    placeholder="Type your message..."
                    className="min-h-9 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/60"
                  />
                  <button
                    type="button"
                    className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-primary-soft hover:text-primary"
                    aria-label="Choose emoji"
                  >
                    <SmileIcon />
                  </button>
                  <button
                    type="submit"
                    className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white shadow-sm transition hover:bg-primary-hover"
                    aria-label="Send message"
                  >
                    <SendIcon />
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
