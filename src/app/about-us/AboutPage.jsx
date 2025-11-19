"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  Target,
  Rocket,
  CalendarCheck2,
  BookOpen,
  Briefcase,
  GraduationCap,
  MonitorPlay,
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Users,
  CheckCircle2
} from "lucide-react";
import PageHeading from "@/components/PageHeading";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export const metadata = {
  title: "About Us | BRAINITYX RESEARCHTECH",
  description:
    "Learn about BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED, a global platform for academic conferences, research publication support, corporate events, and training programs.",
};

export default function AboutPageClient() {
  const [isLoading, setIsLoading] = useState(true);

  // Show loader for 2 seconds
  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="section-padding">
      <div className="container-custom max-w-6xl">
        {/* Heading (auto from /about via PageHeading) */}
        <PageHeading subtitle="Specialized in academic conference management, research publication support, event organization, and corporate promotional services — bridging the gap between academia, industry, and innovation at the global level." />

        {/* Who We Are + hero image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-linear-to-tr from-primary/10 to-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Globe2 className="h-4 w-4" />
              <span>Who We Are</span>
            </p>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              A Global Platform for Conferences, Research &amp; Professional Networking
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Founded with a vision to promote global collaboration and research excellence,
              BRAINITYX RESEARCHTECH acts as a trusted platform connecting researchers,
              academicians, professionals, entrepreneurs, and organizations from around the
              world.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Our work spans education, engineering, technology, management, business,
              healthcare, environment, and public policy—creating an integrated ecosystem for
              knowledge exchange, professional networking, and thought leadership.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Every project and event is planned meticulously, executed efficiently, and
              designed to create meaningful impact for participants and partners.
            </p>
          </div>

          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            {/* Replace with your chosen hero About image */}
            <Image
              src="/about-global-conference.png"
              alt="Global academic and corporate conference audience with keynote stage"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">
                Bridging Academia, Industry &amp; Innovation
              </p>
              <p>Conferences, publications, and events that connect global communities.</p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <Target className="h-5 w-5" />
              <h2 className="text-lg font-bold md:text-xl">Our Vision</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              To be recognized as a global leader in research facilitation, academic event
              management, and professional networking, contributing to the growth of
              education, technology, and innovation worldwide.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <Rocket className="h-5 w-5" />
              <h2 className="text-lg font-bold md:text-xl">Our Mission</h2>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>
                • Organize international, national, and regional conferences, symposiums, and
                seminars that encourage multidisciplinary collaboration.
              </li>
              <li>
                • Promote and publish high-quality research through proceedings, edited
                volumes, and academic collaborations.
              </li>
              <li>
                • Provide professional event management solutions that combine creativity,
                strategy, and flawless execution.
              </li>
              <li>
                • Support corporate branding, product launches, and award ceremonies that
                highlight excellence and innovation.
              </li>
              <li>
                • Empower researchers and professionals through training, capacity building,
                and exposure to global opportunities.
              </li>
            </ul>
          </div>
        </section>

        {/* Core Activities */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CalendarCheck2 className="h-5 w-5" />
            <h2 className="text-lg font-bold md:text-xl">Core Activities</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our services are built around a comprehensive set of activities that connect
            conferences, publications, corporate events, training programs, and digital
            solutions into one cohesive ecosystem.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <CalendarCheck2 className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  Conference &amp; Event Organization
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Planning and hosting global conferences, summits, and workshops that foster
                research collaboration and innovation.
              </p>
            </article>

            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  Research Publication &amp; Editing
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Supporting researchers to publish in Scopus, Web of Science, UGC-CARE, and
                other indexed platforms, along with edited books and proceedings.
              </p>
            </article>

            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  Corporate &amp; Promotional Events
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Organizing brand launches, award shows, exhibitions, and campaigns for
                organizations and institutions.
              </p>
            </article>

            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  Training &amp; Skill Development
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Specialized workshops, certificate programs, and FDPs delivered with
                universities and industry partners.
              </p>
            </article>

            <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <MonitorPlay className="h-5 w-5 text-primary" />
                <h3 className="text-sm font-semibold text-foreground md:text-base">
                  Digital &amp; Online Event Management
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                End-to-end virtual conference and webinar solutions with online registration,
                abstract submission, and digital participation tools.
              </p>
            </article>
          </div>
        </section>

        {/* Global Reach */}
        <section className="mb-12 rounded-3xl border border-border bg-secondary/40 p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Globe2 className="h-4 w-4" />
                <span>Our Global Reach</span>
              </div>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Collaborating Beyond Borders
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                BRAINITYX RESEARCHTECH collaborates with international universities, research
                institutions, corporate partners, and professional bodies to foster
                innovation without boundaries.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our events have engaged participants from Asia, Europe, the Middle East, and
                North America—building a diverse network of scholars and professionals
                committed to shared growth and development.
              </p>
            </div>

            <div className="relative h-52 w-full overflow-hidden rounded-3xl shadow-md md:h-64">
              {/* Replace with world / network image */}
              <Image
                src="/about-global-network.png"
                alt="Abstract world map with global research and conference connections"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/60 via-primary/10 to-transparent" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <HeartHandshake className="h-5 w-5" />
            <h2 className="text-lg font-bold md:text-xl">Our Values</h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our work is anchored in core values that guide every engagement—from initial
            conversations to long-term partnerships.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Integrity
              </p>
              <p className="mt-1">
                Maintaining transparency, fairness, and trust in every interaction and
                engagement.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Quality
              </p>
              <p className="mt-1">
                Ensuring every event, publication, and project meets or exceeds global
                standards.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <Lightbulb className="h-4 w-4 text-primary" />
                Innovation
              </p>
              <p className="mt-1">
                Continuously exploring new technologies, formats, and methodologies to
                improve experiences.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 font-semibold text-foreground">
                <Users className="h-4 w-4 text-primary" />
                Collaboration &amp; Sustainability
              </p>
              <p className="mt-1">
                Believing in collective ideas and promoting socially responsible, sustainable
                practices in all events.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-10 rounded-3xl bg-linear-to-tr from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Partner with us for your next conference, publication, or corporate event.
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your ideas and objectives, and our team will co-create a roadmap that
                brings your academic or professional vision to life.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a Project with BRAINITYX
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or connect with our coordination team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
