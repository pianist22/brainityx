"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  Sparkles,
  Users,
  GraduationCap,
  MonitorPlay,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";
import ServicePageHeading from "@/components/ServicePageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const focusAreas = [
  {
    title: "Research Methodology & Scientific Writing",
    description:
      "Workshops that strengthen problem formulation, research design, literature review, and academic writing skills.",
    icon: FileText,
  },
  {
    title: "Data Analytics, AI & Emerging Technologies",
    description:
      "Hands-on training in analytics tools, AI concepts, and technology trends relevant to academia and industry.",
    icon: BarChart3,
  },
  {
    title: "Innovation, Entrepreneurship & Startups",
    description:
      "Mentorship-driven sessions on idea validation, business models, pitching, and innovation management.",
    icon: Sparkles,
  },
  {
    title: "Soft Skills & Professional Communication",
    description:
      "Programs focused on communication, teamwork, presentation, and workplace readiness for early-career professionals.",
    icon: Users,
  },
  {
    title: "Leadership & Organizational Management",
    description:
      "Custom learning journeys for managers and leaders on strategy, change management, and people development.",
    icon: Brain,
  },
  {
    title: "Online Certificate Workshops & FDPs",
    description:
      "Virtual and hybrid certificate programs, faculty development programs (FDPs), and refresher courses.",
    icon: MonitorPlay,
  },
];

export default function WorkshopsTrainingPageClient() {
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
        <ServicePageHeading subtitle="We design and deliver skill development and capacity-building programs for students, professionals, and organizations—through hands-on learning, knowledge sharing, and expert mentorship." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <GraduationCap className="h-3 w-3" />
            <span>Workshops &amp; Training Programs</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our training programs are conducted in collaboration with universities, research
            bodies, and industry experts. Each workshop is tailored to specific learning
            objectives, sector needs, and participant profiles to ensure real-world
            applicability.
          </p>
        </section>

        {/* Hero overview + training image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Practical Learning for the Next Generation of Professionals
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We believe in outcome-oriented training—sessions that are interactive, case
              driven, and guided by practitioners with deep experience in their domains.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Skill development and capacity-building across multiple sectors.</li>
              <li>• Joint programs with universities, research institutes, and industry experts.</li>
              <li>• Flexible delivery formats: on-campus, corporate, hybrid, and online.</li>
            </ul>
          </div>

          {/* Image: workshop / training audience */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-xl md:h-80">
            {/* Save your attached image as /Workshop_Training_Session.jpg */}
            <Image
              src="/Workshop_Training_Session.png"
              alt="Workshop or training session with participants and trainer"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/65 via-primary/15 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Hands-on Learning Spaces</p>
              <p>Interactive workshops with real-time feedback and guidance.</p>
            </div>
          </div>
        </section>

        {/* Focus areas grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Key Focus Areas for Training
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our workshops cover technical, research, and behavioral competencies to help
            participants grow holistically and stay future-ready in their respective fields.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="card-hover flex h-full flex-col justify-between rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground md:text-base">
                      {area.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Philosophy & delivery formats */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Brain className="h-5 w-5" />
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Our Training Philosophy &amp; Delivery
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We focus on practical application, peer learning, and mentoring. Programs are
            structured to include pre-work, live sessions, and post-program resources where
            required.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Learning Design
              </p>
              <p className="mt-1 font-semibold text-foreground">Curriculum &amp; Content</p>
              <p className="mt-1">
                Tailor content with case studies, tools, and exercises aligned with your
                learners’ context.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Facilitation
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Experts &amp; Industry Mentors
              </p>
              <p className="mt-1">
                Engage experienced trainers, researchers, and practitioners from academia and
                industry.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Delivery
              </p>
              <p className="mt-1 font-semibold text-foreground">
                On-site, Hybrid &amp; Online
              </p>
              <p className="mt-1">
                Offer flexible delivery options, including certificate programs and FDPs.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-linear-to-tr from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Want to organize a workshop or training program?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your target audience and learning objectives, and we will co-create a
                customized workshop, certificate course, or faculty development program for
                your institution or organization.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Design a Training Program
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or speak with our training coordination team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
