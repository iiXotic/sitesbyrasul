"use client";

import { FormEvent, useState } from "react";
import {
  Brush,
  Check,
  CheckCircle2,
  Instagram,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  MousePointerClick,
  Navigation,
  PhoneCall,
  Search,
  Smartphone,
  Webhook,
  X,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CONTACT, PAYMENT, WEB3FORMS, feedbackNotes, packages, sampleConcepts, services } from "./site-data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" }
];

const serviceIcons: Record<string, LucideIcon> = {
  "New Website Build": LayoutTemplate,
  "Website Redesign": Brush,
  "Mobile-Friendly Fixes": Smartphone,
  "Contact Forms / Booking Forms": Webhook,
  "Google Business Profile Help": Navigation,
  "Basic SEO Setup": Search,
  "Website Speed & Cleanup": Zap
};

type FormStatusType = "" | "pending" | "success" | "error";

const reasons = [
  {
    title: "Look more professional",
    description: "A clean, well-designed site shows customers you are a legitimate, trustworthy business.",
    icon: LayoutDashboard
  },
  {
    title: "Make it easier to find you",
    description: "When people search for services in your area, a website helps you show up on Google.",
    icon: Search
  },
  {
    title: "Show your work clearly",
    description: "Display your services, hours, location, and photos all in one organized place.",
    icon: MousePointerClick
  },
  {
    title: "Get more calls and quotes",
    description: "Stop relying only on Facebook pages. A good website turns visitors into actual leads.",
    icon: PhoneCall
  }
];

