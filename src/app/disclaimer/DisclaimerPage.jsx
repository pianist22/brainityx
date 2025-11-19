"use client"

import { Scale, Info, WifiOff, Clock, ShieldAlert } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function DisclaimerPageClient() {
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
        <PageHeading subtitle="This Disclaimer explains the limitations of liability and the nature of information, content, and event details provided by BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED." />

        {/* Last Updated */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:mb-8">
          Last updated: 2025
        </p>

        {/* Main card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8 lg:p-10">
          {/* Intro */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Scale className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                Disclaimer
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              The information and materials on this website and in our communications are provided for general informational purposes only. By using this website or participating in any event hosted by BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED, you acknowledge and agree to the terms outlined in this Disclaimer.
            </p>
          </section>

          {/* Divider */}
          <div className="my-8 border-t border-border/70" />

          {/* Sections */}
          <div className="space-y-8 md:space-y-10">
            {/* General Information */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  1. General Information Only
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                The information and materials on this website are intended solely for general informational and academic purposes. They should not be considered as professional, legal, financial, or technical advice, and users are encouraged to seek appropriate independent guidance where necessary.
              </p>
            </section>

            {/* Event Details Subject to Change */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  2. Event Details &amp; Changes
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Event details, speakers, schedules, formats, and content are subject to change without prior notice. While we strive to provide timely updates, certain modifications may occur due to speaker availability, technical reasons, or other operational requirements.
              </p>
            </section>

            {/* Technical Issues & Interruptions */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <WifiOff className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  3. Technical Issues &amp; Interruptions
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                The Company shall not be responsible for any technical issues, connectivity problems, interruptions, or losses arising from the use of our website, digital platforms, or virtual event infrastructure, including issues related to internet service providers, hardware, or third‑party tools.
              </p>
            </section>

            {/* Accuracy & Completeness */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  4. Accuracy &amp; Completeness of Information
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                While we make reasonable efforts to ensure that the information shared through our website, brochures, and event communications is accurate and up to date, we do not guarantee its completeness, reliability, or timeliness. Any reliance you place on such information is strictly at your own risk.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-primary md:text-xl">
                  5. Acceptance of Terms &amp; Policies
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Participation in any event, use of our website, or engagement in any publication or collaboration process implies that you have read, understood, and agreed to this Disclaimer along with our Terms &amp; Conditions, Privacy Policy, and Refund &amp; Cancellation Policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
