// EDIT: Change your live domain here when the website is published.
export const SITE_DOMAIN = "https://sitesbyrasul.com";

// EDIT: Update your email, service area, and social links here.
export const CONTACT = {
  email: "rasul@sitesbyrasul.com",
  location: "Serving small businesses",
  instagram: "#",
  tiktok: "#"
};

// EDIT: Web3Forms sends the Free Website Check form to your business email.
// This access key is safe to place in frontend code because Web3Forms is built for static sites.
export const WEB3FORMS = {
  accessKey: "12b02255-6090-4b43-8bf1-661b8e6850fa",
  endpoint: "https://api.web3forms.com/submit"
};

// EDIT: Add, remove, or rewrite services here.
export const services = [
  {
    title: "New Website Build",
    description: "A clean website built from the ground up so customers can quickly understand what you offer."
  },
  {
    title: "Website Redesign",
    description: "A sharper layout, clearer wording, and a more trustworthy first impression for an older site."
  },
  {
    title: "Mobile-Friendly Fixes",
    description: "Make key pages easier to read, tap, and use on phones where most customers browse."
  },
  {
    title: "Contact Forms / Booking Forms",
    description: "Simple forms that help people ask questions, request quotes, or book a time without friction."
  },
  {
    title: "Google Business Profile Help",
    description: "Set up or clean up the basics so customers can find your business faster on Google."
  },
  {
    title: "Basic SEO Setup",
    description: "Page titles, descriptions, headings, and targeted keywords that give search engines a clearer signal."
  },
  {
    title: "Website Speed & Cleanup",
    description: "Remove clutter, tighten up pages, and improve load speed so visitors do not bounce away."
  }
];

// EDIT: Change package names, included items, and quote language here.
export const packages = [
  {
    name: "Starter Website",
    badge: "Simple Start",
    audience: "Good for small businesses that need a basic online presence.",
    priceNote: "$99",
    quoteNote: "Final quote depends on content",
    features: ["1-page website", "Mobile design", "Contact button", "Basic SEO"]
  },
  {
    name: "Business Website",
    badge: "Most Popular",
    audience: "Best for most businesses that need clear pages and a stronger online presence.",
    priceNote: "$150",
    quoteNote: "Final quote depends on pages",
    features: ["3-5 pages", "Services page", "Contact form", "Mobile design", "Basic SEO"]
  },
  {
    name: "Website Refresh",
    badge: "For Existing Sites",
    audience: "For businesses that already have a site but it looks outdated or broken.",
    priceNote: "$75",
    quoteNote: "For light cleanup and fixes",
    features: ["Layout cleanup", "Better wording", "Mobile fixes", "Speed improvements"]
  }
];

// EDIT: Change payment wording here. You do not need a PayPal link for invoices.
// If you later want buttons, add your PayPal link or Cash App tag here and render them in app/page.tsx.
export const PAYMENT = {
  title: "How payment works",
  description:
    "After we agree on the project, I will send a secure PayPal invoice for the exact quote. Cash App is also available.",
  note: "Most small projects can be paid upfront. Larger projects can start with a deposit and the rest before launch.",
  methods: ["PayPal invoice after quote", "Cash App available", "No checkout until details are confirmed"]
};

export const benefits = [
  "Look instantly more professional and legitimate",
  "Make it easier for new customers to find you on Google",
  "Clearly display services, hours, location, and photos",
  "Receive direct calls, messages, and quote requests",
  "Own your online presence instead of relying only on Facebook"
];

export type SampleConcept = {
  title: string;
  description: string;
  accent: string;
  media?: {
    type: "image" | "video";
    src: string;
    alt: string;
  };
};

// EDIT: Add or remove sample work cards here. Media files live in /public/sample-work.
export const sampleConcepts: SampleConcept[] = [
  {
    title: "Preview",
    description: "",
    accent: "gold",
    media: {
      type: "image",
      src: "/sample-work/cozy-chapter-concept.png",
      alt: "Cozy Chapter website concept screenshot"
    }
  },
  {
    title: "Farm Preview",
    description: "",
    accent: "green",
    media: {
      type: "image",
      src: "/sample-work/farm-tractor-livestock-preview.png",
      alt: "Farm tractor and livestock website preview"
    }
  },
  {
    title: "Video Preview",
    description: "",
    accent: "blue",
    media: {
      type: "video",
      src: "/sample-work/website-demo-april-19.mp4",
      alt: "Website demo recording from April 19"
    }
  },
  {
    title: "Demo",
    description: "",
    accent: "cyan",
    media: {
      type: "video",
      src: "/sample-work/website-demo-april-26.mp4",
      alt: "Website demo recording from April 26"
    }
  }
];

// EDIT: Replace this with real client testimonials once you have permission to publish them.
export const feedbackNotes = [
  {
    title: "Client feedback coming soon",
    description: "Real testimonials will be added here after completed projects and client approval."
  },
  {
    title: "Want to be featured?",
    description: "After launch, small businesses can share feedback that may be added here with permission."
  }
];
