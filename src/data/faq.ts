// FAQ data with keywords for matching.
// Each entry: q (question variations), a (answer), k (priority keywords)
// Keywords are weighted — earlier = higher priority match.

export interface FaqEntry {
  q: string[]       // Multiple question phrasings
  a: string         // The fun, energetic answer
  k: string[]       // Priority keywords for matching
}

export const faqData: FaqEntry[] = [
  // ═══════════════════════════════════════════
  // PERSONAL & BACKGROUND
  // ═══════════════════════════════════════════
  {
    q: ['Who are you?', 'Who is Jerrison Chai?', 'Tell me about yourself', 'Introduce yourself', 'What should I know about you?'],
    a: "I'm Jerrison Chai — VBA wizard, spreadsheet whisperer, and the guy who turned 20-minute daily ops into a 3-minute one-click magic trick. 12 years in the trenches: from lab coats to automation bots. Based in Kuala Lumpur, fueled by curiosity, and on a mission to FIRE in 5 years while sharing everything I learn. 🏴‍☠️\n\nCurrently at Shuei Trading building systems that make people say \"wait, that's automatic now?!\"",
    k: ['who', 'jerrison', 'about', 'introduce', 'yourself', 'tell me', 'know about'],
  },
  {
    q: ['Where do you live?', 'Where are you based?', 'Where are you located?', 'What city are you in?'],
    a: 'Kuala Lumpur, Malaysia! 🇲🇾 The land of teh tarik, 34°C weather year-round, and traffic that gives you extra podcast time. I work on-site at Shuei Trading and build side projects from my home command center (aka my laptop on the dining table).',
    k: ['where', 'live', 'based', 'located', 'city', 'kl', 'kuala lumpur', 'malaysia'],
  },
  {
    q: ['What is your hobby?', 'What do you do for fun?', 'What are your hobbies?', 'What do you do outside work?'],
    a: "Building stuff that didn't exist yesterday! 🛠️ Side projects are my Netflix — I build games (Klotski, Nail Gallery), websites, trading bots, and AI automation systems. When I'm not coding, I'm either hitting the gym (tracking every rep because data is life), making lofi beats, or dreaming about my next side hustle. Sleep is optional. Coffee is not.",
    k: ['hobby', 'hobbies', 'fun', 'outside work', 'free time', 'weekend'],
  },
  {
    q: ['What languages do you speak?', 'Do you speak Chinese?', 'What languages can you speak?', 'Are you bilingual?'],
    a: 'Two languages, double the trouble! 🗣️ English at professional working level (meetings, docs, code comments) and Chinese at native/bilingual level (family dinners, marketing campaigns, and explaining VBA to my parents). I build bilingual websites and translate content — switching between languages is just another automation in my brain.',
    k: ['language', 'speak', 'chinese', 'english', 'bilingual', 'mandarin', 'canto'],
  },
  {
    q: ['How old are you?', "What's your age?", 'When were you born?'],
    a: "I'm 40 — and I've packed about 60 years of experience into those 40. 😄 Started in a lab coat, now I'm building AI-powered automation systems. Age is just a number, but 3,348 VBA hours? That's a statistic.",
    k: ['age', 'old', 'born', '40'],
  },

  // ═══════════════════════════════════════════
  // CAREER & EXPERIENCE
  // ═══════════════════════════════════════════
  {
    q: ['What experience do you have?', 'Tell me about your experience', "What's your background?", 'What have you done?', 'Walk me through your resume'],
    a: "12 years, 2 companies, 1 obsession with making computers do the boring stuff. 💼\n\n• 2014-2023: DNA Labs — Lab Executive → Assistant Manager → VBA Developer. Built COVID-19 sample tracking (150K samples!), led LIS projects, discovered VBA and never looked back.\n• 2024-Present: Shuei Trading — VBA Business Analyst. Built JARVIS Dashboard, Supplier Comparison System, e-commerce reporting for 5 platforms. 48 releases, 727+ templates, 695K lines of code.\n\nSide quest: 12+ web/AI projects built with OpenClaw. I collect skills like Pokémon.",
    k: ['experience', 'background', 'resume', 'history', 'career', 'done', 'walk through'],
  },
  {
    q: ['What do you do for work?', "What's your job?", 'What is your current role?', 'What are you working on now?'],
    a: "I'm a VBA Business Analyst at Shuei Trading — which is a fancy way of saying \"I build robots that do spreadsheet work so humans don't have to.\" 🤖\n\nMy day: automate finance processes, build supplier comparison tools, generate e-commerce reports for Lazada/Shopee/Zalora/Qoo10/eBay, maintain 727+ templates, and occasionally blow people's minds with what Excel can actually do. 80%+ of my time is hands-on VBA development. The other 20% is explaining why automation isn't magic (it's just really good VBS-PS1-BAT-HTML pipelines).",
    k: ['work', 'job', 'role', 'current', 'do', 'position', 'working on'],
  },
  {
    q: ['What companies have you worked for?', 'Where have you worked?', 'Who have you worked for?', 'Tell me about your employers'],
    a: "Two companies, two completely different worlds:\n\n🏥 DNA Labs (2014-2023): Healthcare/laboratory. Started as a lab executive, left as the guy who automated half the operations. 9 years of gloves, SOPs, and discovering that VBA is the closest thing to a superpower.\n\n📦 Shuei Trading (2024-Present): Retail, e-commerce, supply chain. Brought my automation toolkit to a new industry and proved that good processes work anywhere.\n\nFrom test tubes to trading systems — the common thread is: find repetitive work, eliminate it, document it, move on to the next.",
    k: ['company', 'companies', 'employer', 'worked', 'where work', 'dna labs', 'shuei'],
  },
  {
    q: ["What's your education background?", 'Where did you study?', 'Are you self-taught?', 'What degree do you have?'],
    a: "Laboratory science background — which gave me two superpowers: (1) systematic thinking and (2) the inability to do anything without proper documentation. 🧪\n\nBut here's the fun part: ALL my programming skills are self-taught. VBA, TypeScript, Python, Next.js — learned by building real things that real people use. No CS degree, no bootcamp. Just 12 years of \"I wonder if I can automate that...\" followed by \"oh wait, I actually did.\"\n\nSelf-taught doesn't mean self-made though — I stand on the shoulders of Stack Overflow, documentation, and an AI co-pilot named OpenClaw.",
    k: ['education', 'study', 'degree', 'university', 'school', 'self-taught', 'learn'],
  },
  {
    q: ['How did you learn VBA?', 'How did you get into automation?', 'What made you start coding?', 'How did you become a developer?'],
    a: 'By being lazy. The best kind of lazy. 😂\n\nI was a lab assistant doing the same data entry every single day. One day I thought: "There has to be a better way." Recorded a macro. It worked. Recorded another. Modified the VBA code. It worked better. Kept going. A month later, my 2-day KPI report took 3 hours. My manager noticed. Other departments noticed.\n\nMoral of the story: Laziness is the mother of automation. Just make sure you\'re the productive kind of lazy.',
    k: ['learn', 'vba', 'automation', 'start', 'coding', 'how', 'become', 'developer', 'self taught'],
  },

  // ═══════════════════════════════════════════
  // VBA & AUTOMATION (THE FUN STUFF)
  // ═══════════════════════════════════════════
  {
    q: ['What is the JARVIS Dashboard?', 'What is JARVIS?', 'Tell me about your dashboard', "What's your biggest project?"],
    a: "JARVIS Dashboard is my magnum opus — a VBS-PS1-BAT-HTML hybrid monstrosity that does in 3 minutes what used to take 20 minutes of clicking through 5 different applications. 🦾\n\nOne. Click.\n\nIt fetches data from OneDrive, processes through VBS, generates Outlook email drafts, monitors PO approvals, and displays everything on a single HTML dashboard. It's like having a tiny robot secretary that never takes lunch breaks.\n\nBuilt it because I was tired of doing the same sequence of clicks every morning. Now my morning routine is: click button → sip coffee → work is done.",
    k: ['jarvis', 'dashboard', 'biggest project', 'signature', 'vbs', 'ps1', 'bat'],
  },
  {
    q: ['How many VBA templates have you built?', 'How many templates?', 'What have you built?', 'How much VBA have you written?'],
    a: '727+ active templates. 695,000+ lines of VBA code. 48 version releases. 📊\n\nIf you printed all my code on paper, it would stack about 14 meters high. But paper is for people who haven\'t discovered automation yet. Every template has version control, SOPs, and quality checklists — because code without documentation is just a mystery waiting to happen.',
    k: ['template', 'templates', 'how many', 'build', 'built', 'written', 'count', 'number', '727', '695'],
  },
  {
    q: ['How many hours of VBA have you done?', 'VBA hours?', 'How much time on VBA?', 'Total VBA time?'],
    a: '3,348 hours across 2 years. That\'s ~140 hours/month of pure VBA. 📈\n\nFor perspective: that\'s 139 full 24-hour days. Or 418 eight-hour workdays. Or approximately enough time to watch the entire Lord of the Rings extended trilogy 290 times. I choose to spend it automating spreadsheets. What can I say — I know what I like.',
    k: ['hour', 'hours', 'time', 'vba time', '3348', 'total', 'how long'],
  },
  {
    q: ['What automation tools do you use?', 'What technologies do you use for automation?', 'Tech stack for VBA?', 'What software do you use?'],
    a: "My automation Swiss Army knife: 🔧\n• VBA (Excel) — the main weapon, 727+ templates\n• VBScript — file system magic, OneDrive orchestration\n• PowerShell — system-level automation, task scheduling\n• BAT — quick and dirty scripts that just work\n• HTML/CSS — dashboards that don't look like 1998\n• Python (Puppeteer/Playwright) — for when VBA needs web-scraping backup\n• Outlook COM automation — emails that write themselves\n\nIf Microsoft Office is the canvas, this stack is the paint, brushes, and a small army of robot painters.",
    k: ['tool', 'tools', 'tech', 'technology', 'stack', 'software', 'vbs', 'powershell', 'bat', 'html', 'python'],
  },

  // ═══════════════════════════════════════════
  // AI & LLM
  // ═══════════════════════════════════════════
  {
    q: ['How often do you use AI?', 'Do you use AI daily?', 'How much AI do you use?', 'Is AI part of your workflow?'],
    a: "I use AI so often my laptop might qualify for sentient being status. 🤖\n\nDaily: OpenClaw AI agents handle my trading scans, personal growth newsletter, system health checks, and 17+ cron jobs. My side projects are built WITH AI, not just using AI — OpenClaw is my co-pilot, not my autopilot.\n\nWeekly: I run 37+ automated AI tasks. Ollama runs local models (free!) for quick checks. DeepSeek handles heavy analysis.\n\nPhilosophy: AI should do the boring stuff so humans can do the interesting stuff. I'm the human. AI is the very enthusiastic intern who works 24/7.",
    k: ['ai', 'use ai', 'daily', 'how often', 'artificial intelligence', 'workflow', 'automation ai'],
  },
  {
    q: ['Do you use any LLM tokens?', 'What AI models do you use?', 'Which LLMs?', 'What language models?', 'DeepSeek?', 'Ollama?'],
    a: "Oh, I track tokens like a day trader tracks candlesticks! 📊\n\nMy setup:\n• Ollama (local, FREE): Qwen2.5-Coder 7B & Qwen3.5 9B — runs on my laptop, handles 37% of all tasks at $0 cost\n• DeepSeek Chat: Main workhorse — $0.27/M input, $1.10/M output. Handles trading scans, newsletters, analysis\n• DeepSeek Reasoner: Heavy artillery for complex problems — $1.36/M input, $5.44/M output\n\nTotal cost? About $1.07/month. That's less than one teh tarik. My AI runs on pocket change and still produces 3,348 hours of VBA. Efficiency isn't just what I build — it's how I build.",
    k: ['llm', 'token', 'model', 'ai model', 'deepseek', 'ollama', 'qwen', 'language model', 'gpt', 'claude'],
  },
  {
    q: ['What is OpenClaw?', 'Tell me about OpenClaw', 'What AI agent do you use?', 'What is your AI setup?'],
    a: "OpenClaw is the AI agentic workflow platform that runs my digital empire. 🏴‍☠️ Think of it as a crew of AI agents — each with a role (trading, building, checking, teaching) — working 24/7 under my direction.\n\nIt runs locally on my laptop, orchestrates 18 cron jobs, and lets me build websites, trading systems, and automation pipelines from my phone while I'm at my day job. This portfolio? Built with OpenClaw. The chatbot you're talking to? Designed and deployed by OpenClaw agents.\n\nIt's like having a team of very specialized, never-sleeping interns. Except they're all AI. And they don't steal office supplies.",
    k: ['openclaw', 'ai agent', 'agent', 'platform', 'co-pilot', 'setup', 'assistant'],
  },

  // ═══════════════════════════════════════════
  // INTERVIEW-STYLE QUESTIONS
  // ═══════════════════════════════════════════
  {
    q: ['How do you deal with difficult situations?', 'How do you handle challenges?', 'Tell me about a difficult problem', 'How do you solve problems?', 'What do you do when stuck?'],
    a: "I treat difficult situations like a misbehaving Excel macro — break it down, isolate the problem, and fix it systematically. 🔍\n\nReal example: Supplier Comparison System. I had 100+ suppliers sending files in completely different formats. No standardization. Different columns, different naming, different everything. The \"easy\" solution: hire someone to manually normalize. The \"my\" solution: build a VBA system that detects format patterns, maps columns intelligently, and produces unified reports.\n\nTook 2 weeks. Saved months of ongoing manual work. That's my approach: see chaos → find pattern → automate → document → move on.\n\nWhen I'm truly stuck, I step back, take a walk, talk it through with my AI co-pilot, or explain the problem out loud to an imaginary rubber duck. Works 90% of the time. The duck is very patient.",
    k: ['difficult', 'challenge', 'problem', 'stuck', 'solve', 'handle', 'deal with', 'situation', 'overcome'],
  },
  {
    q: ['What is your greatest weakness?', 'What are your weaknesses?', 'What do you struggle with?', 'What are you bad at?'],
    a: "Classic interview question! Let me give you the honest version, not the \"I work too hard\" cliché. 😅\n\nMy weakness: I sometimes build before asking. Early in my career, I'd create automation tools I thought people needed — without actually watching them work first. Result: technically perfect tools that nobody used. Lesson learned HARD.\n\nNow I shadow users, understand their actual pain, and build what they'll actually adopt. The \"fix\" became a strength: I'm obsessive about user-centric design. Every template I build now starts with \"show me exactly what you do, step by step.\"\n\nAlso, I'm terrible at saying no to interesting projects. But that's how you end up with 12 side hustles, so... is that really a weakness? 😏",
    k: ['weakness', 'weaknesses', 'struggle', 'bad at', 'flaw', 'improve', 'greatest weakness'],
  },
  {
    q: ['What is your greatest strength?', 'What are you good at?', 'What makes you unique?', 'Why should I hire you?'],
    a: "I turn \"we've always done it this way\" into \"wait, the computer does that now?\" 💪\n\nMy real strength: I see automation opportunities that most people walk past every day. Where others see repetitive work as \"just part of the job,\" I see a system waiting to be built. 20-minute daily ops? Now 3 minutes. 2-day reports? Now 3 hours. 100 supplier files in different formats? One standardized output.\n\nBut the secret sauce isn't just technical — it's that I document EVERYTHING. 48 releases, zero rollbacks. SOPs, quality checklists, training records. I don't just build the tool; I make sure anyone can use it after I'm gone.\n\nHire me if you want someone who treats your boring, repetitive processes like personal enemies and eliminates them with extreme prejudice. 😤",
    k: ['strength', 'good at', 'unique', 'hire', 'why you', 'best', 'greatest strength', 'superpower'],
  },
  {
    q: ['Where do you see yourself in 5 years?', 'What are your career goals?', 'Future plans?', 'What do you want to achieve?', '5 year plan?'],
    a: "FIRE. Financial Independence, Retire Early. 🔥\n\nIn 5 years, I want to be financially free — not from work (I love building), but from the NEED to work. Multiple income streams: trading, education platform (Exceljerr), web services, lofi music, and creative projects.\n\nCareer-wise: I want to be known as the person who demystifies automation and makes it accessible. Teaching Excel/VBA through my education platform. Building tools that multiply people's output. Sharing good quality education to the world.\n\nAlso: I want at least one person to say \"this spreadsheet changed my life.\" That's the dream. The lofi album would be nice too. 🎵",
    k: ['5 years', 'future', 'goal', 'career goal', 'plan', 'achieve', 'ambition', 'fire', 'retire'],
  },
  {
    q: ['How do you handle pressure?', 'How do you work under stress?', 'Are you good under pressure?', 'How do you handle deadlines?'],
    a: "Pressure? Let me tell you about managing 150,000 COVID-19 samples with a live forecasting system while the whole country was in lockdown. 😷\n\nThat was real pressure — and I thrived. Here's my framework:\n\n1. Scope lock: When the deadline is tight, the feature list gets tight. What MUST ship? Everything else: next version.\n2. Communication: Stakeholders know exactly what's coming and when. No surprises.\n3. Execution: Deep focus. Music on. Distractions off. Ship.\n\nI don't panic — I prioritize. Panic is just unclear priorities having a party in your brain. My job is to shut down the party and hand out assignments.",
    k: ['pressure', 'stress', 'deadline', 'tight', 'urgent', 'handle stress', 'under pressure'],
  },
  {
    q: ['How do you work in a team?', 'Are you a team player?', 'Do you work well with others?', 'Teamwork style?'],
    a: "I'm the teammate who builds tools that make the whole team faster. 🏗️\n\nMy style: lead by building, train by documenting. At DNA Labs, I led the INV team with one direct report (Gino) while building automation that served 5 departments. At Shuei Trading, I'm a solo automation developer who collaborates with stakeholders across finance, purchasing, and e-commerce.\n\nI don't need to be in every meeting — I need to understand the problem, build the solution, document it, and train people on it. My team value isn't in the hours I spend in Zoom calls; it's in the hours I save everyone else.\n\nAlso: I make really good documentation. Like, surprisingly good. People actually read my SOPs. Voluntarily. That's teamwork. 📋",
    k: ['team', 'teamwork', 'collaborate', 'team player', 'work with', 'colleague', 'coworker'],
  },
  {
    q: ['Tell me about a time you failed', 'What was your biggest failure?', 'Have you ever failed?', 'What mistakes have you made?', 'Biggest mistake?'],
    a: "Oh, I have a greatest hits album of failures! 🎵\n\nBiggest one: I built an entire automation system without watching a single user do the task first. Spent weeks on it. Beautiful code. Perfect logic. Zero users. Why? Because I automated what I THOUGHT they did, not what they ACTUALLY did.\n\nThat failure taught me the most important lesson in automation: ALWAYS shadow the user first. Understand their actual workflow, their shortcuts, their workarounds. The manual process they tell you about and the one they actually do are often different.\n\nNow every project starts with: \"Show me.\" Two words that saved me from building the wrong thing ever again. Failure is just experience you haven't reframed yet. 😤",
    k: ['fail', 'failure', 'mistake', 'wrong', 'error', 'biggest failure', 'time you failed'],
  },
  {
    q: ['Why did you leave your previous job?', 'Why did you switch companies?', 'Why Shuei Trading?', 'Why did you move from DNA Labs?'],
    a: "I didn't leave — I leveled up. 🎮\n\nDNA Labs gave me 9 amazing years. I grew from lab executive to assistant manager to VBA developer. I automated sample tracking during COVID, built 5 web search pages, and discovered my automation superpower.\n\nBut by 2024, I had outgrown the role. I was a VBA developer trapped in a lab setting. Shuei Trading offered me a pure VBA Business Analyst position — serving 3 departments, building from scratch, and applying everything I'd learned to a completely new industry.\n\nIt was scary. New industry, new people, new challenges. But I trusted my automation skills to transfer — and they did. 48 releases later, I'm still proving every day that good processes work anywhere.",
    k: ['leave', 'left', 'switch', 'move', 'dna labs', 'shuei trading', 'why change', 'previous job'],
  },
  {
    q: ['What motivates you?', 'What drives you?', 'Why do you do this work?', 'What gets you out of bed?'],
    a: "Two things: (1) eliminating busywork from the world, and (2) proving that a self-taught developer with a lab background can build systems that rival CS-degree professionals. 💥\n\nEvery time I reduce a 2-day task to 3 hours, I feel like a wizard who just bent reality. That feeling is addictive.\n\nAlso: I want to reach FIRE not by cutting expenses but by building value. Trading, teaching, creating — multiple income streams fueled by automation. The idea that my systems can earn money while I sleep? That's the dream.\n\nMy motto: \"Share Good Quality Education to the World.\" I believe knowledge should be accessible. My Exceljerr platform, my open-source repos, and even this chatbot are part of that mission.",
    k: ['motivate', 'motivation', 'drive', 'passion', 'why', 'purpose', 'mission', 'reason'],
  },
  {
    q: ['How do you prioritize tasks?', 'How do you manage your time?', 'What is your workflow?', 'How do you stay organized?'],
    a: "Versioned releases. Ruthless prioritization. And a very opinionated task list. 📋\n\nEvery request goes through the same filter: Is this a MUST for this release? If yes, it ships. If no, it goes to the next version. No exceptions. No feature sneaking into production.\n\nMy 48 releases prove this works. Each one has a defined scope, documented changes, and stakeholder sign-off. I don't do \"urgent but not important\" — those are the productivity killers.\n\nDaily workflow: Check automated systems → prioritize the day → deep work blocks → document everything → shut down. Rinse, repeat, and occasionally celebrate with coffee. ☕",
    k: ['prioritize', 'priority', 'time management', 'organize', 'workflow', 'manage time', 'task', 'tasks'],
  },
  {
    q: ['What do you think of the future of automation?', 'Where is automation heading?', 'Future of VBA?', 'Is VBA still relevant?'],
    a: "Hot take: VBA isn't dying — it's becoming a superpower. 🦸\n\nHere's why: millions of businesses run on Excel. Not Python scripts, not cloud services — Excel. And VBA is the native automation layer sitting right there, built-in, no installation needed. While everyone's chasing the latest framework, I'm automating real business processes that impact real people TODAY.\n\nBut the future isn't just VBA. It's VBA + web APIs + AI. I'm already building bridges: VBA pulling data from web services, pushing to cloud storage, triggering AI analysis. The tool is just the tool — the mindset is what matters.\n\nMy prediction: the most valuable developers in 2030 will be the ones who can connect legacy systems to modern tech. That's my lane. I'm staying in it. 🏎️",
    k: ['future', 'automation future', 'vba future', 'relevant', 'trend', 'heading', 'prediction'],
  },

  // ═══════════════════════════════════════════
  // TECH STACK & SKILLS
  // ═══════════════════════════════════════════
  {
    q: ['What programming languages do you know?', 'What languages do you code in?', 'Tech stack?', 'What can you code?'],
    a: "My language buffet: 🍽️\n\n• VBA — Expert. 727+ templates. My daily driver. If Excel were a kingdom, I'd have the keys.\n• TypeScript/JavaScript — Expert. Next.js, React, Node.js. Built 12+ projects.\n• Python — Advanced. Pandas, web scraping, AI tools. The Swiss Army knife.\n• SQL — Proficient. MySQL, PostgreSQL. Data doesn't analyze itself.\n• PowerShell/BAT/VBS — Proficient. System automation, glue code.\n• HTML/CSS — Proficient. Dashboards, web apps, pretty reports.\n\nI don't just know these languages — I've SHIPPED projects in all of them. Code that runs in production, not just tutorial files. 💪",
    k: ['language', 'languages', 'code', 'coding', 'programming', 'stack', 'typescript', 'javascript', 'python', 'sql'],
  },
  {
    q: ['What is your strongest skill?', 'Best skill?', 'What are you best at?', 'Core competency?'],
    a: "VBA automation — and I'll fight anyone who calls it a \"legacy skill.\" 🥊\n\nBut my REAL strongest skill? Seeing the automation opportunity that everyone else is too busy to notice. Technical skills can be learned. The ability to look at a repetitive process and instantly map out the automation pipeline? That's 12 years of pattern recognition.\n\nAlso: documentation. I know, I know — documentation isn't sexy. But you know what's less sexy? Inheriting a system with zero docs and having to reverse-engineer it. My 48 releases all ship with SOPs, quality checklists, and training records. That's not just skill — it's respect for the next person.",
    k: ['strongest', 'best', 'skill', 'core', 'competency', 'expert', 'expertise'],
  },

  // ═══════════════════════════════════════════
  // PROJECTS & PORTFOLIO
  // ═══════════════════════════════════════════
  {
    q: ['What side projects have you built?', 'Show me your projects', 'What have you made?', 'Portfolio projects?', 'Side hustles?'],
    a: "12 side projects and counting — all built with OpenClaw AI outside work hours! 🚀\n\nHighlights:\n• Game Hub (5 games): Klotski, Nail Gallery, Layer Merge — built as PWAs with Capacitor APK pipeline\n• Trading System v2.1.1: Daily MY/US scans, 13 indicators, composite scoring, Telegram alerts\n• This Portfolio Site: 9 routes, interactive dashboard, AI chatbot — all Next.js + TypeScript\n• UndisputedComics: Full e-commerce site with admin panel, Supabase backend, shopping cart\n• Gym History Book: Bilingual interactive documentary with dark/light mode + music player\n• Exceljerr Platform: VBA/Excel education site (coming soon!)\n\nEach one taught me something new. Each one shipped. No unfinished side projects in this repo. 💯",
    k: ['project', 'projects', 'side', 'hustle', 'portfolio', 'built', 'made', 'show me', 'showcase'],
  },
  {
    q: ['Do you build websites?', 'Can you make a website?', 'Web development?', 'Do you do frontend?'],
    a: "Yes — and they're FAST. ⚡\n\nI build with Next.js (App Router), TypeScript, Tailwind CSS, and framer-motion. Everything deploys on Vercel. The result: static-generated pages with perfect Lighthouse scores, serverless APIs, and animations that feel native.\n\nCurrent live sites:\n• jerrison-portfolio.vercel.app (you're here!)\n• leaploft-landing.vercel.app (music/lofi)\n• exceljerr-landing.vercel.app (education)\n• lebrain-landing.vercel.app (brain games)\n\nI don't do WordPress. I don't do templates. I build from scratch because I'm picky about performance and design. Want a site? Let's talk.",
    k: ['website', 'web', 'frontend', 'site', 'build web', 'web development', 'nextjs', 'react'],
  },
  {
    q: ['Can you build mobile apps?', 'Do you do mobile?', 'Android apps?', 'iOS?'],
    a: "Android — YES. iOS — not yet (but on the radar). 📱\n\nI build Progressive Web Apps (PWAs) compiled to native Android APKs using Capacitor. My game hub (5 games) all run this pipeline: PWA → Capacitor → APK. It means one codebase serves both web and Android.\n\nCurrent pipeline: vanilla JS games → service worker (network-first) → Capacitor sync → Gradle build → APK.\n\nWorking on expanding to React Native for more complex mobile projects. If you want an Android app that's actually a supercharged website, I'm your person.",
    k: ['mobile', 'app', 'android', 'ios', 'apk', 'pwa', 'capacitor', 'phone'],
  },

  // ═══════════════════════════════════════════
  // FREELANCE, CONTACT & HIRING
  // ═══════════════════════════════════════════
  {
    q: ['Are you open to freelance?', 'Can I hire you?', 'Do you do freelance work?', 'Are you available for projects?', 'Can you work for me?'],
    a: "YES — selective, but YES! 🎯\n\nI take on projects in:\n• VBA automation & Excel template development\n• Web development (Next.js, TypeScript, React)\n• Business process consulting & automation strategy\n• AI-assisted workflow design\n\nI work evenings and weekends (full-time at Shuei during the day). Project-based pricing — I quote after understanding your needs. No hourly billing, no scope creep, no surprises.\n\nI'm picky because I only take projects where I can deliver real impact. If your process is boring and repetitive, I WANT to automate it. Let's talk.",
    k: ['freelance', 'hire', 'available', 'work for', 'project', 'contract', 'gig', 'client'],
  },
  {
    q: ['How can I contact you?', 'What is your email?', 'How do I reach you?', 'Contact info?', 'Get in touch?'],
    a: "Three ways to reach me: 📬\n\n1. Contact form — scroll down on this page. Goes straight to my inbox.\n2. Email directly: jerrisonchai@gmail.com\n3. GitHub: github.com/Jerrisonchai — open an issue or star a repo!\n\nI respond within 24 hours. If I don't, assume I'm deep in a VBA rabbit hole and send a follow-up. The spreadsheet won't automate itself. 😅",
    k: ['contact', 'email', 'reach', 'message', 'get in touch', 'how contact', 'phone'],
  },
  {
    q: ['What is your rate?', 'How much do you charge?', 'Pricing?', 'What do you cost?', 'Project cost?'],
    a: "Project-based, not hourly — because you're paying for results, not minutes. 💰\n\nVBA templates: depends on complexity. Simple macros might be quick. Full automation systems (like JARVIS-level) are bigger investments that pay for themselves in months.\n\nWebsites: depends on scope. Landing pages are different from full e-commerce platforms.\n\nMy process: you tell me the problem → I scope the solution → you get a fixed quote. No hourly anxiety, no budget creep. If the scope changes, we version it. Simple.\n\nLet's talk about your project first. The price conversation comes after I understand what you actually need.",
    k: ['rate', 'price', 'cost', 'charge', 'pricing', 'fee', 'how much', 'budget'],
  },
  {
    q: ['Are you looking for a job?', 'Are you open to full-time roles?', 'Want a new job?', 'Looking for opportunities?'],
    a: "Currently happy at Shuei Trading — but I always listen to interesting opportunities. 👂\n\nMy ideal next role: combines VBA automation with web development or AI integration. I want to build systems, not just maintain them. I want a team that values documentation as much as code. I want to eliminate busywork at scale.\n\nIf that sounds like your company, reach out. I'm not actively job hunting, but I'm actively open to conversations that make me excited about Monday mornings.",
    k: ['job', 'full-time', 'role open', 'opportunity', 'looking', 'hire full', 'recruit', 'position'],
  },
  {
    q: ['Can you train my team in VBA?', 'Do you teach Excel?', 'Training?', 'Workshop?', 'Can you teach automation?'],
    a: "ABSOLUTELY. Teaching is literally part of my life mission. 📚\n\n\"Share Good Quality Education to the World\" isn't just a quote — it's what I'm building Exceljerr for. I can train individuals or teams on:\n\n• Excel fundamentals → advanced\n• VBA macros and automation\n• Process thinking (how to spot automation opportunities)\n• Documentation best practices (SOPs, quality checklists)\n\nI don't just show you which buttons to click. I teach you how to think about automation. Once you see processes through that lens, you can't unsee it. Your team will start automating their own work. That's the goal. 🎓",
    k: ['train', 'teach', 'training', 'workshop', 'course', 'learn excel', 'learn vba', 'education'],
  },

  // ═══════════════════════════════════════════
  // RAPID FIRE / FUN
  // ═══════════════════════════════════════════
  {
    q: ['Coffee or tea?', 'What do you drink?', 'Favorite drink?'],
    a: 'Coffee. Black. No sugar. ☕\n\nWhen you\'re running 18 cron jobs, 3 side hustles, and a full-time VBA gig, sleep becomes a suggestion and coffee becomes a food group. I measure my day in coffee cups and version releases. Current ratio: 2 cups per release.',
    k: ['coffee', 'tea', 'drink', 'favorite drink', 'beverage'],
  },
  {
    q: ['Early bird or night owl?', 'Morning person?', 'When do you work best?'],
    a: 'Night owl disguised as an early bird. 🦉\n\nI wake up early because my automated systems run on schedules. But my BEST work happens after 9 PM — when the world is quiet, notifications stop, and I can deep-focus on building. Side projects, trading analysis, AI experimentation — that\'s all night-shift work.\n\nMorning me handles business. Night me builds the future.',
    k: ['early', 'night', 'morning', 'sleep', 'schedule', 'routine'],
  },
  {
    q: ['Cats or dogs?', 'Pets?', 'Do you have pets?'],
    a: 'Dogs! 🐕 Loyal, energetic, and they appreciate routine — just like good automation. Don\'t have one right now though. My 18 cron jobs are basically digital pets. They need feeding, monitoring, and occasionally they throw errors instead of fetching. Close enough.',
    k: ['cat', 'dog', 'pet', 'animal', 'cats', 'dogs'],
  },
  {
    q: ['What music do you listen to?', 'Favorite music?', 'Music taste?'],
    a: 'Lofi — which I also MAKE! 🎵\n\n\"Beats for the Underdogs\" is my music project. Ocean/deep ASMR, festival lofi, cultural themes (CNY, Raya, Merdeka). The vibe: chill enough to code to, energetic enough to trade to.\n\nMy coding playlist is 90% lofi, 10% \"whatever keeps me in flow state.\" Silence is also underrated. Sometimes the best debugging happens with no music at all. Just me, the code, and increasingly loud keyboard clicks.',
    k: ['music', 'lofi', 'song', 'listen', 'playlist', 'beat'],
  },
  {
    q: ["What's your setup?", 'What computer do you use?', 'Laptop specs?', 'What equipment do you have?'],
    a: "ASUS VivoBook X513UA — the little laptop that could. 💻\n\n• AMD Ryzen 7 5700U — 8 cores / 16 threads\n• 19.4 GB RAM (shared with GPU)\n• 475 GB NVMe SSD (~130 GB free — I need to clean up)\n• Windows 11 + WSL when needed\n• Running: Ollama (local LLMs), OpenClaw Gateway, 14 game servers, 18 cron jobs\n\nIt's not a gaming rig. It's not a workstation. It's a $600 laptop that runs AI agents, serves websites, executes trading scans, and builds full-stack applications — simultaneously. Specs don't build systems. People do. 🔧",
    k: ['setup', 'computer', 'laptop', 'pc', 'spec', 'hardware', 'machine', 'equipment'],
  },
]

