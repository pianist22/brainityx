import AboutPageClient from "./AboutPage";


export const metadata = {
  title: "About Us | BRAINITYX RESEARCHTECH",
  description:
    "Learn about BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED, a global platform for academic conferences, research publication support, corporate events, and training programs.",
};

export default function AboutPage(){
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRAINITYX RESEARCHTECH (OPC) PRIVATE LIMITED",
    url: "https://brainityxresearchtech.in",
    logo: "https://brainityxresearchtech.in/Brainityx_Logo.png",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <AboutPageClient/>
    </>
);
}