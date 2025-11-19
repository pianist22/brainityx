"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Megaphone,
  Award,
  Sparkles,
  Package,
  Share2,
  Users,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";
import ServicePageHeading from "@/components/ServicePageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Brand Promotion & Award Ceremonies | BRAINITYX RESEARCHTECH",
  description:
    "Creative and result-oriented brand promotion, award functions, pageants, product activations, and media campaigns for impactful visibility.",
};

const services = [
  {
    title: "Brand Launch & Promotional Campaigns",
    description:
      "Concept-to-execution support for launch events, roadshows, and high-visibility promotional campaigns.",
    icon: Megaphone,
  },
  {
    title: "Award Ceremonies & Recognition Events",
    description:
      "Prestigious award nights that celebrate innovation, excellence, and achievement within your organization or sector.",
    icon: Award,
  },
  {
    title: "Pageants, Fashion & Themed Shows",
    description:
      "Curated pageants, fashion events, and themed celebrations aligned with your brand personality and audience.",
    icon: Sparkles,
  },
  {
    title: "Product Demonstrations & Sampling",
    description:
      "Interactive product demo zones, tasting/sampling setups, and experiential kiosks for direct customer engagement.",
    icon: Package,
  },
  {
    title: "On-Ground Kiosks & Activations",
    description:
      "Mall activations, campus drives, and ground-level kiosks designed for maximum footfall and recall.",
    icon: Users,
  },
  {
    title: "Media & Social Campaign Integration",
    description:
      "Media coverage, PR support, and integrated social media campaigns to amplify event impact beyond the venue.",
    icon: Share2,
  },
];

export default function BrandPromotionPageClient(){
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
        <ServicePageHeading subtitle="We design brand promotion and recognition events that combine creativity, precision, and storytelling—so your brand connects powerfully with the right audience." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Sparkles className="h-3 w-3" />
            <span>Brand Promotion &amp; Award Ceremonies</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            We offer creative and result-oriented brand promotion and recognition services,
            ensuring impactful representation, emotional connection, and long-term visibility
            for your brand across physical and digital channels.
          </p>
        </section>

        {/* Hero overview + awards image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Experiences That Celebrate Your Brand Story
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether it is a grand brand launch, an intimate recognition evening, or a
              thematic celebration, our team balances creative show design with meticulous
              backstage control and guest experience management.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Brand launch events and integrated promotional campaigns.</li>
              <li>• Award ceremonies that recognize innovation, excellence, and leadership.</li>
              <li>• Pageant shows, fashion events, and immersive themed celebrations.</li>
            </ul>
          </div>

          {/* Image: award night / brand promotion */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            {/* Save your attached image as /Brand_Awards_Ceremony.jpg */}
            <Image
              src="/Brand_Awards_Ceremony.png"
              alt="Brand awards ceremony with hosts on stage and audience celebrating"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">High-Impact Brand Moments</p>
              <p>Stage, lighting, and storytelling curated for your brand identity.</p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              What We Create for Your Brand
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Each event is curated with attention to detail, creative design, and a clear
            communication strategy—ensuring that your brand presence feels premium, cohesive,
            and memorable.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {services.map((item) => {
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

        {/* Craft & process section */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Curated with Creativity, Precision &amp; Professionalism
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our brand promotion team collaborates with your marketing, HR, and leadership
            stakeholders to transform campaign goals into immersive event concepts and
            experiences.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Creative Blueprint
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Concept &amp; Visual Identity
              </p>
              <p className="mt-1">
                Develop event themes, stage design, and visual language aligned with your
                brand guidelines.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Experience Design
              </p>
              <p className="mt-1 font-semibold text-foreground">Run-of-Show &amp; Flow</p>
              <p className="mt-1">
                Craft program flow, performances, awards segments, and interaction points for
                guests.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Amplification
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Media &amp; Social Reach
              </p>
              <p className="mt-1">
                Integrate media coverage, content capture, and social media campaigns for
                extended impact.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-linear-to-tr from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Planning a brand launch or recognition evening?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your campaign objectives and audience with us, and we will design a
                brand promotion or award ceremony that your stakeholders will remember.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get a Brand Event Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or speak with our brand experience team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
