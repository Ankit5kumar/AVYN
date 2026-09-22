// Central place to edit your brand details, copy, and contact info.
// Everything on the site pulls from here — rename the studio, swap the
// pitch, and update links without touching component files.

export const siteConfig = {
  name: "AVYN",
  domain: "avyn.in",
  tagline: "We build your presence. We keep your books straight.",
  location: "Parwanoo, Himachal Pradesh",
  email: "hello@avyn.in",
  phone: "+91 00000 00000",
  social: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourhandle",
  },
};

// Swap these in once you have real pilot/case-study work — keep this
// section honest and empty (or hidden) until then rather than filling
// it with placeholder claims.
export const featuredWork: {
  title: string;
  tag: string;
  summary: string;
}[] = [
  {
    tag: "Web development",
    title: "Add your first project here",
    summary:
      "Replace with a one-line result once you've completed a pilot site or accounting cleanup.",
  },
  {
    tag: "Finance & compliance",
    title: "Add your second project here",
    summary:
      "A short, honest line on the outcome works better than a long description.",
  },
];

export const services = [
  {
    title: "Websites & web apps",
    detail:
      "Built on the MERN stack — fast, mobile-friendly sites and simple booking or catalogue tools for local businesses.",
  },
  {
    title: "Business listings & online presence",
    detail:
      "Google Business Profile setup, directory listings, and social page structuring so customers can actually find you.",
  },
  {
    title: "Accounting & compliance",
    detail:
      "Bookkeeping, GST filing, and financial statements handled by a practicing Chartered Accountant.",
  },
  {
    title: "Ongoing support",
    detail:
      "One point of contact for both your site and your books, instead of juggling two separate vendors.",
  },
];

export const process = [
  {
    step: "01",
    title: "We look at what you have",
    detail:
      "A short call to understand your business, your current online presence (if any), and where your books stand.",
  },
  {
    step: "02",
    title: "We build in the open",
    detail:
      "You see drafts of the site as it's built and get a plain-language summary of what's needed on the accounting side.",
  },
  {
    step: "03",
    title: "We hand it over and stay on",
    detail:
      "Launch the site, file what needs filing, and stay available for updates — not a one-time drop-off.",
  },
];
