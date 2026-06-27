export interface FaqEntry {
  q: string
  a: string
  tags: string[]
}

export const faqData: FaqEntry[] = [
  // ── Career & Background ──
  {
    q: 'Who is Jerrison Chai?',
    a: "I'm a VBA Business Analyst and Automation Architect based in Kuala Lumpur, Malaysia. Over 12 years, I evolved from a lab technician at DNA Labs to a multi-department automation lead at Shuei Trading — building JARVIS Dashboard, 727+ templates, and 695K lines of VBA code.",
    tags: ['about', 'intro', 'who', 'jerrison'],
  },
  {
    q: 'What do you do for work?',
    a: "I'm a VBA Business Analyst at Shuei Trading Sdn Bhd. I automate business processes across finance, purchasing, and e-commerce — building Excel/VBA systems, web scrapers, HTML reports, and cross-department automation pipelines.",
    tags: ['work', 'job', 'role', 'current'],
  },
  {
    q: 'Where are you based?',
    a: 'Kuala Lumpur, Malaysia. I work on-site at Shuei Trading and build side projects from my home setup.',
    tags: ['location', 'based', 'kl', 'kuala lumpur', 'malaysia'],
  },
  {
    q: 'How many years of experience do you have?',
    a: '12 years total — spanning lab operations, LIS project management, and VBA automation. My dedicated VBA/automation focus started in 2023 and accelerated through 2024–Present with 3,348 hours logged.',
    tags: ['experience', 'years', 'career', 'seniority'],
  },
  {
    q: 'What companies have you worked for?',
    a: 'Two companies across 12 years: DNA Labs Sdn Bhd (2014–2023) where I rose from Lab Executive to Assistant Manager and VBA Developer, and Shuei Trading Sdn Bhd (2024–Present) where I serve as VBA Business Analyst.',
    tags: ['companies', 'work history', 'employer', 'dna labs', 'shuei'],
  },
  {
    q: "What's your education background?",
    a: "I hold a background in laboratory sciences — which gave me a strong foundation in systematic thinking, documentation, and quality control. My programming skills are self-taught through years of hands-on problem-solving and continuous learning.",
    tags: ['education', 'school', 'degree', 'background', 'learning'],
  },
  {
    q: 'What languages do you speak?',
    a: 'English (professional working proficiency) and Chinese (native/bilingual). I write documentation, build interfaces, and communicate with stakeholders in both languages.',
    tags: ['languages', 'english', 'chinese', 'bilingual'],
  },
  {
    q: "What's your career story?",
    a: "Started as a lab executive in 2014, got promoted to Lab Assistant Manager while leading the LIS project and COVID-19 operations. Discovered VBA's power to eliminate repetitive work. Transitioned to full-time VBA development in 2023, then joined Shuei Trading in 2024 where I built JARVIS Dashboard and scaled to 48 releases — all while learning web development and AI on the side.",
    tags: ['story', 'career', 'journey', 'history', 'background'],
  },
  {
    q: 'How did you transition from lab work to VBA?',
    a: "I noticed that 80% of daily operations were repetitive manual tasks. I started automating my own workflows, then my team's, then other departments. The results were so dramatic (2-day reports down to 3 hours, 50% workload reduction) that leadership recognized the value and I transitioned to full-time VBA development.",
    tags: ['transition', 'lab', 'vba', 'career change', 'automation journey'],
  },
  {
    q: "What's your current role?",
    a: 'VBA Business Analyst at Shuei Trading Sdn Bhd (2024–Present). I serve multiple departments — building automation systems, supplier comparison tools, e-commerce reporting templates, and the JARVIS Dashboard. Averaging 80%+ time on VBA development across 48 version releases.',
    tags: ['current role', 'position', 'now', 'present'],
  },

  // ── VBA & Automation ──
  {
    q: 'What is VBA?',
    a: 'VBA (Visual Basic for Applications) is Microsoft\'s automation language built into Excel and other Office apps. It lets you write macros that manipulate data, generate reports, interact with other applications, and automate repetitive workflows — no external software needed.',
    tags: ['vba', 'visual basic', 'excel', 'macro', 'definition'],
  },
  {
    q: 'What is the JARVIS Dashboard?',
    a: "JARVIS Dashboard is my signature automation system — a hybrid VBS-PS1-BAT-HTML suite that reduced daily operations from 20 minutes to 3. It's a one-click panel that handles email drafting (OneDrive → VBS → Outlook), PO Approval monitoring, task automation, and cross-department reporting — all from a single dashboard interface.",
    tags: ['jarvis', 'dashboard', 'automation', 'system'],
  },
  {
    q: 'How many VBA templates have you built?',
    a: "727+ active templates in production, spanning finance, purchasing, e-commerce, and inventory departments. Each template follows version-controlled release protocols with SOPs and quality checklists.",
    tags: ['templates', 'count', 'how many', 'number'],
  },
  {
    q: 'What kind of automation do you build?',
    a: 'Excel/VBA macros for data processing, VBS scripts for file system automation, PowerShell for system tasks, BAT files for scheduled operations, HTML reports for management dashboards, web scraping (Puppeteer/Playwright), email automation (Outlook integration), and cross-application pipelines connecting ERP systems with Excel.',
    tags: ['automation', 'types', 'what kind', 'scope'],
  },
  {
    q: 'How did you reduce daily operations from 20 minutes to 3?',
    a: 'By building JARVIS Dashboard — a one-click VBS-PS1-BAT-HTML system that chains together multiple automation steps: fetches data from OneDrive, processes through VBS, generates Outlook drafts, monitors PO approvals, and presents everything in a single HTML dashboard. What used to require 5+ manual applications and 20 minutes now takes 3 minutes with one click.',
    tags: ['20 minutes', '3 minutes', 'time saving', 'efficiency', 'reduction'],
  },
  {
    q: "What is the Supplier Comparison System?",
    a: "A VBA automation system that processes 100+ non-standardized supplier Excel files — each with different formats, column orders, and naming conventions — and normalizes them into a unified comparison report. Eliminated days of manual data cleaning per cycle.",
    tags: ['supplier', 'comparison', 'system', 'procurement'],
  },
  {
    q: 'What e-commerce platforms do you build reports for?',
    a: 'Lazada, Shopee, Zalora, Qoo10, and eBay — I build automated monthly report templates that pull data, format it, and generate standardized management summaries for all five platforms.',
    tags: ['e-commerce', 'lazada', 'shopee', 'zalora', 'qoo10', 'ebay', 'reports'],
  },
  {
    q: 'How many version releases have you done?',
    a: '48 version releases across all departments — each with documented SOPs, quality checklists, and training records. I follow a structured release protocol with version tracking, rollback capability, and stakeholder sign-off.',
    tags: ['releases', 'version', 'deployments', '48'],
  },
  {
    q: "What's your codebase size?",
    a: "695,000+ lines of production VBA code across 727+ templates. This doesn't include VBS, BAT, PowerShell, or web development codebases — which add another 100K+ lines across TypeScript, JavaScript, Python, and HTML.",
    tags: ['code', 'lines', 'loc', 'codebase', 'size', '695k'],
  },
  {
    q: 'What departments have you served?',
    a: 'Finance, Purchasing, E-commerce, Inventory (INV), LL, COSME-DE, Yumi, and GMP — serving up to 5 departments simultaneously. My automation systems touch every major business function at Shuei Trading.',
    tags: ['departments', 'teams', 'cross-department', 'served'],
  },

  // ── Web Development & Side Projects ──
  {
    q: 'What web technologies do you use?',
    a: 'TypeScript, JavaScript, Next.js (App Router), React, Tailwind CSS, framer-motion for animations, Node.js for backend, Vercel for deployment. I build modern, responsive, performance-optimized websites.',
    tags: ['web', 'tech', 'stack', 'technologies', 'frontend'],
  },
  {
    q: 'What is OpenClaw?',
    a: "OpenClaw is an AI agentic workflow platform that I use as my AI co-pilot. It's how I built this portfolio, 12+ side projects, automated trading scans, personal growth newsletters, and system monitoring — all orchestrated by AI agents running locally and in the cloud.",
    tags: ['openclaw', 'ai', 'agent', 'copilot', 'automation platform'],
  },
  {
    q: 'How many side projects have you built?',
    a: "12+ side projects built outside work hours — including this portfolio site, a game hub (5 games), trading dashboards, a gym history book, an e-commerce site (UndisputedComics), and multiple automated systems. All built with OpenClaw AI as the co-pilot.",
    tags: ['side projects', 'hobby', 'count', 'projects'],
  },
  {
    q: "What's your favorite project?",
    a: "JARVIS Dashboard — it's the project that proved automation's real impact: 20 minutes down to 3, every single day, for multiple teams. But this portfolio site is a close second — it tells the full 12-year story in a way a resume never could.",
    tags: ['favorite', 'best', 'project', 'proud'],
  },
  {
    q: 'Do you build websites for clients?',
    a: "Yes — I build high-value knowledge-sharing websites: personal portfolios, business landing pages, interactive documentation, and book-to-website conversions. I focus on clean design, fast performance, and content that tells a story. Let's talk about your project.",
    tags: ['clients', 'freelance', 'build websites', 'hire', 'services'],
  },
  {
    q: 'What framework do you use for websites?',
    a: 'Next.js (App Router) with TypeScript — deployed on Vercel. For styling I use Tailwind CSS with a custom design system (Swiss Modernism × Dark OLED). Animations are handled by framer-motion. This stack gives me static generation, serverless APIs, and excellent Lighthouse scores.',
    tags: ['framework', 'nextjs', 'react', 'frontend', 'tech stack web'],
  },
  {
    q: 'Can you build mobile apps?',
    a: "Yes — I build Progressive Web Apps (PWAs) with Capacitor that compile to native Android APKs. My game hub (Klotski, Nail Gallery, Layer Merge) follows this pipeline. I'm also exploring React Native for more complex mobile projects.",
    tags: ['mobile', 'app', 'android', 'apk', 'pwa'],
  },

  // ── Skills & Tools ──
  {
    q: 'What programming languages do you know?',
    a: 'VBA (primary, expert), TypeScript/JavaScript (expert), Python (advanced), HTML/CSS, PowerShell, BAT, VBS, SQL. I pick up new languages quickly — learned TypeScript and Next.js through side projects.',
    tags: ['languages', 'programming', 'coding', 'stack'],
  },
  {
    q: "What's your strongest skill?",
    a: 'VBA automation — 12 years of hands-on experience, 727+ templates, 695K lines of code, 48 releases. But my real strength is understanding business processes and translating them into automation that people actually use. Technical skill without business context is just code.',
    tags: ['strongest', 'skill', 'best', 'expertise'],
  },
  {
    q: 'What data analysis tools do you use?',
    a: 'Excel (Power Query, Power Pivot, pivot tables), VBA for custom analysis, Python (Pandas, NumPy), Power BI, Tableau, and MySQL. I combine these depending on the data size and reporting requirements.',
    tags: ['data', 'analysis', 'tools', 'analytics', 'excel', 'python'],
  },
  {
    q: 'Do you know Python?',
    a: 'Yes — I use Python for data analysis (Pandas, NumPy), web scraping (Playwright, Puppeteer, aiolimiter), automation scripts, and AI/ML tooling. While VBA is my primary tool at work, Python handles heavier data processing and external integrations.',
    tags: ['python', 'pandas', 'scripting', 'data'],
  },
  {
    q: 'What AI tools do you work with?',
    a: 'OpenClaw (AI agent orchestration), Ollama (local LLMs: Qwen2.5, Qwen3.5), DeepSeek Chat/Reasoner, and various AI-assisted development workflows. I integrate AI into automation pipelines, content generation, and system monitoring — not as a gimmick, but as a force multiplier.',
    tags: ['ai', 'artificial intelligence', 'llm', 'machine learning', 'tools'],
  },
  {
    q: 'Do you know SQL and databases?',
    a: "Yes — MySQL for data storage and querying, integrated with Python and VBA workflows. I've built database-backed applications (UndisputedComics using Supabase/PostgreSQL) and use SQL for reporting and data extraction in business contexts.",
    tags: ['sql', 'database', 'mysql', 'postgresql', 'supabase'],
  },
  {
    q: 'What version control do you use?',
    a: 'Git and GitHub for all projects — including VBA templates (yes, you can version-control Excel macros). I maintain 20+ repositories with documented commit histories and structured release protocols.',
    tags: ['git', 'github', 'version control', 'vc'],
  },

  // ── Process & Methodology ──
  {
    q: "What's your approach to automation?",
    a: "1. Observe the manual process end-to-end. 2. Identify the 20% that causes 80% of the pain. 3. Build a minimum viable automation. 4. Test with real users. 5. Document (SOP + quality checklist). 6. Release with version tracking. 7. Gather feedback and iterate. Process > code.",
    tags: ['approach', 'methodology', 'process', 'how', 'automation approach'],
  },
  {
    q: 'How do you document your work?',
    a: 'Every template release includes: SOPs (standard operating procedures), quality checklists, version history, training records, and a numbered document system. I treat documentation as a first-class deliverable — not an afterthought.',
    tags: ['documentation', 'sop', 'quality', 'records'],
  },
  {
    q: 'Do you follow any compliance standards?',
    a: "Yes — 21 CFR Part 11 compliance for electronic records and signatures (from my lab background). I apply the same rigor to business automation: audit trails, version control, access controls, and validated workflows.",
    tags: ['compliance', '21 cfr', 'standards', 'regulatory', 'quality'],
  },
  {
    q: "What's your testing methodology?",
    a: "Template-level: quality checklists covering edge cases, data validation, and error handling. Release-level: staged rollout (dev → test → production), user acceptance testing, rollback plans. System-level: monitoring and alerting via automated health checks.",
    tags: ['testing', 'qa', 'quality assurance', 'methodology test'],
  },
  {
    q: 'How do you handle scope creep?',
    a: 'Versioned releases. Every request gets evaluated, prioritized, and assigned to a version number. If it fits the current release, great. If not, it goes to the next. This keeps stakeholders happy and templates stable. No feature sneaks into production.',
    tags: ['scope', 'creep', 'management', 'project management'],
  },
  {
    q: "What's your project management style?",
    a: "Solo executor with stakeholder alignment. I don't run large teams — I build, document, and train. My style is: understand the problem deeply, build the solution quickly, document thoroughly, and hand off with confidence. 48 releases prove it works.",
    tags: ['project management', 'style', 'leadership', 'management'],
  },

  // ── Achievements & Numbers ──
  {
    q: 'What are your biggest achievements?',
    a: '1. JARVIS Dashboard — 20min→3min daily ops. 2. Supplier Comparison System — 100+ non-standardized files automated. 3. 48 version releases with zero rollbacks. 4. COVID-19 operations — managed 150,000 samples with live forecasting. 5. Built 5 product search webpages (11K LoC JS). 6. RM26K revenue from a Chinese marketing campaign.',
    tags: ['achievements', 'accomplishments', 'biggest', 'wins'],
  },
  {
    q: 'How many VBA hours have you logged?',
    a: "3,348 hours across 2 years (2024–Present) — averaging 80%+ of my work time on VBA development. That's roughly 140 hours/month of hands-on coding, testing, and deployment.",
    tags: ['hours', 'vba hours', '3348', 'time'],
  },
  {
    q: "What's your automation impact in numbers?",
    a: "Daily operations: 20min→3min (85% reduction). Customer Care workload: reduced by 50%. Manager KPI report: 2 days→3 hours (87.5% reduction). Supplier comparison: days of manual work eliminated. Total templates: 727+. Lines of code: 695K+.",
    tags: ['impact', 'numbers', 'metrics', 'results', 'roi'],
  },
  {
    q: 'Have you managed teams?',
    a: 'Yes — I led the INV team with one direct report (Gino), managed lab staff during COVID-19, and trained cross-department users on automation tools. My leadership style is: lead by building, train by documenting.',
    tags: ['team', 'management', 'lead', 'leadership', 'manager'],
  },
  {
    q: 'What industries have you worked in?',
    a: 'Healthcare/laboratory (DNA Labs, 9 years), trading and retail/e-commerce (Shuei Trading, current). This cross-industry experience gives me perspective on how automation principles apply universally — the tools change, the mindset stays.',
    tags: ['industry', 'healthcare', 'lab', 'trading', 'retail', 'ecommerce'],
  },

  // ── Contact & Opportunities ──
  {
    q: 'Are you open to freelance work?',
    a: "Yes — I take on select projects in VBA automation, Excel template development, web development (Next.js/React), and business process consulting. Use the contact form below or email me directly. Let's discuss your needs.",
    tags: ['freelance', 'hire', 'work', 'opportunity', 'available'],
  },
  {
    q: 'What kind of projects interest you?',
    a: 'Process automation (any industry), Excel/VBA template development, web applications with real business value, AI-assisted workflows, and data pipeline projects. I love projects where the impact is measurable — "before vs after" stories.',
    tags: ['interests', 'projects interest', 'preferred', 'types of work'],
  },
  {
    q: 'How can I contact you?',
    a: 'Email: jerrisonchai@gmail.com — or use the contact form on this site (scroll down to the Contact section). I typically respond within 24 hours.',
    tags: ['contact', 'email', 'reach', 'message', 'get in touch'],
  },
  {
    q: "What's your availability?",
    a: "I work full-time at Shuei Trading (9AM–6PM MYT, weekdays). Side projects and freelance work happen evenings and weekends. For urgent inquiries, email is the fastest way to reach me.",
    tags: ['availability', 'schedule', 'when', 'hours'],
  },
  {
    q: 'Do you do consulting?',
    a: "Yes — I consult on VBA automation strategy, Excel template architecture, process improvement, and AI-assisted workflow design. I don't just build; I help teams understand how to think about automation.",
    tags: ['consulting', 'consult', 'advisor', 'strategy'],
  },
  {
    q: "What's your rate?",
    a: "Project-based pricing depending on scope and complexity. For VBA automation and Excel templates, I quote after understanding your requirements. For web development, pricing reflects the full stack (design, development, deployment). Let's talk about your project first.",
    tags: ['rate', 'price', 'cost', 'pricing', 'fee', 'charge'],
  },
  {
    q: 'Are you looking for full-time roles?',
    a: "I'm open to the right opportunity — especially roles that combine VBA automation with web development or AI integration. My ideal role lets me build systems that eliminate busywork and multiply team output. Currently happy at Shuei Trading but always listening.",
    tags: ['job', 'full-time', 'role', 'career', 'opportunity', 'hire'],
  },
  {
    q: 'Can you train or teach VBA/Excel?',
    a: "Yes! Teaching is part of my mission — 'Share Good Quality Education to the World.' I'm developing Excel/VBA courses and templates for my education platform (Exceljerr). I can train individuals or teams on automation fundamentals, advanced VBA, and process thinking.",
    tags: ['teach', 'train', 'course', 'education', 'learn', 'vba training'],
  },
  {
    q: 'Where can I see your work?',
    a: "You're on it! This portfolio site showcases everything — About, Experience, Skills, Projects, Resume, and an interactive Dashboard. My GitHub (github.com/Jerrisonchai) has 20+ repositories. My side projects are linked from the Projects page.",
    tags: ['portfolio', 'work', 'examples', 'github', 'showcase'],
  },
  {
    q: 'What are your career goals?',
    a: "Short-term: Master AI-assisted development workflows and launch my Excel/VBA education platform. Long-term: Achieve FIRE (Financial Independence, Retire Early) in 5 years through multiple income streams — trading, education, web services, and creative work. I'm building systems that earn while I sleep.",
    tags: ['goals', 'career goals', 'future', 'ambition', 'fire'],
  },

  // ── Bonus: Extras ──
  {
    q: "What's your typical project timeline?",
    a: 'Small templates: 1–3 days. Medium automation systems: 1–2 weeks. Large cross-department tools (like JARVIS Dashboard): 1–2 months with iterative releases. I deliver in phases — MVP first, then enhancements based on real user feedback.',
    tags: ['timeline', 'deadline', 'delivery', 'speed', 'how long'],
  },
  {
    q: 'Do you prefer working solo or in teams?',
    a: "Both have their place. I thrive as a solo builder — deep focus, fast iteration, full ownership. But I also lead and collaborate effectively. At Shuei Trading I led the INV team while building cross-department systems. My ideal: solo execution with strong stakeholder communication.",
    tags: ['solo', 'team', 'collaboration', 'work style'],
  },
  {
    q: 'How do you stay updated with technology?',
    a: "Daily hands-on coding (side projects), GitHub exploration, AI/LLM experimentation, and building real things. I don't just read about tech — I use it. OpenClaw, Next.js, TypeScript, and Python are all tools I learned through building.",
    tags: ['learning', 'updates', 'tech trends', 'staying current'],
  },
  {
    q: "What's your biggest learning from a failure?",
    a: "Early in my automation journey, I built tools without user input — assuming I knew what people needed. The result: tools that technically worked but nobody used. Now I start every project by shadowing the actual user, understanding their pain, and building what they'll actually adopt.",
    tags: ['failure', 'lesson', 'learning', 'mistake', 'growth'],
  },
  {
    q: 'How do you handle tight deadlines?',
    a: 'Scope discipline. When deadlines are tight, I lock the minimum viable feature set, communicate exactly what will (and will not) be delivered, and execute with focus. No scope creep, no gold-plating — deliver the essential, then iterate.',
    tags: ['deadlines', 'pressure', 'time management', 'urgent', 'tight'],
  },
  {
    q: "What's the most complex automation you've built?",
    a: 'JARVIS Dashboard — a hybrid VBS-PS1-BAT-HTML system that orchestrates email drafting, PO monitoring, file processing, and cross-application data flow from a single click. It chains 5+ technologies and replaced 20 minutes of multi-application work with a 3-minute one-click process.',
    tags: ['complex', 'difficult', 'hardest', 'challenging', 'biggest project'],
  },
  {
    q: 'Do you contribute to open source?',
    a: "Yes — my GitHub (github.com/Jerrisonchai) has 20+ public repositories including automation scripts, web projects, and AI tools. I believe in sharing knowledge. My education platform (Exceljerr) is built on the philosophy of 'Share Good Quality Education to the World.'",
    tags: ['open source', 'github', 'contribution', 'community', 'sharing'],
  },
  {
    q: "What's your workspace setup?",
    a: 'ASUS VivoBook X513UA — AMD Ryzen 7 5700U (8 cores / 16 threads), 19.4 GB RAM, 475 GB NVMe SSD. Windows 11 with Node.js, Python, Android Studio, Docker, Ollama (local LLMs), and OpenClaw for AI orchestration. A portable powerhouse for building on the go.',
    tags: ['setup', 'workspace', 'computer', 'laptop', 'pc', 'specs', 'hardware'],
  },
  {
    q: 'Do you have any certifications?',
    a: "My certification is 12 years of production code, 48 version releases, and 727+ templates running in real business environments. I value demonstrated results over paper credentials — but I'm always learning and open to relevant certifications in automation and development.",
    tags: ['certifications', 'cert', 'credentials', 'qualifications'],
  },
  {
    q: 'How do you measure automation success?',
    a: 'Time saved (before vs after), error reduction, user adoption rate, and maintenance overhead. A successful automation is one that people actually use daily — not one that looks impressive but gathers dust. My metrics: 20min→3min, 50% workload reduction, 2-day reports→3 hours.',
    tags: ['success', 'measurement', 'kpi', 'roi', 'metrics success'],
  },
  {
    q: 'What separates good automation from great automation?',
    a: 'Three things: 1) Reliability — it works every time, not most of the time. 2) Discoverability — users can find and understand it without calling you. 3) Resilience — it handles edge cases gracefully. Great automation makes people forget the manual process ever existed.',
    tags: ['good', 'great', 'quality', 'excellence', 'best practices'],
  },
  {
    q: 'Can you integrate VBA with modern web APIs?',
    a: "Yes — VBA can make HTTP requests, parse JSON/XML, and interact with REST APIs. I've built VBA systems that pull data from web services, push reports to cloud storage, and integrate with email/SMS gateways. VBA isn't just macros — it's a full automation engine when paired with web APIs.",
    tags: ['api', 'web api', 'integration', 'http', 'json', 'rest'],
  },
]

export function findBestMatch(query: string): FaqEntry | null {
  const q = query.toLowerCase().trim()
  if (!q || q.length < 2) return null

  let best: FaqEntry | null = null
  let bestScore = 0

  for (const entry of faqData) {
    // Score based on keyword overlap
    const questionWords = entry.q.toLowerCase().split(/\s+/)
    const tagWords = entry.tags
    const allWords = [...questionWords, ...tagWords]
    
    let score = 0
    const queryWords = q.split(/\s+/)
    
    for (const qw of queryWords) {
      for (const aw of allWords) {
        if (aw.includes(qw) || qw.includes(aw)) {
          score += 1
        }
      }
    }
    
    // Bonus for exact question match
    if (entry.q.toLowerCase().includes(q) || q.includes(entry.q.toLowerCase())) {
      score += 10
    }
    
    // Penalty for very different lengths
    score -= Math.abs(entry.q.length - q.length) * 0.001

    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  return bestScore > 1 ? best : null
}

export const greetingSuggestions = [
  'Who is Jerrison Chai?',
  'What is the JARVIS Dashboard?',
  'How many VBA hours have you logged?',
  'What technologies do you use?',
  'Are you open to freelance work?',
]
