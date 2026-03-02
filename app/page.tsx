import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Globe,
  Lock,
  Shield,
  Cpu,
  Zap,
  Eye,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";
import { GuardChat, SchoolDashboard, NoteMobile } from "@/components/ProductMockups";
import { Reveal, ScrollProgress, BackToTop } from "@/components/ScrollAnimations";
import { MobileMenu } from "@/components/MobileMenu";
import { GlowCard } from "@/components/GlowCard";
import { DotGrid } from "@/components/DotGrid";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <ScrollProgress />
      <BackToTop />

      {/* ──────────── HEADER ──────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5" aria-label="GenPlatform Home">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-school via-brand-note to-brand-guard flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Gen<span className="text-text-secondary">Platform</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-text-secondary" aria-label="Main navigation">
            <a href="#products" className="hover:text-text-primary transition-colors">
              Products
            </a>
            <a href="#trust" className="hover:text-text-primary transition-colors">
              Infrastructure
            </a>
            <a
              href="mailto:musah@genplatform.io"
              className="flex items-center gap-1.5 bg-surface border border-border hover:border-border-light px-4 py-2 rounded-lg transition-all hover:bg-surface-light"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact HQ
            </a>
          </nav>

          <MobileMenu />
        </div>
      </header>

      {/* ──────────── HERO ──────────── */}
      <section id="main-content" className="relative pt-32 pb-20 px-6 glow-bg overflow-hidden">
        <DotGrid />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
            <div className="flex items-center gap-2 bg-surface/80 border border-border rounded-full px-4 py-1.5 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-guard animate-pulse" />
              <span className="text-xs font-medium text-text-secondary tracking-wide">
                Generation Tech Enterprise
              </span>
              <div className="w-px h-3 bg-border" />
              <span className="text-xs text-text-tertiary">Kintampo, Ghana</span>
            </div>
          </div>

          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto opacity-0 animate-fade-in-up-delay-1">
            <span className="text-gradient-hero">The Operating System</span>
            <br />
            <span className="text-gradient-hero">for Modern Institutions.</span>
          </h1>

          <p className="text-center text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mt-6 leading-relaxed opacity-0 animate-fade-in-up-delay-2">
            Parent infrastructure powering the next generation of security,
            education, and productivity across Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 opacity-0 animate-fade-in-up-delay-3">
            <a
              href="#products"
              className="group flex items-center gap-2 bg-text-primary text-background px-6 py-3 rounded-lg font-medium text-sm hover:bg-text-secondary transition-colors"
            >
              Explore Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:musah@genplatform.io"
              className="flex items-center gap-2 bg-surface border border-border hover:border-border-light px-6 py-3 rounded-lg text-sm text-text-secondary hover:text-text-primary transition-all"
            >
              Talk to Founders
            </a>
          </div>

          <div className="flex justify-center mt-16">
            <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
          </div>
        </div>
      </section>




