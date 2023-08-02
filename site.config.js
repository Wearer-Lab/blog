const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Next Notes",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Digital Health | Wearable | AI",
    bio: "AI-powered wearable app (www.next-notes.com) that helps ambulatory health practitioners create, manage and organize medical records (SOAP, H&P) for online or in-person consultations.",
    email: "hello@next-notes.com",
    linkedin: "Next-Notes",
    github: "Wearer-Lab",
    instagram: "Next-Notes",
  },
  projects: [
    {
      name: `Wearer Lab`,
      href: "https://wearer.xyz",
    },
    {
      name: `Next Notes App`,
      href: "https://next-notes.com",
    }
  ],
  // blog setting (required)
  blog: {
    title: "Blog | Next Notes",
    description: "Welcome to Next Notes Blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://blog.next-notes.com",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "NextNotes", "Healthcare", "Medical", "Doctors", "SOAP Notes", "H&P Notes", "Clinician"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Wearer-Lab/blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
