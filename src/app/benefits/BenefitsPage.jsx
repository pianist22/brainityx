"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Zap,
  Users,
  BookOpen,
  MonitorPlay,
  Layers,
} from "lucide-react";
import PageHeading from "@/components/PageHeading";
import Loader from "@/components/Loader"; // your styled-components loader

const benefits = [
  {
    title: "Comprehensive Services",
    description:
      "End-to-end event and publication solutions—from planning, promotion, and execution to post-event reporting—delivered under one roof.",
    icon: Layers,
  },
  {
    title: "Professional Expertise",
    description:
      "Led by experienced academicians, coordinators, and event professionals with global exposure and domain understanding.",
    icon: BookOpen,
  },
  {
    title: "Global Networking",
    description:
      "Platforms that connect researchers, industry experts, and innovators across borders to exchange ideas, collaborate, and build partnerships.",
    icon: Globe2,
  },
  {
    title: "Academic Excellence",
    description:
      "Collaborations with leading institutions, publishers, and indexing agencies to enhance the visibility and credibility of research outputs.",
    icon: Users,
  },
  {
    title: "Customized Solutions",
    description:
      "Every conference, event, and project is tailored to the unique needs of clients, sponsors, and participants for maximum relevance.",
    icon: Zap,
  },
  {
    title: "Trusted Management",
    description:
      "Ethical business practices, transparent operations, and structured workflows that build long-term trust and reliability.",
    icon: ShieldCheck,
  },
  {
    title: "Digital Efficiency",
    description:
      "Secure online systems for registration, paper submission, communication, and payment processing that simplify complex operations.",
    icon: MonitorPlay,
  },
];

export default function BenefitsPageClient() {
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
        {/* Heading */}
        <PageHeading subtitle="Discover how BRAINITYX RESEARCHTECH brings together comprehensive services, academic excellence, and digital efficiency to create seamless experiences for institutions, researchers, and corporate partners." />

        {/* Hero / overview with image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <CheckCircle2 className="h-4 w-4" />
              <span>Why Choose BRAINITYX RESEARCHTECH?</span>
            </p>
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Benefits That Create Real Value for Every Stakeholder
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From conference hosts and academic leaders to corporate partners and
              individual researchers, our integrated approach ensures that every engagement
              is meaningful, efficient, and future-ready.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              By combining strategic planning, expert coordination, and modern digital
              tools, we help clients focus on content and impact while we manage the
              complexity behind the scenes.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            <Image
              src="/benefits-hero-collaboration.png"
              alt="Team of professionals collaborating during an academic or corporate planning session"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">A Partner, Not Just a Vendor</p>
              <p>Collaboration-focused teams aligned with your goals and timelines.</p>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-bold text-primary md:text-xl">
            Key Benefits of Working with Us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Each benefit reflects a core promise of how we plan, manage, and execute
            conferences, publications, corporate events, and digital projects for our
            partners.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Impact & efficiency band with second image */}
        <section className="mb-12 rounded-3xl border border-border bg-secondary/40 p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <MonitorPlay className="h-4 w-4" />
                <span>Impact &amp; Digital Efficiency</span>
              </p>
              <h2 className="text-2xl font-bold text-primary md:text-3xl">
                Secure, Scalable, and Designed for Modern Events
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our online systems for registration, paper submission, review workflows,
                payments, and communication are engineered to handle both intimate and
                large-scale events with equal reliability.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Integrated dashboards and structured reporting give you complete visibility
                into participation, submissions, and performance metrics, enabling smarter
                decisions for future initiatives.
              </p>
            </div>

            <div className="relative h-52 w-full overflow-hidden rounded-3xl shadow-md md:h-64">
              <Image
                src="/benefits-metrics-success.png"
                alt="Analytics dashboard and digital metrics representing efficient event and publication management"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/60 via-primary/10 to-transparent" />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="rounded-3xl bg-linear-to-tr from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Ready to experience the BRAINITYX advantage?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your conference, publication, or corporate event idea with us, and we
                will show you how these benefits translate into a tailored solution for your
                institution or organization.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
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
        </section>
      </div>
    </div>
  );
}
