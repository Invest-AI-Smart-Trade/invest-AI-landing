import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346";

const marketTape = [
  { ticker: "AAPL", price: "$198.11", change: "+2.3%" },
  { ticker: "MSFT", price: "$424.94", change: "+0.8%" },
  { ticker: "NVDA", price: "$875.28", change: "-1.2%" },
  { ticker: "AMZN", price: "$184.03", change: "+1.0%" },
  { ticker: "BTC", price: "$61,802", change: "+3.7%" },
  { ticker: "TSLA", price: "$241.37", change: "+5.1%" },
  { ticker: "SPY", price: "$508.42", change: "-0.4%" },
  { ticker: "ETH", price: "$3,232", change: "+2.9%" },
  { ticker: "QQQ", price: "$438.76", change: "+1.1%" },
];

const coreModules = [
  {
    icon: "📡",
    title: "Signal Engine",
    description:
      "Scores setups with confidence, invalidation levels, and upside ranges before you place a trade.",
    tag: "Probability-first",
  },
  {
    icon: "🛡️",
    title: "Risk Grid",
    description:
      "Shows concentration, correlation, and drawdown exposure across your entire portfolio in real time.",
    tag: "Capital protection",
  },
  {
    icon: "📰",
    title: "Narrative Feed",
    description:
      "Clusters market headlines into themes and explains what each theme means for your active positions.",
    tag: "Context over noise",
  },
  {
    icon: "🤖",
    title: "Coach Mode",
    description:
      "Ask questions in plain language and get direct strategy guidance grounded in your portfolio state.",
    tag: "Conversational AI",
  },
  {
    icon: "🔗",
    title: "Cross-Asset Lens",
    description:
      "Track stocks, crypto, and macro ETFs together so hidden relationships are visible before they matter.",
    tag: "One workspace",
  },
  {
    icon: "🔔",
    title: "Alert Design",
    description:
      "Alerts trigger on market structure and volatility regimes, not just static percentage movements.",
    tag: "Fewer false alarms",
  },
];

const comparisonRows = [
  {
    topic: "Signal quality",
    investAI: "Confidence, invalidation, and regime context",
    typical: "Simple up/down prompts",
  },
  {
    topic: "Risk visibility",
    investAI: "Portfolio-level concentration and correlation",
    typical: "Position-level only",
  },
  {
    topic: "News workflow",
    investAI: "Theme-based summaries tied to holdings",
    typical: "Chronological headline stream",
  },
  {
    topic: "Execution prep",
    investAI: "Scenario framing before every trade",
    typical: "Manual prep in external tools",
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Import & map your book",
    detail:
      "Connect holdings and watchlists so the app establishes exposure, bias, and concentration across assets.",
  },
  {
    num: "02",
    title: "Run the morning brief",
    detail:
      "Start each session with ranked opportunities, risk flags, and macro themes worth immediate attention.",
  },
  {
    num: "03",
    title: "Validate with AI coach",
    detail:
      "Pressure-test each setup by asking for downside scenarios, trigger levels, and position sizing ideas.",
  },
  {
    num: "04",
    title: "Execute & review",
    detail:
      "Capture entries, track post-trade outcomes, and refine your process with structured feedback loops.",
  },
];

const useCases = [
  {
    role: "Active trader",
    objective: "Find high-conviction setups quickly",
    details:
      "Uses the morning signal brief, watches invalidation levels, and avoids weak setups in crowded conditions.",
  },
  {
    role: "Swing investor",
    objective: "Protect capital while scaling winners",
    details:
      "Tracks portfolio heat, cross-asset trend health, and correlation spikes before increasing position size.",
  },
  {
    role: "New investor",
    objective: "Build a disciplined routine",
    details:
      "Learns through Coach Mode and follows step-based workflows instead of reacting to headlines.",
  },
];

const testimonials = [
  {
    name: "A. Thompson",
    role: "Active trader",
    quote:
      "The brief replaced three tabs in my old workflow. I get cleaner entries because context is already packaged.",
  },
  {
    name: "M. Delgado",
    role: "Swing investor",
    quote:
      "Risk Grid alone is worth it. I catch concentration drift before it turns into a painful drawdown.",
  },
  {
    name: "S. Kim",
    role: "New investor",
    quote:
      "Coach Mode made market language finally click. I can ask basic questions and still get actionable answers.",
  },
  {
    name: "R. Patel",
    role: "Portfolio builder",
    quote:
      "I like that every signal includes an invalidation level. It creates discipline and keeps me honest.",
  },
];

