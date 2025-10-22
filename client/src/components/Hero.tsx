import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { ShareButtons } from "@/components/ShareButtons";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="space-y-8">
          {/* Alert Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            <span className="text-sm font-medium text-destructive">Consumer Warning</span>
          </div>

          {/* Main Headlines - SEO Optimized */}
          <div>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter mb-4 leading-[0.9]">
              <span className="block">SC DIESEL TUNING</span>
              <span className="block text-primary mt-2">SUNSHINE COAST</span>
              <span className="block text-destructive mt-2">DIESEL TUNING</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-muted-foreground mt-6 max-w-4xl mx-auto">
              8 Years Trading with Cancelled ABN
            </h2>
          </div>

          {/* Cold Facts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto font-mono text-sm">
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="text-3xl font-black text-destructive mb-1">$12,795.55</div>
              <div className="text-muted-foreground">Paid in Full</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="text-3xl font-black text-destructive mb-1">$3,500</div>
              <div className="text-muted-foreground">Driveshaft Damage</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="text-3xl font-black text-destructive mb-1">$40K</div>
              <div className="text-muted-foreground">Lawsuit Threat</div>
            </div>
            <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
              <div className="text-3xl font-black text-destructive mb-1">POLICE</div>
              <div className="text-muted-foreground">Vehicle Retrieval</div>
            </div>
          </div>

          {/* Devastating Summary */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              <span className="text-primary font-bold">SC Diesel Tuning</span> (trading as{" "}
              <span className="text-primary font-bold">Sunshine Coast Diesel Tuning</span>) received{" "}
              <span className="font-bold">$12,795.55</span> in full payment.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium mt-3">
              Customer received: Broken driveshaft. Locked $650 tool. Unprovided $2,100 tunes.
              Police-required vehicle retrieval. $40,000 lawsuit threat for truthful complaints.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed font-medium mt-3">
              Business operated <span className="font-bold text-destructive">8 years with cancelled ABN</span>.
              Director resigned 2023, continued trading through 2025.
            </p>
          </div>

          {/* Evidence Count */}
          <div className="flex items-center justify-center gap-6 text-sm font-mono">
            <div>
              <span className="text-destructive font-bold">12</span>{" "}
              <span className="text-muted-foreground">Documented Violations</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full" />
            <div>
              <span className="text-primary font-bold">10</span>{" "}
              <span className="text-muted-foreground">Evidence Files</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full" />
            <div>
              <span className="text-muted-foreground">May 2025</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-4 pt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("evidence")}
                className="min-w-[200px] min-h-11 h-11"
                data-testid="button-view-evidence"
              >
                <AlertCircle className="w-5 h-5 mr-2" />
                View Evidence
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("violations")}
                className="min-h-11 h-11"
                data-testid="button-view-violations"
              >
                View Violations
              </Button>
            </div>
            
            {/* Share Buttons */}
            <div className="mt-2">
              <p className="text-sm text-muted-foreground mb-2">Share to warn others:</p>
              <ShareButtons variant="ghost" size="sm" />
            </div>
          </div>

          {/* SEO Keywords Footer */}
          <div className="pt-8 text-xs text-muted-foreground/60 max-w-2xl mx-auto">
            <p>
              SC Diesel Tuning | Sunshine Coast Diesel Tuning | Queensland Diesel Mechanic Complaints | 
              Cancelled ABN Violations | Benjamin Fearnehough | scdieseltuning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
