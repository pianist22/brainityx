"use client"

import Image from "next/image";
import { Mail, Phone, CalendarCheck2 } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";


export default function GetQuotePage() {
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
        <PageHeading subtitle="Reach out to our coordination team to discuss your conference, publication, corporate event, or training requirements. We will get back to you with a customized proposal and next steps." />

        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          {/* Contact block */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-bold text-primary md:text-xl">
              Contact BRAINITYX RESEARCHTECH
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Share your event or project details with us via email or phone. Our team will
              review your requirements and respond within 24–48 business hours with the best
              way forward.
            </p>

            <div className="mt-5 space-y-4 text-sm text-muted-foreground md:text-base">
              {/* Organization name */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Organization
                </p>
                <p className="mt-1 font-semibold text-foreground">
                  BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1">
                    <a
                      href="mailto:info@branityxresearchtech.in"
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      info@branityxresearchtech.in
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:brainityxresearchtech@gmail.com"
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      brainityxresearchtech@gmail.com
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Please include basic details such as event type, tentative dates,
                    location/mode, and expected participants.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+919310013376"
                    className="mt-1 block text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                  >
                    +91-9310013376
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Call or message us to discuss your requirements or clarify any queries.
                  </p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3">
                <CalendarCheck2 className="h-4 w-4 text-primary" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Response time: typically within 24–48 business hours. For urgent timelines,
                  please mention “URGENT” in the subject line of your email.
                </p>
              </div>
            </div>

            {/* Small note */}
            <div className="mt-5 rounded-xl bg-secondary/60 p-4 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">How we can help:</p>
              <ul className="mt-1 space-y-1">
                <li>• Academic conferences, seminars, and summits.</li>
                <li>• Research publication plans and proceedings.</li>
                <li>• Corporate and promotional events, award ceremonies.</li>
                <li>• Training programs, workshops, and digital event support.</li>
              </ul>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative h-56 w-full overflow-hidden rounded-3xl shadow-lg md:h-72">
            {/* Save an image as /quote-planning-session.jpg */}
            <Image
              src="/quote-planning-session.png"
              alt="Team planning a conference or event around a table with laptops and notes"
              fill
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/70 via-primary/20 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-lg bg-card/90 px-3 py-2 text-[11px] text-muted-foreground">
              <p className="font-semibold text-foreground">
                Collaborative planning for impactful events
              </p>
              <p>
                Our coordination team works closely with your institution or organization to
                craft the right solution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

