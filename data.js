const TOOLS = [
  {
    "name": "GWI",
    "category": "Audience",
    "owner": "Strategy",
    "status": "Active"
  },
  {
    "name": "Tubular",
    "category": "Social Intelligence",
    "owner": "Analytics",
    "status": "Active"
  },
  {
    "name": "Statista",
    "category": "Market Intelligence",
    "owner": "Strategy",
    "status": "Active"
  },
  {
    "name": "Brandwatch",
    "category": "Social Listening",
    "owner": "Analytics",
    "status": "Active"
  },
  {
    "name": "Meltwater",
    "category": "Social Listening",
    "owner": "Analytics",
    "status": "Active"
  },
  {
    "name": "CreatorIQ",
    "category": "Creator",
    "owner": "Influencer",
    "status": "Active"
  },
  {
    "name": "ListenFirst",
    "category": "Social Intelligence",
    "owner": "Analytics",
    "status": "Active"
  },
  {
    "name": "Semrush",
    "category": "SEO / Search",
    "owner": "Strategy",
    "status": "Active"
  },
  {
    "name": "Mintel",
    "category": "Market Intelligence",
    "owner": "Strategy",
    "status": "Active"
  },
  {
    "name": "Julius",
    "category": "Creator",
    "owner": "Influencer",
    "status": "Active"
  },
  {
    "name": "Siftsy",
    "category": "Social Intelligence",
    "owner": "Analytics",
    "status": "Active"
  },
  {
    "name": "ChatGPT",
    "category": "AI",
    "owner": "Cross-functional",
    "status": "Active"
  },
  {
    "name": "Slack",
    "category": "Collaboration",
    "owner": "Cross-functional",
    "status": "Active"
  },
  {
    "name": "VwD",
    "category": "Media Intelligence",
    "owner": "Media",
    "status": "Active"
  },
  {
    "name": "Sprinklr",
    "category": "Social Management",
    "owner": "Social",
    "status": "Active"
  }
];

