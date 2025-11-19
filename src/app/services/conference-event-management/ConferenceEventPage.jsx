// app/services/conference-event-management/page.jsx
"use client"


import Loader from "@/components/Loader";
import { ServicePageHeading } from "@/components/PageHeading";
import {
  CalendarCheck2,
  Clock,
  FileText,
  MapPin,
  Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Conference & Event Management | BRAINITYX RESEARCHTECH",
  description:
    "End-to-end management of international, national, and regional conferences, seminars, symposiums, and summits across diverse academic and professional domains.",
};

export default function ConferenceEventManagementPageClient() {
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
      <div className="container-custom max-w-5xl">
        {/* Heading derived from URL via PageHeading */}
        <ServicePageHeading subtitle="Strategic, end-to-end management of academic and professional conferences that bring together researchers, academicians, industry experts, and policymakers on a common global platform." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CalendarCheck2 className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Conference &amp; Event Management
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            We specialize in organizing, managing, and executing international, national, and
            regional conferences, seminars, symposiums, conventions, and summits across
            diverse domains such as education, engineering, technology, management,
            business, healthcare, environment, and public policy.
          </p>
        </section>

        {/* Main two-column section: overview + hero image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              End-to-End Academic &amp; Professional Event Solutions
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From the first call for papers to the closing ceremony, our team handles every
              detail of conference planning and execution so that hosts, speakers, and
              delegates can focus on meaningful knowledge exchange and networking.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 font-semibold text-primary">
                  <Users className="h-4 w-4" />
                  Global Delegates
                </p>
                <p className="mt-1">
                  Engage academicians, professionals, and researchers from multiple regions and
                  disciplines.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2 font-semibold text-primary">
                  <MapPin className="h-4 w-4" />
                  On-site &amp; Hybrid
                </p>
                <p className="mt-1">
                  Conferences tailored for physical, virtual, or hybrid formats with seamless
                  coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Image 1: physical conference */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            {/* Replace with your first image, e.g. /images/service-conference-main.jpg */}
            <Image
              src="/service-conference-event.png"
              alt="Academic conference with keynote session and engaged audience"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Strategic Conference Design</p>
              <p>From concept notes to closing ceremony, managed under one roof.</p>
            </div>
          </div>
        </section>

        {/* Planning & management checklist */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Clock className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              What We Manage for You
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our conference management services cover every operational, academic, and digital
            component required to deliver a world-class event experience.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• End-to-end planning, scheduling, and logistics coordination.</li>
              <li>• Conference website design and registration management.</li>
              <li>• Abstract submission and peer review coordination.</li>
              <li>• Delegate, session, and speaker communication workflows.</li>
            </ul>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Venue, hospitality, and on-site support for physical events.</li>
              <li>• Hybrid and virtual event hosting with live streaming.</li>
              <li>• Conference kit, guide, and proceedings preparation.</li>
              <li>• Certificate generation and post-event reporting.</li>
            </ul>
          </div>
        </section>

        {/* Digital / virtual focus with second image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          {/* Image 2: virtual / hybrid */}
          <div className="relative order-2 h-56 w-full overflow-hidden rounded-3xl shadow-xl md:order-1 md:h-72">
            {/* Replace with your second image, e.g. /images/service-conference-virtual.jpg */}
            <Image
              src="/service-conference-virtual.png"
              alt="Hybrid or virtual conference with speakers and remote participants"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Digital-First Conferences</p>
              <p>Online registration, virtual platforms, and interactive tools.</p>
            </div>
          </div>

          <div className="order-1 space-y-4 md:order-2">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Hybrid &amp; Digital Conference Infrastructure
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Our team designs digital-ready conferences with secure registration systems,
              abstract management, and virtual platforms designed for high engagement and
              professional delivery.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Online registration, payment, and participant database management.</li>
              <li>• Virtual conference hubs for sessions, Q&amp;A, and networking.</li>
              <li>• Live streaming, recording, and on-demand content access.</li>
              <li>• Branded digital assets, email campaigns, and social media promotion.</li>
            </ul>
          </div>
        </section>

        {/* Process steps / mini timeline */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              A Structured, Collaborative Process
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Every engagement follows a clear methodology that combines academic rigor with
            professional event management practices.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 1
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Concept &amp; Design
              </p>
              <p className="mt-1">
                Define objectives, formats, timelines, and academic themes with your team.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 2
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Execution &amp; Coordination
              </p>
              <p className="mt-1">
                Manage registrations, abstracts, scheduling, speakers, vendors, and platforms.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 3
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Outcomes &amp; Legacy
              </p>
              <p className="mt-1">
                Deliver proceedings, certificates, reports, and post-event engagement assets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="rounded-3xl bg-linear-to-r from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Plan your next conference with a dedicated management partner.
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your requirements and we will design a conference blueprint tailored
                to your institution or organization.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get a Conference Proposal
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
