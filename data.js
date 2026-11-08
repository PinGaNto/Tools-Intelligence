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
  },
  {
    "id": 40,
    "tool": "Julius",
    "category": "Creator",
    "date": "2025-07-31",
    "title": "Touch Support added",
    "summary": "The 1.8.0 release adds touch screen support, enabling Julius to be operated via touch input on compatible devices.",
    "impact": "Allows marketing teams to run Julius on tablets or other touch-enabled hardware for on‑site data collection and interactive demos.",
    "overlap": [
      "Touch Input",
      "User Interface"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://github.com/bvschaik/julius/wiki/Julius-release",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 41,
    "tool": "Julius",
    "category": "Creator",
    "date": "2025-07-31",
    "title": "MP3 Support added",
    "summary": "The 1.8.0 release adds MP3 audio support, allowing Julius to play MP3 files.",
    "impact": "Enables marketing analysts to embed or trigger MP3 audio cues within Julius‑based presentations or simulations.",
    "overlap": [
      "Audio",
      "Media Playback"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://github.com/bvschaik/julius/wiki/Julius-release",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 42,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-16",
    "title": "ChatGPT Slides lets you create and collaborate on presentations",
    "summary": "ChatGPT Slides enables users to build slide decks directly in ChatGPT, edit text, images, shapes, and charts, generate custom images, collaborate in real time, and present or export to PowerPoint, PDF, Google Slides, or open in PowerPoint/Keynote via the desktop app. It is rolling out to eligible Pro, Business, and Enterprise users with Space access.",
    "impact": "Marketing and media teams can produce polished presentation decks instantly within ChatGPT, speeding up campaign reporting and stakeholder communication.",
    "overlap": [
      "Presentation creation",
      "Collaboration",
      "Export formats"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 43,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-16",
    "title": "GPT-6 Pro model adds faster responses, better plugins, and parallel agents",
    "summary": "The GPT-6 Pro model in the chat tab now provides faster response times, improved use of plugins and tools, and multiple agents that can work on different parts of a task in parallel, with progress shown in the conversation and the ability to open completed tasks to see each agent's work.",
    "impact": "Analysts can run complex, multi‑step data queries more quickly, leveraging parallel agents to accelerate insight generation.",
    "overlap": [
      "Speed",
      "Plugins",
      "Parallel agents"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 44,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-15",
    "title": "GPT‑Live‑1.1 and new multilingual voices released in ChatGPT Voice",
    "summary": "GPT‑Live‑1.1 and the mini‑model GPT‑Live‑1.1 Quip are now available in ChatGPT Voice, adding more natural accents for French, German, Hindi, Japanese, Korean, Mexican Spanish, and a new English voice named Bubbie, plus additional short phrases that indicate when the model is searching.",
    "impact": "Voice‑based interactions become more natural and accessible for global teams, improving real‑time analytics workflows in multiple languages.",
    "overlap": [
      "Voice",
      "Multilingual",
      "Live model"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 45,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-15",
    "title": "Rosalind Academic Plan opens applications for free Business Standard seats",
    "summary": "The Rosalind Academic Plan now accepts applications from U.S. university labs, offering up to 30 ChatGPT Business Standard seats at no cost for 12 months, with access to GPT‑Rosalind pending trusted‑access approval.",
    "impact": "Academic researchers can leverage advanced ChatGPT capabilities for life‑sciences and media studies without incurring costs, potentially generating new insights for the industry.",
    "overlap": [
      "Academic access",
      "Free seats",
      "GPT‑Rosalind"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 46,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-15",
    "title": "Removal of fixed Site limits for Plus and Pro plans",
    "summary": "The previous fixed limit on the number of Sites a Plus or Pro user can create has been removed; usage and storage limits still apply.",
    "impact": "Teams can create more independent workspaces for separate campaigns or analyses without hitting an arbitrary cap, enhancing scalability.",
    "overlap": [
      "Site limits",
      "Workspace scaling"
    ],
    "confidence": "High",
    "priority": "Low",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 47,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Creator Discovery launches in VwD",
    "summary": "VwD introduced Creator Discovery, a live workflow that lets users run unlimited searches across 2.5M+ creators, build Shortlists of up to 100 creators, and scan selected creators with three depth levels (Lite, Medium, Comprehensive) for brand safety, suitability, and compliance insights.",
    "impact": "This lets media and marketing teams source, evaluate, and vet creators entirely within VwD, speeding up campaign planning and reducing reliance on external tools.",
    "overlap": [
      "creator sourcing",
      "brand safety",
      "content scanning"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 48,
    "tool": "GWI",
    "category": "Audience",
    "date": "2025-09-30",
    "title": "GWI launches Spark API",
    "summary": "GWI introduced the Spark API, enabling developers to integrate real human insight data directly into AI applications.",
    "impact": "Allows marketing analytics teams to enrich AI models with authentic consumer insights, improving decision quality.",
    "overlap": [
      "API",
      "Human Insight",
      "AI Integration"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.gwi.com/press-center",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 49,
    "tool": "GWI",
    "category": "Audience",
    "date": "2025-06-26",
    "title": "GWI joins AgentExchange expansion with MCP servers",
    "summary": "GWI announced participation in expanding AgentExchange by connecting its services to MCP servers, facilitating enterprise AI adoption.",
    "impact": "Provides enterprises a streamlined path to embed GWI insights into AI agents via MCP infrastructure, enhancing analytics workflows.",
    "overlap": [
      "Enterprise AI",
      "AgentExchange",
      "MCP integration"
    ],
    "confidence": "Medium",
    "priority": "Medium",
    "source": "https://www.gwi.com/press-center",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 50,
    "tool": "GWI",
    "category": "Audience",
    "date": "2025-11-03",
    "title": "Claude can now run instant research with GWI",
    "summary": "The Claude AI model now integrates with GWI, allowing it to perform real‑time research using GWI's audience datasets.",
    "impact": "Enables analysts to query GWI data via Claude, accelerating insight generation without manual data extraction.",
    "overlap": [
      "Claude AI",
      "Instant Research",
      "Data Integration"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.gwi.com/press-center",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 51,
    "tool": "GWI",
    "category": "Audience",
    "date": "2025-10-02",
    "title": "GWI partners with Waldo for real‑time dashboards and strategy agents",
    "summary": "GWI teamed up with Waldo to embed human insight into Waldo's real‑time dashboards and strategy agents.",
    "impact": "Gives marketers live access to GWI's consumer insights within Waldo's tools, improving real‑time decision making.",
    "overlap": [
      "Partnership",
      "Real-time Dashboards",
      "Strategy Agents"
    ],
    "confidence": "Medium",
    "priority": "Medium",
    "source": "https://www.gwi.com/press-center",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 52,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-06-03",
    "title": "Enterprise Content Optimization Unifies SEO and AI Search",
    "summary": "Semrush for Enterprise introduced unified content optimization workflows that combine traditional SEO and AI‑driven search, allowing teams to create and manage high‑performing content for both channels.",
    "impact": "Marketing teams can streamline content creation across search and AI, improving visibility and efficiency.",
    "overlap": [
      "Content Optimization",
      "Enterprise SEO",
      "AI Search"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "http://www.semrush.com/news/releases/product-news",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 53,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-05-27",
    "title": "AI Visibility Database Expanded to 32 Countries",
    "summary": "Semrush added 17 new regional markets, growing its AI Visibility Database to cover 32 countries and introduced a native integration that lets users access search and market intelligence directly within Claude.",
    "impact": "Broader geographic coverage and Claude integration enable analysts to conduct AI‑powered market research in more locales without leaving the LLM.",
    "overlap": [
      "AI Visibility",
      "Geographic Coverage",
      "Claude Integration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "http://www.semrush.com/news/releases/product-news",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 54,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-08-11",
    "title": "Adobe Brand Visibility and AI‑Powered Traffic Insights",
    "summary": "Semrush launched Adobe Brand Visibility, a unified solution for the AI search era, and added AI‑driven Traffic Insights to Traffic Analytics that surface competitor traffic spikes, drops, and underlying drivers.",
    "impact": "Brands can quickly detect and react to competitor traffic changes, enhancing competitive intelligence.",
    "overlap": [
      "Brand Visibility",
      "Traffic Analytics",
      "AI Insights"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "http://www.semrush.com/news/releases/product-news",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 55,
    "tool": "Semrush",
    "category": "SEO / Search",
    "date": "2026-06-11",
    "title": "MCP Connector for Perplexity",
    "summary": "Semrush released a Model Context Protocol (MCP) connector for Perplexity, allowing Perplexity users to retrieve Semrush search intelligence natively inside the LLM platform.",
    "impact": "Users can enrich Perplexity queries with real‑time SEO data, improving research accuracy.",
    "overlap": [
      "MCP Connector",
      "Perplexity",
      "Search Intelligence"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "http://www.semrush.com/news/releases/product-news",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 56,
    "tool": "Siftsy",
    "category": "Social Intelligence",
    "date": "2026-10-01",
    "title": "Sift Org Planning launches",
    "summary": "Sift Org Planning is now live, allowing users to create scenarios with a drag‑and‑drop sandbox that mimics an organizational chart, enabling the building of custom org structures within the Sift experience.",
    "impact": "Media and marketing teams can model and analyze target audiences by organization hierarchy, improving audience segmentation and campaign planning.",
    "overlap": [
      "Org Planning",
      "Scenario Builder"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.justsift.com/en/articles/4824316-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 57,
    "tool": "Siftsy",
    "category": "Social Intelligence",
    "date": "2026-10-01",
    "title": "Real‑time upload assistance added to Sift data sync",
    "summary": "The data sync process now includes real‑time upload assistance and an improved mapping experience, giving admins more streamlined, guided help when uploading People Data.",
    "impact": "Faster, more accurate data ingestion helps analytics teams keep their audience and employee data up to date for timely insights.",
    "overlap": [
      "Data Sync",
      "Upload Assistance"
    ],
    "confidence": "Medium",
    "priority": "Medium",
    "source": "https://help.justsift.com/en/articles/4824316-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 58,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-20",
    "title": "Locked chats add private, PIN‑protected conversations",
    "summary": "Locked chats let users keep selected conversations hidden from regular chat history, pinned chats, and search, requiring a 4‑digit account PIN or device authentication to open; retention and model‑improvement settings remain unchanged, and the feature is rolling out gradually to Free, Go, Plus, and Pro users across web, iOS, Android, and desktop apps.",
    "impact": "Media and marketing teams can safeguard sensitive campaign discussions or client data while still leveraging ChatGPT, improving confidentiality and compliance for analytics workflows.",
    "overlap": [
      "Privacy",
      "Conversation Management",
      "Security"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 59,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Unlimited creator searches with token purchase",
    "summary": "VwD now lets users run unlimited searches across its 2.5M+ creator database; the first five searches are free and additional searches are available via a qualifying token purchase.",
    "impact": "Teams can explore a much larger pool of creators without hitting search limits, accelerating sourcing workflows.",
    "overlap": [
      "Search",
      "Creator sourcing",
      "Token-based access"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 60,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Exact Only toggle for precise matching",
    "summary": "Creator Discovery includes an \"Exact Only\" option that, when enabled, returns results that match the entered search terms word‑for‑word.",
    "impact": "Provides more precise creator results, reducing time spent filtering irrelevant matches.",
    "overlap": [
      "Exact match",
      "Search filters"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 61,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Preset searches for quick start",
    "summary": "The platform offers preset searches—ready‑made example queries—that instantly populate filters, letting users launch a search without building criteria from scratch.",
    "impact": "Speeds up onboarding and reduces friction for users new to creator sourcing.",
    "overlap": [
      "Preset",
      "Search templates"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 62,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Shortlist capacity of up to 100 creators",
    "summary": "Within Creator Discovery, users can add up to 100 promising creators to a Shortlist before scanning them, functioning like a shopping cart for potential partners.",
    "impact": "Enables batch organization and review of candidate creators, improving workflow efficiency.",
    "overlap": [
      "Shortlist",
      "Batch review"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 63,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Three scan levels (Lite, Medium, Comprehensive)",
    "summary": "Creator Discovery provides three scan depth options: Lite (last 12 months of content), Medium (last 2 years), and Comprehensive (3+ years of public content).",
    "impact": "Gives teams flexibility to balance analysis depth with time and resource constraints when evaluating creators.",
    "overlap": [
      "Scan depth",
      "Content analysis",
      "Creator evaluation"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 64,
    "tool": "GWI",
    "category": "Audience",
    "date": "2026-01-22",
    "title": "GWI launches Agent Spark",
    "summary": "Agent Spark, an AI agent that analyzes 35 billion data signals in seconds, delivers trusted human insights directly into large language models such as Claude and ChatGPT.",
    "impact": "Provides media and marketing analysts with real‑time, AI‑augmented audience insights within their LLM workflows, speeding up research and decision‑making.",
    "overlap": [
      "Agent Spark",
      "LLM integration",
      "AI insights"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.gwi.com/press-releases",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 65,
    "tool": "Brandwatch",
    "category": "Social Listening",
    "date": "2025-10-27",
    "title": "Community is now open for Social Media Management users",
    "summary": "Brandwatch opened its Community to Social Media Management users, allowing them to register with their Brandwatch account to access support, product learning, and exclusive events.",
    "impact": "Provides a centralized place for teams to get help, share best practices, and stay informed, improving efficiency and adoption.",
    "overlap": [
      "Community",
      "User Support",
      "Collaboration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://social-media-management-help.brandwatch.com/en/articles/17450301-product-updates-october-2025",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 66,
    "tool": "Brandwatch",
    "category": "Social Listening",
    "date": "2025-10-27",
    "title": "Measure adds Facebook Followers metric",
    "summary": "Brandwatch Measure now supports the Facebook Followers metric, replacing the deprecated Fans/Page Likes metrics.",
    "impact": "Gives analysts more accurate follower data for Facebook, aligning with platform terminology and improving reporting.",
    "overlap": [
      "Metrics",
      "Facebook",
      "Measure"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://social-media-management-help.brandwatch.com/en/articles/17450301-product-updates-october-2025",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 67,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Expanded Role Permissions for Klear admins",
    "summary": "Klear administrators can now control two additional permissions—Activate Influencers and Manage Ecommerce—alongside existing Send Agreements and Send Payments, allowing granular access assignment per user.",
    "impact": "Provides tighter governance over influencer outreach and ecommerce actions, reducing risk of unauthorized activity.",
    "overlap": [
      "Permissions",
      "Klear",
      "Admin Controls"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 68,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Redesigned \"What’s New\" and \"Monitor\" tabs in Meltwater mobile app",
    "summary": "The mobile app’s What’s New and Monitor tabs have been refreshed to show coverage updates, volume changes for pinned searches, enable organization of saved searches and tags, and add sorting, filtering, and fewer taps to open coverage.",
    "impact": "Improves on‑the‑go monitoring efficiency for analysts tracking brand mentions and trends.",
    "overlap": [
      "Mobile App",
      "UI Refresh",
      "Monitoring"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 69,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "AI‑powered Media List Overview",
    "summary": "Media List Overview now uses AI to automatically summarize each journalist’s beats, locations, tier, and reach, and provides linked journalist insights to help decide list suitability before outreach.",
    "impact": "Speeds up list evaluation and improves targeting accuracy for PR campaigns.",
    "overlap": [
      "AI Summarization",
      "Media List",
      "Journalist Insights"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 70,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Track MCP credit usage directly in AI Assistant",
    "summary": "A new credit‑usage tool lets any Meltwater MCP user view credit consumption (by month, tool, user, or conversation) inside the LLM interface without opening Meltwater or needing admin rights.",
    "impact": "Gives teams real‑time visibility into credit spend, helping manage budgets and avoid unexpected overages.",
    "overlap": [
      "Credit Management",
      "AI Assistant",
      "MCP"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 71,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "AI Brand Visibility template in Analyze",
    "summary": "A ready‑made dashboard powered by GenAI Lens now tracks brand and competitor visibility, mentions, sentiment, and source influence across AI models, plus 13 new GenAI Lens widgets for any Analyze dashboard.",
    "impact": "Enables faster, AI‑enhanced brand health monitoring and comparative analysis for marketing teams.",
    "overlap": [
      "Brand Visibility",
      "GenAI",
      "Dashboard"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 72,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Track Instagram Reels views across creator roster",
    "summary": "Shows watch counts for each Instagram Reel for every creator in a Klear roster, using Instagram‑reported data (including paid, organic, and Facebook breakdowns) even for creators without a connected Instagram account.",
    "impact": "Provides comprehensive performance metrics for influencer video content, aiding ROI assessment.",
    "overlap": [
      "Instagram",
      "Reels",
      "Influencer Analytics"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 73,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Searchable dashboard widget library in Analyze",
    "summary": "Users can now search more than 200 dashboard widgets using keywords beyond widget titles, and each widget displays a one‑line description of its function before adding it.",
    "impact": "Reduces time spent building dashboards and helps analysts discover relevant visualizations more easily.",
    "overlap": [
      "Dashboard",
      "Widget Search",
      "Analyze"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 74,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Personalized pitches and relationship history in Media Relations",
    "summary": "Media Relations now lets users build a single pitch for a list, tailor each message and attachment per journalist, send in bulk, and track journalist relationship activity and history.",
    "impact": "Improves outreach relevance and enables better relationship management for PR teams.",
    "overlap": [
      "Media Relations",
      "Personalization",
      "Relationship Tracking"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 75,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "MCP Credit Dashboard for account admins",
    "summary": "Account admins can now view a comprehensive MCP Usage page showing credits used/remaining, active users, spend by tool, usage trends, and live updates to manage costs and contract limits.",
    "impact": "Facilitates proactive cost control and adoption tracking across the organization.",
    "overlap": [
      "MCP",
      "Credit Dashboard",
      "Admin Tools"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 76,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Meet the new Mira Companion AI assistant",
    "summary": "Mira Companion can understand user context within Meltwater, help build searches, research articles and journalists, explain dashboards and results, take actions without page switches, and remembers chat history and preferences.",
    "impact": "Streamlines workflow by providing an always‑on AI guide, reducing context‑switching for analysts.",
    "overlap": [
      "AI Assistant",
      "Search",
      "Mira Companion"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 77,
    "tool": "Meltwater",
    "category": "Social Listening",
    "date": "2026-10-01",
    "title": "Share newsletters with AI briefings to Slack, Teams, and more",
    "summary": "Users can share newsletters as links that include AI‑generated briefings summarizing top themes, key storylines, and media coverage, ready to paste into collaboration tools.",
    "impact": "Accelerates internal communication of media insights, keeping teams aligned with minimal manual summarization.",
    "overlap": [
      "Newsletters",
      "AI Briefings",
      "Collaboration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.meltwater.com/en/product-updates",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 78,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-30",
    "title": "Account switching on iOS and Android",
    "summary": "Users can stay signed into up to two ChatGPT accounts simultaneously on the iOS and Android apps and switch between them without signing out, with each account keeping its own chats, memory, settings, and subscriptions.",
    "impact": "Allows marketers and analysts to manage multiple brand or client accounts from a single device, preserving context and reducing login friction.",
    "overlap": [
      "account management",
      "mobile",
      "multi‑account"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 79,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-29",
    "title": "Increased Work and Codex usage limits for Pro and Business Premium plans",
    "summary": "Pro 100, Pro 500, and Pro 200 plans now receive double their previous Work and Codex usage allowances, and the earlier reduction for Pro 200 has been cancelled.",
    "impact": "Provides analytics and development teams with more compute budget for data processing and code generation without additional cost.",
    "overlap": [
      "plan limits",
      "usage quota",
      "Work & Codex"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 80,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-28",
    "title": "Texting your dot (beta)",
    "summary": "Pro users in the U.S. can enable a \"dot\" that can send and receive secure iMessage or RCS texts, proactively delivering updates and sharing the same memory and plugins as the dot in the ChatGPT app.",
    "impact": "Gives marketers a native SMS channel for receiving AI‑generated insights and updates on the go.",
    "overlap": [
      "SMS integration",
      "dot",
      "beta"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 81,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-28",
    "title": "Promotional API credits for eligible ChatGPT Pro and Business plans",
    "summary": "Eligible Pro and Business subscribers can activate promotional API credits that apply to a linked API organization, separate from ChatGPT usage credits, to build apps and agents with the OpenAI API.",
    "impact": "Lowers the barrier for teams to prototype and deploy custom analytics agents using OpenAI's API.",
    "overlap": [
      "API credits",
      "promo",
      "developer tools"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 82,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-27",
    "title": "iCloud Mail and Calendar plugins in ChatGPT",
    "summary": "iCloud users can connect their Mail and Calendar to ChatGPT, enabling the model to search emails, summarize inboxes, check schedules, and update calendar events across all plans on web, desktop, and iOS.",
    "impact": "Streamlines content planning and scheduling for marketing teams by integrating personal email and calendar data directly into ChatGPT workflows.",
    "overlap": [
      "mail plugin",
      "calendar plugin",
      "iCloud integration"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 83,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-10-26",
    "title": "GPT-6.1 Terra model rollout",
    "summary": "The GPT-6.1 Terra model is rolling out in ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, and Edu plans, supporting visual reasoning, computer use, and writing, selectable from the model list.",
    "impact": "Adds advanced multimodal capabilities for generating visual insights and automating complex tasks in analytics and marketing workflows.",
    "overlap": [
      "GPT-6.1 Terra",
      "visual reasoning",
      "multimodal"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 84,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Natural‑language query auto‑creates searchable filters",
    "summary": "Creator Discovery can take a free‑text request (e.g., “skincare creators in the US”) and automatically translate it into a set of adjustable filters such as platform, industry, region, gender, and follower reach.",
    "impact": "Marketers can launch creator searches faster without manually building filter criteria, accelerating the sourcing process.",
    "overlap": [
      "NLU search",
      "filter generation",
      "creator discovery"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 85,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Scanned creators automatically added to organization’s Creators list",
    "summary": "After a creator is scanned with any of the Lite, Medium, or Comprehensive scan levels, the creator is instantly added to the team’s central Creators list for ongoing brand‑safety, suitability, and compliance analysis.",
    "impact": "This eliminates manual onboarding steps, keeping creator data centralized and ready for further campaign planning.",
    "overlap": [
      "creator onboarding",
      "data integration",
      "creator discovery"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 86,
    "tool": "Sprinklr",
    "category": "Social Management",
    "date": "2026-10-24",
    "title": "Media Support for Amazon Bedrock Models in AI+ Studio",
    "summary": "The AI+ Studio module now supports Amazon Bedrock models for media, enabling workflows that can process visual content automatically and maintain parity with other model providers.",
    "impact": "Marketing teams can automate image and video analysis within Sprinklr, speeding up content insights and reducing manual effort.",
    "overlap": [
      "AI",
      "Media Processing",
      "Amazon Bedrock"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.sprinklr.com/help/articles/264-release-27th-mar-26-onwards/sprinklr-unified-platform-integrations-and-cross-products-displaypresentations-264-release-notes/69ba6d5e1d80763efa4a628b",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 87,
    "tool": "Sprinklr",
    "category": "Social Management",
    "date": "2026-10-24",
    "title": "Google Vertex Text Embedding and Image Generation Support in AI+ Studio",
    "summary": "AI+ Studio now integrates Google Vertex capabilities, allowing users to generate text embeddings and create images directly within their workflows.",
    "impact": "Enables richer content creation and semantic analysis, helping analysts derive deeper insights from text and visual assets.",
    "overlap": [
      "AI",
      "Google Vertex",
      "Embedding"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.sprinklr.com/help/articles/264-release-27th-mar-26-onwards/sprinklr-unified-platform-integrations-and-cross-products-displaypresentations-264-release-notes/69ba6d5e1d80763efa4a628b",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 88,
    "tool": "Sprinklr",
    "category": "Social Management",
    "date": "2026-10-24",
    "title": "Bulk Testing for AI Use Case Pipelines",
    "summary": "A new bulk testing capability lets users run large‑scale tests on AI use case pipelines, streamlining validation and performance evaluation.",
    "impact": "Allows marketing analytics teams to efficiently validate AI models across many scenarios, improving reliability before deployment.",
    "overlap": [
      "AI",
      "Testing",
      "Pipelines"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.sprinklr.com/help/articles/264-release-27th-mar-26-onwards/sprinklr-unified-platform-integrations-and-cross-products-displaypresentations-264-release-notes/69ba6d5e1d80763efa4a628b",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 89,
    "tool": "ListenFirst",
    "category": "Social Intelligence",
    "date": "2023-12-11",
    "title": "ListenFirst launches “Social Indexes for Video Games” data set",
    "summary": "ListenFirst announced the release of a new product and data set called “Social Indexes for Video Games,” providing industry‑specific social analytics for the gaming sector.",
    "impact": "Gives media and marketing teams granular insights into gaming‑related social conversations, helping them target and measure campaigns in a fast‑growing market.",
    "overlap": [
      "Social Indexes",
      "Video Games",
      "Data Set"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.listenfirstmedia.com/category/news-events/press-releases",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 90,
    "tool": "ListenFirst",
    "category": "Social Intelligence",
    "date": "2023-12-11",
    "title": "Improved Paid Analytics now includes TikTok data",
    "summary": "ListenFirst announced an upgrade to its Paid Analytics offering that now incorporates TikTok metrics, expanding paid‑media measurement beyond existing platforms.",
    "impact": "Enables marketers to evaluate TikTok ad performance alongside other paid channels, improving cross‑platform ROI analysis.",
    "overlap": [
      "Paid Analytics",
      "TikTok",
      "Ad Measurement"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://www.listenfirstmedia.com/category/news-events/press-releases",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 91,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-11-04",
    "title": "ChatGPT Images 2.6 model",
    "summary": "The new Images 2.6 model generates images faster and better preserves details across edits, such as keeping a character’s outfit consistent when the background changes.",
    "impact": "Marketers can produce high‑quality, consistent visual assets more quickly, accelerating campaign creation and iteration.",
    "overlap": [
      "image generation",
      "visual AI",
      "content creation"
    ],
    "confidence": "High",
    "priority": "High",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 92,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-11-04",
    "title": "GIF creation in ChatGPT",
    "summary": "GIF creation is rolling out, letting users ask for looping animations or upload a sketch and have ChatGPT generate a GIF, with controls for playback speed and easy sharing.",
    "impact": "Teams can generate animated visuals directly in chat, streamlining social‑media and ad‑creative production without external tools.",
    "overlap": [
      "GIF generation",
      "animation",
      "media creation"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 93,
    "tool": "ChatGPT",
    "category": "AI",
    "date": "2026-11-04",
    "title": "Saved reference images",
    "summary": "Saved reference images let users store a photo (e.g., a pet named Pepper) and reuse it in later chats without re‑uploading, enabling prompts like “watercolor portrait of @Pepper.”",
    "impact": "Provides a persistent visual reference that speeds up iterative design work and ensures brand‑consistent imagery across sessions.",
    "overlap": [
      "reference images",
      "prompt memory",
      "asset management"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 94,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Advanced filter refinement and dynamic criteria addition in Creator Discovery",
    "summary": "Creator Discovery now lets users refine search results by platform, industry, topic, region, country, gender, and follower reach, and add new criteria on the fly as the search evolves.",
    "impact": "Marketing teams can pinpoint the most relevant creators faster, reducing time spent on manual filtering and improving campaign relevance.",
    "overlap": [
      "Filter refinement",
      "Dynamic search criteria",
      "Creator sourcing"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  },
  {
    "id": 95,
    "tool": "VwD",
    "category": "Media Intelligence",
    "date": "2026-10-01",
    "title": "Access to over 2.5 M creators in Creator Discovery",
    "summary": "The new Creator Discovery workflow provides searchable access to a database of more than 2.5 million creators for sourcing and intelligence.",
    "impact": "A larger creator pool expands the reach of media teams, enabling discovery of niche or emerging influencers that were previously unavailable.",
    "overlap": [
      "Creator database",
      "Discovery scale",
      "Influencer sourcing"
    ],
    "confidence": "High",
    "priority": "Medium",
    "source": "https://www.vwd.ai/pulse/discovery-launch",
    "sourceType": "Official source",
    "reliability": "Reliable"
  }
];

const TRENDING_REFRESHED_AT = "2026-11-08";
const TRENDING = [
  {
    "name": "Meta Spaces",
    "category": "Productivity",
    "date": "2026-11-07",
    "summary": "Meta introduced \"Spaces,\" a new collaboration environment that lets users work together with their Muse AI agent.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "Airbnb AI Travel Agent",
    "category": "Productivity",
    "date": "2026-11-07",
    "summary": "Airbnb announced it will launch an AI‑powered travel agent service, slated for release in the first half of 2027.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Muse AI Avatar Video Chat",
    "category": "Social",
    "date": "2026-11-07",
    "summary": "Meta enabled U.S. users to video‑chat with their Muse AI avatar, adding real‑time visual interaction to the Muse platform.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Muse app Spaces",
    "category": "AI",
    "date": "2026-11-06",
    "summary": "Meta introduced \"Spaces\" in the Muse app, an interactive way for users to build more customized experiences within the AI companion.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "GPT‑6 Cyber",
    "category": "AI",
    "date": "2026-11-05",
    "summary": "OpenAI announced GPT‑6 Cyber, a new cybersecurity‑focused variant of the upcoming GPT‑6 model designed to provide aligned, safety‑first assistance for security agents.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "Muse app Voice & expressive avatars",
    "category": "AI",
    "date": "2026-11-05",
    "summary": "Meta began rolling out voice capabilities and expressive avatars in the Muse app, allowing users to interact with their Muse using spoken language and visual expressions.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "WhatsApp Events updates",
    "category": "Social",
    "date": "2026-11-05",
    "summary": "WhatsApp announced new updates to its Events feature, simplifying the process of organizing gatherings and improving coordination beyond traditional group chats.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "Daybreak Red (AWS GovCloud availability)",
    "category": "AI",
    "date": "2026-11-04",
    "summary": "OpenAI made its Daybreak Red model generally available in the AWS GovCloud (US‑East) region, extending the model’s deployment options for government‑grade workloads.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Claude Opus 5.5",
    "category": "AI",
    "date": "2026-11-01",
    "summary": "Anthropic announced the Claude Opus 5.5 model, optimized for agentic coding and knowledge work, offering about 40% lower operating costs compared to Opus 5 on typical workloads.",
    "source": "https://www.anthropic.com/news",
    "sourceType": "Anthropic News",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "Zest restaurant‑reservation AI agent",
    "category": "AI",
    "date": "2026-10-31",
    "summary": "Zest introduced a new AI agent that can find restaurants and book reservations via text messaging.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Style Sketch",
    "category": "AI",
    "date": "2026-10-30",
    "summary": "Meta quietly launched an AI‑powered fashion app called Style Sketch, allowing users to generate clothing designs with artificial intelligence.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Mistral trillion‑parameter model weights",
    "category": "AI",
    "date": "2026-10-30",
    "summary": "Mistral released the weights for its trillion‑parameter AI model, positioning it for cybersecurity applications.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "Muse Wonder and Muse Wonder Full models",
    "category": "AI",
    "date": "2026-10-28",
    "summary": "Meta announced Muse Wonder and Muse Wonder Full, its most capable frontier AI models designed to improve performance on personal and professional agentic tasks.",
    "source": "https://about.fb.com/news/",
    "sourceType": "Meta Newsroom",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "Frontier expands to more Microsoft 365 public previews",
    "category": "Productivity",
    "date": "2026-10-26",
    "summary": "Microsoft announced that its Frontier tool is being extended to additional Microsoft 365 public preview programs, allowing more customers to test upcoming features early.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Block Voice Model",
    "category": "AI",
    "date": "2026-10-25",
    "summary": "Block released a new voice model that generates speech sounding eerily human.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-11-08";
const ISSUES = [];

const SCAN_META = {
  "lastRun": "2026-11-08T04:48:13.500Z",
  "runType": "Automatic (weekly)"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-11-08T13:12:13.689Z"
};

const NOTIFICATIONS = [
  {
    "id": "upd-89",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "ListenFirst: ListenFirst launches “Social Indexes for Video Games” data set",
    "target": {
      "page": "updates",
      "id": 89
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-90",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "ListenFirst: Improved Paid Analytics now includes TikTok data",
    "target": {
      "page": "updates",
      "id": 90
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-91",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "ChatGPT: ChatGPT Images 2.6 model",
    "target": {
      "page": "updates",
      "id": 91
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-92",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "ChatGPT: GIF creation in ChatGPT",
    "target": {
      "page": "updates",
      "id": 92
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-93",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "ChatGPT: Saved reference images",
    "target": {
      "page": "updates",
      "id": 93
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-94",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "VwD: Advanced filter refinement and dynamic criteria addition in Creator Discovery",
    "target": {
      "page": "updates",
      "id": 94
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-95",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "update",
    "text": "VwD: Access to over 2.5 M creators in Creator Discovery",
    "target": {
      "page": "updates",
      "id": 95
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-GPT‑6 Cyber-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "GPT‑6 Cyber",
    "target": {
      "page": "trending",
      "name": "GPT‑6 Cyber"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Daybreak Red (AWS GovCloud availability)-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Daybreak Red (AWS GovCloud availability)",
    "target": {
      "page": "trending",
      "name": "Daybreak Red (AWS GovCloud availability)"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse app Spaces-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Muse app Spaces",
    "target": {
      "page": "trending",
      "name": "Muse app Spaces"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse app Voice & expressive avatars-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Muse app Voice & expressive avatars",
    "target": {
      "page": "trending",
      "name": "Muse app Voice & expressive avatars"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-WhatsApp Events updates-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "WhatsApp Events updates",
    "target": {
      "page": "trending",
      "name": "WhatsApp Events updates"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Meta Spaces-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Meta Spaces",
    "target": {
      "page": "trending",
      "name": "Meta Spaces"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Airbnb AI Travel Agent-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Airbnb AI Travel Agent",
    "target": {
      "page": "trending",
      "name": "Airbnb AI Travel Agent"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse AI Avatar Video Chat-2026-11-08T04:43:42.252Z",
    "date": "2026-11-08T04:43:42.252Z",
    "type": "trending",
    "text": "Muse AI Avatar Video Chat",
    "target": {
      "page": "trending",
      "name": "Muse AI Avatar Video Chat"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-64",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "GWI: GWI launches Agent Spark",
    "target": {
      "page": "updates",
      "id": 64
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-65",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Brandwatch: Community is now open for Social Media Management users",
    "target": {
      "page": "updates",
      "id": 65
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-66",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Brandwatch: Measure adds Facebook Followers metric",
    "target": {
      "page": "updates",
      "id": 66
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-67",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Expanded Role Permissions for Klear admins",
    "target": {
      "page": "updates",
      "id": 67
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-68",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Redesigned \"What’s New\" and \"Monitor\" tabs in Meltwater mobile app",
    "target": {
      "page": "updates",
      "id": 68
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-69",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: AI‑powered Media List Overview",
    "target": {
      "page": "updates",
      "id": 69
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-70",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Track MCP credit usage directly in AI Assistant",
    "target": {
      "page": "updates",
      "id": 70
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-71",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: AI Brand Visibility template in Analyze",
    "target": {
      "page": "updates",
      "id": 71
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-72",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Track Instagram Reels views across creator roster",
    "target": {
      "page": "updates",
      "id": 72
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-73",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Searchable dashboard widget library in Analyze",
    "target": {
      "page": "updates",
      "id": 73
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-74",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Personalized pitches and relationship history in Media Relations",
    "target": {
      "page": "updates",
      "id": 74
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-75",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: MCP Credit Dashboard for account admins",
    "target": {
      "page": "updates",
      "id": 75
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-76",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Meet the new Mira Companion AI assistant",
    "target": {
      "page": "updates",
      "id": 76
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-77",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Meltwater: Share newsletters with AI briefings to Slack, Teams, and more",
    "target": {
      "page": "updates",
      "id": 77
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-78",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: Account switching on iOS and Android",
    "target": {
      "page": "updates",
      "id": 78
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-79",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: Increased Work and Codex usage limits for Pro and Business Premium plans",
    "target": {
      "page": "updates",
      "id": 79
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-80",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: Texting your dot (beta)",
    "target": {
      "page": "updates",
      "id": 80
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-81",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: Promotional API credits for eligible ChatGPT Pro and Business plans",
    "target": {
      "page": "updates",
      "id": 81
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-82",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: iCloud Mail and Calendar plugins in ChatGPT",
    "target": {
      "page": "updates",
      "id": 82
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-83",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "ChatGPT: GPT-6.1 Terra model rollout",
    "target": {
      "page": "updates",
      "id": 83
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-84",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "VwD: Natural‑language query auto‑creates searchable filters",
    "target": {
      "page": "updates",
      "id": 84
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-85",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "VwD: Scanned creators automatically added to organization’s Creators list",
    "target": {
      "page": "updates",
      "id": 85
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-86",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Sprinklr: Media Support for Amazon Bedrock Models in AI+ Studio",
    "target": {
      "page": "updates",
      "id": 86
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-87",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Sprinklr: Google Vertex Text Embedding and Image Generation Support in AI+ Studio",
    "target": {
      "page": "updates",
      "id": 87
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-88",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "update",
    "text": "Sprinklr: Bulk Testing for AI Use Case Pipelines",
    "target": {
      "page": "updates",
      "id": 88
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse Wonder and Muse Wonder Full models-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Muse Wonder and Muse Wonder Full models",
    "target": {
      "page": "trending",
      "name": "Muse Wonder and Muse Wonder Full models"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Frontier expands to more Microsoft 365 public previews-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Frontier expands to more Microsoft 365 public previews",
    "target": {
      "page": "trending",
      "name": "Frontier expands to more Microsoft 365 public previews"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Claude Opus 5.5-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Claude Opus 5.5",
    "target": {
      "page": "trending",
      "name": "Claude Opus 5.5"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Style Sketch-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Style Sketch",
    "target": {
      "page": "trending",
      "name": "Style Sketch"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Mistral trillion‑parameter model weights-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Mistral trillion‑parameter model weights",
    "target": {
      "page": "trending",
      "name": "Mistral trillion‑parameter model weights"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Zest restaurant‑reservation AI agent-2026-11-01T04:41:40.975Z",
    "date": "2026-11-01T04:41:40.975Z",
    "type": "trending",
    "text": "Zest restaurant‑reservation AI agent",
    "target": {
      "page": "trending",
      "name": "Zest restaurant‑reservation AI agent"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  }
]; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
