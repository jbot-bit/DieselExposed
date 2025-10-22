import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, AlertTriangle, FileText, Scale } from "lucide-react";

const faqs = [
  {
    question: "What happened to the customer's vehicle at SC Diesel Tuning?",
    answer: "Vehicle delivered to SC Diesel Tuning (Sunshine Coast Diesel Tuning) in perfect working condition. Customer paid $12,795.55 in full for services. Received vehicle back with broken driveshaft requiring $3,500+ repair, $650 locked unusable tool, $2,100 in services never completed (ECU/DSG tunes), and parts allegedly 'disposed of' for $80 but found in boot. Required police intervention to retrieve vehicle after keys withheld despite full payment.",
  },
  {
    question: "What about the DSG tune that was 'zeroed out'?",
    answer: "Invoice INV-0321 shows DSG service 'zeroed out' with notation claiming customer 'wishes to pick up vehicle in current state.' Customer never declined the DSG service—this was invoice manipulation to avoid refund for services never completed. Customer paid $900 for DSG tune on INV-0315 but service was never performed.",
  },
  {
    question: "What was the $40,000 lawsuit threat?",
    answer: "SC Diesel Tuning threatened a $40,000 defamation lawsuit via QCAT to silence customer's truthful complaints. QCAT has zero jurisdiction over defamation claims—only Queensland Supreme Court hears defamation. This was a frivolous legal threat weaponizing the court system for intimidation and suppression of truthful consumer warnings.",
  },
  {
    question: "How long did SC Diesel Tuning operate with cancelled ABN?",
    answer: "ABN 41 628 818 815 cancelled in 2017. Business continued operating and issuing tax invoices through May 2025—8 continuous years of trading with cancelled business registration. All customer invoices show cancelled ABN. Owner's personal ABN (25 510 379 182) also cancelled November 2017. Pattern of operating with multiple cancelled business registrations.",
  },
  {
    question: "What is the trading name mismatch issue?",
    answer: "Business traded as 'SC Diesel Tuning' but only 'Sunshine Coast Diesel Tuning' was registered. Used different trading name from registered name, concealing true business identity. Made ABN/company searches ineffective—customers couldn't verify legitimate registration when searching for 'SC Diesel Tuning'.",
  },
  {
    question: "Is this evidence documented and verifiable?",
    answer: "Yes. All violations documented with timestamped evidence: Tax invoices INV-0315 ($11,166.21) and INV-0321 ($1,629.34) showing full payment; Recorded phone call transcript with mechanic admitting $3,500 driveshaft damage; Photographs of broken driveshaft and parts; ABN registry showing cancellation 2017; ASIC records showing director resignation June 2023; $40k lawsuit threat communication. All evidence preserved with personal information redacted.",
  },
  {
    question: "What should other customers of SC Diesel Tuning do?",
    answer: "If you experienced similar issues with SC Diesel Tuning or Sunshine Coast Diesel Tuning: (1) Document everything—invoices, emails, photos, (2) Report to authorities: ACCC (consumer.gov.au), QLD Fair Trading (qld.gov.au/fairtrading), ASIC (asic.gov.au), ATO for tax concerns, (3) File honest reviews detailing your experience, (4) Seek legal advice regarding consumer rights, (5) Consider QCAT for compensation claims.",
  },
  {
    question: "What is the total financial damage?",
    answer: "Customer paid $12,795.55 in full (INV-0315: $11,166.21 + INV-0321: $1,629.34). Received: $3,500 driveshaft damage, $2,100 services never provided (ECU/DSG tunes), $650 locked unusable tool, $602.10 inflated oil change, $80 charged for parts disposal that didn't occur. Vehicle required police retrieval and towing. Total: $12,795.55 paid + $3,500 repairs + towing = $16,295.55 minimum documented damages.",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Documented Evidence",
    description: "10 evidence files: invoices, recordings, photos, registry records—all timestamped and preserved",
  },
  {
    icon: AlertTriangle,
    title: "8 Years Cancelled ABN",
    description: "Business operated 2017-2025 with cancelled registration issuing invalid tax invoices",
  },
  {
    icon: FileText,
    title: "$40K Lawsuit Threat",
    description: "Frivolous defamation threat via QCAT to silence truthful consumer complaints",
  },
  {
    icon: Scale,
    title: "Protected Truth",
    description: "All statements factually accurate and protected under Australian consumer protection law",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SC Diesel Tuning | Sunshine Coast Diesel Tuning violations and evidence documentation
          </p>
        </div>

        {/* Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card key={index} className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <Card className="p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline" data-testid={`accordion-trigger-faq-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* SEO Footer */}
        <div className="mt-12 p-6 bg-muted/50 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">About this documentation:</strong> This website presents truthful, factually accurate information about SC Diesel Tuning (Sunshine Coast Diesel Tuning) based on documented evidence including invoices, recorded communications, photographs, and government registry records. Information provided for public interest consumer protection and regulatory awareness. All evidence available for verification by authorities, legal counsel, or courts.
          </p>
        </div>
      </div>
    </section>
  );
}
