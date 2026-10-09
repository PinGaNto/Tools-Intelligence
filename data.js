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
  },
  {
    "id": 30,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-29",
    "title": "Codex Cloud launches for coding tasks",
    "summary": "Codex Cloud lets users start and continue coding tasks from desktop, web, or mobile using reusable environments with project repositories, tools, and dependencies, providing isolated workspaces that persist while the computer sleeps.",
    "impact": "Enables faster, more reliable code generation and debugging, helping marketing teams automate custom analytics scripts and integrations.",
    "overlap": [
      "coding",
      "cloud",
      "automation"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 31,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-29",
    "title": "Pages feature for collaborative document creation",
    "summary": "Pages lets users turn a conversation into a Page, start from a template, or write directly in Space, with editing, chart creation, interactive content, and multi‑user collaboration while preserving privacy of private chats.",
    "impact": "Provides a shared workspace for marketing analysts to co‑author reports, dashboards, and campaign briefs within ChatGPT.",
    "overlap": [
      "collaboration",
      "content",
      "document"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 32,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-29",
    "title": "Site editing and scheduling capabilities added",
    "summary": "Site owners and editors on Plus and Pro can edit published Sites from a desktop browser within ChatGPT, review changes, publish updates, and create recurring cloud schedules via Automations.",
    "impact": "Allows marketing teams to quickly update web‑based campaign pages and schedule releases directly from ChatGPT, streamlining content rollout.",
    "overlap": [
      "website",
      "automation",
      "content"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 33,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-09-07",
    "title": "GWI insights, now in Slack",
    "summary": "GWI integrated its Spark MCP‑powered insights into Slack via a Slackbot, allowing users to ask questions and receive GWI‑backed answers directly in Slack conversations.",
    "impact": "Analytics teams can retrieve trusted audience data without leaving Slack, speeding up decision‑making and reducing context‑switching.",
    "overlap": [
      "Slack integration",
      "AI chatbot",
      "Data access"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.globalwebindex.com/en/articles/16845188-release-notes-september-2026",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 34,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-09-07",
    "title": "Public dashboards are now live",
    "summary": "GWI launched Public dashboards, letting Pro‑plan users generate a shareable public link that provides a live, interactive view of a dashboard to anyone, with automatic expiration after 30 days.",
    "impact": "Marketing teams can share up‑to‑date audience insights with external stakeholders or clients without requiring them to have a GWI account.",
    "overlap": [
      "Dashboard sharing",
      "Public link",
      "Collaboration"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.globalwebindex.com/en/articles/16845188-release-notes-september-2026",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 35,
    "tool": "Mintel",
    "category": "Market Intelligence",
    "date": "2026-03-11",
    "title": "Mintel partners with Dragonfly AI to add predictive attention intelligence and packaging performance scores to GNPD",
    "summary": "Mintel announced a new partnership with Dragonfly AI, integrating predictive attention intelligence directly into the Mintel Global New Products Database (GNPD) and adding a packaging performance score for every product entry.",
    "impact": "Provides media and marketing analytics teams with actionable insights on how packaging influences consumer attention, improving forecasting and product strategy.",
    "overlap": [
      "Predictive analytics",
      "Packaging performance",
      "Product database"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.mintel.com/press-centre/mintel-announces-the-global-launch-of-mintel-futures",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 36,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-09-29",
    "title": "GPT-6.1 Sol rollout in ChatGPT Work and Codex",
    "summary": "GPT-6.1 Sol, an upgraded model that improves on GPT-6 Sol for agentic coding, computer use, and professional work, is being rolled out in ChatGPT Work and Codex, starting with Pro users and expanding to Plus, Business, Enterprise, and Edu plans; Enterprise and Edu workspace owners can enable model access in workspace settings.",
    "impact": "The more powerful model can automate and accelerate complex data analysis, reporting, and workflow automation for media and marketing analytics teams.",
    "overlap": [
      "GPT-6.1 Sol",
      "agentic coding",
      "professional work"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  }
];

const TRENDING_REFRESHED_AT = "2026-10-07";
const TRENDING = [
  {
    "name": "Expanded Cyber Verification Program",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Anthropic launched an expanded version of its Cyber Verification Program, offering advanced cyber capabilities and reduced‑blocking classifiers to qualified security professionals.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "Hark AI Personal Assistant",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Hark released a privacy‑focused AI personal assistant, allowing users to interact with a conversational agent that keeps data on‑device.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "LibreOffice “no AI” Feature",
    "category": "Productivity",
    "date": "2026-10-06",
    "summary": "LibreOffice added a new “no AI” software feature that disables any AI‑based assistance, giving users a completely offline editing experience.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Mistral 1T Model",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Mistral announced the launch of its 1‑trillion‑parameter model, aiming to outperform existing closed‑source and open‑source language models.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "Pinterest Beauty Pins Action Plans",
    "category": "Social",
    "date": "2026-10-06",
    "summary": "Pinterest introduced an AI feature that converts beauty‑related Pins into actionable shopping plans for users.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "Petlibro AI‑Powered Feeder",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Petlibro launched a new AI‑powered pet feeder designed to manage feeding schedules for multi‑cat households.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "AI at Work Webinar: Copilot, Apps, & Agents",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Online webinar scheduled for Tuesday, Oct 6 2026 at 09:00 AM PDT to discuss the latest developments in Microsoft Copilot, its applications, and AI agents.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "Hot Girl Hotline",
    "category": "Social",
    "date": "2026-10-05",
    "summary": "Hot Girl Hotline is an AI‑powered advice chatbot that functions like a modern “Dear Abby,” offering users personalized responses to personal and relationship questions.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Linkdaze Smart Calendar",
    "category": "Productivity",
    "date": "2026-10-05",
    "summary": "Linkdaze introduced a smart calendar designed to manage household tasks and family schedules, going beyond traditional event tracking to coordinate chores, meals, and shared responsibilities.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "OpenAI ChatGPT EU Watermarking",
    "category": "AI",
    "date": "2026-10-05",
    "summary": "OpenAI began watermarking ChatGPT‑generated text for users in the European Union to improve transparency and combat misuse.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Reflection Beam Model",
    "category": "AI",
    "date": "2026-10-05",
    "summary": "Reflection released Beam, an open‑weight AI model positioned as a lower‑cost alternative to Chinese large‑scale models.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Instinct Group Chat AI Agent",
    "category": "Social",
    "date": "2026-10-05",
    "summary": "Instinct rolled out its AI agent to group chats, enabling users to interact with the assistant even without a personal account.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "TikTok AI Shopping Assistant",
    "category": "Social",
    "date": "2026-10-05",
    "summary": "TikTok launched an AI‑driven shopping assistant that offers one‑click checkout directly within the app.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "HackerRank AI Interviewer",
    "category": "Productivity",
    "date": "2026-10-05",
    "summary": "HackerRank introduced an AI interviewer tool that simulates technical interview questions and provides real‑time feedback to candidates.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "OpenAI Visual Ads for Image Generation",
    "category": "AI",
    "date": "2026-10-05",
    "summary": "OpenAI started displaying visual advertisements alongside the results of its image‑generation models.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-10-07";
const ISSUES = [
  {
    "tool": "Google Open Source Bug Bounty Program",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-04",
    "title": "Google freezes open source bug bounty program due to surge in AI submissions",
    "summary": "Google temporarily halted its open‑source bug bounty program after reporting a significant rise in AI‑related vulnerability submissions, saying the volume and nature of the reports required a pause to reassess the process.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "tool": "OpenAI",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-04",
    "title": "OpenAI safety employee resigns, citing broken culture",
    "summary": "A safety team member at OpenAI quit, alleging that the company's culture is broken and raising concerns about internal safety practices.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "tool": "Amazon Web Services",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-04",
    "title": "Amazon faces backlash over data‑center NDAs, says it will stop using them",
    "summary": "Amazon received criticism for requiring nondisclosure agreements on AI‑related data‑center work and announced it will no longer use such NDAs after the backlash.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "tool": "OpenAI",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-02",
    "title": "OpenAI cuts ties with three safety researchers",
    "summary": "OpenAI ended relationships with three AI safety researchers, prompting criticism about its commitment to AI safety and transparency.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "tool": "Grok (xAI)",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-02",
    "title": "Grok chatbot allegedly urged Trump to capture Venezuela's president",
    "summary": "Reports claim the AI chatbot Grok suggested that former President Donald Trump should capture the Venezuelan president, sparking political controversy and criticism of the model's outputs.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "tool": "OpenAI models",
    "category": "AI",
    "date": "2026-09-30",
    "title": "Disrupting a coordinated model-distillation campaign",
    "summary": "OpenAI disclosed that it detected and stopped a coordinated effort to distill its proprietary models, averting unauthorized replication of its AI technology.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 6
  },
  {
    "tool": "Claude",
    "monitored": false,
    "category": "AI",
    "date": "2026-09-10",
    "title": "Misuse of Claude by threat actors",
    "summary": "Anthropic’s Threat Intelligence team reported that over the past eight months, threat actors attempted to use Claude for malicious activities; the team identified and disrupted these operations and released case studies describing the evolving misuse.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 7
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
    "rank": 8
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
    "rank": 9
  }
];

const SCAN_META = {
  "lastRun": "2026-10-07T14:01:56.894Z",
  "runType": "Manual"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-10-09T05:54:29.453Z"
};

const NOTIFICATIONS = [
  {
    "id": "upd-33",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "update",
    "text": "GWI: GWI insights, now in Slack",
    "target": {
      "page": "updates",
      "id": 33
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-34",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "update",
    "text": "GWI: Public dashboards are now live",
    "target": {
      "page": "updates",
      "id": 34
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-35",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "update",
    "text": "Mintel: Mintel partners with Dragonfly AI to add predictive attention intelligence and packaging performance scores to GNPD",
    "target": {
      "page": "updates",
      "id": 35
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-36",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "update",
    "text": "ChatGPT: GPT-6.1 Sol rollout in ChatGPT Work and Codex",
    "target": {
      "page": "updates",
      "id": 36
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Expanded Cyber Verification Program-2026-10-07T13:58:26.930Z",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "trending",
    "text": "Expanded Cyber Verification Program",
    "target": {
      "page": "trending",
      "name": "Expanded Cyber Verification Program"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Hot Girl Hotline-2026-10-07T13:58:26.930Z",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "trending",
    "text": "Hot Girl Hotline",
    "target": {
      "page": "trending",
      "name": "Hot Girl Hotline"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Linkdaze Smart Calendar-2026-10-07T13:58:26.930Z",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "trending",
    "text": "Linkdaze Smart Calendar",
    "target": {
      "page": "trending",
      "name": "Linkdaze Smart Calendar"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "issue-OpenAI models-Disrupting a coordinated model-distillation campaign-2026-10-07T13:58:26.930Z",
    "date": "2026-10-07T13:58:26.930Z",
    "type": "issue",
    "text": "OpenAI models: Disrupting a coordinated model-distillation campaign",
    "target": {
      "page": "issues",
      "key": "OpenAI models|Disrupting a coordinated model-distillation campaign"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-30",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "update",
    "text": "ChatGPT: Codex Cloud launches for coding tasks",
    "target": {
      "page": "updates",
      "id": 30
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-31",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "update",
    "text": "ChatGPT: Pages feature for collaborative document creation",
    "target": {
      "page": "updates",
      "id": 31
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-32",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "update",
    "text": "ChatGPT: Site editing and scheduling capabilities added",
    "target": {
      "page": "updates",
      "id": 32
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Hark AI Personal Assistant-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Hark AI Personal Assistant",
    "target": {
      "page": "trending",
      "name": "Hark AI Personal Assistant"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-LibreOffice “no AI” Feature-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "LibreOffice “no AI” Feature",
    "target": {
      "page": "trending",
      "name": "LibreOffice “no AI” Feature"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Mistral 1T Model-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Mistral 1T Model",
    "target": {
      "page": "trending",
      "name": "Mistral 1T Model"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Pinterest Beauty Pins Action Plans-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Pinterest Beauty Pins Action Plans",
    "target": {
      "page": "trending",
      "name": "Pinterest Beauty Pins Action Plans"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Petlibro AI‑Powered Feeder-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Petlibro AI‑Powered Feeder",
    "target": {
      "page": "trending",
      "name": "Petlibro AI‑Powered Feeder"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-OpenAI ChatGPT EU Watermarking-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "OpenAI ChatGPT EU Watermarking",
    "target": {
      "page": "trending",
      "name": "OpenAI ChatGPT EU Watermarking"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Reflection Beam Model-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Reflection Beam Model",
    "target": {
      "page": "trending",
      "name": "Reflection Beam Model"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Instinct Group Chat AI Agent-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "Instinct Group Chat AI Agent",
    "target": {
      "page": "trending",
      "name": "Instinct Group Chat AI Agent"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-TikTok AI Shopping Assistant-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "TikTok AI Shopping Assistant",
    "target": {
      "page": "trending",
      "name": "TikTok AI Shopping Assistant"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-HackerRank AI Interviewer-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "HackerRank AI Interviewer",
    "target": {
      "page": "trending",
      "name": "HackerRank AI Interviewer"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-OpenAI Visual Ads for Image Generation-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "trending",
    "text": "OpenAI Visual Ads for Image Generation",
    "target": {
      "page": "trending",
      "name": "OpenAI Visual Ads for Image Generation"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "issue-Google Open Source Bug Bounty Program-Google freezes open source bug bounty program due to surge in AI submissions-2026-10-06T19:09:32.618Z",
    "date": "2026-10-06T19:09:32.618Z",
    "type": "issue",
    "text": "Google Open Source Bug Bounty Program: Google freezes open source bug bounty program due to surge in AI submissions",
    "target": {
      "page": "issues",
      "key": "Google Open Source Bug Bounty Program|Google freezes open source bug bounty program due to surge in AI submissions"
    },
    "source": "scan",
    "runType": "Manual"
  },
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
  }
]; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
