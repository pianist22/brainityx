"use client"

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Network,
  Globe2,
  ShieldCheck,
  PenSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ServicePageHeading from "@/components/ServicePageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export const metadata = {
  title: "Research Publication & Academic Collaboration | BRAINITYX RESEARCHTECH",
  description:
    "Professional support for research publication, academic collaboration, and dissemination across Scopus, Web of Science, UGC-CARE, and other indexed platforms.",
};

const offerings = [
  {
    title: "Indexed Journal Publication",
    description:
      "Guidance and coordination for publishing in Scopus, Web of Science, UGC-CARE, and other reputed indexed journals.",
    icon: BookOpen,
  },
  {
    title: "Edited Books & Proceedings",
    description:
      "End-to-end support for edited books and conference proceedings with ISBN and professional editorial workflows.",
    icon: FileText,
  },
  {
    title: "Global Publisher Partnerships",
    description:
      "Collaboration with international publishers and academic presses to expand reach and credibility.",
    icon: Globe2,
  },
  {
    title: "Manuscript Review & Editing",
    description:
      "Detailed review, formatting, and editorial assistance to align manuscripts with journal-specific guidelines.",
    icon: PenSquare,
  },
  {
    title: "Academic Collaboration Programs",
    description:
      "Structured MoUs and joint initiatives with universities, research centers, and institutions worldwide.",
    icon: Network,
  },
  {
    title: "Compliance & Research Integrity",
    description:
      "DOI assignment, plagiarism checking, and metadata management to safeguard academic integrity.",
    icon: ShieldCheck,
  },
];

export default function ResearchPublicationPageClient() {
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
        <ServicePageHeading subtitle="We support the global research community by facilitating high-quality academic publishing, editorial support, and sustainable collaborations between scholars, universities, and international publishers." />

        {/* Intro card */}
        <section className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              Research Publication &amp; Academic Collaboration
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            We are committed to supporting researchers, academicians, and institutions by
            providing structured publication pathways, editorial guidance, and collaborative
            opportunities that enhance visibility in reputed indexing databases.
          </p>
        </section>

        {/* Academic cycle + overview */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold  md:text-3xl">
              Supporting Every Stage of Your Academic Publishing Cycle
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              From idea conceptualization and journal selection to peer review, publication,
              and indexing, our team offers structured support that aligns with global
              standards and ethical research practices.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• Publication support across Scopus, Web of Science, UGC-CARE, and more.</li>
              <li>• Editorial workflows for edited books and conference proceedings with ISBN.</li>
              <li>• Academic collaboration bridges between institutions, centers, and publishers.</li>
            </ul>
          </div>

          {/* Image 1: academic cycle diagram */}
          <div className="relative h-70 w-full overflow-hidden rounded-3xl shadow-xl md:h-86">
            <Image
              src="/Peer_Step_Publishing.png"
              alt="Academic research and publishing cycle"
              fill
              // className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/60 via-primary/10 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Guidance Across All Stages</p>
              <p>From research idea to peer review and publication.</p>
            </div>
          </div>
        </section>

        {/* What we offer grid */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <h2 className="text-lg font-bold  md:text-xl">
              What We Offer to Researchers &amp; Institutions
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our publication and collaboration services are designed to be flexible, ethical,
            and globally relevant, supporting both individual scholars and institutional
            initiatives.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {offerings.map((item) => {
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

        {/* Academic collaboration + library image */}
        <section className="mb-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 space-y-4 md:order-1">
            <h2 className="text-2xl font-bold text-primary md:text-3xl">
              Academic Collaboration &amp; Knowledge Networks
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We enable universities, research institutions, and centers of excellence to
              connect through conferences, joint publications, thematic volumes, and long-term
              collaboration frameworks.
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              <li>• MoUs for joint conferences, edited volumes, and special issues.</li>
              <li>• Collaborative research dissemination and thematic publication series.</li>
              <li>• International visibility through indexed platforms and global partners.</li>
            </ul>
          </div>

          {/* Image 2: library/books */}
          <div className="relative order-1 h-64 w-full overflow-hidden rounded-3xl shadow-xl md:order-2 md:h-80">
            <Image
              src="/Journal_Stack.png"
              alt="Stacks of academic books and research materials in a library"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/60 via-primary/15 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 right-4 rounded-xl bg-card/90 px-4 py-2 text-xs text-muted-foreground md:text-sm">
              <p className="font-semibold text-foreground">Stronger Research Ecosystems</p>
              <p>Connecting institutions, authors, and publishers worldwide.</p>
            </div>
          </div>
        </section>

        {/* From draft to publication timeline */}
        <section className="mb-12 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" />
            <h2 className="text-lg font-bold  md:text-xl">
              From Draft to Indexed Publication
            </h2>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Our process ensures that manuscripts are nurtured carefully—from initial drafts
            to final indexing and metadata registration.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Step 1
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Manuscript &amp; Compliance
              </p>
              <p className="mt-1">
                Review structure, references, plagiarism, and formatting against target
                journal requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Step 2
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Journal Selection &amp; Submission
              </p>
              <p className="mt-1">
                Identify suitable indexed journals or book volumes and coordinate submission
                workflows.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Step 3
              </p>
              <p className="mt-1 font-semibold text-foreground">
                Review, Publication &amp; Indexing
              </p>
              <p className="mt-1">
                Support during peer review, finalize accepted manuscripts, and manage DOI,
                indexing, and metadata.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-linear-to-r from-primary via-primary/90 to-accent px-6 py-8 text-primary-foreground shadow-xl md:px-10 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-semibold md:text-2xl">
                Ready to plan your next publication or academic collaboration?
              </h2>
              <p className="text-sm leading-relaxed md:text-base">
                Share your manuscript, conference proceedings, or partnership idea, and our
                team will help you design a publication and collaboration roadmap.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/quote"
                className="flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Discuss Publication Support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs font-medium text-primary-foreground/80 underline-offset-4 hover:underline"
              >
                Or connect with our academic liaison team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
