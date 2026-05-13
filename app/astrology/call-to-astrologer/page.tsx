import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call Astrologer | Dharmagya",
  description:
    "Speak with an experienced Dharmagya astrologer through a live voice consultation.",
};

const callDetails = [
  { label: "Duration", value: "00:05:36" },
  { label: "Balance", value: "Rs300.00" },
  { label: "Rate", value: "Rs60/min" },
];

const userDetails = [
  { label: "Name", value: "Rahul Sharma" },
  { label: "DOB", value: "15 Aug 1995" },
  { label: "Time", value: "10:30 AM" },
  { label: "Place", value: "Jaipur, Rajasthan" },
];

const callControls = [
  { label: "Mute", icon: "mute" },
  { label: "Speaker", icon: "speaker" },
  { label: "Keypad", icon: "keypad" },
  { label: "Add Time", icon: "time" },
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

function EndCallIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.8 12.6c4.7-3.4 9.7-3.4 14.4 0 .8.6 1 1.7.4 2.5l-1 1.5c-.5.7-1.4.9-2.1.6l-2.5-1c-.6-.2-1-.8-1-1.4v-1c-.7-.2-1.4-.2-2 0v1c0 .6-.4 1.2-1 1.4l-2.5 1c-.8.3-1.7 0-2.1-.6l-1-1.5c-.6-.8-.4-1.9.4-2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ControlIcon({ icon }: { icon: string }) {
  if (icon === "mute") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 9v3a3 3 0 0 0 4.8 2.4M15 10.6V7a3 3 0 0 0-5.6-1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
        <path d="M5 11v1a7 7 0 0 0 10.5 6.1M19 11v1a7 7 0 0 1-.6 2.8M12 19v3M8 22h8M4 4l16 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "speaker") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 9.5h3.3L13 5.8v12.4l-4.7-3.7H5z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
        <path d="M16 9c1.2 1.4 1.2 4.6 0 6M18.8 6.8c2.8 3.1 2.8 7.3 0 10.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "keypad") {
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 6.5A1.5 1.5 0 1 1 4 6.5a1.5 1.5 0 0 1 3 0ZM13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    );
  }

  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.9" />
      <path d="M12 8v4l2.8 1.8M18.5 5.5l1.8-1.8M5.5 5.5 3.7 3.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    </svg>
  );
}

function WaveBars() {
  return (
    <div className="flex h-8 items-center justify-center gap-1.5" aria-hidden="true">
      <span className="h-3 w-1.5 rounded-full bg-primary/35" />
      <span className="h-6 w-1.5 rounded-full bg-primary/60" />
      <span className="h-4 w-1.5 rounded-full bg-primary/45" />
      <span className="h-8 w-1.5 rounded-full bg-primary" />
      <span className="h-5 w-1.5 rounded-full bg-primary/50" />
      <span className="h-7 w-1.5 rounded-full bg-primary/70" />
      <span className="h-3 w-1.5 rounded-full bg-primary/35" />
    </div>
  );
}

