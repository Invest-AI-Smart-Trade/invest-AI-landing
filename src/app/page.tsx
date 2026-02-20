import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/invest-ai-smart-trading/id6752223346";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Invest AI" width={36} height={36} className="rounded-xl" />
          <span className="text-lg font-bold text-slate-900">Invest AI</span>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="#features"
            className="hidden text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 sm:block"
          >
            Features
          </a>
          <a
            href="#reviews"
            className="hidden text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 sm:block"
          >
            Reviews
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
          >
            Download Free
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center px-6 pt-16">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left text content */}
        <div>
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm ring-1 ring-slate-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#facc15">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            5.0 on the App Store
          </div>

          <h1 className="animate-fade-up-delay-1 mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Trade smarter
            <br />
            with{" "}
            <span className="gradient-text">AI</span>
          </h1>

          <p className="animate-fade-up-delay-2 mb-8 max-w-lg text-lg leading-relaxed text-slate-500">
            An investment platform that combines artificial intelligence with
            real-time market data to help you make informed, confident trading
            decisions.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="app-store-btn inline-block rounded-2xl"
            >
              <svg
                width="180"
                height="54"
                viewBox="0 0 180 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="180" height="54" rx="12" fill="#0f172a" />
                <g fill="#fff">
                  <text x="68" y="22" fontFamily="system-ui, sans-serif" fontSize="10" fontWeight="400">
                    Download on the
                  </text>
                  <text x="68" y="39" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="600">
                    App Store
                  </text>
                </g>
                <g transform="translate(20, 9)" fill="#fff">
                  <path d="M15.1 16.2c0-1.8 1-3.4 2.4-4.2-.1-.2-.2-.3-.3-.4-.9-1.1-2.2-1.8-3.6-1.9-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.5-1.8 3-.5 7.6 1.3 10.1.9 1.2 1.8 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.2-1.2 3-2.4.6-.9 1-1.8 1.3-2.9-1.8-.7-2.6-2.8-2.6-3.3zM12.9 8c.7-.9 1-2 1-3.2-1.1.1-2.2.6-2.9 1.5-.7.8-1.1 1.9-1 3 1.2.1 2.2-.4 2.9-1.3z" />
                </g>
              </svg>
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-600">Free</span>
              <span>iOS 15.1+</span>
            </div>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="hidden lg:flex justify-center">
          <div className="phone-mockup w-[280px]">
            <div className="phone-screen aspect-[9/19.5] flex flex-col items-center justify-center p-6">
              {/* Simulated app screen */}
              <div className="w-full space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Portfolio Value</div>
                    <div className="text-2xl font-bold text-white">$48,352</div>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                    +12.4%
                  </div>
                </div>

                {/* Mini chart */}
                <svg viewBox="0 0 200 60" className="w-full" fill="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 45 Q20 42 40 38 T80 30 T120 22 T160 18 T200 8"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 45 Q20 42 40 38 T80 30 T120 22 T160 18 T200 8 V60 H0Z"
                    fill="url(#chartGrad)"
                  />
                </svg>

                {/* Stock items */}
                {[
                  { name: "AAPL", price: "$198.11", change: "+2.3%", up: true },
                  { name: "TSLA", price: "$241.37", change: "+5.1%", up: true },
                  { name: "NVDA", price: "$875.28", change: "-1.2%", up: false },
                ].map((stock) => (
                  <div
                    key={stock.name}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{stock.name}</div>
                      <div className="text-xs text-slate-400">{stock.price}</div>
                    </div>
                    <span
                      className={`text-xs font-semibold ${stock.up ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {stock.change}
                    </span>
                  </div>
                ))}

                {/* AI badge */}
                <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-4 py-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    </svg>
                  </div>
                  <span className="text-xs text-blue-300">AI: Strong Buy Signal — AAPL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "AI-Powered Analysis",
    description:
      "Automated evaluation of stocks and assets with confidence-rated recommendations and risk projections.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 16v-4m0-4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" />
        <path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 3" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
    ring: "ring-blue-100",
  },
  {
    title: "Real-Time Market Data",
    description:
      "Live pricing, financial metrics, and 52-week analytics across stocks, crypto, commodities, and forex.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600",
    ring: "ring-emerald-100",
  },
  {
    title: "Financial News Feed",
    description:
      "Curated news from NASDAQ, CNBC, and WSJ with breaking updates tailored to your interests.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5" />
        <rect x="10" y="6" width="8" height="4" rx="1" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600",
    ring: "ring-amber-100",
  },
  {
    title: "AI Chat Assistant",
    description:
      "24/7 AI assistant for investment queries, personalized guidance, and educational content on strategies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    color: "bg-violet-50 text-violet-600",
    ring: "ring-violet-100",
  },
  {
    title: "Portfolio Tracking",
    description:
      "Track performance, analyze asset allocation, and build custom watchlists with personalized insights.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    color: "bg-pink-50 text-pink-600",
    ring: "ring-pink-100",
  },
  {
    title: "Multi-Asset Support",
    description:
      "Stocks, crypto, commodities, and forex — analyze and track everything in one unified platform.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="6" height="10" rx="1" />
        <rect x="9" y="4" width="6" height="16" rx="1" />
        <rect x="16" y="9" width="6" height="8" rx="1" />
      </svg>
    ),
    color: "bg-sky-50 text-sky-600",
    ring: "ring-sky-100",
  },
];

function Features() {
  return (
    <section id="features" className="relative px-6 py-28 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Features
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-5xl">
            Everything you need to invest smarter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-500">
            Powerful tools powered by artificial intelligence, designed to give
            you an edge in the market.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card p-7">
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color} ring-1 ${feature.ring}`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section id="reviews" className="proof-section px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trusted by investors
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            See why traders love Invest AI
          </h2>
        </div>

        {/* Stats row */}
        <div className="mb-14 grid grid-cols-3 gap-6">
          {[
            { value: "5.0", label: "App Store Rating", extra: (
              <div className="mt-1.5 flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            )},
            { value: "Free", label: "No hidden costs", extra: null },
            { value: "4+", label: "Asset classes", extra: null },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold text-slate-900 sm:text-5xl">{stat.value}</div>
              {stat.extra}
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Auto-scrolling review cards — full width */}
      <div className="marquee-wrapper">
          <div className="marquee-track">
            {[
              { name: "Alex T.", text: "Great for tracking and managing trades. The clean interface and AI insights help reduce decision-making time significantly." },
              { name: "Sarah M.", text: "Finally an app that makes AI-driven investing accessible. The real-time data and recommendations are incredibly accurate." },
              { name: "James K.", text: "Love the portfolio tracking and news feed. It's become my go-to app for market analysis every single morning." },
              { name: "Emily R.", text: "The AI chat assistant is a game changer. I can ask anything about a stock and get detailed, data-backed responses instantly." },
              { name: "David L.", text: "Clean design, fast data, and smart insights. This replaced three other apps I was using. Highly recommend to any trader." },
              { name: "Michelle W.", text: "As a beginner investor, the AI recommendations give me confidence. The interface is intuitive and the analysis is spot on." },
              { name: "Ryan P.", text: "Multi-asset support is fantastic. I track stocks, crypto, and forex all in one place. The AI signals are surprisingly reliable." },
              { name: "Jessica H.", text: "Best investment app I've used. The real-time alerts and AI-powered analysis have genuinely improved my trading results." },
              { name: "Alex T.", text: "Great for tracking and managing trades. The clean interface and AI insights help reduce decision-making time significantly." },
              { name: "Sarah M.", text: "Finally an app that makes AI-driven investing accessible. The real-time data and recommendations are incredibly accurate." },
              { name: "James K.", text: "Love the portfolio tracking and news feed. It's become my go-to app for market analysis every single morning." },
              { name: "Emily R.", text: "The AI chat assistant is a game changer. I can ask anything about a stock and get detailed, data-backed responses instantly." },
              { name: "David L.", text: "Clean design, fast data, and smart insights. This replaced three other apps I was using. Highly recommend to any trader." },
              { name: "Michelle W.", text: "As a beginner investor, the AI recommendations give me confidence. The interface is intuitive and the analysis is spot on." },
              { name: "Ryan P.", text: "Multi-asset support is fantastic. I track stocks, crypto, and forex all in one place. The AI signals are surprisingly reliable." },
              { name: "Jessica H.", text: "Best investment app I've used. The real-time alerts and AI-powered analysis have genuinely improved my trading results." },
            ].map((review, i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 flex-shrink-0 w-[380px]">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="#facc15">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mb-5 text-lg leading-relaxed text-slate-700">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="text-sm font-semibold not-italic text-slate-700">{review.name}</cite>
                    <div className="text-xs text-slate-400">App Store Review</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section px-6 py-28">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-5 text-3xl font-extrabold text-white sm:text-5xl">
          Start investing smarter today
        </h2>
        <p className="mb-10 text-lg text-slate-300">
          Download Invest AI for free and let artificial intelligence guide your
          trading decisions.
        </p>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="app-store-btn inline-block rounded-2xl"
        >
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="60" rx="12" fill="#fff" />
            <g fill="#0f172a">
              <text x="72" y="23" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="400">
                Download on the
              </text>
              <text x="72" y="43" fontFamily="system-ui, sans-serif" fontSize="20" fontWeight="600">
                App Store
              </text>
            </g>
            <g transform="translate(20, 10)" fill="#0f172a">
              <path d="M15.1 16.2c0-1.8 1-3.4 2.4-4.2-.1-.2-.2-.3-.3-.4-.9-1.1-2.2-1.8-3.6-1.9-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9c-1.7 0-3.3 1-4.2 2.5-1.8 3-.5 7.6 1.3 10.1.9 1.2 1.8 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8c1.4 0 2.2-1.2 3-2.4.6-.9 1-1.8 1.3-2.9-1.8-.7-2.6-2.8-2.6-3.3zM12.9 8c.7-.9 1-2 1-3.2-1.1.1-2.2.6-2.9 1.5-.7.8-1.1 1.9-1 3 1.2.1 2.2-.4 2.9-1.3z" />
            </g>
          </svg>
        </a>
        <p className="mt-6 text-sm text-slate-500">
          Free &middot; No account required &middot; No data collected
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Invest AI" width={28} height={28} className="rounded-lg" />
          <span className="text-sm font-semibold text-slate-700">Invest AI</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a
            href="https://orchlon.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-700"
          >
            Support
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-slate-700"
          >
            App Store
          </a>
        </div>
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Orchlon Chinbat
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}
