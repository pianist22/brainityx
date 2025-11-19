"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Megaphone,
  Award,
  Users,
  MonitorPlay,
  CalendarCheck2,
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import ServicePageHeading from "@/components/ServicePageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const expertise = [
  {
    title: "Product Launches & Brand Activations",
    description:
      "Strategic launch events, brand experiences, and activation campaigns that create lasting first impressions.",
    icon: Megaphone,
  },
  {
    title: "Corporate Meetings & Conferences",
    description:
      "Board meetings, townhalls, leadership summits, and annual strategy conferences with flawless execution.",
    icon: Briefcase,
  },
  {
    title: "Exhibitions & Trade Fairs",
    description:
      "End-to-end support for expo booths, pavilions, and showcase zones with impactful visitor engagement.",
    icon: CalendarCheck2,
  },
  {
    title: "Employee Engagement & Awards",
    description:
      "Employee appreciation days, award nights, offsites, and engagement programs that strengthen culture.",
    icon: Award,
  },
  {
    title: "Hybrid & Digital Corporate Events",
    description:
      "Webcasts, virtual townhalls, hybrid launches, and online summits with interactive digital tools.",
    icon: MonitorPlay,
  },
  {
    title: "Stakeholder & Government Events",
    description:
      "Protocol-sensitive programs for government bodies, public sector units, and multi-stakeholder forums.",
    icon: Users,
  },
];

export default function CorporateEventManagementPageClient() {
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
        <ServicePageHeading subtitle="We deliver high-impact corporate and government events with strategic planning, creative design, and robust logistics that align with your brand and business objectives." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Briefcase className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Corporate Event Management
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            We provide professional solutions for corporate and government events, ensuring
            flawless execution, audience engagement, and high-impact brand visibility across
            physical, hybrid, and digital formats.
          </p>
        </section>

        {/* Hero overview + stage image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Memorable Corporate Experiences, Designed End-to-End
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From concept to curtain call, our team manages every layer of your event —
              creative direction, content, production, logistics, and digital amplification —
              so that your leadership and teams can focus on impactful conversations.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Product launches and brand activation campaigns.</li>
              <li>• Corporate meetings, exhibitions, and trade fairs.</li>
              <li>• Annual conferences, leadership summits, and award functions.</li>
              <li>• Hybrid and digital corporate events for distributed teams.</li>
            </ul>
          </div>

          {/* Image: stage + audience */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            {/* Save your attached corporate stage image as /Corporate_Event_Stage.jpg */}
            <Image
              src="/Corporate_Event_Stage.png"
              alt="Corporate conference with keynote speaker on stage and audience"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">High-Impact Corporate Stages</p>
              <p>Lighting, content, and staging crafted for your brand story.</p>
            </div>
          </div>
        </section>

        {/* What we do grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-lg font-bold md:text-xl">
              What We Execute for Organizations
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our corporate event solutions combine strategic planning, creative production, and
            meticulous coordination to deliver experiences that reflect your values and
            business goals.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Planning & logistics focus */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-bold md:text-xl">
              Strategic Planning, Creative Design &amp; Strong Logistics
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We work closely with your leadership, HR, marketing, and communications teams to
            translate business objectives into event concepts, run-of-show plans, and
            on-ground experiences.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 1
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Strategy &amp; Concept
              </p>
              <p className="mt-1">
                Define event objectives, audience, messaging, and experience formats aligned
                with your brand.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 2
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Design &amp; Production
              </p>
              <p className="mt-1">
                Craft stage designs, audiovisual concepts, engagement activities, and
                communication assets.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Phase 3
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Execution &amp; Reporting
              </p>
              <p className="mt-1">
                Manage on-ground logistics, digital platforms, and post-event reporting and
                media assets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-linear-to-r from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Planning a corporate event, launch, or awards night?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your objectives and audience profile with us, and our team will design a
                tailored corporate event plan that delivers measurable impact for your brand.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get a Corporate Event Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or speak with our event strategy team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
