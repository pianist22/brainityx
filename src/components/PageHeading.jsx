"use client";

import { usePathname } from "next/navigation";

/**
 * Derives a human‑readable heading from the current URL.
 * Example: /terms-and-conditions -> "Terms & Conditions"
 */
function getHeadingFromPath(pathname) {
  if (!pathname || pathname === "/") return "Home";

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";

  const words = lastSegment.split("-").filter(Boolean);

  if (words.length === 0) return "Page";

  const formattedWords = words.map((word) => {
    const lower = word.toLowerCase();

    if (lower === "and") return "&";

    // Keep short words like “of”, “for”, “in” lowercase for better typography
    if (["of", "for", "in", "to", "on"].includes(lower)) {
      return lower;
    }

    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });

  return formattedWords.join(" ");
}

/**
 * Reusable heading block.
 * - Automatically generates a title from the current route.
 * - Optional `subtitle` for page-specific description.
 */
export default function PageHeading({ subtitle }) {
  const pathname = usePathname();
  const title = getHeadingFromPath(pathname);

  return (
    <header className="mb- md:mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Brainityx Researchtech
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}
    </header>
  );
}

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
export function ServicePageHeading({ subtitle }) {
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
