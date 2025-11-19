"use client"

import { Shield, FileText, Lock, Cookie, ExternalLink, Mail, Phone } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";


export default function PrivacyPolicyPageClient() {
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
      <div className="container-custom max-w-4xl">
        <PageHeading subtitle="This Privacy Policy explains how BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED collects, uses, protects, and handles your personal information when you interact with our website, events, and services." />

        {/* Last Updated */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:mb-8">
          Last updated: 2025
        </p>

        {/* Main card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:p-10">
          {/* Intro */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Privacy Policy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              We value your privacy. This Privacy Policy describes how BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED (“Company”, “we”, “our”, or “us”) collects, uses, and protects your personal information when you register for events, use our services, or interact with our platforms.
            </p>
          </section>

          {/* Divider */}
          <div className="my-8 border-t border-border/70" />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* 1. Information We Collect */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Depending on the nature of your interaction with us, we may collect the following categories of information:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • Personal details such as your name, email address, contact number, designation, and institution/organization details provided during registration or communication.
                </li>
                <li>
                  • Payment‑related details required to process fees securely through Razorpay or other authorized payment gateways (card data is processed by the gateway and is not stored by us).
                </li>
                <li>
                  • Event participation information including paper titles, abstracts, submissions, feedback, attendance, and certificate issuance records.
                </li>
                <li>
                  • Communication records such as emails, enquiry forms, and other correspondence exchanged with our team.
                </li>
              </ul>
            </section>

            {/* 2. How We Use Information */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  2. How We Use Your Information
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                We use the personal information collected from you only for legitimate academic, event‑related, and administrative purposes, which may include:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • Registering participants, managing event logistics, and processing participation or publication fees.
                </li>
                <li>
                  • Sending event‑related communication such as schedules, updates, presentations, certificates, and publication details.
                </li>
                <li>
                  • Informing you about upcoming conferences, seminars, workshops, research collaborations, or relevant academic opportunities that may be of interest.
                </li>
                <li>
                  • Maintaining accurate records for administrative, financial, and legal compliance purposes.
                </li>
              </ul>
            </section>

            {/* 3. Data Protection */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  3. Data Protection &amp; Security
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • Online payments are processed through secure, industry‑standard encrypted payment gateways such as Razorpay; card and banking credentials are handled directly by the payment provider and are not stored on our servers.
                </li>
                <li>
                  • Access to personal data is restricted to authorized personnel solely for the purposes described in this Privacy Policy.
                </li>
                <li>
                  • We do not sell, rent, or share your personal information with third‑party marketing agencies.
                </li>
              </ul>
            </section>

            {/* 4. Cookies */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  4. Cookies &amp; Analytics
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our website may use cookies and similar technologies to enhance user experience, understand how visitors interact with our pages, and improve our services over time.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                You can manage or disable cookies through your browser settings. However, certain website features may not function optimally if cookies are disabled.
              </p>
            </section>

            {/* 5. Third-Party Links */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  5. Third‑Party Websites &amp; Links
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Our website, event pages, or communications may contain links to third‑party websites, platforms, or services that are not operated or controlled by us.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                We are not responsible for the content, security practices, or privacy policies of such third‑party websites. You are encouraged to review the privacy policies of those websites before providing any personal information to them.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  6. Contact for Privacy Queries
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                If you have any questions, concerns, or requests related to this Privacy Policy or the handling of your personal information, you may contact us using the details below:
              </p>
              <div className="space-y-2 rounded-xl bg-secondary/60 p-4 text-sm text-muted-foreground md:text-base">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:info@branityxresearchtech.in"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      info@branityxresearchtech.in
                    </a>{" "}
                    |{" "}
                    <a
                      href="mailto:brainityxresearchtech@gmail.com"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      brainityxresearchtech@gmail.com
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+919310013376"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      +91-9310013376
                    </a>
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