{/* ──────────── BENTO GRID ──────────── */}
<section id="products" className="px-6 pb-24">
  <div className="max-w-7xl mx-auto">
    <Reveal>
      <div className="flex items-center gap-3 mb-12">
        <div className="w-8 h-px bg-gradient-to-r from-brand-school to-transparent" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
          Product Suite
        </span>
      </div>
    </Reveal>

    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
      {/* ═══ LEFT COLUMN ═══ */}
      <div className="flex flex-col gap-4 lg:flex-[2] min-w-0">
        {/* ─── GenGuard ─── */}
        <Reveal delay={0.1}>
          <GlowCard
            className="bento-card bento-card-guard rounded-2xl p-6 sm:p-8 overflow-hidden noise-overlay"
            glowColor="rgba(16, 185, 129, 0.12)"
          >
            <div className="absolute inset-0 glow-guard pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-brand-guard/10 border border-brand-guard/20 rounded-full px-3 py-1 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-guard animate-pulse" />
                      <span className="text-[11px] font-semibold text-brand-guard uppercase tracking-wider">
                        Private Beta
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 tracking-tight">
                      GenGuard
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base max-w-md">
                      Headless WhatsApp security. Send a number, detect fraud
                      instantly. AI-powered risk scoring with community intelligence.
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "VoIP & carrier detection",
                      "Community fraud flags",
                      "Real-time risk scoring",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-brand-guard" />
                        <span className="text-xs text-text-tertiary">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href="mailto:musah@genplatform.io?subject=GenGuard%20Beta%20Access"
                      className="inline-flex items-center gap-2 bg-brand-guard/10 border border-brand-guard/20 hover:bg-brand-guard/20 hover:border-brand-guard/40 text-brand-guard px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                    >
                      Request Beta Access
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
                  <GuardChat />
                </div>
              </div>
            </div>
          </GlowCard>
        </Reveal>

        {/* ─── GenNote ─── */}
        <Reveal delay={0.3}>
          <GlowCard
            className="bento-card bento-card-note rounded-2xl p-6 sm:p-8 overflow-hidden noise-overlay"
            glowColor="rgba(139, 92, 246, 0.12)"
          >
            <div className="absolute inset-0 glow-note pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-brand-note/10 border border-brand-note/20 rounded-full px-3 py-1 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-note" />
                      <span className="text-[11px] font-semibold text-brand-note uppercase tracking-wider">
                        Public Beta
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2 tracking-tight">
                      GenNote
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base max-w-md">
                      AI-powered productivity. Transcribe meetings, capture voice
                      memos, and organize your thoughts — effortlessly.
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Real-time voice transcription",
                      "AI-powered summaries",
                      "Searchable note library",
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-brand-note" />
                        <span className="text-xs text-text-tertiary">{f}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://gennote.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-note/10 border border-brand-note/20 hover:bg-brand-note/20 hover:border-brand-note/40 text-brand-note px-5 py-2.5 rounded-lg text-sm font-medium transition-all mt-6 self-start"
                  >
                    Visit gennote.app
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="flex-shrink-0 flex items-center justify-center">
                  <NoteMobile />
                </div>
              </div>
            </div>
          </GlowCard>
        </Reveal>
      </div>

      {/* ═══ RIGHT COLUMN — School (no stretch) ═══ */}
      <div className="lg:flex-1 min-w-0">
        <Reveal delay={0.2} direction="right">
          <GlowCard
            className="bento-card bento-card-school rounded-2xl p-6 sm:p-8 overflow-hidden noise-overlay"
            glowColor="rgba(99, 102, 241, 0.12)"
          >
            <div className="absolute inset-0 glow-school pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-brand-school/10 border border-brand-school/20 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-school" />
                <span className="text-[11px] font-semibold text-brand-school uppercase tracking-wider">
                  Early Access
                </span>
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
                GenSchool
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm max-w-xs">
                Complete institutional management. Automate report cards, fee
                tracking, attendance, and parent communication — all in one
                platform.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Automated report cards",
                  "Fee management & payments",
                  "Parent SMS notifications",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-brand-school" />
                    <span className="text-xs text-text-tertiary">{f}</span>
                  </div>
                ))}
              </div>
             <a
  href="mailto:musah@genplatform.io?subject=GenSchool%20Early%20Access"
  className="inline-flex items-center gap-2 bg-brand-school/10 border border-brand-school/20 hover:bg-brand-school/20 hover:border-brand-school/40 text-brand-school px-5 py-2.5 rounded-lg text-sm font-medium transition-all mt-6 self-start"
>
  Request Early Access
  <ArrowRight className="w-3.5 h-3.5" />
</a>
              <div className="mt-6">
                <SchoolDashboard />
              </div>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </div>
  </div>
