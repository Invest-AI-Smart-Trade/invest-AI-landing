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
    title: "Signal Engine",
    description:
      "Scores setups with confidence, invalidation levels, and upside ranges before you place a trade.",
    tag: "Probability-first",
  },
  {
    title: "Risk Grid",
    description:
      "Shows concentration, correlation, and drawdown exposure across your entire portfolio in real time.",
    tag: "Capital protection",
  },
  {
    title: "Narrative Feed",
    description:
      "Clusters market headlines into themes and explains what each theme means for your active positions.",
    tag: "Context over noise",
  },
  {
    title: "Coach Mode",
    description:
      "Ask questions in plain language and get direct strategy guidance grounded in your portfolio state.",
    tag: "Conversational AI",
  },
  {
    title: "Cross-Asset Lens",
    description:
      "Track stocks, crypto, and macro ETFs together so hidden relationships are visible before they matter.",
    tag: "One workspace",
  },
  {
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
    title: "Import and map your book",
    detail:
      "Connect holdings and watchlists so the app can establish exposure, bias, and concentration across assets.",
  },
  {
    title: "Run the morning brief",
    detail:
      "Start each session with ranked opportunities, risk flags, and macro themes worth immediate attention.",
  },
  {
    title: "Validate with AI coach",
    detail:
      "Pressure-test each setup by asking for downside scenarios, trigger levels, and position sizing ideas.",
  },
  {
    title: "Execute and review",
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
        width={34}
        height={34}
        className="rounded-xl"
      />
      <div>
        <p className="display-font text-sm font-semibold leading-none text-[var(--color-ink)]">
          Invest AI
        </p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Market intelligence</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-[var(--color-line)] bg-[rgba(255,255,255,0.72)] px-4 py-2.5 shadow-[0_10px_25px_rgba(15,25,44,0.08)] backdrop-blur-xl sm:px-6">
        <BrandMark />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-muted lg:flex">
          <a href="#features" className="transition-colors hover:text-[var(--color-ink)]">
            Features
          </a>
          <a href="#edge" className="transition-colors hover:text-[var(--color-ink)]">
            Why Invest AI
          </a>
          <a href="#workflow" className="transition-colors hover:text-[var(--color-ink)]">
            Workflow
          </a>
          <a href="#use-cases" className="transition-colors hover:text-[var(--color-ink)]">
            Use Cases
          </a>
          <a href="#faq" className="transition-colors hover:text-[var(--color-ink)]">
            FAQ
          </a>
        </nav>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
          Download App
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-8 sm:pt-32">
      <div className="hero-blur right-[8%] top-[12%] h-44 w-44 bg-[var(--color-highlight-soft)]" />
      <div className="hero-blur bottom-[8%] left-[6%] h-40 w-40 bg-[var(--color-accent-soft)]" />

      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="reveal">
          <div className="badge mb-5">
            <span className="badge-dot" aria-hidden="true" />
            Live context for every decision
          </div>

          <h1 className="display-font max-w-xl text-4xl font-semibold leading-[1.03] text-[var(--color-ink)] sm:text-6xl xl:text-[4.45rem]">
            Trade with a full-context
            <span className="block text-[var(--color-accent-deep)]">AI decision desk</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted">
            Invest AI combines signal scoring, portfolio risk overlays, and strategy guidance so you can act with clarity instead of speed alone.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
              Download on App Store
            </a>
            <a href="#features" className="cta-secondary">
              Explore architecture
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "App Store", value: "5.0" },
              { label: "Markets", value: "Multi-asset" },
              { label: "Setup", value: "Minutes" },
              { label: "Cost", value: "Free start" },
            ].map((item) => (
              <div key={item.label} className="surface px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted">{item.label}</p>
                <p className="mt-1 display-font text-lg font-semibold text-[var(--color-ink)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ animationDelay: "0.1s" }}>
          <div className="dashboard-panel rounded-[30px] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">Live account snapshot</p>
                <p className="display-font text-3xl font-semibold text-white">$52,810</p>
              </div>
              <span className="signal-pill good">+14.2% 30D</span>
            </div>

            <div className="dashboard-grid mt-5 rounded-2xl border border-white/10 p-4">
              <svg viewBox="0 0 360 150" className="h-36 w-full" fill="none">
                <defs>
                  <linearGradient id="deskLine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6cf0db" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6cf0db" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 118C18 110 35 107 52 106C70 105 87 108 104 96C122 84 139 62 156 55C174 48 191 53 208 46C226 39 243 20 260 16C278 12 295 22 312 15C330 8 345 10 360 5"
                  stroke="#73f6dd"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0 118C18 110 35 107 52 106C70 105 87 108 104 96C122 84 139 62 156 55C174 48 191 53 208 46C226 39 243 20 260 16C278 12 295 22 312 15C330 8 345 10 360 5V150H0V118Z"
                  fill="url(#deskLine)"
                />
              </svg>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Top signal</p>
                <p className="mt-1 text-sm font-semibold text-white">AAPL breakout continuation</p>
                <span className="mt-2 inline-flex signal-pill good">74% confidence</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Risk event</p>
                <p className="mt-1 text-sm font-semibold text-white">NVDA concentration 31%</p>
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
    <section className="px-4 pb-8 sm:px-8 sm:pb-12">
      <div className="mx-auto max-w-6xl surface px-3 py-3 sm:px-4">
        <div className="market-rail">
          <div className="market-ticker" aria-hidden="true">
            {tickerItems.map((item, index) => {
              const isPositive = item.change.startsWith("+");

              return (
                <div className="ticker-chip" key={`${item.ticker}-${index}`}>
                  <span>{item.ticker}</span>
                  <span>{item.price}</span>
                  <span className={isPositive ? "positive" : "negative"}>{item.change}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="section-kicker">Core modules</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Everything you need in one decision workflow
          </h2>
          <p className="mt-4 text-lg text-muted">
            The platform is structured around preparation, execution, and review so every screen supports an actual trading routine.
          </p>
        </div>

        <div className="stagger mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreModules.map((module) => (
            <article key={module.title} className="surface module-card p-6">
              <p className="chip-tag">{module.tag}</p>
              <h3 className="display-font mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                {module.title}
              </h3>
              <p className="mt-3 text-base text-muted">{module.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EdgeSection() {
  return (
    <section id="edge" className="px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-strong p-6 sm:p-8">
          <p className="section-kicker">Why it feels different</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            Designed to reduce impulse decisions
          </h2>
          <p className="mt-4 text-muted">
            Most investing apps show you data. Invest AI translates that data into decision context and risk framing before you act.
          </p>

          <div className="comparison-table mt-6">
            <div className="comparison-row comparison-head">
              <span>Category</span>
              <span>Invest AI</span>
              <span>Typical app</span>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.topic} className="comparison-row">
                <span>{row.topic}</span>
                <span>{row.investAI}</span>
                <span>{row.typical}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="surface p-6 sm:p-8">
          <p className="section-kicker">Day one outcomes</p>
          <div className="stagger mt-4 space-y-4">
            {[
              "You get one prioritized brief instead of scanning multiple sources.",
              "Signals include invalidation levels so every trade has discipline.",
              "Risk warnings are visible before exposure drifts too far.",
              "Coach Mode answers strategy questions in context of your own book.",
            ].map((point) => (
              <div key={point} className="rounded-2xl border border-[var(--color-line)] bg-white/72 p-4 text-[15px] text-[var(--color-ink)]">
                {point}
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
    <section id="workflow" className="px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="surface-strong p-7 sm:p-9">
          <p className="section-kicker">Daily process</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            Repeatable workflow from open to close
          </h2>
          <p className="mt-4 text-muted">
            Follow a structured sequence every day so decisions are measured and improvements are trackable.
          </p>
        </div>

        <div className="surface p-4 sm:p-6">
          <div className="stagger space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-[var(--color-line)] bg-white/70 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-highlight-soft)] text-sm font-bold text-[var(--color-highlight)]">
                    {index + 1}
                  </div>
                  <h3 className="display-font text-xl font-semibold text-[var(--color-ink)]">{step.title}</h3>
                </div>
                <p className="mt-3 text-muted">{step.detail}</p>
                {index !== workflowSteps.length - 1 ? <div className="step-line mt-4" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="use-cases" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-2xl">
          <p className="section-kicker">Who it is for</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Flexible enough for different investing styles
          </h2>
        </div>

        <div className="stagger mt-8 grid gap-4 md:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.role} className="surface persona-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent-deep)]">
                {useCase.role}
              </p>
              <h3 className="display-font mt-2 text-2xl font-semibold text-[var(--color-ink)]">
                {useCase.objective}
              </h3>
              <p className="mt-3 text-muted">{useCase.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 max-w-2xl">
          <p className="section-kicker">User feedback</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Trusted by traders who value process
          </h2>
        </div>

        <div className="stagger grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review) => (
            <article key={review.name} className="surface p-6">
              <p className="quote-stars">★★★★★</p>
              <blockquote className="mt-3 text-base leading-relaxed text-[var(--color-ink)]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-5">
                <p className="display-font text-lg font-semibold text-[var(--color-ink)]">{review.name}</p>
                <p className="text-sm text-muted">{review.role}</p>
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
    <section id="faq" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl surface-strong p-6 sm:p-9">
        <div className="max-w-2xl">
          <p className="section-kicker">FAQ</p>
          <h2 className="display-font mt-3 text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            Common questions before you start
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
    <section className="px-4 pb-16 pt-12 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-6xl surface-strong overflow-hidden p-8 sm:p-12">
        <p className="section-kicker">Start now</p>
        <h2 className="display-font mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
          Rebuild your investing routine around context, discipline, and real-time intelligence
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Download Invest AI for iOS and run your next market session with a clear system behind each decision.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="cta-primary">
            Download on App Store
          </a>
          <a href="#workflow" className="cta-secondary">
            See daily workflow
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-[var(--color-line)] py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <BrandMark />
        <div className="flex items-center gap-6">
          <a
            href="https://orchlon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)]"
          >
            Support
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-ink)]"
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
