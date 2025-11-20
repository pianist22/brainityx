// app/sitemap.js

export const dynamic = "force-static"; // generate at build

const base = "https://brainityxresearchtech.in";

export default function sitemap() {
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },

    // Main static pages
    { url: `${base}/about-us`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/benefits`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-cancellation-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Service pages
    { url: `${base}/services/conference-event-management`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services/research-publication`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services/corporate-event-management`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/services/brand-promotion`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/services/workshops-training`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/services/digital-promotion`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
