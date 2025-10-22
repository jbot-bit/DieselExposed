import { Card } from "@/components/ui/card";
import { Building, UserX } from "lucide-react";

const categories = [
  {
    id: "customer-corruption",
    title: "Customer Violations",
    icon: UserX,
    violations: [
      { title: "Broken Driveshaft", fact: "Vehicle delivered working, returned undrivable. $3,500 repair required." },
      { title: "ECU/DSG Tunes Never Supplied", fact: "$2,100 charged, services never completed. Invoice manipulated." },
      { title: "Locked Tool", fact: "$650 paid for completely unusable equipment." },
      { title: "Inflated Engine Service", fact: "Basic oil change charged as $600+ 'comprehensive service'." },
      { title: "Police-Required Vehicle Retrieval", fact: "Full payment made. Keys withheld. Police required." },
      { title: "Parts 'Disposal' Fee", fact: "$80 charged. Parts found in customer's boot." },
      { title: "Multi-Channel Coercion", fact: "Systematic intimidation to suppress complaints and reviews." },
      { title: "$40,000 Lawsuit Threat", fact: "Frivolous defamation threat via QCAT (no jurisdiction)." },
    ],
  },
  {
    id: "business-corruption",
    title: "Business/Tax Violations",
    icon: Building,
    violations: [
      { title: "8 Years Cancelled ABN", fact: "ABN cancelled 2017. Continued trading through 2025." },
      { title: "2 Years Post-Resignation Trading", fact: "Director resigned June 2023. Continued issuing invoices through 2025." },
      { title: "Unregistered Trading Name", fact: "Operated as 'SC Diesel Tuning' with only 'Sunshine Coast Diesel Tuning' registered." },
      { title: "Invalid Tax Invoices", fact: "All invoices show cancelled ABN. GST compliance risk." },
    ],
  },
];

export function ViolationBreakdown() {
  return (
    <section id="violations" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center">
          12 DOCUMENTED VIOLATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="p-6" data-testid={`card-category-${category.id}`}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-black">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.violations.map((violation, index) => (
                    <div key={index} className="border-l-2 border-destructive pl-4">
                      <h4 className="font-bold text-sm mb-1">{violation.title}</h4>
                      <p className="text-xs text-muted-foreground">{violation.fact}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
