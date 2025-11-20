// app/robots.js

export const dynamic = "force-static"; // ensure generated at build time

export default function robots() {
  const baseUrl = "https://brainityxresearchtech.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
