// app/services/digital-promotion/page.jsx
"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  Mail,
  Globe2,
  MonitorPlay,
  Image as ImageIcon,
  Wrench,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";
import ServicePageHeading from "@/components/ServicePageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Digital Promotion & Event Support | BRAINITYX RESEARCHTECH",
  description:
    "Digital marketing, online event promotion, virtual platforms, and technical support to maximize visibility and engagement for conferences and corporate events.",
};

const digitalServices = [
  {
    title: "Digital Marketing & Online Promotion",
    description:
      "End-to-end digital outreach for events and campaigns using targeted strategies across web and social platforms.",
    icon: Megaphone,
  },
  {
    title: "Email Campaigns & Social Media Management",
    description:
      "Design and execution of email sequences, social media calendars, and content plans that keep audiences engaged.",
    icon: Mail,
  },
  {
    title: "Registration & Participant Databases",
    description:
      "Branded registration pages, payment flow integration, and participant database management with analytics.",
    icon: Globe2,
  },
  {
    title: "Virtual Platforms for Webinars & Conferences",
    description:
      "Setup and configuration of secure platforms for webinars, virtual conferences, and hybrid meetings.",
    icon: MonitorPlay,
  },
  {
    title: "Graphic Design & Promo Videos",
    description:
      "Creative assets including banners, reels, teaser videos, and event branding aligned with your visual identity.",
    icon: ImageIcon,
  },
  {
    title: "Technical Support & Live Streaming",
    description:
      "On-call technical teams for live streaming, broadcasting, recording, and troubleshooting during events.",
    icon: Wrench,
  },
];

export default function DigitalPromotionPageClient() {
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
        <ServicePageHeading subtitle="In the digital age, we extend event and brand experiences online through integrated promotion, virtual platforms, and reliable technical support." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Megaphone className="h-3 w-3" />
            <span>Digital Promotion &amp; Event Support</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            We design digital-first support systems for your conferences, corporate events,
            and campaigns—ensuring that every initiative achieves seamless reach, high
            engagement, and professional online execution.
          </p>
        </section>

        {/* Hero overview + digital ads image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Amplifying Events Through Digital Channels
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From pre-event visibility to live engagement and post-event content, our
              digital promotion services support the entire lifecycle of your academic and
              corporate programs.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Digital marketing and online event promotion across multiple platforms.</li>
              <li>• Email campaigns, social media management, and content creation.</li>
              <li>• Event registration systems and secure participant database management.</li>
            </ul>
          </div>

          {/* Image: digital ads & analytics */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            <Image
              src="/Digital_Promotion_ADs.png"
              alt="Digital marketing and online advertising dashboard on a laptop"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/15 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Data-Driven Digital Reach</p>
              <p>Campaigns monitored and optimized with live performance insights.</p>
            </div>
          </div>
        </section>

        {/* Digital services grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Core Digital Promotion &amp; Support Services
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We blend creative content, robust systems, and reliable technical support to help
            your events and initiatives stand out in crowded digital spaces.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {digitalServices.map((item) => {
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

        {/* Process & tools */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Seamless Digital Support for Every Event Stage
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our digital promotion workflow ensures that your campaigns are well-planned,
            executed with stability, and measured for continuous improvement.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Plan
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Strategy &amp; Campaign Design
              </p>
              <p className="mt-1">
                Define target audiences, channels, messaging, and KPIs for each event or
                initiative.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Execute
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Content &amp; Platform Setup
              </p>
              <p className="mt-1">
                Launch campaigns, configure registration systems, and deploy virtual event
                platforms.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Optimize
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Monitoring &amp; Reporting
              </p>
              <p className="mt-1">
                Track performance, manage live technical support, and share consolidated
                reports post-event.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-linear-to-tr from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Need digital promotion or virtual support for your next event?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Tell us about your event, audience, and timelines, and we will craft a digital
                promotion and technical support plan tailored to your goals.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Plan Digital Promotion
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or connect with our digital support team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
