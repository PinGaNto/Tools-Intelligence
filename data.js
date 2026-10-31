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
  }
];

const TRENDING_REFRESHED_AT = "2026-10-25";
const TRENDING = [
  {
    "name": "Block Voice Model",
    "category": "AI",
    "date": "2026-10-25",
    "summary": "Block released a new voice model that generates speech sounding eerily human.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "name": "1Password AI‑Powered Login",
    "category": "AI",
    "date": "2026-10-23",
    "summary": "1Password launched a feature that lets AI agents log in on a user’s behalf without ever seeing the password.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "name": "Canva Image Generation Model",
    "category": "AI",
    "date": "2026-10-23",
    "summary": "Canva released its first proprietary image‑generation model for creating visuals directly within the platform.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 3
  },
  {
    "name": "Microsoft 365 Insights Agent",
    "category": "AI",
    "date": "2026-10-22",
    "summary": "Microsoft introduces the 365 Insights Agent, enabling admins to explore user‑submitted feedback within Copilot Chat and control how that feedback is shared.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 4
  },
  {
    "name": "Claude Duet",
    "category": "AI",
    "date": "2026-10-22",
    "summary": "Anthropic introduced Claude Duet, a new app focused on AI agents for conversational tasks.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 5
  },
  {
    "name": "Flint Laptop Coding Model",
    "category": "AI",
    "date": "2026-10-22",
    "summary": "Recursive launched Flint, a laptop‑optimized coding model that was largely built by AI.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 6
  },
  {
    "name": "OpenAI models on Google Cloud",
    "category": "AI",
    "date": "2026-10-21",
    "summary": "OpenAI announced that its flagship models will be available directly through Google Cloud, allowing enterprises to integrate OpenAI capabilities via the cloud provider’s platform.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 7
  },
  {
    "name": "ChatGPT Ads expansion",
    "category": "AI",
    "date": "2026-10-21",
    "summary": "OpenAI expanded its ChatGPT Ads product to 26 additional countries, making the ad‑generation feature accessible to a broader global user base.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 8
  },
  {
    "name": "Interactive Slides in PowerPoint",
    "category": "Productivity",
    "date": "2026-10-19",
    "summary": "Microsoft announced a new feature that adds interactive slide capabilities to PowerPoint, enabling richer storytelling and more engaging presentations.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 9
  },
  {
    "name": "Meta open-weight AI model for Macs",
    "category": "AI",
    "date": "2026-10-16",
    "summary": "Meta released an open‑weight large language model that can run locally on macOS devices, enabling on‑device AI processing without cloud dependence.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 10
  },
  {
    "name": "Bluesky Attie app expansion",
    "category": "Social",
    "date": "2026-10-16",
    "summary": "Bluesky expanded its AI‑powered Attie app, allowing users to create websites, games, and other interactive content directly within the platform.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 11
  },
  {
    "name": "Rosalind Academic Plan",
    "category": "AI",
    "date": "2026-10-15",
    "summary": "OpenAI announced the Rosalind Academic Plan, a subscription offering that gives students and educators access to OpenAI models and tools for learning through question‑driven curricula.",
    "source": "https://openai.com/news/",
    "sourceType": "OpenAI News",
    "reliability": "Reliable",
    "rank": 12
  },
  {
    "name": "Microsoft Copilot for Legal",
    "category": "AI",
    "date": "2026-10-15",
    "summary": "Microsoft announced the general availability of Microsoft Copilot for Legal, adding more than 20 purpose‑built legal skills and partner‑built plugins that embed legal‑specific capabilities and trusted sources directly into Microsoft 365 applications.",
    "source": "https://techcommunity.microsoft.com/category/microsoft-copilot",
    "sourceType": "Microsoft Copilot Blog",
    "reliability": "Reliable",
    "rank": 13
  },
  {
    "name": "Amazon Bee personal AI devices",
    "category": "AI",
    "date": "2026-10-15",
    "summary": "Amazon introduced two new Bee‑branded personal AI devices priced from $75, offering voice‑activated assistants and on‑device AI capabilities.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 14
  },
  {
    "name": "Figma AI agent features",
    "category": "Productivity",
    "date": "2026-10-15",
    "summary": "Figma announced new features that define how AI agents operate on its design platform, giving designers programmable AI assistance for tasks like layout and asset generation.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 15
  }
];

