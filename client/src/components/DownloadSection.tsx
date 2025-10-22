import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import { Download } from "lucide-react";

export function DownloadSection() {
  const handleDownload = () => {
    alert("PDF fact sheet download will be implemented. Comprehensive documentation with all 12 violations, 10 evidence files, and regulatory information.");
  };

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            DOWNLOAD EVIDENCE
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            12 violations • 10 evidence files • $16,295.55 total damages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="lg"
              onClick={handleDownload}
              className="min-w-[200px] min-h-11 h-11"
              data-testid="button-download-report"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Share to warn others:</p>
            <div className="flex justify-center">
              <ShareButtons />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
