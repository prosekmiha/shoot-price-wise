import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, DollarSign, Clock, Calculator, Package, FileText, MessageSquare, ChevronDown, Users } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

// ─── HERO ───────────────────────────────────────────────

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center justify-center px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-secondary">
        <Camera className="w-4 h-4 text-primary" />
        <span className="text-sm text-secondary-foreground">Pricing tool for freelance photographers</span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
        Most photographers undercharge by{" "}
        <span className="text-primary">€200–400 per booking.</span>
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
        ShootRate calculates your real hourly rate, package prices, and generates
        PDF quotes for clients — in minutes.
      </p>
      <a href="#waitlist">
        <Button variant="hero" size="lg" className="h-13 px-10 text-base rounded-lg">
          Join the Waitlist
        </Button>
      </a>
      <p className="mt-4 text-sm text-muted-foreground">
        One-time payment · No subscription · Works offline
      </p>
    </div>
  </section>
);

// ─── SOCIAL PROOF BAR ───────────────────────────────────

const SocialProofBar = () => (
  <section className="px-6 py-10 border-y border-border">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-primary" />
        <span>Built after talking to <span className="text-foreground font-medium">50+ freelance photographers</span></span>
      </div>
      <div className="hidden sm:block w-px h-4 bg-border" />
      <div className="flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-primary" />
        <span>"I had no idea I was losing €300 per wedding" — <span className="text-foreground font-medium">event photographer, Ljubljana</span></span>
      </div>
    </div>
  </section>
);

// ─── MOCKUP ─────────────────────────────────────────────

const MockupSection = () => (
  <section className="px-6 py-20 bg-card">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        See what you're getting.
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
        Enter your costs, get your rates, send professional quotes.
      </p>
      <div className="rounded-xl border border-border overflow-hidden shadow-2xl shadow-primary/5">
        <img
          src={appMockup}
          alt="ShootRate app — cost breakdown dashboard showing hourly rate calculation and PDF quote generation"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

// ─── PROBLEM ────────────────────────────────────────────

const problems = [
  {
    icon: DollarSign,
    title: "You're guessing prices",
    description:
      "Most photographers don't factor in editing time, gear depreciation, or taxes when pricing their work.",
  },
  {
    icon: Clock,
    title: "You're undercharging",
    description:
      "The average photographer earns 40% less than they should because they don't know their real costs.",
  },
  {
    icon: Camera,
    title: "You're wasting time",
    description:
      "Hours spent on spreadsheets instead of doing what you love — shooting.",
  },
];

const ProblemSection = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="text-center p-8 rounded-xl bg-card border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5">
              <p.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── HOW IT WORKS ───────────────────────────────────────

const steps = [
  {
    icon: Calculator,
    step: "01",
    title: "Enter your costs",
    description: "Gear, software, taxes, desired income — everything that affects your bottom line.",
  },
  {
    icon: Package,
    step: "02",
    title: "Define your packages",
    description:
      "Wedding, portrait, commercial — ShootRate calculates your minimum and recommended price.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Generate a PDF quote",
    description: "Professional client proposal ready in 30 seconds. Send it and get booked.",
  },
];

const HowItWorksSection = () => (
  <section className="px-6 py-24 bg-card">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        How it works
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Three steps from guessing to knowing your worth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="relative p-8 rounded-xl border border-border bg-background">
            <span className="font-display text-4xl font-bold text-primary/20 mb-4 block">
              {s.step}
            </span>
            <div className="flex items-center gap-3 mb-3">
              <s.icon className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── PRICING PREVIEW ────────────────────────────────────

const PricingPreview = () => (
  <section className="px-6 py-24">
    <div className="max-w-md mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
        Simple pricing.
      </h2>
      <p className="text-muted-foreground mb-10">
        No subscriptions. No hidden fees. Pay once, use forever.
      </p>
      <div className="rounded-xl border border-primary/30 bg-card p-8">
        <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wide font-medium">One-time payment</p>
        <div className="flex items-baseline justify-center gap-1 mb-1">
          <span className="font-display text-5xl font-bold text-primary">€24</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">Lifetime access · Free updates · Works offline</p>
        <div className="space-y-2 text-sm text-left max-w-xs mx-auto mb-8">
          {[
            "Unlimited packages & quotes",
            "PDF quote generation",
            "Cost & rate calculator",
            "All future updates included",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span className="text-secondary-foreground">{f}</span>
            </div>
          ))}
        </div>
        <a href="#waitlist">
          <Button variant="hero" className="w-full h-12 rounded-lg">
            Join the Waitlist — 40% off at launch
          </Button>
        </a>
      </div>
    </div>
  </section>
);

// ─── FAQ ────────────────────────────────────────────────

const faqs = [
  {
    q: "Is it really a one-time payment?",
    a: "Yes. You pay €24 once and get lifetime access, including all future updates. No subscriptions, no recurring fees.",
  },
  {
    q: "Mac or Windows?",
    a: "ShootRate will be available for both macOS and Windows at launch.",
  },
  {
    q: "What if I'm not tech-savvy?",
    a: "ShootRate is designed to be simple. If you can fill out a form, you can use it. No spreadsheet skills needed.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 bg-card">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-12">
          Questions?
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-background overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <span className="font-display font-semibold text-sm">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── WAITLIST ───────────────────────────────────────────

const SPOTS_REMAINING = 47;

const WaitlistSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));

    e.preventDefault();
  };

  return (
    <section id="waitlist" className="px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Be among the first.
        </h2>
        <p className="text-muted-foreground mb-3">
          First 50 on the waitlist get <span className="text-primary font-semibold">40% off</span> at launch.
        </p>
        <p className="text-sm font-medium text-primary mb-10">
          {SPOTS_REMAINING} / 50 early access spots remaining
        </p>

        {submitted ? (
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
            <p className="text-lg font-semibold text-primary">You're in! 🎉</p>
            <p className="text-sm text-muted-foreground mt-1">
              We'll notify you at launch.
            </p>
          </div>
        ) : (
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <Input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="hero" type="submit" className="h-12 px-8 rounded-lg">
              Join the Waitlist
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

// ─── FOOTER ─────────────────────────────────────────────

const Footer = () => (
  <footer className="px-6 py-8 border-t border-border">
    <p className="text-center text-sm text-muted-foreground">
      ShootRate · Built for photographers · 2025
    </p>
  </footer>
);

// ─── PAGE ───────────────────────────────────────────────

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <SocialProofBar />
    <MockupSection />
    <ProblemSection />
    <HowItWorksSection />
    <PricingPreview />
    <FAQSection />
    <WaitlistSection />
    <Footer />
  </div>
);

export default Index;