function WebsiteCheckSection({
  onSubmit,
  statusMessage,
  statusType,
  isSubmitting
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  statusMessage: string;
  statusType: FormStatusType;
  isSubmitting: boolean;
}) {
  return (
    <section id="free-check" className="free-check-section">
      <div className="section-shell narrow">
        <div className="section-heading">
          <h2>Free Website Check</h2>
          <span>
            Not sure if your website needs work? Send me your details, and I&apos;ll
            take a quick look and tell you what could be improved.
          </span>
        </div>

        <form
          className="check-form"
          action={WEB3FORMS.endpoint}
          method="POST"
          onSubmit={onSubmit}
        >
          <input type="hidden" name="access_key" value={WEB3FORMS.accessKey} />
          <input type="hidden" name="from_name" value="Sites By Rasul website" />
          <input className="bot-field" name="botcheck" tabIndex={-1} autoComplete="off" />
          <div className="form-grid">
            <label>
              Your Name
              <input name="name" type="text" placeholder="John Doe" autoComplete="name" required />
            </label>
            <label>
              Business Name
              <input
                name="business"
                type="text"
                placeholder="John's Plumbing"
                autoComplete="organization"
                required
              />
            </label>
          </div>
          <div className="form-grid">
            <label>
              Email Address
              <input
                name="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label>
              Phone Number <span>(Optional)</span>
              <input name="phone" type="tel" placeholder="(662) 555-0123" autoComplete="tel" />
            </label>
          </div>
          <label>
            Current Website <span>(Optional)</span>
            <input name="website" type="url" placeholder="https://yourwebsite.com" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Tell me a bit about your business and what you're looking for..."
              required
            />
          </label>
          <button className="button primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Request"}
          </button>
          {statusMessage && (
            <p className={`form-status ${statusType}`} aria-live="polite">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [formStatusType, setFormStatusType] = useState<FormStatusType>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  async function handleWebsiteCheck(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const business = data.get("business") || "Small Business";
    const subject = `Free Website Check for ${business}`;

    if (data.get("botcheck")) {
      return;
    }

    setIsSubmitting(true);
    setFormStatusType("pending");
    setFormStatus("Sending your request...");

    try {
      data.set("subject", subject);
      data.set("business_name", String(data.get("business") || ""));
      data.set("phone", String(data.get("phone") || "Not provided"));
      data.set("current_website", String(data.get("website") || "Not provided"));

      const response = await fetch(WEB3FORMS.endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatusType("success");
      setFormStatus("Sent! Thanks for reaching out. I will be with you shortly.");
    } catch {
      setFormStatusType("error");
      setFormStatus(`Something went wrong. Please email me directly at ${CONTACT.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Sites By Rasul home" onClick={closeMenu}>
            <span>SR</span>
            Sites By Rasul
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#free-check">
            Get a Free Website Check
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Open main menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#free-check" onClick={closeMenu}>
              Get a Free Website Check
            </a>
          </nav>
        )}
      </header>

      <section id="top" className="hero">
        <div className="section-shell">
          <div className="hero-content">
            <p className="tiny-label">Simple. Clean. Professional.</p>
            <h1>
              Websites That Help <span>Small Businesses</span> Look Professional Online
            </h1>
            <p>
              I build clean, mobile-friendly websites for small businesses &mdash; whether
              you need a new site, a redesign, or help fixing what you already have.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#free-check">
                Get a Free Website Check
              </a>
              <a className="button secondary" href="#services">
                View Services
              </a>
            </div>
            <div className="trust-row">
              <span>
                <CheckCircle2 size={20} />
                Mobile-first design
              </span>
              <span>
                <CheckCircle2 size={20} />
                Built for small businesses
              </span>
              <span>
                <CheckCircle2 size={20} />
                Affordable rates
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-shell narrow">
          <h2>Small Business Web Design You Can Trust</h2>
          <div className="about-copy">
            <p>
              I help small businesses get found online and look more trustworthy.
            </p>
            <p>
              Many customers search online before ever calling or visiting a business. If
              your website looks outdated, is hard to use on a phone, or if you do not have
              a website at all, you could be losing customers to competitors who do.
            </p>
            <p>
              My goal is simple: to build clean, professional online homes for small
              businesses, making it easier for your customers to find you and contact you.
              No confusing tech jargon, just straightforward help.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-shell">
          <div className="section-heading">
            <p>Our Capabilities</p>
            <h2>How I Can Help</h2>
            <span>
              From quick fixes to completely new websites, I handle the technical work so
              you can focus on running your business.
            </span>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = serviceIcons[service.title] || LayoutTemplate;
              return (
                <article className="service-card" key={service.title}>
                  <div className="icon-box">
                    <Icon size={24} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="packages-section">
        <div className="section-shell">
          <div className="section-heading">
            <p>Transparent Pricing</p>
            <h2>Affordable Packages</h2>
            <span>
              Simple pricing for small businesses. If the project needs something extra,
              I&apos;ll let you know before we start.
            </span>
          </div>

          <div className="package-grid">
            {packages.map((pkg) => (
              <article
                className={`package-card ${pkg.name === "Business Website" ? "highlight" : ""}`}
                key={pkg.name}
              >
                <h3>{pkg.name}</h3>
                <p>{pkg.audience}</p>
                <div className="package-price">
                  <strong>{pkg.priceNote}</strong>
                  <span>{pkg.quoteNote}</span>
                </div>
                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <Check size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a className={pkg.name === "Business Website" ? "primary-link" : ""} href="#free-check">
                  Contact for quote
                </a>
              </article>
            ))}
          </div>

          <div className="payment-note">
            <div>
              <p>Payment Options</p>
              <h3>{PAYMENT.title}</h3>
              <span>{PAYMENT.description}</span>
              <small>{PAYMENT.note}</small>
            </div>
            <ul>
              {PAYMENT.methods.map((method) => (
                <li key={method}>
                  <CheckCircle2 size={18} />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WebsiteCheckSection
        onSubmit={handleWebsiteCheck}
        statusMessage={formStatus}
        statusType={formStatusType}
        isSubmitting={isSubmitting}
      />

      <section className="why-section">
        <div className="section-shell">
          <div className="section-heading inverse">
            <h2>Why a Good Website Matters</h2>
            <span>
              It&apos;s not just about looking pretty. It&apos;s about building trust and
              making it easy for customers to choose you.
            </span>
          </div>

          <div className="reason-grid">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="reason-card" key={reason.title}>
                  <div>
                    <Icon size={24} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-section" aria-label="Sample work previews">
        <div className="section-shell">
          <div className="portfolio-grid">
            {sampleConcepts.map((project) => (
              <article
                className={`portfolio-card ${project.accent}`}
                key={project.title}
                aria-label={project.media?.alt || project.title}
              >
                <div className={`portfolio-preview ${project.media ? "has-media" : ""}`}>
                  {project.media?.type === "image" && (
                    <img src={project.media.src} alt={project.media.alt} />
                  )}
                  {project.media?.type === "video" && (
                    <video
                      src={project.media.src}
                      aria-label={project.media.alt}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="section-shell">
          <div className="section-heading">
            <p>Feedback</p>
            <h2>Real Client Feedback Coming Soon</h2>
            <span>
              I only want to show honest feedback from real projects, so this section
              will be updated as completed clients give permission.
            </span>
          </div>

          <div className="feedback-grid">
            {feedbackNotes.map((note) => (
              <article className="feedback-card" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="footer-brand">
            <a href="#top">
              <span>SR</span>
              Sites By Rasul
            </a>
            <p>
              Simple, clean websites for small businesses. Let&apos;s make
              your online presence look as professional as the work you do.
            </p>
            <div className="footer-socials">
              <a href={CONTACT.instagram} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={CONTACT.tiktok} aria-label="TikTok">
                TT
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#free-check">Free Check</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p className="footer-contact">
              <Mail size={20} />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>
            <p className="footer-contact">
              <MapPin size={20} />
              <span>{CONTACT.location}</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
