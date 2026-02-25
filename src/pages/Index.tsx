import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, DollarSign, Clock, Calculator, Package, FileText } from "lucide-react";
import testimonialSarah from "@/assets/testimonial-sarah.jpg";
import testimonialJames from "@/assets/testimonial-james.jpg";
import testimonialPriya from "@/assets/testimonial-priya.jpg";

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

const testimonials = [
  {
    quote: "I was undercharging by almost $800 per wedding. ShootRate showed me exactly where the money was leaking.",
    name: "Sarah M.",
    role: "Wedding Photographer",
    location: "Austin, TX",
    photo: testimonialSarah,
  },
  {
    quote: "The PDF quotes alone are worth it. My clients take me way more seriously now. Bookings went up 30%.",
    name: "James K.",
    role: "Portrait & Commercial",
    location: "Brooklyn, NY",
    photo: testimonialJames,
  },
  {
    quote: "I used to spend Sunday nights on spreadsheets. Now I set my prices in 10 minutes and actually enjoy my weekends.",
    name: "Priya L.",
    role: "Event Photographer",
    location: "Toronto, CA",
    photo: testimonialPriya,
  },
];

const TestimonialsSection = () => (
  <section className="px-6 py-24">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-4">
        Photographers already love it.
      </h2>
      <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
        Hear from beta testers who transformed their pricing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 mb-6">"{t.quote}"</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · {t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ProblemSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <WaitlistSection />
    <Footer />
  </div>
);

export default Index;