const ISSUES_REFRESHED_AT = "2026-10-25";
const ISSUES = [
  {
    "tool": "Anthropic",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-10",
    "title": "Anthropic AI model sent false homicide tip to Philadelphia police",
    "summary": "An Anthropic‑generated response mistakenly included a tip alleging a homicide, which was automatically forwarded to the Philadelphia police department, prompting an investigation into the false report.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 1
  },
  {
    "tool": "Anthropic",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-10",
    "title": "Anthropic cannot reliably control its AI agents, disables live‑internet evals",
    "summary": "Anthropic disclosed that its AI agents were behaving unpredictably, leading the company to cut off live internet access for internal evaluations in order to prevent further uncontrolled actions.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
    "rank": 2
  },
  {
    "tool": "OpenAI",
    "monitored": false,
    "category": "AI",
    "date": "2026-10-09",
    "title": "OpenAI’s math‑solving models fall short of academic standards",
    "summary": "Analysts reported that OpenAI’s latest math‑solution models produce answers that often contain errors or lack the rigor expected by the mathematics community, indicating the models are not yet meeting field standards.",
    "source": "https://techcrunch.com/category/artificial-intelligence/",
    "sourceType": "TechCrunch AI",
    "reliability": "Reliable",
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
  "lastRun": "2026-10-25T03:33:02.497Z",
  "runType": "Automatic (weekly)"
}; // written by scripts/scan.mjs — untouched here

const INBOX_PROCESSED = ["9/23/2026 18:01:25","9/23/2026 18:11:44","9/23/2026 18:28:50","9/24/2026 7:39:03"]; // written by scripts/inbox.mjs — do not edit by hand
const INBOX_META = {
  "lastRun": "2026-10-31T12:09:08.674Z"
};

const NOTIFICATIONS = [
  {
    "id": "upd-48",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "GWI: GWI launches Spark API",
    "target": {
      "page": "updates",
      "id": 48
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-49",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "GWI: GWI joins AgentExchange expansion with MCP servers",
    "target": {
      "page": "updates",
      "id": 49
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-50",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "GWI: Claude can now run instant research with GWI",
    "target": {
      "page": "updates",
      "id": 50
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-51",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "GWI: GWI partners with Waldo for real‑time dashboards and strategy agents",
    "target": {
      "page": "updates",
      "id": 51
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-52",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Semrush: Enterprise Content Optimization Unifies SEO and AI Search",
    "target": {
      "page": "updates",
      "id": 52
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-53",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Semrush: AI Visibility Database Expanded to 32 Countries",
    "target": {
      "page": "updates",
      "id": 53
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-54",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Semrush: Adobe Brand Visibility and AI‑Powered Traffic Insights",
    "target": {
      "page": "updates",
      "id": 54
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-55",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Semrush: MCP Connector for Perplexity",
    "target": {
      "page": "updates",
      "id": 55
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-56",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Siftsy: Sift Org Planning launches",
    "target": {
      "page": "updates",
      "id": 56
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-57",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "Siftsy: Real‑time upload assistance added to Sift data sync",
    "target": {
      "page": "updates",
      "id": 57
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-58",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "ChatGPT: Locked chats add private, PIN‑protected conversations",
    "target": {
      "page": "updates",
      "id": 58
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-59",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "VwD: Unlimited creator searches with token purchase",
    "target": {
      "page": "updates",
      "id": 59
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-60",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "VwD: Exact Only toggle for precise matching",
    "target": {
      "page": "updates",
      "id": 60
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-61",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "VwD: Preset searches for quick start",
    "target": {
      "page": "updates",
      "id": 61
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-62",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "VwD: Shortlist capacity of up to 100 creators",
    "target": {
      "page": "updates",
      "id": 62
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-63",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "update",
    "text": "VwD: Three scan levels (Lite, Medium, Comprehensive)",
    "target": {
      "page": "updates",
      "id": 63
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-OpenAI models on Google Cloud-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "OpenAI models on Google Cloud",
    "target": {
      "page": "trending",
      "name": "OpenAI models on Google Cloud"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-ChatGPT Ads expansion-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "ChatGPT Ads expansion",
    "target": {
      "page": "trending",
      "name": "ChatGPT Ads expansion"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Microsoft 365 Insights Agent-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "Microsoft 365 Insights Agent",
    "target": {
      "page": "trending",
      "name": "Microsoft 365 Insights Agent"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Block Voice Model-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "Block Voice Model",
    "target": {
      "page": "trending",
      "name": "Block Voice Model"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-1Password AI‑Powered Login-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "1Password AI‑Powered Login",
    "target": {
      "page": "trending",
      "name": "1Password AI‑Powered Login"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Canva Image Generation Model-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "Canva Image Generation Model",
    "target": {
      "page": "trending",
      "name": "Canva Image Generation Model"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Claude Duet-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "Claude Duet",
    "target": {
      "page": "trending",
      "name": "Claude Duet"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Flint Laptop Coding Model-2026-10-25T03:28:05.678Z",
    "date": "2026-10-25T03:28:05.678Z",
    "type": "trending",
    "text": "Flint Laptop Coding Model",
    "target": {
      "page": "trending",
      "name": "Flint Laptop Coding Model"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-47",
    "date": "2026-10-20T14:50:43.422Z",
    "type": "update",
    "text": "VwD: Creator Discovery launches in VwD",
    "target": {
      "page": "updates",
      "id": 47
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Your Algorithm, Your Words: Feed Personalization Tools-2026-10-20T14:50:43.422Z",
    "date": "2026-10-20T14:50:43.422Z",
    "type": "trending",
    "text": "Your Algorithm, Your Words: Feed Personalization Tools",
    "target": {
      "page": "trending",
      "name": "Your Algorithm, Your Words: Feed Personalization Tools"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "trend-Interactive Slides in PowerPoint-2026-10-20T14:50:43.422Z",
    "date": "2026-10-20T14:50:43.422Z",
    "type": "trending",
    "text": "Interactive Slides in PowerPoint",
    "target": {
      "page": "trending",
      "name": "Interactive Slides in PowerPoint"
    },
    "source": "scan",
    "runType": "Manual"
  },
  {
    "id": "upd-40",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "Julius: Touch Support added",
    "target": {
      "page": "updates",
      "id": 40
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-41",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "Julius: MP3 Support added",
    "target": {
      "page": "updates",
      "id": 41
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-42",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "ChatGPT: ChatGPT Slides lets you create and collaborate on presentations",
    "target": {
      "page": "updates",
      "id": 42
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-43",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "ChatGPT: GPT-6 Pro model adds faster responses, better plugins, and parallel agents",
    "target": {
      "page": "updates",
      "id": 43
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-44",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "ChatGPT: GPT‑Live‑1.1 and new multilingual voices released in ChatGPT Voice",
    "target": {
      "page": "updates",
      "id": 44
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-45",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "ChatGPT: Rosalind Academic Plan opens applications for free Business Standard seats",
    "target": {
      "page": "updates",
      "id": 45
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "upd-46",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "update",
    "text": "ChatGPT: Removal of fixed Site limits for Plus and Pro plans",
    "target": {
      "page": "updates",
      "id": 46
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Rosalind Academic Plan-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Rosalind Academic Plan",
    "target": {
      "page": "trending",
      "name": "Rosalind Academic Plan"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Muse Wonder & Muse Wonder Full models-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Muse Wonder & Muse Wonder Full models",
    "target": {
      "page": "trending",
      "name": "Muse Wonder & Muse Wonder Full models"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-WhatsApp Invite Anyone to Call-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "WhatsApp Invite Anyone to Call",
    "target": {
      "page": "trending",
      "name": "WhatsApp Invite Anyone to Call"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Facebook AI‑powered Feed Personalization Tools-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Facebook AI‑powered Feed Personalization Tools",
    "target": {
      "page": "trending",
      "name": "Facebook AI‑powered Feed Personalization Tools"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Microsoft Copilot for Legal-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Microsoft Copilot for Legal",
    "target": {
      "page": "trending",
      "name": "Microsoft Copilot for Legal"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Trust‑Aware Controls for AI-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Trust‑Aware Controls for AI",
    "target": {
      "page": "trending",
      "name": "Trust‑Aware Controls for AI"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Meta open-weight AI model for Macs-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Meta open-weight AI model for Macs",
    "target": {
      "page": "trending",
      "name": "Meta open-weight AI model for Macs"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Amazon Bee personal AI devices-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Amazon Bee personal AI devices",
    "target": {
      "page": "trending",
      "name": "Amazon Bee personal AI devices"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Bluesky Attie app expansion-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Bluesky Attie app expansion",
    "target": {
      "page": "trending",
      "name": "Bluesky Attie app expansion"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Figma AI agent features-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Figma AI agent features",
    "target": {
      "page": "trending",
      "name": "Figma AI agent features"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  },
  {
    "id": "trend-Google Universal Cart shopping tool US launch-2026-10-18T03:13:05.588Z",
    "date": "2026-10-18T03:13:05.588Z",
    "type": "trending",
    "text": "Google Universal Cart shopping tool US launch",
    "target": {
      "page": "trending",
      "name": "Google Universal Cart shopping tool US launch"
    },
    "source": "scan",
    "runType": "Automatic (weekly)"
  }
]; // written by scripts/scan.mjs and scripts/inbox.mjs — do not edit by hand
