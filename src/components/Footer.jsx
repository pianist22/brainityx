// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const services = [
//   { title: "Conference & Event Management", href: "/services/conference-event-management" },
//   { title: "Research Publication & Academic Collaboration", href: "/services/research-publication" },
//   { title: "Corporate Event Management", href: "/services/corporate-event-management" },
//   { title: "Brand Promotion & Award Ceremonies", href: "/services/brand-promotion" },
//   { title: "Workshops & Training Programs", href: "/services/workshops-training" },
//   { title: "Digital Promotion & Event Support", href: "/services/digital-promotion" },
// ];

// const importantLinks = [
//   { title: "About Us", href: "/about-us" },
//   { title: "Benefits", href: "/benefits" },
//   { title: "Get a Quote", href: "/quote" },
// ];

// const policies = [
//   { title: "Terms & Conditions", href: "/terms-and-conditions" },
//   { title: "Privacy Policy", href: "/privacy-policy" },
//   { title: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" },
//   { title: "Disclaimer", href: "/disclaimer" },
// ];

// export default function Footer() {
//   return (
//     <footer className=" bg-primary">
//       <div className="container-custom py-10 md:py-12">
//         {/* Rounded glowing footer card */}
//         <div className="rounded-3xl border border-primary-foreground/10 bg-primary/95 px-6 py-10 shadow-[0_0_40px_rgba(15,23,42,0.55)] backdrop-blur-sm md:px-10 lg:px-12">
//           {/* Top grid: logo + columns */}
//           <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))] lg:gap-12">
//             {/* Brand & contact */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <Image
//                   src="/Brainityx_Logo_Grey.png"
//                   alt="BRAINITYX RESEARCHTECH Logo"
//                   width={140}
//                   height={140}
//                   className="h-14 w-auto md:h-16"
//                 />
//               </div>
//               <p className="text-sm text-primary-foreground/80 md:text-[0.95rem]">
//                 © 2025 BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED. All rights reserved.
//               </p>
//               <div className="space-y-1 text-sm text-primary-foreground/80">
//                 <p>
//                   📧{" "}
//                   <a
//                     href="mailto:info@branityxresearchtech.in"
//                     className="underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
//                   >
//                     info@branityxresearchtech.in
//                   </a>
//                 </p>
//                 <p>
//                   📞{" "}
//                   <a
//                     href="tel:+919310013376"
//                     className="underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
//                   >
//                     +91-9310013376
//                   </a>
//                 </p>
//               </div>
//             </div>

//             {/* Important Links */}
//             <div className="space-y-4">
//               <h3 className="text-sm font-semibold tracking-wide text-primary-foreground/90 md:text-base">
//                 Important Links
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 {importantLinks.map((link) => (
//                   <li key={link.href}>
//                     <Link
//                       href={link.href}
//                       className="text-primary-foreground/75 transition-all duration-200 hover:text-primary-foreground hover:font-semibold hover:drop-shadow-sm"
//                     >
//                       {link.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="space-y-4">
//               <h3 className="text-sm font-semibold tracking-wide text-primary-foreground/90 md:text-base">
//                 Services
//               </h3>
//               <ul className="space-y-2 text-sm">
//                 {services.map((service) => (
//                   <li key={service.href}>
//                     <Link
//                       href={service.href}
//                       className="text-primary-foreground/75 transition-all duration-200 hover:text-primary-foreground hover:font-semibold hover:drop-shadow-sm"
//                     >
//                       {service.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Divider */}
//           <div className="mt-8 border-t border-primary-foreground/15 pt-6">
//             {/* Bottom row: policies + small text */}
//             <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//               <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-[0.8rem]">
//                 {policies.map((policy, index) => (
//                   <span key={policy.href} className="flex items-center">
//                     <Link
//                       href={policy.href}
//                       className="text-primary-foreground/75 transition-colors duration-200 hover:text-primary-foreground hover:underline underline-offset-4"
//                     >
//                       {policy.title}
//                     </Link>
//                     {index < policies.length - 1 && (
//                       <span className="mx-2 text-primary-foreground/40">|</span>
//                     )}
//                   </span>
//                 ))}
//               </div>

//               <p className="text-xs text-primary-foreground/60 md:text-[0.8rem]">
//                 Empowering global research, conferences, and professional collaborations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Conference & Event Management", href: "/services/conference-event-management" },
  { title: "Research Publication & Academic Collaboration", href: "/services/research-publication" },
  { title: "Corporate Event Management", href: "/services/corporate-event-management" },
  { title: "Brand Promotion & Award Ceremonies", href: "/services/brand-promotion" },
  { title: "Workshops & Training Programs", href: "/services/workshops-training" },
  { title: "Digital Promotion & Event Support", href: "/services/digital-promotion" },
];

const importantLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Benefits", href: "/benefits" },
  { title: "Get a Quote", href: "/quote" },
];

const policies = [
  { title: "Terms & Conditions", href: "/terms-and-conditions" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" },
  { title: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-slate-950 via-primary/95 to-primary">
      <div className="container-custom py-10 md:py-12">
        {/* Rounded glowing footer card */}
        <div className="rounded-3xl border border-primary-foreground/10 bg-primary/90 px-6 py-10 shadow-[0_0_40px_rgba(15,23,42,0.55)] backdrop-blur-sm md:px-10 lg:px-12">
          {/* Top grid: logo + columns */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))] lg:gap-12">
            {/* Brand & contact */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/Brainityx_Logo_Grey.png"
                  alt="BRAINITYX RESEARCHTECH Logo"
                  width={140}
                  height={140}
                  className="h-14 w-auto md:h-16"
                />
              </div>
              <p className="text-sm text-primary-foreground/80 md:text-[0.95rem]">
                © 2025 BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED. All rights reserved.
              </p>
              <div className="space-y-1 text-sm text-primary-foreground/80">
                <p>
                  📧{" "}
                  <a
                    href="mailto:info@branityxresearchtech.in"
                    className="underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                  >
                    info@branityxresearchtech.in
                  </a>
                </p>
                <p>
                  📞{" "}
                  <a
                    href="tel:+919310013376"
                    className="underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
                  >
                    +91-9310013376
                  </a>
                </p>
              </div>
            </div>

            {/* Important Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-primary-foreground/90 md:text-base">
                Important Links
              </h3>
              <ul className="space-y-2 text-sm">
                {importantLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/75 transition-all duration-200 hover:text-primary-foreground hover:font-semibold hover:drop-shadow-sm"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-primary-foreground/90 md:text-base">
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-primary-foreground/75 transition-all duration-200 hover:text-primary-foreground hover:font-semibold hover:drop-shadow-sm"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-primary-foreground/15 pt-6">
            {/* Bottom row: policies + small text */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-[0.8rem]">
                {policies.map((policy, index) => (
                  <span key={policy.href} className="flex items-center">
                    <Link
                      href={policy.href}
                      className="text-primary-foreground/75 transition-colors duration-200 hover:text-primary-foreground hover:underline underline-offset-4"
                    >
                      {policy.title}
                    </Link>
                    {index < policies.length - 1 && (
                      <span className="mx-2 text-primary-foreground/40">|</span>
                    )}
                  </span>
                ))}
              </div>

              <p className="text-xs text-primary-foreground/60 md:text-[0.8rem]">
                Empowering global research, conferences, and professional collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
