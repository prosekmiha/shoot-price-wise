import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, DollarSign, Clock, Calculator, Package, FileText } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[90vh] flex items-center justify-center px-6 py-24">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border bg-secondary">
        <Camera className="w-4 h-4 text-primary" />
        <span className="text-sm text-secondary-foreground">Pricing tool for freelance photographers</span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
        Finally know what every shoot{" "}
        <span className="text-primary">actually costs you.</span>
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
  <section className="px-6 py-24 bg-card">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="text-center p-8 rounded-xl bg-background border border-border">
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
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        How it works
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Three steps from guessing to knowing your worth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="relative p-8 rounded-xl border border-border bg-card">
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
    <section id="waitlist" className="px-6 py-24 bg-card">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Be among the first.
        </h2>
        <p className="text-muted-foreground mb-10">
          First 50 on the waitlist get <span className="text-primary font-semibold">40% off</span> at launch.
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
              className="flex-1 h-12 bg-background border-border text-foreground placeholder:text-muted-foreground"
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

const Footer = () => (
  <footer className="px-6 py-8 border-t border-border">
    <p className="text-center text-sm text-muted-foreground">
      ShootRate · Built for photographers · 2025
    </p>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ProblemSection />
    <HowItWorksSection />
    <WaitlistSection />
    <Footer />
  </div>
);

export default Index;
