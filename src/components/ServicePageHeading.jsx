"use client"

import { usePathname } from "next/navigation";


function formatSlug(slug) {
  if (!slug) return "";
  const words = slug.split("-").filter(Boolean);

  return words
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === "and") return "&";
      if (["of", "for", "in", "to", "on"].includes(lower)) {
        return lower;
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

/**
 * Heading for service detail pages.
 * Example URL: /services/conference-event-management
 * Breadcrumb: "Services > Conference Event Management"
 * H1:        "Conference Event Management"
 */
export default function ServicePageHeading({ subtitle }) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Last segment is the specific service slug
  const serviceSlug = segments[segments.length - 1] || "";
  const serviceName = formatSlug(serviceSlug);

  // Parent segment "services" -> label
  const breadcrumbRoot = "Services";

  const breadcrumb = `${breadcrumbRoot} > ${serviceName || "Service"}`;

  return (
    <header className="mb-8 md:mb-10">
      {/* Small breadcrumb line */}
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {breadcrumb}
      </p>

      {/* Main page title */}
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {serviceName || "Service"}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}