</section>


      {/* ──────────── TRUST SECTION ──────────── */}
      <section id="trust" className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-px bg-gradient-to-r from-brand-guard to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
                Enterprise Infrastructure
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Lock className="w-5 h-5 text-brand-guard" />,
                title: "SOC2 Security",
                desc: "Enterprise-grade security protocols. End-to-end encryption across all platform data and communications.",
                hoverColor: "group-hover:border-brand-guard/30",
                delay: 0,
              },
              {
                icon: <Activity className="w-5 h-5 text-brand-school" />,
                title: "99.9% Uptime",
                desc: "Reliable infrastructure with redundant systems. Guaranteed availability with real-time monitoring and failover.",
                hoverColor: "group-hover:border-brand-school/30",
                delay: 0.1,
              },
              {
                icon: <Globe className="w-5 h-5 text-brand-note" />,
                title: "Unified API",
                desc: "One API to access all GenPlatform services. Consistent interfaces, comprehensive documentation, and SDKs.",
                hoverColor: "group-hover:border-brand-note/30",
                delay: 0.2,
              },
              {
                icon: <Eye className="w-5 h-5 text-amber-400" />,
                title: "24/7 Monitoring",
                desc: "Round-the-clock observability. Proactive alerting, incident response, and dedicated support for all products.",
                hoverColor: "group-hover:border-amber-500/30",
                delay: 0.3,
              },
            ].map((item) => (
              <Reveal key={item.title} delay={item.delay}>
                <div className="bento-card rounded-xl p-6 group h-full">
                  <div
                    className={`w-10 h-10 rounded-xl bg-surface-light/50 border border-border flex items-center justify-center mb-4 transition-colors ${item.hoverColor}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-tertiary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA SECTION ──────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="bento-card rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden noise-overlay">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-school/5 via-transparent to-brand-guard/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 tracking-tight">
                  Build with GenPlatform
                </h2>
                <p className="text-text-secondary text-sm sm:text-base max-w-lg mx-auto mb-8">
                  Whether you are managing an institution, securing
                  transactions, or boosting productivity — we have the
                  infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="mailto:musah@genplatform.io"
                    className="group flex items-center gap-2 bg-text-primary text-background px-6 py-3 rounded-lg font-medium text-sm hover:bg-text-secondary transition-colors"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a
                    href="mailto:admin@genplatform.io"
                    className="flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    admin@genplatform.io
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────── FOOTER ──────────── */}
      <footer className="border-t border-border/50 bg-surface/30" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-school via-brand-note to-brand-guard flex items-center justify-center">
                  <Cpu className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-bold tracking-tight text-text-primary">
                  Gen<span className="text-text-secondary">Platform</span>
                </span>
              </div>
              <p className="text-xs text-text-tertiary leading-relaxed max-w-xs mb-4">
                Generation Tech Enterprise. Parent infrastructure company
                powering modern institutions across Africa with security,
                education, and productivity tools.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
                <MapPin className="w-3 h-3" />
                <span>Kintampo, Ghana</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-tertiary mt-1">
                <Mail className="w-3 h-3" />
                <a
                  href="mailto:admin@genplatform.io"
                  className="hover:text-text-secondary transition-colors"
                >
                  admin@genplatform.io
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
                Products
              </h4>
             

             <ul className="space-y-2.5">
  <li>
     <a
    href="mailto:musah@genplatform.io?subject=GenSchool%20Early%20Access"
    className="text-xs text-text-tertiary hover:text-text-secondary transition-colors flex items-center gap-1"
  >
    GenSchool{" "}
    <span className="text-[9px] text-brand-school bg-brand-school/10 px-1.5 py-0.5 rounded-full">
      Early Access
    </span>
  </a>
  </li>
  <li>
    <a
      href="https://gennote.app"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs text-text-tertiary hover:text-text-secondary transition-colors flex items-center gap-1"
    >
      GenNote{" "}
      <span className="text-[9px] text-brand-note bg-brand-note/10 px-1.5 py-0.5 rounded-full">
        Private Beta
      </span>
    </a>
  </li>
  <li>
    <span className="text-xs text-text-tertiary flex items-center gap-1">
      GenGuard{" "}
      <span className="text-[9px] text-brand-guard bg-brand-guard/10 px-1.5 py-0.5 rounded-full">
        Public Beta
      </span>
    </span>
  </li>
</ul>


            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
                Legal
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/privacy"
                    className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:musah@genplatform.io"
                    className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-text-tertiary">
              &copy; 2026 Generation Tech Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[11px] text-text-tertiary">
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5" />
                Kintampo, Ghana
              </span>
              <div className="w-px h-3 bg-border" />
              <a
                href="mailto:admin@genplatform.io"
                className="hover:text-text-secondary transition-colors"
              >
                admin@genplatform.io
              </a>
              <div className="w-px h-3 bg-border" />
              <a
                href="/privacy"
                className="hover:text-text-secondary transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-text-secondary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}