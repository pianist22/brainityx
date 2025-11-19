"use client"

import {
  FileText,
  ListChecks,
  CreditCard,
  CalendarClock,
  BadgeCheck,
  Scale,
  Gavel,
  Phone,
  Mail,
} from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";



export default function TermsAndConditionsPageClient() {
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
        <PageHeading subtitle="Please read these terms and conditions carefully before registering for any event or using any services offered by BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED." />

        {/* Last Updated */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:mb-8">
          Last updated: 2025
        </p>

        {/* Main card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:p-10">
          {/* Intro */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <FileText className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Terms &amp; Conditions
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Welcome to BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED. By accessing our website, registering for an event, or availing any of our services, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these Terms, you are advised not to proceed with registration or use of our services.
            </p>
          </section>

          {/* Divider */}
          <div className="my-8 border-t border-border/70" />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* 1. Scope of Services */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  1. Scope of Services
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED is engaged in organizing and managing national and international conferences, seminars, workshops, corporate events, research publications, and promotional programs across various academic and professional domains.
              </p>
            </section>

            {/* 2. Registration & Participation */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  2. Registration &amp; Participation
                </h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • Registration for any event or service is confirmed only upon successful payment through the designated payment gateway or method communicated by the Company.
                </li>
                <li>
                  • Participants must provide accurate, complete, and up‑to‑date information during the registration process, including personal, academic, and contact details wherever applicable.
                </li>
                <li>
                  • The Company reserves the right to cancel registration or deny participation if any information provided is found to be false, misleading, or in violation of applicable rules or eligibility criteria.
                </li>
              </ul>
            </section>

            {/* 3. Payment Policy */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  3. Payment Policy
                </h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • All online payments are processed securely through Razorpay or any other authorized payment gateway integrated by the Company.
                </li>
                <li>
                  • Fees once paid are non‑transferable and non‑refundable, except in cases of duplicate transactions or event cancellations as specified in the Company’s Refund &amp; Cancellation Policy.
                </li>
                <li>
                  • Any applicable taxes, payment gateway charges, or bank transaction fees shall be borne solely by the participant, unless explicitly stated otherwise.
                </li>
              </ul>
            </section>

            {/* 4. Event Cancellation or Postponement */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  4. Event Cancellation or Postponement
                </h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • The Company reserves the right to postpone, reschedule, or cancel any event due to unforeseen circumstances, including but not limited to natural disasters, technical failures, regulatory restrictions, or insufficient participation.
                </li>
                <li>
                  • In such situations, registered participants will be notified via email or other appropriate communication channels provided at the time of registration.
                </li>
                <li>
                  • Depending on the nature of the change, the Company may offer alternate dates, virtual/hybrid options, event credits, or partial refunds as per the applicable Refund &amp; Cancellation Policy.
                </li>
              </ul>
            </section>

            {/* 5. Intellectual Property Rights */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  5. Intellectual Property Rights
                </h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • All content, logos, event titles, conference materials, digital assets, website content, and publications hosted or produced by BRAINITYX RESEARCHTECH are the intellectual property of the Company or its respective licensors.
                </li>
                <li>
                  • Reproduction, distribution, modification, or commercial use of any material, in whole or in part, without prior written consent of the Company is strictly prohibited.
                </li>
                <li>
                  • Participants are responsible for ensuring that any research paper, presentation, or material submitted by them does not infringe the intellectual property rights of any third party.
                </li>
              </ul>
            </section>

            {/* 6. Code of Conduct */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  6. Code of Conduct
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Participants are expected to maintain professional, respectful, and ethical behavior during all events and interactions associated with the Company. Any form of harassment, discrimination, plagiarism, or violation of academic integrity will not be tolerated. The Company reserves the right to remove or bar participants from events, without refund, in case of misconduct or breach of event guidelines.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  7. Limitation of Liability
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                To the maximum extent permitted by applicable law, the Company shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of our website, participation in events, reliance on any information or content provided, or any delays, cancellations, or changes in event schedules.
              </p>
            </section>

            {/* 8. Governing Law */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  8. Governing Law &amp; Jurisdiction
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes, claims, or legal proceedings arising out of or relating to these Terms, our services, or events shall fall under the exclusive jurisdiction of the competent courts located in Delhi, India.
              </p>
            </section>

            {/* 9. Contact */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  6. Contact Us
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
