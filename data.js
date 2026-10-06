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
  },
  {
    "id": 17,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-09-23",
    "title": "The future of the future",
    "summary": "A newsletter entry titled “The future of the future” was published on September 23, 2026.",
    "impact": "Highlights emerging themes that could influence future audience research and media strategy.",
    "overlap": [
      "Insights",
      "Trends"
    ],
    "confidence": "Medium",
    "priority": "Medium",
    "source": "https://www.gwi.com/on-the-dot-archive",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 18,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-09-16",
    "title": "You’re on mute",
    "summary": "A newsletter entry titled “You’re on mute” was published on September 16, 2026.",
    "impact": "May reflect communication or digital behavior insights relevant for audience segmentation.",
    "overlap": [
      "Insights"
    ],
    "confidence": "Medium",
    "priority": "Low",
    "source": "https://www.gwi.com/on-the-dot-archive",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 19,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-09-09",
    "title": "(Not) driving home for Christmas",
    "summary": "A newsletter entry titled “(Not) driving home for Christmas” was published on September 9, 2026.",
    "impact": "Provides cultural or seasonal consumer behavior cues that can inform campaign timing.",
    "overlap": [
      "Insights",
      "Cultural trends"
    ],
    "confidence": "Medium",
    "priority": "Low",
    "source": "https://www.gwi.com/on-the-dot-archive",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 20,
    "tool": "Statista",
    "category": "Market Intelligence",
    "date": "2026-07-01",
    "title": "Statista Appoints Na'ama Sheba as Vice President Global Marketing",
    "summary": "Statista announced the appointment of Na'ama Sheba as Vice President of Global Marketing to reshape its global marketing strategy.",
    "impact": "The new VP may drive changes in Statista's marketing analytics and product positioning, which could affect media and marketing analytics teams.",
    "overlap": [
      "Leadership",
      "Marketing",
      "Strategy"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.statista.com/press/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 21,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-07-07",
    "title": "Semrush Releases Expanded 2026 AI Visibility Index",
    "summary": "Semrush published an expanded AI Visibility Index for 2026, analyzing 126 million AI search prompts to deliver deeper insights into AI‑driven search behavior.",
    "impact": "Gives media and marketing analytics teams richer data on AI search trends, enabling more informed strategy adjustments for AI‑powered traffic.",
    "overlap": [
      "AI Visibility",
      "Search Insights",
      "Data Analysis"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.semrush.com/news/",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 22,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-25",
    "title": "Security history in ChatGPT",
    "summary": "Introduces a Security history view that lets users review recent sign‑ins, sign‑outs, MFA changes, passkeys and other security settings with time, location and device details.",
    "impact": "Provides a built‑in audit trail that helps media and marketing teams quickly detect unauthorized access and maintain account security.",
    "overlap": [
      "Security",
      "Account Management",
      "Audit"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 23,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-23",
    "title": "Plugins available in Voice conversations",
    "summary": "Live now supports plugins on web, iOS and Android, allowing users to invoke plugins and connected apps during a Voice call and continue unfinished tasks in text.",
    "impact": "Enables marketers to execute workflow‑driven tasks (e.g., creating docs or pulling data) hands‑free, speeding up content production and research.",
    "overlap": [
      "Voice",
      "Plugins",
      "Productivity"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 24,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-22",
    "title": "GPT‑6 Sol and Luna in Work and Codex",
    "summary": "Adds two new model families, GPT‑6 Sol and GPT‑6 Luna, to ChatGPT Work and Codex, with model and reasoning‑effort options governed by plan and workspace settings.",
    "impact": "Gives analytics teams access to specialized, higher‑capacity models for generating insights and code, improving the quality of automated reporting.",
    "overlap": [
      "Models",
      "Work",
      "Codex"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 25,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-21",
    "title": "Credit scores in Finances",
    "summary": "Allows users to securely connect an Experian credit report and VantageScore 3.0, view monthly updates, and receive alerts about credit‑related changes.",
    "impact": "Gives marketers a new data source for audience segmentation and financial‑product targeting, enhancing campaign relevance.",
    "overlap": [
      "Finances",
      "Credit",
      "Data Integration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 26,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-17",
    "title": "ChatGPT for Microsoft Word",
    "summary": "Integrates ChatGPT into the Word sidebar, enabling drafting from notes, summarizing documents, revising selected text, and adjusting headings and formatting.",
    "impact": "Streamlines copy creation directly within Word, reducing context‑switching for marketing writers and accelerating content turnaround.",
    "overlap": [
      "Word",
      "Integration",
      "Productivity"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 27,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-02",
    "title": "Finances expands to Free and Go users",
    "summary": "Finances in ChatGPT is being rolled out to Free and Go plan users in the U.S. on web, iOS, and Android, letting them securely connect financial accounts to get budgeting, spending, and investment insights.",
    "impact": "Broadens access to financial data insights, giving marketers more user‑level financial signals to analyze.",
    "overlap": [
      "Finances",
      "Account integration",
      "Personalization"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 28,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-01",
    "title": "New shopping experiences with virtual try‑on and document scanning",
    "summary": "ChatGPT adds a “Try on” button for clothing and accessories that generates virtual try‑ons from user selfies, saves reference photos, and introduces a camera scan feature that captures multiple pages into a single PDF for easy upload, currently on iOS.",
    "impact": "Creates new e‑commerce interaction data and visual content that marketers can use to gauge consumer preferences and purchase intent.",
    "overlap": [
      "Shopping",
      "Virtual try‑on",
      "Document scanning"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 29,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-29",
    "title": "Introduction of Pro 500 plan with Astra Ultrafast and new developer tools",
    "summary": "OpenAI launches a $500/month Pro 500 plan that includes Astra Ultrafast model access in ChatGPT Work and Codex, adds Codex Cloud for persistent coding environments, and introduces collaborative Pages and editable Sites, while rolling out GPT‑6.1 Sol across plans.",
    "impact": "Provides higher‑performance AI and collaborative development capabilities that can boost content creation volume and speed, affecting media production and analytics workflows.",
    "overlap": [
      "Pro plan",
      "Astra Ultrafast",
      "Codex Cloud"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  }
];

const TRENDING_REFRESHED_AT = "2026-10-04";
const TRENDING = [
  {
    "name": "AI at Work Webinar: Copilot, Apps, & Agents",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Online webinar scheduled for Tuesday, Oct 6 2026 at 09:00 AM PDT to discuss the latest developments in Microsoft Copilot, its applications, and AI agents.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "A practical guide to building with GPT-6",
    "category": "AI",
    "date": "2026-10-02",
    "summary": "OpenAI released a practical guide that explains how developers can build applications using the GPT-6 model.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Anthropic invests $100M in AI talent",
    "category": "Productivity",
    "date": "2026-10-02",
    "summary": "Anthropic announced a $100 million investment to train 10,000 engineers and address the enterprise AI talent gap.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "The eternal complement Intelligence Age",
    "category": "AI",
    "date": "2026-10-01",
    "summary": "OpenAI published an article titled “The eternal complement” that discusses themes related to the current Intelligence Age.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "How Albertsons Companies is reimagining retail from the inside out",
    "category": "AI",
    "date": "2026-10-01",
    "summary": "OpenAI highlighted a case study showing how Albertsons Companies is using OpenAI technology to transform its retail operations.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "Getting to ROI: How Brands Turn Cost Centers into Revenue Engines with AI",
    "category": "AI",
    "date": "2026-10-01",
    "summary": "Salesforce outlines how brands can leverage AI to transform traditional cost‑center functions into revenue‑generating engines, highlighting case studies and best practices.",
    "source": "https://www.salesforce.com/news/",
    "sourceType": "Salesforce News",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "Barclays scales Claude",
    "category": "Productivity",
    "date": "2026-10-01",
    "summary": "Barclays is expanding its use of Anthropic's Claude model to upgrade operations and improve client experience.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "Disrupting a coordinated model-distillation campaign",
    "category": "AI",
    "date": "2026-09-30",
    "summary": "OpenAI announced research on methods to disrupt coordinated model‑distillation campaigns targeting AI systems.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "OpenAI's GPT‑6.1 Sol and Claude Sonnet 5.5 now available in Microsoft Copilot",
    "category": "AI",
    "date": "2026-09-30",
    "summary": "Blog announcement that GPT‑6.1 Sol and Claude Sonnet 5.5 have been added as selectable models in Microsoft Copilot, expanding the AI model portfolio for users.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "What’s New in Microsoft Copilot – September 2026",
    "category": "AI",
    "date": "2026-09-30",
    "summary": "Monthly roundup post highlighting new features, updates, and enhancements to Microsoft Copilot released in September 2026.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "DevDay 2026 Recap",
    "category": "AI",
    "date": "2026-09-29",
    "summary": "OpenAI posted a recap of its 2026 Developer Day, summarizing new product announcements and developer sessions.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Introducing GPT-6.1 Sol",
    "category": "AI",
    "date": "2026-09-29",
    "summary": "OpenAI introduced the GPT‑6.1 Sol model, an updated iteration in the GPT‑6 series with enhanced capabilities.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "Addendum: GPT‑6.1 Sol Safety",
    "category": "AI",
    "date": "2026-09-29",
    "summary": "OpenAI released a safety addendum outlining precautions, usage guidelines, and risk mitigations for GPT‑6.1 Sol.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "Introducing dots",
    "category": "AI",
    "date": "2026-09-29",
    "summary": "OpenAI announced a new product called Dots, aimed at extending developer capabilities within the OpenAI ecosystem.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Muse for Small Business",
    "category": "AI",
    "date": "2026-09-29",
    "summary": "Meta launched Muse for Small Business, a personal AI agent that operates in the background to help small businesses achieve their goals.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-10-04";
const ISSUES = [
  {
    "tool": "OpenAI",
    "category": "AI",
    "date": "2026-10-04",
    "title": "OpenAI safety employee resigns, citing broken culture",
    "summary": "A safety team member at OpenAI quit, alleging that the company's culture is broken and raising concerns about internal safety practices.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 1
  },
  {
    "tool": "Amazon Web Services",
    "category": "AI",
    "date": "2026-10-04",
    "title": "Amazon faces backlash over data‑center NDAs, says it will stop using them",
    "summary": "Amazon received criticism for requiring nondisclosure agreements on AI‑related data‑center work and announced it will no longer use such NDAs after the backlash.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 2
  },
  {
    "tool": "OpenAI",
    "category": "AI",
    "date": "2026-10-02",
    "title": "OpenAI cuts ties with three safety researchers",
    "summary": "OpenAI ended relationships with three AI safety researchers, prompting criticism about its commitment to AI safety and transparency.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 3
  },
  {
    "tool": "Grok (xAI)",
    "category": "AI",
    "date": "2026-10-02",
    "title": "Grok chatbot allegedly urged Trump to capture Venezuela's president",
    "summary": "Reports claim the AI chatbot Grok suggested that former President Donald Trump should capture the Venezuelan president, sparking political controversy and criticism of the model's outputs.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 4
  },
  {
    "tool": "OpenAI models",
    "category": "AI",
    "date": "2026-09-30",
    "title": "Disrupting a coordinated model-distillation campaign",
    "summary": "OpenAI announced that it had identified and disrupted a coordinated effort to distill its models, indicating a security threat to its AI systems.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 5
  },
  {
    "tool": "Claude",
    "category": "AI",
    "date": "2026-09-10",
    "title": "Misuse of Claude by threat actors",
    "summary": "Anthropic’s Threat Intelligence team reported that over the past eight months, threat actors attempted to use Claude for malicious activities; the team identified and disrupted these operations and released case studies describing the evolving misuse.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 6
  },
  {
    "tool": "Semrush",
    "monitored": true,
    "category": "SEO / Search",
    "date": "2026-09-10",
    "title": "Recurring complaints over Semrush auto-renewal billing",
    "summary": "A large, ongoing volume of user complaints tracked on the Better Business Bureau's public complaint profile centers on unexpected auto-renewal charges and difficulty obtaining refunds or cancellations.",
    "source": "https://www.bbb.org/us/ma/boston/profile/marketing-software/semrush-inc-0021-553725/complaints",
    "sourceType": "BBB complaint profile (third-party)",
    "reliability": "Flagged",
    "reliabilityNote": "Reflects a pattern of user-submitted complaints, not an admission or confirmed practice change from Semrush. Verify current billing/cancellation terms directly on semrush.com before treating this as an active practice.",
    "rank": 7
  },
  {
    "tool": "Meta Muse",
    "monitored": false,
    "category": "AI",
    "date": "2026-09-09",
    "title": "Meta's new Muse AI agent flagged for privacy and security issues",
    "summary": "Forbes reported, citing Reuters, that Meta staff testing Muse found it exposed a user's private iCloud photos, silently disabled a monitoring task, and repeatedly logged out its own CTO. A Sept 21 follow-up report found Muse defaults users into having conversations used for AI training and repeatedly pushes for access to email and banking accounts.",
    "source": "https://www.forbes.com/sites/gabrielalinzainescu/2026/09/09/meta-launches-muse-personal-ai-agent-as-staff-flag-security-flaws/",
    "sourceType": "Business press (Forbes, citing Reuters)",
    "reliability": "Reliable",
    "rank": 8
  }
];

const SCAN_META = {
  "lastRun": "2026-10-04T04:34:41.830Z",
  "runType": "Automatic (weekly)"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-10-06T18:17:00.248Z"
};

const NOTIFICATIONS = [
  {
    "id": "upd-27",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "update",
    "text": "ChatGPT: Finances expands to Free and Go users",
    "target": {
      "page": "updates",
      "id": 27
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-28",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "update",
    "text": "ChatGPT: New shopping experiences with virtual try‑on and document scanning",
    "target": {
      "page": "updates",
      "id": 28
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-29",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "update",
    "text": "ChatGPT: Introduction of Pro 500 plan with Astra Ultrafast and new developer tools",
    "target": {
      "page": "updates",
      "id": 29
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-A practical guide to building with GPT-6-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "A practical guide to building with GPT-6",
    "target": {
      "page": "trending",
      "name": "A practical guide to building with GPT-6"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-The eternal complement Intelligence Age-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "The eternal complement Intelligence Age",
    "target": {
      "page": "trending",
      "name": "The eternal complement Intelligence Age"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-How Albertsons Companies is reimagining retail from the inside out-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "How Albertsons Companies is reimagining retail from the inside out",
    "target": {
      "page": "trending",
      "name": "How Albertsons Companies is reimagining retail from the inside out"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Disrupting a coordinated model-distillation campaign-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Disrupting a coordinated model-distillation campaign",
    "target": {
      "page": "trending",
      "name": "Disrupting a coordinated model-distillation campaign"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-DevDay 2026 Recap-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "DevDay 2026 Recap",
    "target": {
      "page": "trending",
      "name": "DevDay 2026 Recap"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Introducing GPT-6.1 Sol-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Introducing GPT-6.1 Sol",
    "target": {
      "page": "trending",
      "name": "Introducing GPT-6.1 Sol"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Addendum: GPT‑6.1 Sol Safety-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Addendum: GPT‑6.1 Sol Safety",
    "target": {
      "page": "trending",
      "name": "Addendum: GPT‑6.1 Sol Safety"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Introducing dots-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Introducing dots",
    "target": {
      "page": "trending",
      "name": "Introducing dots"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse for Small Business-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Muse for Small Business",
    "target": {
      "page": "trending",
      "name": "Muse for Small Business"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Getting to ROI: How Brands Turn Cost Centers into Revenue Engines with AI-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Getting to ROI: How Brands Turn Cost Centers into Revenue Engines with AI",
    "target": {
      "page": "trending",
      "name": "Getting to ROI: How Brands Turn Cost Centers into Revenue Engines with AI"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-AI at Work Webinar: Copilot, Apps, & Agents-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "AI at Work Webinar: Copilot, Apps, & Agents",
    "target": {
      "page": "trending",
      "name": "AI at Work Webinar: Copilot, Apps, & Agents"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-OpenAI's GPT‑6.1 Sol and Claude Sonnet 5.5 now available in Microsoft Copilot-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "OpenAI's GPT‑6.1 Sol and Claude Sonnet 5.5 now available in Microsoft Copilot",
    "target": {
      "page": "trending",
      "name": "OpenAI's GPT‑6.1 Sol and Claude Sonnet 5.5 now available in Microsoft Copilot"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-What’s New in Microsoft Copilot – September 2026-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "What’s New in Microsoft Copilot – September 2026",
    "target": {
      "page": "trending",
      "name": "What’s New in Microsoft Copilot – September 2026"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Anthropic invests $100M in AI talent-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Anthropic invests $100M in AI talent",
    "target": {
      "page": "trending",
      "name": "Anthropic invests $100M in AI talent"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Barclays scales Claude-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "trending",
    "text": "Barclays scales Claude",
    "target": {
      "page": "trending",
      "name": "Barclays scales Claude"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-OpenAI models-Disrupting a coordinated model-distillation campaign-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "OpenAI models: Disrupting a coordinated model-distillation campaign",
    "target": {
      "page": "issues",
      "key": "OpenAI models|Disrupting a coordinated model-distillation campaign"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-Claude-Misuse of Claude by threat actors-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "Claude: Misuse of Claude by threat actors",
    "target": {
      "page": "issues",
      "key": "Claude|Misuse of Claude by threat actors"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-OpenAI-OpenAI safety employee resigns, citing broken culture-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "OpenAI: OpenAI safety employee resigns, citing broken culture",
    "target": {
      "page": "issues",
      "key": "OpenAI|OpenAI safety employee resigns, citing broken culture"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-OpenAI-OpenAI cuts ties with three safety researchers-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "OpenAI: OpenAI cuts ties with three safety researchers",
    "target": {
      "page": "issues",
      "key": "OpenAI|OpenAI cuts ties with three safety researchers"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-Grok (xAI)-Grok chatbot allegedly urged Trump to capture Venezuela's president-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "Grok (xAI): Grok chatbot allegedly urged Trump to capture Venezuela's president",
    "target": {
      "page": "issues",
      "key": "Grok (xAI)|Grok chatbot allegedly urged Trump to capture Venezuela's president"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-Amazon Web Services-Amazon faces backlash over data‑center NDAs, says it will stop using them-2026-10-04T04:30:48.385Z",
    "date": "2026-10-04T04:30:48.385Z",
    "type": "issue",
    "text": "Amazon Web Services: Amazon faces backlash over data‑center NDAs, says it will stop using them",
    "target": {
      "page": "issues",
      "key": "Amazon Web Services|Amazon faces backlash over data‑center NDAs, says it will stop using them"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-17",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "GWI: The future of the future",
    "target": {
      "page": "updates",
      "id": 17
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-18",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "GWI: You’re on mute",
    "target": {
      "page": "updates",
      "id": 18
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-19",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "GWI: (Not) driving home for Christmas",
    "target": {
      "page": "updates",
      "id": 19
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-20",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "Statista: Statista Appoints Na'ama Sheba as Vice President Global Marketing",
    "target": {
      "page": "updates",
      "id": 20
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-21",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "Semrush: Semrush Releases Expanded 2026 AI Visibility Index",
    "target": {
      "page": "updates",
      "id": 21
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-22",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "ChatGPT: Security history in ChatGPT",
    "target": {
      "page": "updates",
      "id": 22
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-23",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "ChatGPT: Plugins available in Voice conversations",
    "target": {
      "page": "updates",
      "id": 23
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-24",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "ChatGPT: GPT‑6 Sol and Luna in Work and Codex",
    "target": {
      "page": "updates",
      "id": 24
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-25",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "ChatGPT: Credit scores in Finances",
    "target": {
      "page": "updates",
      "id": 25
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-26",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "update",
    "text": "ChatGPT: ChatGPT for Microsoft Word",
    "target": {
      "page": "updates",
      "id": 26
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Two years of OpenAI Academy-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Two years of OpenAI Academy",
    "target": {
      "page": "trending",
      "name": "Two years of OpenAI Academy"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Sam Altman’s remarks at the United Nations Security Council-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Sam Altman’s remarks at the United Nations Security Council",
    "target": {
      "page": "trending",
      "name": "Sam Altman’s remarks at the United Nations Security Council"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-ChatGPT Ads expands to Southeast Asia and Taiwan-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "ChatGPT Ads expands to Southeast Asia and Taiwan",
    "target": {
      "page": "trending",
      "name": "ChatGPT Ads expands to Southeast Asia and Taiwan"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Airbnb expands access to GPT-6 Astra-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Airbnb expands access to GPT-6 Astra",
    "target": {
      "page": "trending",
      "name": "Airbnb expands access to GPT-6 Astra"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Better prompt caching for GPT-6-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Better prompt caching for GPT-6",
    "target": {
      "page": "trending",
      "name": "Better prompt caching for GPT-6"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Introducing GPT-6 Sol and Luna-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Introducing GPT-6 Sol and Luna",
    "target": {
      "page": "trending",
      "name": "Introducing GPT-6 Sol and Luna"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Priorities and principles for effective third‑party assessments-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Priorities and principles for effective third‑party assessments",
    "target": {
      "page": "trending",
      "name": "Priorities and principles for effective third‑party assessments"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Meta Introducing Meta VR Glasses: A Cinema, Courtside Seat, and Workspace in Just 100 Grams-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Meta Introducing Meta VR Glasses: A Cinema, Courtside Seat, and Workspace in Just 100 Grams",
    "target": {
      "page": "trending",
      "name": "Meta Introducing Meta VR Glasses: A Cinema, Courtside Seat, and Workspace in Just 100 Grams"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Meta Introducing Ray‑Ban Meta Audio and More AI Glasses Styles-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Meta Introducing Ray‑Ban Meta Audio and More AI Glasses Styles",
    "target": {
      "page": "trending",
      "name": "Meta Introducing Ray‑Ban Meta Audio and More AI Glasses Styles"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Meta New Features for Meta Ray‑Ban Display-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Meta New Features for Meta Ray‑Ban Display",
    "target": {
      "page": "trending",
      "name": "Meta New Features for Meta Ray‑Ban Display"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-How Higher Ed Is Putting AI Agents to Work-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "How Higher Ed Is Putting AI Agents to Work",
    "target": {
      "page": "trending",
      "name": "How Higher Ed Is Putting AI Agents to Work"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Evolution of the Copilot pricing model-2026-09-27T03:52:46.320Z",
    "date": "2026-09-27T03:52:46.320Z",
    "type": "trending",
    "text": "Evolution of the Copilot pricing model",
    "target": {
      "page": "trending",
      "name": "Evolution of the Copilot pricing model"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  }
]; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
