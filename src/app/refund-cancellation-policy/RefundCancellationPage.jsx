"use client"

import { CreditCard, RotateCcw, UserPlus, AlertCircle, Mail, Phone } from "lucide-react";

import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function RefundCancellationPolicyPageClient() {
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
        <PageHeading subtitle="At BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED, we aim to maintain transparent and fair payment, cancellation, and refund procedures for all participants and clients." />

        {/* Last Updated */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:mb-8">
          Last updated: 2025
        </p>

        {/* Main card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:p-10">
          {/* Intro */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Refund &amp; Cancellation Policy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              At BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED, we maintain transparent payment and refund procedures. This policy outlines how registration fees, cancellations, and refunds are handled for our events, publications, and services.
            </p>
          </section>

          {/* Divider */}
          <div className="my-8 border-t border-border/70" />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* 1. Registration Fees */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  1. Registration Fees
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                All payments made toward event registrations, publication charges, or service fees are non‑refundable unless otherwise specified in this policy or in the specific event guidelines.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Refunds will be processed only in the following cases:
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>• Duplicate payment made for the same registration or service.</li>
                <li>• Event cancellation by the organizer due to unavoidable circumstances.</li>
              </ul>
            </section>

            {/* 2. Refund Process */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  2. Refund Process
                </h2>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>
                  • Refund requests (where applicable) must be submitted via email to{" "}
                  <a
                    href="mailto:info@branityxresearchtech.in"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    info@branityxresearchtech.in
                  </a>{" "}
                  within 7 days from the date of payment, along with relevant payment proof and registration details.
                </li>
                <li>
                  • Approved refunds will be processed within 7–10 business days and credited to the original mode of payment through Razorpay or the designated payment gateway.
                </li>
                <li>
                  • Any applicable payment gateway or bank charges deducted during the transaction may not be refundable and will be subject to the policies of the respective payment provider.
                </li>
              </ul>
            </section>

            {/* 3. Participant Substitution */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  3. Participant Substitution
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                If you are unable to attend an event after successful registration, you may nominate a substitute participant from the same institution or organization, subject to the Company’s prior written approval.
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                <li>• The substitute must meet the eligibility criteria for the event or category.</li>
                <li>• All substitution requests must be communicated in writing before the deadline mentioned in the event guidelines, wherever applicable.</li>
              </ul>
            </section>

            {/* 4. No-Show Policy */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  4. No‑Show Policy
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Participants who fail to attend an event, session, or scheduled activity without prior written intimation are considered “no‑show” attendees.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                No‑show participants are not eligible for any refund, credit transfer, or substitution, unless explicitly permitted under the specific event’s terms or at the sole discretion of the Company.
              </p>
            </section>

            {/* 5. Contact for Refund Queries */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  5. Refund &amp; Cancellation Queries
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                For any questions or clarifications related to cancellations or refunds, you may contact us at:
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
