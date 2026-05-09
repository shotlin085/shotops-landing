import { ArchitectureSection } from "@/components/landing/architecture-section";
import { BetaTransparency } from "@/components/landing/beta-transparency";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { JoinBetaSection } from "@/components/landing/join-beta-section";
import { Navbar } from "@/components/landing/navbar";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SecuritySection } from "@/components/landing/security-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { TrustBar } from "@/components/landing/trust-bar";
import { UseCases } from "@/components/landing/use-cases";
import { WhyOpslinSection } from "@/components/landing/why-opslin-section";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { siteLinks } from "@/lib/site-links";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Opslin",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux",
  url: siteLinks.landing,
  description:
    "Opslin turns your Linux server into a managed deployment platform with Git deploys, SSL, logs, monitoring, databases, and rollback from one browser dashboard.",
  offers: [
    { "@type": "Offer", name: "Free Beta", price: "0", priceCurrency: "INR" },
    { "@type": "Offer", name: "Starter", price: "299", priceCurrency: "INR" },
    { "@type": "Offer", name: "Pro", price: "799", priceCurrency: "INR" },
  ],
};

export default function LandingPage() {
  return (
    <div className="landing-theme min-h-screen bg-[#F7F4EE] text-zinc-950">
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <WhyOpslinSection />
        <HowItWorks />
        <WorkflowSection />
        <FeatureGrid />
        <ArchitectureSection />
        <SecuritySection />
        <UseCases />
        <ComparisonSection />
        <BetaTransparency />
        <PricingSection />
        <FaqSection />
        <JoinBetaSection />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
