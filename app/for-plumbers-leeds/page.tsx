import { Metadata } from "next"
import CityTradeSchema from "@/components/CityTradeSchema";
import { Header } from "@/components/whoza/header"
import { Footer } from "@/components/whoza/footer"
import { BreadcrumbSchema } from "@/components/whoza/breadcrumb-schema"
import { FAQPageSchema } from "@/components/whoza/faqpage-schema"
import { ArrowRight, Phone, Droplets, Shield, Clock, PoundSterling, CheckCircle2, Star, AlertTriangle, TrendingUp, Users, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TradeCityLinks } from "@/components/whoza/trade-city-links"

export const metadata: Metadata = {
  title: "AI Call Answering for Plumbers in Leeds | whoza.ai",
  description: "Stop losing plumber jobs to missed calls in Leeds. Katie answers 24/7, captures burst pipe and boiler enquiries via WhatsApp. Plans from £59/month.",
  alternates: {
    canonical: "https://whoza.ai/for-plumbers-leeds",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://whoza.ai/for-plumbers-leeds",
    description: "Stop losing plumber jobs to missed calls in Leeds. Katie answers 24/7, captures burst pipe and boiler enquiries via WhatsApp. Plans from £59/month.",
    images: [{ url: "https://whoza.ai/og-image.webp", width: 1200, height: 630, alt: "whoza.ai: AI Call Answering for Plumbers in Leeds" }],
  },
  twitter: {
    card: "summary_large_image",
    description: "Stop losing plumber jobs to missed calls in Leeds. Katie answers 24/7, captures burst pipe and boiler enquiries via WhatsApp. Plans from £59/month.",
    images: ["https://whoza.ai/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqs = [
  {
    "question": "How much does AI call answering cost for plumbers in Leeds?",
    "answer": "whoza.ai starts at £59/month for the Starter plan. That's less than one plumber job in Leeds. Every plan includes unlimited AI calls, WhatsApp delivery, and a 7-day free trial. Most plumbers recover the cost within 48 hours by capturing just one missed job."
  },
  {
    "question": "Can Katie handle emergency calls for plumbers in Leeds?",
    "answer": "Absolutely. Katie answers 24/7, including nights, weekends, and bank holidays. She identifies emergency calls and marks them as highest priority in your WhatsApp alert. Whether you're in Leeds or anywhere in the UK, you'll see the emergency tag immediately and can respond within minutes."
  },
  {
    "question": "What information does Katie collect from plumbers customers in Leeds?",
    "answer": "Katie captures: full name, phone number, Leeds postcode, property type, job description, urgency level, preferred appointment time, and how they found you. For emergencies, she also asks about immediate safety concerns and property damage extent."
  },
  {
    "question": "Does it work with my existing Leeds business phone number?",
    "answer": "Yes. You simply set up call forwarding from your existing Leeds business number to your whoza.ai number. Your customers dial the same number they've always used. Katie answers when you can't. Setup takes under 10 minutes and works with both mobile and landline numbers."
  },
  {
    "question": "How quickly can I get set up as a plumber in Leeds?",
    "answer": "Most plumbers in Leeds are live and capturing calls within 30 minutes. Sign up, connect your number via call forwarding, set your greeting and business details, and Katie starts answering immediately. No hardware, no IT team, no technical knowledge required."
  },
  {
    "question": "What makes whoza.ai different for plumbers in Leeds?",
    "answer": "Unlike generic call answering services, Katie is trained specifically for plumbers. She understands burst pipe emergencies, boiler breakdowns, blocked drains & leak enquiries, and with 6,000+ trade businesses competing in Leeds, capturing every call gives you a real competitive edge."
  }
]

export const revalidate = 3600

export default function ForPlumberLeedsPage() {
  return (
    <>
      <Header />
      <BreadcrumbSchema items={[
        { name: "Home", item: "https://whoza.ai" },
        { name: "Leeds", item: "https://whoza.ai/leeds" },
        { name: "For Plumbers", item: "https://whoza.ai/for-plumbers" },
        { name: "Plumbers in Leeds", item: "https://whoza.ai/for-plumbers-leeds" },
      ]} />
      <FAQPageSchema faqs={faqs} speakableSelectors={[".trade-headline", ".trade-faq"]} />

      {/* Schema JSON-LD */}
            <main id="main-content" role="main" className="pb-24 lg:pb-0 bg-[var(--v2-paper)] text-[var(--v2-body)]">
      <CityTradeSchema trade="Plumber" tradePlural="Plumbers" city="Leeds" region="West Yorkshire" pageUrl="https://whoza.ai/for-plumbers-leeds" />
        {/* ─── HERO ─── */}
        <section className="bg-[var(--v2-navy)] text-white relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="v2-eyebrow v2-eyebrow-light inline-flex items-center gap-2 mb-6">
                  <Droplets className="w-4 h-4" />
                  Plumbers in Leeds
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 trade-headline">
                  Never Miss a{" "}
                  <span className="text-[#6ee7b7]">Plumber</span>{" "}
                  Job in Leeds Again
                </h1>
                <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
                  Leeds has 6,000+ trade businesses competing for 350K households. 
                  With 2,800 missed calls every week across the city, 
                  Katie ensures you capture every plumbing enquiry: burst pipe emergencies, boiler breakdowns, blocked drains & leak enquiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/"
                    className="v2-btn min-h-[54px] px-7 text-base"
                  >
                    Start Your Free 7-Day Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="v2-btn-secondary min-h-[54px] px-7 text-base text-white border-white/25 hover:border-white"
                  >
                    See Pricing
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/65">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6ee7b7]" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6ee7b7]" />
                    Setup in 30 minutes
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#6ee7b7]" />
                    Cancel anytime
                  </span>
                </div>
              </div>
              <div className="relative flex justify-center">
                <Image
                  src="/images/hero-phone-3d.webp"
                  alt="Whoza.ai AI call answering: Katie captures missed calls and sends job details to WhatsApp"
                  width={735}
                  height={1103}
                  className="w-full max-w-[380px] h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* ─── CITY HUB LINK ─── */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[var(--v2-body)]">
              Also available across all trades in 
              <a href="/leeds" className="text-[var(--v2-green)] hover:underline">
                Leeds
              </a>
            </p>
          </div>
        </section>


        <div className="section-divider" />

        {/* ─── LOCAL STATS ─── */}
        <section className="v2-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                Leeds Plumbers Market
              </h2>
              <p className="v2-lead max-w-2xl mx-auto">
                The numbers that matter for plumbers in Leeds.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: Users, label: "Trade Businesses", value: "6,000+", color: "text-blue-400" },
                { icon: Home, label: "Households", value: "350K", color: "text-blue-400" },
                { icon: PoundSterling, label: "Avg Job Value", value: "£285", color: "text-emerald-400" },
                { icon: Phone, label: "Missed Calls/Week", value: "2,800", color: "text-red-400" },
                { icon: TrendingUp, label: "Market Size", value: "£260M", color: "text-amber-400" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-white border border-[var(--v2-line)] rounded-2xl p-6 text-center">
                    <Icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
                    <div className="text-2xl font-bold text-[var(--v2-ink)] mb-1">{item.value}</div>
                    <div className="text-sm text-[var(--v2-muted)]">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── SCENARIO ─── */}
        <section className="v2-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                The Real Cost of Missed Calls for Plumbers in Leeds
              </h2>
              <p className="v2-lead max-w-2xl mx-auto">
                Student lets in Headingley and Hyde Park mean peaks at the start and end of every term. Traffic on the ring road and the A61 and A64 corridors keeps trades on the move when calls come in. Victorian terraces and back-to-backs need specialist knowledge. Heavy rain can turn a quiet day into a rush of emergency calls.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white border border-[var(--v2-line)] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-blue-500/10 border-blue-500/20 border flex items-center justify-center flex-shrink-0`}>
                    <AlertTriangle className={`w-6 h-6 text-blue-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">While You're on the Job</h3>
                    <p className="text-[var(--v2-body)] leading-relaxed">
                      You're under a sink fixing a waste pipe. Phone vibrates in your pocket. Can't answer: hands full of muck, water everywhere. Check missed call at 4pm. Customer already booked someone else.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[var(--v2-line)] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--v2-mint)] border border-[var(--v2-green)]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[var(--v2-green)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">After Hours & Emergencies</h3>
                    <p className="text-[var(--v2-body)] leading-relaxed">
                      A tenant calls about a burst pipe at 2am while you're asleep. They leave a voicemail, then call the next plumber on Google. You lose a £400 emergency callout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-[var(--v2-mint)] border border-[var(--v2-green)]/20 rounded-2xl p-6 text-center">
              <p className="text-[var(--v2-green-ink)] font-medium text-lg">
                The average Leeds plumber misses multiple calls per day = 
                <strong> £50,568</strong> in lost revenue per year
              </p>
              <p className="text-[var(--v2-body)] text-sm mt-1">
                Based on £280 avg job value with 35% conversion rate
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── HOW KATIE WORKS ─── */}
        <section className="v2-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="v2-h2 mb-4">
                How Katie Works for Plumbers in Leeds
              </h2>
              <p className="v2-lead max-w-2xl mx-auto">
                Three simple steps from missed call to booked job. No apps to check. No dashboards to monitor.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Phone,
                  title: "Katie Answers Instantly",
                  description: `Customer calls your Leeds number. Katie picks up in under 2 rings with your branded greeting, 24/7, even when you're on another job or after hours.`,
                },
                {
                  step: "02",
                  icon: Droplets,
                  title: "She Qualifies the Job",
                  description: `Katie asks the right questions: Leeds postcode, problem type, urgency level, property type, and when they need you. She identifies emergencies and marks them as urgent.`,
                },
                {
                  step: "03",
                  icon: Phone,
                  title: "WhatsApp Alert in 3 Seconds",
                  description: "A structured message lands on your phone: name, number, postcode, problem, urgency, and estimated value. Tap Accept, Call Back, or Decline. Customer gets an instant SMS either way.",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="relative">
                    <div className="bg-white border border-[var(--v2-line)] rounded-2xl p-8 h-full">
                      <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                      <div className={`w-12 h-12 rounded-xl bg-blue-500/10 border-blue-500/20 border flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 text-blue-400`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-[var(--v2-body)] leading-relaxed">{item.description}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-slate-300" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── WHY PLUMBERS IN LONDON NEED AI CALL ANSWERING ─── */}
        <section className="v2-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                Why Plumbers in Leeds Need AI Call Answering
              </h2>
            </div>
            <div className="space-y-6 text-[var(--v2-body)] leading-relaxed">
              <p>
                Leeds has a plumbing market shaped by its Victorian past. In Headingley, Hyde Park and Burley, converted student houses run on original pipework and ageing boilers, while the back-to-backs of Harehills and Beeston have their own quirks that only local plumbers know. With 6,000+ trade businesses competing for 350K households and 2,800 missed calls every week, the plumbers who answer first win the job.
              </p>
              <p>
                What makes Leeds demanding is the mix of heavy rain and old drainage. Sudden downpours overwhelm Victorian drains and cause flooding in low-lying areas such as Kirkstall, while hard frosts burst pipes in unheated lofts and cellars. Student tenancies turn over at the start and end of every term, so maintenance calls arrive in waves. When you are on a job in Horsforth and a call comes in from Morley, Katie captures every detail, from the property type to the urgency, so you never lose a £285 average job to a missed call.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── CITY LINKS ─── */}
        {/* ─── LOCAL CONTEXT ─── */}
        <section className="v2-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                What Plumbers in Leeds Face Daily
              </h2>
            </div>
            <div className="space-y-6 text-[var(--v2-body)] leading-relaxed">
              <p>
                From Chapel Allerton and Roundhay to Pudsey and Guiseley, Leeds plumbers cover a wide spread of housing. Victorian terraces still run on original pipework that fails without warning, and with so many trade businesses competing across the city, a missed call rarely gets a second chance. The customer simply dials the next number.
              </p>
              <p>
                Hard frosts burst pipes in unheated lofts and cellars, and the city&apos;s Victorian drainage struggles when heavy rain arrives. Student houses bring a steady flow of boiler faults, leaks and blocked drains, particularly at the start of each term when every house needs sorting at once.
              </p>
              <p>
                Emergency calls often arrive while you are between jobs on the ring road or the A61 and A64 corridors. When a tenant in a Headingley terrace reports a burst pipe at 7pm, Katie captures the postcode, flags the urgency and gives you the full context before you commit to a site visit. That qualification alone saves hours of unbillable travel.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />


        <section className="v2-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                More Plumbers Locations
              </h2>
              <p className="text-[var(--v2-body)]">
                Katie answers calls for plumbers across the UK.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <TradeCityLinks trade="for-plumbers" current="leeds" />
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/for-plumbers"
                className={`inline-flex items-center text-[var(--v2-green)] hover:text-[var(--v2-green-hover)] font-medium transition-colors`}
              >
                View all plumbers pages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── FAQ ─── */}
        <section className="trade-faq v2-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                Questions Plumbers in Leeds Ask
              </h2>
              <p className="text-[var(--v2-body)]">
                Everything you need to know about AI call answering for plumbers in Leeds.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-[var(--v2-line)] rounded-2xl p-6" itemScope itemType="https://schema.org/Question">
                  <h3 className="text-lg font-semibold mb-3" itemProp="name">{faq.question}</h3>
                  <p className="text-[var(--v2-body)] leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <span itemProp="text">{faq.answer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── TRUST SIGNALS ─── */}
        <section className="v2-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="v2-h2 mb-4">
                Trusted by Plumbers Across the UK
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Shield, label: "GDPR Compliant", sub: "UK data centres" },
                { icon: Clock, label: "24/7 Coverage", sub: "Including bank holidays" },
                { icon: PoundSterling, label: "£1.2M+ Revenue", sub: "Recovered for trades" },
                { icon: Star, label: "4.9/5 Rating", sub: "From verified users" },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-white border border-[var(--v2-line)] rounded-2xl p-6 text-center">
                    <Icon className={`w-8 h-8 text-blue-400 mx-auto mb-3`} />
                    <p className="font-semibold text-[var(--v2-ink)]">{item.label}</p>
                    <p className="text-sm text-[var(--v2-muted)]">{item.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ─── FINAL CTA ─── */}
        <section className="bg-[var(--v2-navy)] text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stop Losing Plumber Jobs in Leeds Today
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
              Every missed call is a competitor gaining a customer. Katie answers 24/7, captures every enquiry, and delivers it to your WhatsApp in 3 seconds.
            </p>
            <Link
              href="/"
              className="v2-btn min-h-[54px] px-7 text-base"
            >
              Start Your Free 7-Day Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/65">
              {["No credit card required", "Setup in 30 minutes", "Cancel anytime", "24/7 call answering"].map(point => (
                <span key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6ee7b7]" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
