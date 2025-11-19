"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  BookOpen,
  Megaphone,
  GraduationCap,
  Laptop,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

// Service cards with Lucide icons
const services = [
  {
    title: "Conference & Event Management",
    description:
      "End‑to‑end planning and execution of national and international conferences, summits, and workshops.",
    icon: Calendar,
    href: "/services/conference-event-management",
  },
  {
    title: "Research Publication Support",
    description:
      "Support for publications in Scopus, UGC Care, and international journals, along with edited books and proceedings.",
    icon: BookOpen,
    href: "/services/research-publication",
  },
  {
    title: "Corporate & Promotional Events",
    description:
      "Brand launches, award functions, exhibitions, and tailored corporate experiences that strengthen your brand.",
    icon: Megaphone,
    href: "/services/corporate-event-management",
  },
  {
    title: "Training & Skill Development",
    description:
      "Workshops, certificate programs, and faculty development initiatives conducted with universities and industry partners.",
    icon: GraduationCap,
    href: "/services/workshops-training",
  },
  {
    title: "Digital & Online Event Management",
    description:
      "Virtual conferences, webinars, online registration, and abstract management on secure digital platforms.",
    icon: Laptop,
    href: "/services/digital-promotion",
  },
];

// Featured events
const featuredEvents = [
  {
    title: "International Research Conference",
    description:
      "Multi‑track academic summit with keynote speakers, technical sessions, and peer‑reviewed proceedings.",
    image: "/event-academic-conference.png", // “Research conference podium with speakers”
  },
  {
    title: "Corporate Awards & Brand Night",
    description:
      "A premium awards ceremony and product showcase for organizations and institutions.",
    image: "/event-corporate-awards.png", // “Corporate awards ceremony on stage”
  },
  {
    title: "Hybrid Global Webinar Series",
    description:
      "Hybrid event model combining on‑site audiences with global virtual participation.",
    image: "/event-hybrid-webinar.png", // “Hybrid event audience with screens / webinar grid”
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom grid items-center gap-10 md:grid-cols-2">
          {/* Left: Text */}
          <div className="space-y-6">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Brainityx Researchtech
            </p>
            <h1 className="text-gradient text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Global Conferences, Research Publications &amp; Corporate Experiences.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED specializes in academic
              conference management, research publication support, corporate promotional
              events, and digital event solutions that connect academia, industry, and
              innovation worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="
                btn-primary flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold
                transition-transform duration-300 hover:scale-105 hover:font-bold
              "
            >
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>

              <Link
                href="#services"
                className="btn-secondary rounded-md px-6 py-3 text-sm font-semibold transition duration-300 hover:shadow-md hover:font-bold hover:scale-105"
              >
                Explore Services
              </Link>

            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-muted-foreground md:text-sm">
              <div>
                <p className="font-semibold text-primary">Global Reach</p>
                <p>Academic &amp; corporate events across disciplines and regions.</p>
              </div>
              <div>
                <p className="font-semibold text-primary">End‑to‑End Support</p>
                <p>From concept and coordination to publication.</p>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative z-10 h-72 w-full -mt-8 overflow-hidden rounded-3xl shadow-2xl md:h-88 md:-mt-12 lg:h-106">
            <Image
              src="/hero-conference.png"
              alt="Professional business conference with keynote speaker and audience"
              fill
              priority
              className="object-cover"
            />
            {/* Blue overlay */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            {/* Floating stat card */}
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl bg-card/90 px-4 py-3 text-xs shadow-lg md:text-sm">
              <p className="font-semibold text-foreground">50+ Conferences Delivered</p>
              <p className="text-muted-foreground">
                Trusted partner for universities &amp; organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services with Icons */}
      <section id="services" className="section-padding bg-secondary/40">
        <div className="container-custom">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-gradient md:text-3xl">
              Integrated Services for Events &amp; Research
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Explore our core offerings that cover the complete lifecycle of academic
              conferences, research publications, corporate branding, and virtual events.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-primary md:text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary underline-offset-4 hover:text-muted-foreground hover:underline"
                  >
                    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Events Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gradient md:text-3xl">
                Flagship Conferences &amp; Events
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                A glimpse of the kinds of academic and corporate experiences we design and
                deliver for our partners.
              </p>
            </div>
            <Link
              href="/quote"
              className="btn-secondary flex items-center gap-2 rounded-md px-5 py-2 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Host an Event
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredEvents.map((event) => (
              <article
                key={event.title}
                className="card-hover group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground">
                    Featured
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground md:text-base">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Publication & Research Support Section */}
      <section className="section-padding bg-secondary/40">
        <div className="container-custom grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gradient md:text-3xl">
              Publication &amp; Research Support
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We support researchers and institutions in transforming high‑quality work into
              impactful publications through curated journal, book, and proceedings
              partnerships.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Guidance for Scopus, UGC Care, and reputed international journals.</li>
              <li>• Editorial assistance for edited volumes, conference proceedings, and books.</li>
              <li>• Structured workflows that connect reviewers, editors, and authors.</li>
            </ul>
            <Link
              href="/services/research-publication"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Learn more about publication support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl md:h-72">
            {/* “Researcher writing article laptop” / “Peer reviewed journal stacks” */}
            <Image
              src="/publication-research.png"
              alt="Researcher writing article on laptop with journals and notes"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/60 via-primary/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Publication Focus
              </span>
              <span className="text-xs">
                From manuscript support to final indexing and dissemination.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl bg-linear-to-r from-primary via-primary/90 to-accent shadow-xl">
            <div className="relative flex flex-col items-center justify-between gap-6 px-6 py-10 text-center text-primary-foreground md:flex-row md:text-left md:px-10 lg:px-12">
              {/* Optional abstract overlay using pseudo‑tech shapes */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.20),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.35),transparent_60%)]" />

              <div className="relative space-y-3 md:max-w-xl">
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Ready to host your next conference or corporate event?
                </h2>
                <p className="text-sm leading-relaxed md:text-base">
                  Share your objectives and requirements with us, and our team will craft a
                  custom plan that covers event design, coordination, publication, and
                  digital engagement.
                </p>
              </div>

              <div className="relative flex flex-col items-center gap-3 md:items-end">
                <Link
                  href="/quote"
                  className="rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Get a Custom Proposal
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
                >
                  Or talk to our coordination team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