export default function CallAstrologerPage() {
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
          <span>Call Astrologer</span>
        </nav>

        <section className="overflow-hidden rounded-lg border border-border bg-surface shadow-lg shadow-primary/5">
          <header className="flex flex-col gap-4 border-b border-border bg-secondary-soft px-4 py-4 sm:px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  src="/images/home/astrologer-vikram.png"
                  alt="Acharya Vikram Sharma"
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-primary/15"
                  priority
                />
                <span className="absolute bottom-1 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#22c55e]" />
              </div>
              <div className="min-w-0">
                <h1 className="truncate text-base font-extrabold text-primary-deep sm:text-lg">
                  Acharya Vikram Sharma
                </h1>
                <p className="mt-0.5 text-xs font-semibold text-muted">Vedic, KP Astrology</p>
                <div className="mt-1 flex items-center gap-1 text-xs font-extrabold text-muted">
                  <StarIcon />
                  <span>4.8 (120)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 lg:min-w-80">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#ecfdf5] px-3 py-2 text-sm font-extrabold text-primary-deep ring-1 ring-[#bbf7d0]">
                  <RupeeIcon />
                  <span>60/min</span>
                </div>
                <p className="mt-1 text-center text-[11px] font-extrabold text-[#16a34a]">Online</p>
              </div>
              <Link
                href="/astrology"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#f97316]/35 bg-white px-4 text-xs font-extrabold text-[#ea580c] shadow-sm transition hover:bg-[#fff7ed]"
              >
                End Call
              </Link>
            </div>
          </header>

          <div className="grid min-h-[680px] lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="border-b border-border bg-secondary-soft/60 p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <section className="rounded-lg border border-border bg-surface shadow-sm">
                <div className="border-b border-border px-4 py-3">
                  <h2 className="text-xs font-extrabold uppercase text-primary-deep">Call Information</h2>
                </div>
                <div className="divide-y divide-border">
                  {callDetails.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-3 px-4 py-3">
                      <span className="text-xs font-bold text-muted">{item.label}</span>
                      <span className="text-xs font-extrabold text-primary-deep">{item.value}</span>
                    </div>
                  ))}
                  <div className="px-4 py-3">
                    <button
                      type="button"
                      className="inline-flex h-9 w-full items-center justify-center rounded-md bg-[#f97316] px-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-[#ea580c]"
                    >
                      Add Money
                    </button>
                  </div>
                </div>
              </section>

              <section className="mt-4 rounded-lg border border-border bg-surface shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <h2 className="text-xs font-extrabold uppercase text-primary-deep">Caller Details</h2>
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
                <p className="mt-1 text-sm font-extrabold text-primary-deep">Career and Finance</p>
              </section>
            </aside>

            <section className="flex min-h-[640px] flex-col bg-[#fffaf2]">
              <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 text-center sm:px-6">
                <div className="relative grid h-64 w-64 place-items-center sm:h-72 sm:w-72">
                  <span className="absolute inset-0 rounded-full border border-primary/10 bg-primary-soft/35" />
                  <span className="absolute inset-8 rounded-full border border-primary/15 bg-white/55" />
                  <span className="absolute inset-16 rounded-full border border-[#f97316]/20 bg-[#fff7ed]" />
                  <Image
                    src="/images/home/astrologer-vikram.png"
                    alt="Acharya Vikram Sharma"
                    width={176}
                    height={176}
                    className="relative h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl shadow-primary/15 ring-1 ring-primary/15 sm:h-44 sm:w-44"
                  />
                </div>

                <div className="mt-2">
                  <p className="font-mono text-3xl font-extrabold tracking-tight text-primary-deep">00:05:36</p>
                  <p className="mt-1 text-sm font-extrabold text-muted">Talking...</p>
                </div>

                <div className="mt-4">
                  <WaveBars />
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-extrabold text-muted">
                    <span>Balance: Rs300.00</span>
                    <span className="hidden h-3 w-px bg-border sm:block" />
                    <span>Rate: Rs60/min</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border bg-surface px-4 py-5 sm:px-6">
                <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-5">
                  {callControls.slice(0, 2).map((control) => (
                    <button
                      key={control.label}
                      type="button"
                      className="group flex flex-col items-center gap-2 text-xs font-extrabold text-primary-deep"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-muted shadow-sm transition group-hover:border-primary group-hover:bg-primary-soft group-hover:text-primary">
                        <ControlIcon icon={control.icon} />
                      </span>
                      {control.label}
                    </button>
                  ))}

                  <Link
                    href="/astrology"
                    className="group col-span-2 flex flex-col items-center gap-2 text-xs font-extrabold text-primary-deep sm:col-span-1"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-[#ef4444] text-white shadow-lg shadow-[#ef4444]/25 transition group-hover:bg-[#dc2626]">
                      <EndCallIcon />
                    </span>
                    End Call
                  </Link>

                  {callControls.slice(2).map((control) => (
                    <button
                      key={control.label}
                      type="button"
                      className="group flex flex-col items-center gap-2 text-xs font-extrabold text-primary-deep"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-border bg-white text-muted shadow-sm transition group-hover:border-primary group-hover:bg-primary-soft group-hover:text-primary">
                        <ControlIcon icon={control.icon} />
                      </span>
                      {control.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