// ═══════════════════════════════════════════
// MATCHING ENGINE
// ═══════════════════════════════════════════

interface MatchResult {
  entry: FaqEntry
  score: number
  matchedKeywords: string[]
}

export function findBestMatch(query: string): FaqEntry | null {
  const q = query.toLowerCase().trim()
  if (!q || q.length < 2) return null

  const queryWords = q.split(/\s+/).filter(w => w.length > 1)

  const results: MatchResult[] = faqData.map(entry => {
    let score = 0
    const matchedKeywords: string[] = []

    // Strategy 1: Keyword matching with position-based weighting
    // Earlier keywords = higher priority (more specific to this entry)
    entry.k.forEach((keyword, idx) => {
      const kw = keyword.toLowerCase()
      const weight = Math.max(1, 5 - Math.floor(idx / 2)) // First 2 keywords = weight 5, next 2 = 4, etc.

      if (q.includes(kw)) {
        score += weight * 3
        matchedKeywords.push(keyword)
      }

      // Partial match for multi-word keywords
      const kwParts = kw.split(/\s+/)
      if (kwParts.length > 1) {
        const matchCount = kwParts.filter(p => q.includes(p)).length
        if (matchCount >= kwParts.length * 0.7) {
          score += weight * 2
          if (!matchedKeywords.includes(keyword)) matchedKeywords.push(keyword)
        }
      }
    })

    // Strategy 2: Question phrasing similarity
    entry.q.forEach(questionPhrasing => {
      const qLower = questionPhrasing.toLowerCase()
      const qWords = qLower.split(/\s+/).filter(w => w.length > 1)

      // Word overlap between query and question phrasing
      let overlap = 0
      for (const qw of queryWords) {
        for (const qpw of qWords) {
          if (qpw === qw || (qpw.length > 3 && qw.length > 3 && (qpw.includes(qw) || qw.includes(qpw)))) {
            overlap += 1
          }
        }
      }

      // Bonus for multiple word matches
      if (overlap >= 3) score += 6
      else if (overlap >= 2) score += 3
      else if (overlap >= 1) score += 1

      // Big bonus for exact/similar question
      if (q.includes(qLower) || qLower.includes(q)) {
        score += 10
      }
    })

    // Strategy 3: Word-in-question bonus
    const allWords = [...entry.k, ...entry.q.join(' ').split(/\s+/)].map(w => w.toLowerCase())
    for (const qw of queryWords) {
      for (const aw of allWords) {
        if (aw === qw) score += 0.5
        else if (aw.length > 3 && qw.length > 3 && (aw.includes(qw) || qw.includes(aw))) score += 0.25
      }
    }

    return { entry, score, matchedKeywords }
  })

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  const best = results[0]

  // Threshold: need a minimum score to return a match
  if (best.score < 3) return null

  // Require at least 2 matched keywords or a strong question-phrasing score
  const keywordScore = best.matchedKeywords.reduce((sum, kw, i) => {
    const idx = best.entry.k.indexOf(kw)
    const weight = Math.max(1, 5 - Math.floor(idx / 2))
    return sum + weight
  }, 0)

  // If no direct keyword matches and score came mostly from word overlap, be stricter
  if (best.matchedKeywords.length === 0 && best.score < 5) return null

  return best.entry
}

export const greetingSuggestions = [
  'Tell me about yourself',
  'What is the JARVIS Dashboard?',
  'What experience do you have?',
  'How do you use AI?',
  'Are you open to freelance work?',
]
