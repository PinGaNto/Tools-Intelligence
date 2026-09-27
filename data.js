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
  }
];

const TRENDING_REFRESHED_AT = "2026-09-27";
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
    "name": "Evolution of the Copilot pricing model",
    "category": "Productivity",
    "date": "2026-09-25",
    "summary": "Microsoft announced an updated Copilot pricing model where everyday AI is billed at a fixed price per user, while advanced AI usage is charged based on Copilot Credits.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Meta Introducing Meta VR Glasses: A Cinema, Courtside Seat, and Workspace in Just 100 Grams",
    "category": "AI",
    "date": "2026-09-24",
    "summary": "Meta announced the launch of Meta VR Glasses, a lightweight 100‑gram glasses platform that delivers cinema‑style VR, courtside viewing, and workspace experiences.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Two years of OpenAI Academy",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "OpenAI marks the two‑year anniversary of its OpenAI Academy, highlighting its role in AI education and skill development.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "Sam Altman’s remarks at the United Nations Security Council",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "CEO Sam Altman delivered remarks to the UN Security Council on the implications of artificial intelligence for global security and governance.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "ChatGPT Ads expands to Southeast Asia and Taiwan",
    "category": "Productivity",
    "date": "2026-09-23",
    "summary": "OpenAI announced that its ChatGPT Ads product is now available in Southeast Asian markets and Taiwan, extending its advertising capabilities to new regions.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "Airbnb expands access to GPT-6 Astra",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "Airbnb partners with OpenAI to give its hosts and guests access to the GPT‑6 Astra model for enhanced recommendation and communication features.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "Meta Introducing Ray‑Ban Meta Audio and More AI Glasses Styles",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "At Connect 2026 Meta unveiled Ray‑Ban Meta Audio, its first audio‑focused smart glasses, and announced a broader expansion of AI‑enabled glasses styles.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Meta New Features for Meta Ray‑Ban Display",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "Meta released updates to the Meta Ray‑Ban Display glasses, adding new functionalities aimed at improving everyday usability of the AI‑powered eyewear.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "How Higher Ed Is Putting AI Agents to Work",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "Salesforce highlights how higher education institutions are deploying AI agents to automate student services, advising, and administrative workflows.",
    "source": "https://www.salesforce.com/news/",
    "sourceType": "Salesforce News",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Claude discovers novel enzyme system",
    "category": "AI",
    "date": "2026-09-23",
    "summary": "Claude identified a new enzyme system featuring CRISPR-like repeats, highlighting its capability for scientific discovery.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Better prompt caching for GPT-6",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "OpenAI released an update that improves prompt caching for GPT‑6, reducing latency and cost for repeated queries.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "Introducing GPT-6 Sol and Luna",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "OpenAI unveiled two new variants of its GPT‑6 family, named Sol and Luna, aimed at different performance and efficiency use cases.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "Priorities and principles for effective third‑party assessments",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "OpenAI published a set of priorities and guiding principles to help third‑party assessors evaluate AI systems responsibly.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Claude Opus 5.5 and GPT‑6 Sol added to Copilot model choice",
    "category": "AI",
    "date": "2026-09-22",
    "summary": "Microsoft announced that the Claude Opus 5.5 and GPT‑6 Sol models are now selectable within Microsoft Copilot, expanding the platform’s available large‑language‑model options.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-09-27";
const ISSUES = [
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
    "rank": 1
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
    "rank": 2
  },
  {
    "tool": "Meltwater",
    "monitored": true,
    "category": "Social Listening",
    "date": "2026-09-05",
    "title": "Users cite pricing rigidity and data-consistency gaps",
    "summary": "Aggregated G2 reviews describe rising, inflexible pricing tiers, inconsistent numbers between Meltwater's own reporting modules, occasional slowness on large data pulls, and coverage gaps including lost TikTok access.",
    "source": "https://www.g2.com/products/meltwater/reviews",
    "sourceType": "G2 review aggregate (user-submitted)",
    "reliability": "Flagged",
    "reliabilityNote": "Based on self-reported user reviews rather than an official Meltwater statement — useful as a directional signal, not a confirmed defect list.",
    "rank": 3
  },
  {
    "tool": "ChatGPT",
    "monitored": true,
    "category": "AI",
    "date": "2026-09-03",
    "title": "ChatGPT and Codex hit by a widescale outage",
    "summary": "OpenAI confirmed a \"service degradation\" affecting ChatGPT chat, image generation, file uploads and the Codex coding agent; Downdetector logged over 74,000 reports before service was restored, with no root cause disclosed by OpenAI.",
    "source": "https://www.unite.ai/openai-confirms-service-degradation-hitting-chatgpt-and-codex-users/",
    "sourceType": "Tech press (OpenAI-confirmed)",
    "reliability": "Reliable",
    "rank": 4
  }
];

const SCAN_META = {
  "lastRun": "2026-09-27T03:55:58.927Z",
  "runType": "Automatic (weekly)"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-09-27T05:07:46.843Z"
};

const NOTIFICATIONS = [
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