const faqs = [
  {
    question: "Is Invest AI only for advanced traders?",
    answer:
      "No. The interface is built for all levels. New investors can follow guided workflows, while advanced traders can use scenario tools and risk overlays.",
  },
  {
    question: "Does the app support only stocks?",
    answer:
      "It supports stocks, crypto, and market ETFs so you can evaluate opportunities with cross-asset context in one place.",
  },
  {
    question: "How should I use it daily?",
    answer:
      "Most users run the morning brief, validate top signals with Coach Mode, then review risk changes before and after execution.",
  },
  {
    question: "Is there a paywall to start?",
    answer:
      "You can start free on iOS and evaluate the full workflow before deciding if you want to scale usage.",
  },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Invest AI"
        width={32}
        height={32}
        className="rounded-lg"
      />
      <span className="display-font text-sm font-semibold text-[var(--color-ink)]">
        Invest AI
      </span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6">
      <nav className="glass mx-auto flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5">
        <BrandMark />
        <div className="hidden items-center gap-7 text-sm font-medium text-[var(--color-ink-secondary)] lg:flex">
          <a href="#features" className="transition-colors hover:text-[var(--color-ink)]">
            Features
          </a>
          <a href="#edge" className="transition-colors hover:text-[var(--color-ink)]">
            Why Invest AI
          </a>
          <a href="#workflow" className="transition-colors hover:text-[var(--color-ink)]">
            Workflow
          </a>
          <a href="#faq" className="transition-colors hover:text-[var(--color-ink)]">
            FAQ
          </a>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2 !px-4 !text-sm !rounded-xl">
          Download
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse,rgba(16,185,129,0.12),transparent_70%)]" />

      <div className="section-container text-center">
        <div className="reveal mx-auto max-w-3xl">
          <div className="badge mx-auto mb-6">
            <span className="badge-dot" aria-hidden="true" />
            Live context for every decision
          </div>

          <h1 className="display-font text-4xl font-bold leading-[1.08] sm:text-6xl xl:text-7xl">
            Trade with a
            <br />
            <span className="gradient-text">full-context AI</span>
            <br />
            decision desk
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-ink-secondary)] sm:text-xl">
            Signal scoring, portfolio risk overlays, and strategy guidance — so you act with clarity, not impulse.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </a>
            <a href="#features" className="btn-secondary">
              Explore features
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: "0.1s" }}>
          {[
            { label: "App Store", value: "5.0 ★" },
            { label: "Markets", value: "Multi-asset" },
            { label: "Setup", value: "Minutes" },
            { label: "Cost", value: "Free start" },
          ].map((item) => (
            <div key={item.label} className="glass-light px-4 py-3 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">{item.label}</p>
              <p className="mt-1 display-font text-base font-bold text-[var(--color-ink)] sm:text-lg">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="reveal mx-auto mt-12 max-w-3xl" style={{ animationDelay: "0.18s" }}>
          <div className="dashboard-panel relative p-5 sm:p-7">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">Live account snapshot</p>
                <p className="display-font text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">$52,810</p>
              </div>
              <span className="signal-pill good">+14.2% 30D</span>
            </div>

            <div className="relative z-10 mt-5 rounded-xl border border-[var(--color-line)] bg-[rgba(14,20,30,0.5)] p-4">
              <svg viewBox="0 0 400 120" className="h-28 w-full sm:h-32" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 95 C20 88 40 85 60 84 C80 83 100 86 120 74 C140 62 160 40 180 33 C200 26 220 31 240 24 C260 17 280 5 300 3 C320 1 340 8 360 4 C380 1 395 3 400 2"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 95 C20 88 40 85 60 84 C80 83 100 86 120 74 C140 62 160 40 180 33 C200 26 220 31 240 24 C260 17 280 5 300 3 C320 1 340 8 360 4 C380 1 395 3 400 2 V120 H0 Z"
                  fill="url(#chartGrad)"
                />
              </svg>
            </div>

            <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--color-line)] bg-[rgba(14,20,30,0.5)] p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">Top signal</p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">AAPL breakout continuation</p>
                <span className="mt-2 inline-flex signal-pill good">74% confidence</span>
              </div>
              <div className="rounded-xl border border-[var(--color-line)] bg-[rgba(14,20,30,0.5)] p-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">Risk event</p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-ink)]">NVDA concentration 31%</p>
                <span className="mt-2 inline-flex signal-pill watch">rebalance watch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketRail() {
  const tickerItems = [...marketTape, ...marketTape];

  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="section-container">
        <div className="glass-light overflow-hidden rounded-2xl px-2 py-2.5">
          <div className="market-rail">
            <div className="market-ticker" aria-hidden="true">
              {tickerItems.map((item, index) => {
                const isPositive = item.change.startsWith("+");
                return (
                  <div className="ticker-chip" key={`${item.ticker}-${index}`}>
                    <span className="font-semibold text-[var(--color-ink)]">{item.ticker}</span>
                    <span className="text-[var(--color-ink-secondary)]">{item.price}</span>
                    <span className={isPositive ? "positive" : "negative"}>{item.change}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="section-container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="section-label">Core modules</p>
          <h2 className="display-font mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-5xl">
            Everything in one
            <br />
            <span className="gradient-text">decision workflow</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-secondary)]">
            Every screen supports an actual trading routine — preparation, execution, and review.
          </p>
        </div>

        <div className="stagger mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreModules.map((module) => (
            <article key={module.title} className="glass-card p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{module.icon}</span>
                <p className="chip-tag">{module.tag}</p>
              </div>
              <h3 className="display-font mt-4 text-xl font-bold text-[var(--color-ink)]">
                {module.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">{module.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdgeSection() {
  return (
    <section id="edge" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="section-container grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Comparison side */}
        <div className="glass p-6 sm:p-8">
          <p className="section-label">Why it feels different</p>
          <h2 className="display-font mt-3 text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
            Designed to reduce
            <br />impulse decisions
          </h2>
          <p className="mt-3 text-[var(--color-ink-secondary)]">
            Most investing apps show data. Invest AI translates it into decision context and risk framing before you act.
          </p>

          <div className="comparison-table mt-6">
            <div className="comparison-row comparison-head">
              <span>Category</span>
              <span>Invest AI</span>
              <span>Typical app</span>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.topic} className="comparison-row">
                <span className="font-medium">{row.topic}</span>
                <span>{row.investAI}</span>
                <span>{row.typical}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Outcomes side */}
        <div className="glass p-6 sm:p-8">
          <p className="section-label">Day one outcomes</p>
          <div className="stagger mt-5 space-y-3">
            {[
              "You get one prioritized brief instead of scanning multiple sources.",
              "Signals include invalidation levels so every trade has discipline.",
              "Risk warnings are visible before exposure drifts too far.",
              "Coach Mode answers strategy questions in context of your own book.",
            ].map((point, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-[var(--color-line)] bg-[rgba(14,20,30,0.3)] p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent-soft)] text-xs font-bold text-[var(--color-accent-light)]">✓</span>
                <p className="text-[15px] text-[var(--color-ink-secondary)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="section-container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="section-label">Daily process</p>
          <h2 className="display-font mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-5xl">
            From open to close
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-secondary)]">
            Follow a structured sequence every day so decisions are measured and improvements are trackable.
          </p>
        </div>

        <div className="stagger mx-auto mt-12 grid max-w-3xl gap-4">
          {workflowSteps.map((step, index) => (
            <div key={step.title}>
              <div className="glass-card p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] font-mono text-sm font-bold text-[var(--color-accent-light)]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="display-font text-lg font-bold text-[var(--color-ink)]">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] text-[var(--color-ink-secondary)]">{step.detail}</p>
                  </div>
                </div>
              </div>
              {index !== workflowSteps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="section-container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="section-label">Who it is for</p>
          <h2 className="display-font mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-5xl">
            Built for every
            <br />
            <span className="gradient-text">investing style</span>
          </h2>
        </div>

        <div className="stagger mt-10 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.role} className="glass-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent-light)]">
                {useCase.role}
              </p>
              <h3 className="display-font mt-2 text-xl font-bold text-[var(--color-ink)]">
                {useCase.objective}
              </h3>
              <p className="mt-3 text-[15px] text-[var(--color-ink-secondary)]">{useCase.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="section-container">
        <div className="reveal mx-auto mb-10 max-w-2xl text-center">
          <p className="section-label">User feedback</p>
          <h2 className="display-font mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-5xl">
            Trusted by traders who
            <br />value process
          </h2>
        </div>

        <div className="stagger grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review) => (
            <article key={review.name} className="glass-card p-5">
              <p className="quote-stars">★★★★★</p>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-[var(--color-line)] pt-4">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{review.name}</p>
                <p className="text-xs text-[var(--color-muted)]">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="section-container mx-auto max-w-3xl">
        <div className="reveal text-center">
          <p className="section-label">FAQ</p>
          <h2 className="display-font mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="stagger mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-24">
      <div className="section-container">
        <div className="glass relative overflow-hidden p-8 text-center sm:p-14">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(16,185,129,0.1),transparent_70%)]" />

          <div className="relative z-10">
            <p className="section-label">Start now</p>
            <h2 className="display-font mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Rebuild your routine around
              <span className="gradient-text"> real-time intelligence</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-[var(--color-ink-secondary)]">
              Download Invest AI for iOS and run your next market session with a clear system behind each decision.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a href="#workflow" className="btn-secondary">
                See daily workflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <div className="section-container flex flex-col gap-4 border-t border-[var(--color-line)] py-7 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <BrandMark />
        <div className="flex items-center gap-6">
          <a
            href="https://orchlon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-ink)]"
          >
            Support
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-ink)]"
          >
            App Store
          </a>
        </div>
        <p>{new Date().getFullYear()} Orchlon Chinbat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="site-shell min-h-screen pb-2">
      <Navbar />
      <Hero />
      <MarketRail />
      <Features />
      <EdgeSection />
      <Workflow />
      <UseCases />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
