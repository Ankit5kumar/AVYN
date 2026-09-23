// Central place to edit your brand details, copy, and contact info.
// Everything on the site pulls from here — rename the studio, swap the
// pitch, and update links without touching component files.

export const siteConfig = {
  name: "AVYN",
  domain: "avyn.in",
  tagline: "Ideas today. Presence that grows tomorrow.",
  location: "Gurgaon, Haryana",
  email: "hello@avyn.in",
  phone: "+91 00000 00000",
  social: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourhandle",
  },
};

// Swap these in with your real live project URLs — replace title,
// summary, and add a url. Keep this section honest: only list work
// you actually built.
export const featuredWork: {
  title: string;
  tag: string;
  summary: string;
  url?: string;
}[] = [
  {
    tag: "Website",
    title: "Add your first live project here",
    summary:
      "Replace with the client/project name, what you built, and a link to the live site.",
  },
  {
    tag: "Social & content",
    title: "Add your second project here",
    summary:
      "A short, honest line on the outcome works better than a long description.",
  },
];

export const services = [
  {
    title: "Social Media Management",
    detail:
      "Instagram, LinkedIn and Facebook handled end to end — content planning, regular posts, carousels, reels and profile optimisation.",
  },
  {
    title: "Content & Creative Design",
    detail:
      "Graphics, carousels, reels and business content designed to communicate your brand clearly and actually get attention.",
  },
  {
    title: "Website Development & Management",
    detail:
      "Professional websites built and kept updated, relevant and user-friendly — not a one-time build you're left to maintain alone.",
  },
  {
    title: "Brand & Profile Enhancement",
    detail:
      "Business profiles, bios and visual identity refined so your presence looks as professional as your work.",
  },
  {
    title: "SEO & Digital Growth",
    detail:
      "Search visibility and growth strategy focused on sustainable results, not shortcuts.",
  },
];

export const process = [
  {
    step: "01",
    title: "We look at what you have",
    detail:
      "A short call to understand your business and audit your current online presence, if any.",
  },
  {
    step: "02",
    title: "We build in the open",
    detail:
      "You see drafts and content plans as they're made, not a single reveal at the end.",
  },
  {
    step: "03",
    title: "We hand it over and stay on",
    detail:
      "Launch, and stay available for ongoing content, updates and growth — not a one-time drop-off.",
  },
];