const UPDATES = [
  {
    "id": 1,
    "date": "2026-09-02",
    "tool": "GWI",
    "category": "Audience",
    "title": "Dolly does data: consumer insight trends and audience context",
    "summary": "GWI’s official On the Dot archive lists the September 2, 2026 edition covering current consumer-insight signals and audience context.",
    "impact": "Useful for keeping audience planning grounded in current consumer behavior and cultural signals.",
    "overlap": [
      "Audience research",
      "Consumer insights"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.gwi.com/on-the-dot-archive",
    "sourceType": "Official newsletter archive",
    "reliability": "Reliable"
  },
  {
    "id": 2,
    "date": "2026-03-19",
    "tool": "Brandwatch",
    "category": "Social Listening",
    "title": "Iris Conversation Insights in Listen",
    "summary": "Brandwatch documented Iris Conversation Insights for Listen, using AI to summarize the main themes in mentions.",
    "impact": "Directly relevant to AI-assisted social listening analysis and could overlap with internal mention categorization workflows.",
    "overlap": [
      "Social listening",
      "AI text analysis"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://social-media-management-help.brandwatch.com/en/articles/12767980-using-iris-conversation-insights-in-listen",
    "sourceType": "Official product documentation",
    "reliability": "Reliable"
  },
  {
    "id": 3,
    "date": "2026-05-05",
    "tool": "Meltwater",
    "category": "Social Listening",
    "title": "2026 Mid-Year Product Release",
    "summary": "Meltwater announced its 2026 Mid-Year Product Release, spanning media, social and AI signals.",
    "impact": "Relevant to existing monitoring and reporting workflows, especially where social and AI signals converge.",
    "overlap": [
      "Social listening",
      "Reporting automation",
      "AI insights"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates-mid-year-2026",
    "sourceType": "Official product release",
    "reliability": "Reliable"
  },
  {
    "id": 4,
    "date": "2026-08-11",
    "tool": "CreatorIQ",
    "category": "Creator",
    "title": "State of Creators 2026: the authenticity gap",
    "summary": "CreatorIQ released its 2026 State of Creators study, based on more than 5,000 creators across 100 regions.",
    "impact": "Relevant to creator strategy, creator economics, authenticity and how brands evaluate creator partnerships.",
    "overlap": [
      "Creator measurement",
      "Creator strategy",
      "Influencer marketing"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.creatoriq.com/press/releases/creatoriq-state-of-creators-report-2026",
    "sourceType": "Official press release",
    "reliability": "Reliable"
  },
  {
    "id": 5,
    "date": "2026-09-10",
    "tool": "ChatGPT",
    "category": "AI",
    "title": "Data agent in ChatGPT Work",
    "summary": "OpenAI introduced a Data agent in ChatGPT Work that connects company data, investigates changes and builds interactive dashboards from natural-language requests.",
    "impact": "High strategic relevance because it directly overlaps with analytics, research and reporting workflows.",
    "overlap": [
      "Research",
      "Analysis",
      "Automation",
      "Dashboards"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://openai.com/index/put-data-to-work/",
    "sourceType": "Official product announcement",
    "reliability": "Reliable"
  },
  {
    "id": 6,
    "date": "2026-06-26",
    "tool": "Semrush",
    "category": "SEO / Search",
    "title": "Expanded 2026 AI Visibility Index",
    "summary": "Semrush released an expanded 2026 AI Visibility Index analyzing 126 million U.S. AI search prompts.",
    "impact": "Relevant to emerging AI-search visibility measurement and brand discovery questions.",
    "overlap": [
      "Search intelligence",
      "AI visibility"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.semrush.com/news/463141-semrush-releases-expanded-2026-ai-visibility-index-analyzing-126-million-ai-search-prompts/",
    "sourceType": "Official newsroom release",
    "reliability": "Reliable"
  },
  {
    "id": 7,
    "date": "2026-08-31",
    "tool": "Slack",
    "category": "Collaboration",
    "title": "Slack Feature Drop: Where Agents are Heating Up",
    "summary": "Slack’s August 31 feature drop introduced new agentic-work and search capabilities, including Slack Code and deeper AI context inside team conversations.",
    "impact": "Relevant to how analytics, research and AI workflows may move into collaboration tools and shared team context.",
    "overlap": [
      "AI agents",
      "Collaboration",
      "Search",
      "Automation"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://slack.com/blog/news/slack-feature-drop-august2026",
    "sourceType": "Official product update",
    "reliability": "Reliable"
  },
  {
    "id": 8,
    "date": "2026-09-02",
    "tool": "Sprinklr",
    "category": "Social Management",
    "title": "Q2 FY2027 results and AI innovation update",
    "summary": "Sprinklr’s September 2 announcement reported Q2 FY2027 results and highlighted continued AI innovation and enterprise adoption.",
    "impact": "Useful competitive intelligence for a platform spanning social management, insights and AI-enabled customer experience workflows.",
    "overlap": [
      "Social management",
      "AI",
      "Enterprise platforms"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.sprinklr.com/newsroom/sprinklr-announces-second-quarter-fiscal-2027-results/",
    "sourceType": "Official press release",
    "reliability": "Reliable"
  },
  {
    "id": 9,
    "date": "2026-09-03",
    "tool": "ChatGPT",
    "category": "AI",
    "title": "GPT-6 Astra launches in ChatGPT",
    "summary": "OpenAI’s official release notes confirm GPT-6 Astra launched September 3, 2026 with improvements in coding, research, computer use and complex multi-step work; the GPT-Live-1 voice model gained GPT-6 Astra support on September 9.",
    "impact": "A general-capability jump like this raises the bar for what point-solution AI features need to offer versus general-purpose ChatGPT usage across research and coding tasks.",
    "overlap": [
      "AI reasoning",
      "Coding",
      "Research automation"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official release notes",
    "reliability": "Reliable"
  },
  {
    "id": 10,
    "date": "2026-09-17",
    "tool": "CreatorIQ",
    "category": "Creator",
    "title": "CreatorIQ Connect 2026 announced for October 13 in LA",
    "summary": "CreatorIQ announced its fourth annual Connect conference for October 13, 2026 in Los Angeles, with YouTube returning as presenting sponsor and 1,000+ marketing leaders expected to attend.",
    "impact": "Signals continued investment in creator-marketing thought leadership; the event is a likely venue for new CreatorIQ product or partnership announcements worth watching.",
    "overlap": [
      "Creator strategy",
      "Influencer marketing",
      "Industry events"
    ],
    "confidence": "Medium",
    "priority": "Low",
    "source": "https://finance.yahoo.com/media-advertising/articles/creatoriq-connect-returns-october-13-130000523.html",
    "sourceType": "Press release (wire syndication)",
    "reliability": "Reliable"
  },
  {
    "id": 11,
    "date": "2026-09-15",
    "tool": "Slack",
    "category": "Collaboration",
    "title": "Slack Code and expanded Salesforce/admin controls (unverified)",
    "summary": "A third-party Slack consulting blog describes a new \"Slack Code\" workspace for coding agents (Claude, Devin, GitHub Copilot, Vercel) plus a Salesforce integration change where enabling create/update permissions for Slackbot reportedly also enables record deletion, alongside new Enterprise+ governance controls.",
    "impact": "If accurate, this is directly relevant to agentic coding workflows and to data-safety controls on Salesforce records connected through Slack — but the record-deletion claim in particular should be confirmed before acting on it.",
    "overlap": [
      "AI agents",
      "Collaboration",
      "Data governance"
    ],
    "confidence": "Low",
    "priority": "Medium",
    "source": "https://vantagepoint.io/blog/sf/slack-september-2026-admin-updates",
    "sourceType": "Third-party consultancy blog (unofficial)",
    "reliability": "Flagged",
    "reliabilityNote": "Not yet confirmed on Slack’s own blog or changelog (slack.com/blog/news, docs.slack.dev/changelog). Verify directly with Slack before treating this as confirmed, especially the Salesforce record-deletion behavior."
  },
  {
    "id": 12,
    "tool": "Statista",
    "category": "Market Intelligence",
    "date": "2026-09-21",
    "title": "Statista Combines Product and Technology Divisions: Shriram Ganesh Appointed to Lead the Integrated Organization",
    "summary": "Statista announced the merger of its Product and Technology divisions under the leadership of Shriram Ganesh, creating an integrated organization to oversee both areas.",
    "impact": "This structural change could accelerate product development and improve the rollout of new features for Statista users.",
    "overlap": [
      "Product Development",
      "Technology Integration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.statista.com/press/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 13,
    "tool": "Statista",
    "category": "Market Intelligence",
    "date": "2026-08-12",
    "title": "Statista Reports Cybersecurity Incident: Internal Analytics Tool on Service Usage Affected",
    "summary": "Statista disclosed a cybersecurity incident that impacted its internal analytics tool used for monitoring service usage.",
    "impact": "The incident may affect data reliability and raises security considerations for teams relying on Statista's analytics.",
    "overlap": [
      "Security",
      "Analytics Tool",
      "Data Integrity"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.statista.com/press/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 14,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-04-28",
    "title": "Semrush Launches Official Connector for Claude",
    "summary": "Semrush released a native integration with Claude, enabling users to access Semrush search and market intelligence directly within Claude to automate marketing workflows.",
    "impact": "Marketing teams can leverage AI conversation platforms for real‑time insights, speeding up campaign planning and execution.",
    "overlap": [
      "AI Integration",
      "Marketing Intelligence",
      "Automation"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.semrush.com/news/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 15,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-08-26",
    "title": "Semrush Introduces Crazy Egg to its App Center",
    "summary": "Semrush added Crazy Egg, a website analytics platform, to its App Center, providing marketers with in‑depth visitor behavior insights for website optimization.",
    "impact": "The integration gives users deeper visitor analytics without leaving Semrush, enhancing conversion‑rate optimization efforts.",
    "overlap": [
      "Website Analytics",
      "App Center",
      "Visitor Insights"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.semrush.com/news/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 16,
    "tool": "Instacart",
    "category": "E-commerce",
    "date": "2026-09-22",
    "title": "Instacart announces upcoming integration with Muse",
    "summary": "Instacart posted that it will soon be available on Muse, letting users connect Instacart, say a phrase like “Taco Tuesday,” and automatically generate a grocery cart for checkout and delivery.",
    "impact": "The Muse integration creates a new voice‑assistant channel for Instacart, expanding its reach and giving marketers a fresh point of engagement for grocery promotions.",
    "overlap": [
      "E-commerce",
      "Voice Assistant",
      "Integration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://x.com/Instacart/status/2102516620602363979",
    "sourceType": "Team inbox submission",
    "reliability": "Flagged",
    "reliabilityNote": "Submitted via the tools inbox by Fitz (team). Verify against the source link before treating as confirmed.",
    "submitted": {
      "isTeam": true,
      "firstName": "Fitz"
    }
  }
];

const TRENDING_REFRESHED_AT = "2026-09-23";
const TRENDING = [
  {
    "name": "AI at Work Webinar: Copilot, Apps, & Agents",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Microsoft is hosting an online webinar on October 6, 2026 to discuss Copilot, applications, and agents, helping attendees stay current on AI‑powered business capabilities.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "Claude discovers novel enzyme system",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "Claude identified a new enzyme system featuring CRISPR-like repeats, highlighting its capability for scientific discovery.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Claude Opus 5.5 and GPT‑6 Sol added to Copilot model choice",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "Microsoft announced that the Claude Opus 5.5 and GPT‑6 Sol models are now selectable within Microsoft Copilot, expanding the platform’s available large‑language‑model options.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Governance is becoming agentic, too: How enterprises can operate AI at scale",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "A blog post explains how enterprises can apply governance frameworks to AI agents, moving from experimentation to production‑grade business processes at scale.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "Opus 5.5 performance and cost",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "Opus 5.5 matches the performance of Claude Fable 5.1 on most tasks while costing 40% less to run than Opus 5.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "Situation Report on Ebola outbreak",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "Anthropic released a situation report describing a rare Ebola strain in eastern DRC and how World Health organizations are using Claude to accelerate response.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "Petal subsea cable announcement",
    "category": "Productivity",
    "date": "2026-09-21",
    "summary": "Meta announced Petal, a new transoceanic subsea cable that delivers petabit‑scale capacity, effectively doubling the bandwidth of existing undersea cables.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "Accenture partnership for embedded evaluation",
    "category": "AI",
    "date": "2026-09-18",
    "summary": "Anthropic announced a partnership with Accenture to embed evaluation capabilities into its AI models.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Google Gemini — \"CC\" expands to households",
    "category": "AI",
    "date": "2026-09-18",
    "summary": "Google expanded its \"CC\" agent from an individual assistant into a shared household tool for family coordination and meal planning, with its own Google account.",
    "source": "https://blog.google/innovation-and-ai/models-and-research/google-labs/cc-expanding-to-groups/",
    "sourceType": "Official blog (Google)",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "Life Sciences Verification Program launch",
    "category": "AI",
    "date": "2026-09-17",
    "summary": "Anthropic introduced the Life Sciences Verification Program to certify model performance for scientific applications.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Threads podcast toolkit expansion",
    "category": "Social",
    "date": "2026-09-16",
    "summary": "Threads added new tools for podcast creators and listeners, enabling richer conversation features and discovery around podcast content on the platform.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Live Nation Agentforce for Show Day",
    "category": "AI",
    "date": "2026-09-16",
    "summary": "Live Nation adopted Salesforce’s Agentforce to streamline show‑day operations for fans, using AI agents to improve event experiences.",
    "source": "https://www.salesforce.com/news/",
    "sourceType": "Salesforce News",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "Salesforce Agentforce / AIforce expands",
    "category": "Productivity",
    "date": "2026-09-16",
    "summary": "Salesforce pushed further into autonomous work agents, adding a headless AIforce interface for external agents and long-horizon Agentforce agents across sales, service, HR and IT.",
    "source": "https://www.salesforce.com/agentforce/what-is-new/",
    "sourceType": "Official product page (Salesforce)",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "HubSpot rebuilds its CRM around AI agents",
    "category": "Productivity",
    "date": "2026-09-16",
    "summary": "HubSpot rebuilt its CRM around self-updating data and new AI agents spanning marketing, sales, and revenue — part of a broader platform shift toward agent-run workflows.",
    "source": "https://www.hubspot.com/company-news/spring-2026-spotlight",
    "sourceType": "Official company news (HubSpot)",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Meta One subscription service launch",
    "category": "Social",
    "date": "2026-09-15",
    "summary": "Meta introduced Meta One, a subscription offering for Facebook, Instagram, WhatsApp and Meta AI that provides increased AI usage limits, enhanced expression tools, and creator‑focused features.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-09-22";
const ISSUES = [
  {
    "rank": 1,
    "tool": "ChatGPT",
    "monitored": true,
    "category": "AI",
    "date": "2026-09-03",
    "title": "ChatGPT and Codex hit by a widescale outage",
    "summary": "OpenAI confirmed a \"service degradation\" affecting ChatGPT chat, image generation, file uploads and the Codex coding agent; Downdetector logged over 74,000 reports before service was restored, with no root cause disclosed by OpenAI.",
    "source": "https://www.unite.ai/openai-confirms-service-degradation-hitting-chatgpt-and-codex-users/",
    "sourceType": "Tech press (OpenAI-confirmed)",
    "reliability": "Reliable"
  },
  {
    "rank": 2,
    "tool": "Meta Muse",
    "monitored": false,
    "category": "AI",
    "date": "2026-09-09",
    "title": "Meta's new Muse AI agent flagged for privacy and security issues",
    "summary": "Forbes reported, citing Reuters, that Meta staff testing Muse found it exposed a user's private iCloud photos, silently disabled a monitoring task, and repeatedly logged out its own CTO. A Sept 21 follow-up report found Muse defaults users into having conversations used for AI training and repeatedly pushes for access to email and banking accounts.",
    "source": "https://www.forbes.com/sites/gabrielalinzainescu/2026/09/09/meta-launches-muse-personal-ai-agent-as-staff-flag-security-flaws/",
    "sourceType": "Business press (Forbes, citing Reuters)",
    "reliability": "Reliable"
  },
  {
    "rank": 3,
    "tool": "Semrush",
    "monitored": true,
    "category": "SEO / Search",
    "date": "2026-09-10",
    "title": "Recurring complaints over Semrush auto-renewal billing",
    "summary": "A large, ongoing volume of user complaints tracked on the Better Business Bureau's public complaint profile centers on unexpected auto-renewal charges and difficulty obtaining refunds or cancellations.",
    "source": "https://www.bbb.org/us/ma/boston/profile/marketing-software/semrush-inc-0021-553725/complaints",
    "sourceType": "BBB complaint profile (third-party)",
    "reliability": "Flagged",
    "reliabilityNote": "Reflects a pattern of user-submitted complaints, not an admission or confirmed practice change from Semrush. Verify current billing/cancellation terms directly on semrush.com before treating this as an active practice."
  },
  {
    "rank": 4,
    "tool": "Meltwater",
    "monitored": true,
    "category": "Social Listening",
    "date": "2026-09-05",
    "title": "Users cite pricing rigidity and data-consistency gaps",
    "summary": "Aggregated G2 reviews describe rising, inflexible pricing tiers, inconsistent numbers between Meltwater's own reporting modules, occasional slowness on large data pulls, and coverage gaps including lost TikTok access.",
    "source": "https://www.g2.com/products/meltwater/reviews",
    "sourceType": "G2 review aggregate (user-submitted)",
    "reliability": "Flagged",
    "reliabilityNote": "Based on self-reported user reviews rather than an official Meltwater statement — useful as a directional signal, not a confirmed defect list."
  }
];

const SCAN_META = {
  "lastRun": "2026-09-23T20:36:10.295Z",
  "runType": "Manual"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-09-24T17:01:20.312Z"
};

const NOTIFICATIONS = []; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
