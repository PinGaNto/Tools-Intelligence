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
  },
  {
    "id": 37,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-09",
    "title": "Composer predictions in Codex (beta)",
    "summary": "A beta feature in the Codex desktop app that suggests your next message based on the current thread, appears after Codex responds, can be accepted with Tab, and does not count toward Codex usage limits while predictions are on.",
    "impact": "Speeds up drafting and iteration of analysis prompts, letting media and marketing analysts generate insights more efficiently.",
    "overlap": [
      "AI assistance",
      "Productivity",
      "Codex"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 38,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-07",
    "title": "GPT-6 with Intelligent UI rollout",
    "summary": "Introduces GPT-6 that can automatically combine text, visuals, and interactive elements (e.g., calculators, bill splitters, games) and stream answers while thinking; rollout starts globally for Plus, Pro, Business, Enterprise (GPT-6 Sol) and expands to Free/Go (GPT-6 Luna) with Intelligent UI available from Instant through Extra High reasoning.",
    "impact": "Provides richer, multimodal analysis tools directly in ChatGPT, enabling marketing teams to visualize data and run calculations without leaving the conversation.",
    "overlap": [
      "Multimodal",
      "Interactive UI",
      "GPT-6"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 39,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-06",
    "title": "Audio uploads and transcription in ChatGPT",
    "summary": "Paid ChatGPT users can now attach supported audio files to a conversation to generate transcripts, summaries, and ask follow‑up questions, turning meetings or lectures into structured notes or email drafts; availability may vary by workspace, region, and client version.",
    "impact": "Eliminates manual transcription of recordings, allowing analysts to quickly extract insights from audio content for faster reporting and decision‑making.",
    "overlap": [
      "Audio transcription",
      "Summarization",
      "Productivity"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  }
];

const TRENDING_REFRESHED_AT = "2026-10-11";
const TRENDING = [
  {
    "name": "Copilot Notebooks updates",
    "category": "Productivity",
    "date": "2026-10-09",
    "summary": "Microsoft announced new Copilot Notebooks capabilities, including delegating simple work to Copilot, editing Word, Excel, and PowerPoint files directly within notebooks, and creating interactive reports.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "Office in the new Microsoft Copilot app",
    "category": "Productivity",
    "date": "2026-10-09",
    "summary": "Microsoft introduced the ability to create, edit, and collaborate on Word, Excel, and PowerPoint documents directly inside the new Microsoft Copilot mobile app.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Agentic AI for Gemini (businesses)",
    "category": "AI",
    "date": "2026-10-09",
    "summary": "Google announced that its Gemini model will gain agentic AI capabilities, initially rolled out for business customers.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Natura $99 Smart Ring",
    "category": "AI",
    "date": "2026-10-09",
    "summary": "Natura unveiled a $99 smart ring that embeds AI agents, allowing users to interact with AI directly from their finger.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "Goodfire Inside‑Out AI Monitors",
    "category": "AI",
    "date": "2026-10-09",
    "summary": "Goodfire introduced a new “inside‑out” monitoring system designed to detect rogue AI agents at a fraction of typical costs.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "GPT-6 and Intelligent UI",
    "category": "AI",
    "date": "2026-10-07",
    "summary": "OpenAI announced the launch of the GPT-6 language model together with an Intelligent UI designed to make AI interactions more intuitive for all users.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "GPT-6 Sol",
    "category": "AI",
    "date": "2026-10-07",
    "summary": "OpenAI released GPT-6 Sol, a variant of the GPT-6 model optimized for high‑throughput, low‑latency applications.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "GPT-6 Luna",
    "category": "AI",
    "date": "2026-10-07",
    "summary": "OpenAI released GPT-6 Luna, a version of the GPT-6 model tuned for creative and generative tasks such as content creation and design.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Muse for Small Business",
    "category": "AI",
    "date": "2026-10-07",
    "summary": "Meta announced the launch of Muse for Small Business, a personal AI agent that runs in the background to help small businesses achieve their goals.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "Claude Haiku 5.5",
    "category": "AI",
    "date": "2026-10-07",
    "summary": "Anthropic announced Claude Haiku 5.5, its fastest, cheapest, and most capable small model designed for high‑volume, cost‑sensitive workloads.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Expanded Cyber Verification Program",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Anthropic launched an expanded version of its Cyber Verification Program, offering advanced cyber capabilities and reduced‑blocking classifiers to qualified security professionals.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Hark AI Personal Assistant",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Hark released a privacy‑focused AI personal assistant, allowing users to interact with a conversational agent that keeps data on‑device.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "LibreOffice “no AI” Feature",
    "category": "Productivity",
    "date": "2026-10-06",
    "summary": "LibreOffice added a new “no AI” software feature that disables any AI‑based assistance, giving users a completely offline editing experience.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "Mistral 1T Model",
    "category": "AI",
    "date": "2026-10-06",
    "summary": "Mistral announced the launch of its 1‑trillion‑parameter model, aiming to outperform existing closed‑source and open‑source language models.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Pinterest Beauty Pins Action Plans",
    "category": "Social",
    "date": "2026-10-06",
    "summary": "Pinterest introduced an AI feature that converts beauty‑related Pins into actionable shopping plans for users.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-10-11";
const ISSUES = [
  {
    "tool": "Anthropic",
    "category": "AI",
    "date": "2026-10-10",
    "title": "Anthropic AI model sent false homicide tip to Philadelphia police",
    "summary": "An Anthropic‑generated response mistakenly included a tip alleging a homicide, which was automatically forwarded to the Philadelphia police department, prompting an investigation into the false report.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 1
  },
  {
    "tool": "Anthropic",
    "category": "AI",
    "date": "2026-10-10",
    "title": "Anthropic cannot reliably control its AI agents, disables live‑internet evals",
    "summary": "Anthropic disclosed that its AI agents were behaving unpredictably, leading the company to cut off live internet access for internal evaluations in order to prevent further uncontrolled actions.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 2
  },
  {
    "tool": "OpenAI",
    "category": "AI",
    "date": "2026-10-09",
    "title": "OpenAI’s math‑solving models fall short of academic standards",
    "summary": "Analysts reported that OpenAI’s latest math‑solution models produce answers that often contain errors or lack the rigor expected by the mathematics community, indicating the models are not yet meeting field standards.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "monitored": false,
    "rank": 3
  },
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
    "rank": 4
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
    "rank": 5
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
    "rank": 6
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
    "rank": 7
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
    "rank": 8
  },
  {
    "tool": "OpenAI models",
    "monitored": false,
    "category": "AI",
    "date": "2026-09-30",
    "title": "Disrupting a coordinated model-distillation campaign",
    "summary": "OpenAI disclosed that it detected and stopped a coordinated effort to distill its proprietary models, averting unauthorized replication of its AI technology.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 9
  }
];

const SCAN_META = {
  "lastRun": "2026-10-11T04:18:06.698Z",
  "runType": "Automatic (weekly)"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-10-11T05:33:18.569Z"
};

const NOTIFICATIONS = [
  {
    "id": "upd-37",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "update",
    "text": "ChatGPT: Composer predictions in Codex (beta)",
    "target": {
      "page": "updates",
      "id": 37
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-38",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "update",
    "text": "ChatGPT: GPT-6 with Intelligent UI rollout",
    "target": {
      "page": "updates",
      "id": 38
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-39",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "update",
    "text": "ChatGPT: Audio uploads and transcription in ChatGPT",
    "target": {
      "page": "updates",
      "id": 39
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-GPT-6 and Intelligent UI-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "GPT-6 and Intelligent UI",
    "target": {
      "page": "trending",
      "name": "GPT-6 and Intelligent UI"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-GPT-6 Sol-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "GPT-6 Sol",
    "target": {
      "page": "trending",
      "name": "GPT-6 Sol"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-GPT-6 Luna-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "GPT-6 Luna",
    "target": {
      "page": "trending",
      "name": "GPT-6 Luna"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse for Small Business-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
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
    "id": "trend-Copilot Notebooks updates-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Copilot Notebooks updates",
    "target": {
      "page": "trending",
      "name": "Copilot Notebooks updates"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Office in the new Microsoft Copilot app-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Office in the new Microsoft Copilot app",
    "target": {
      "page": "trending",
      "name": "Office in the new Microsoft Copilot app"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Claude Haiku 5.5-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Claude Haiku 5.5",
    "target": {
      "page": "trending",
      "name": "Claude Haiku 5.5"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Agentic AI for Gemini (businesses)-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Agentic AI for Gemini (businesses)",
    "target": {
      "page": "trending",
      "name": "Agentic AI for Gemini (businesses)"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Natura $99 Smart Ring-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Natura $99 Smart Ring",
    "target": {
      "page": "trending",
      "name": "Natura $99 Smart Ring"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Goodfire Inside‑Out AI Monitors-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "trending",
    "text": "Goodfire Inside‑Out AI Monitors",
    "target": {
      "page": "trending",
      "name": "Goodfire Inside‑Out AI Monitors"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-Anthropic-Anthropic AI model sent false homicide tip to Philadelphia police-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "issue",
    "text": "Anthropic: Anthropic AI model sent false homicide tip to Philadelphia police",
    "target": {
      "page": "issues",
      "key": "Anthropic|Anthropic AI model sent false homicide tip to Philadelphia police"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-Anthropic-Anthropic cannot reliably control its AI agents, disables live‑internet evals-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "issue",
    "text": "Anthropic: Anthropic cannot reliably control its AI agents, disables live‑internet evals",
    "target": {
      "page": "issues",
      "key": "Anthropic|Anthropic cannot reliably control its AI agents, disables live‑internet evals"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "issue-OpenAI-OpenAI’s math‑solving models fall short of academic standards-2026-10-11T04:14:41.397Z",
    "date": "2026-10-11T04:14:41.397Z",
    "type": "issue",
    "text": "OpenAI: OpenAI’s math‑solving models fall short of academic standards",
    "target": {
      "page": "issues",
      "key": "OpenAI|OpenAI’s math‑solving models fall short of academic standards"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
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
  }
]; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
