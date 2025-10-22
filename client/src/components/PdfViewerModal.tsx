import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X } from 'lucide-react';
// Import PDF.js worker with Vite's ?url suffix for proper bundling
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export function PdfViewerModal({ isOpen, onClose, pdfUrl, title }: PdfViewerModalProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, '_') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const nextPage = () => setPageNumber(prev => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber(prev => Math.max(prev - 1, 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl max-h-[90vh] p-0 overflow-hidden flex flex-col"
        data-testid="modal-pdf-viewer"
      >
        {/* Header with controls */}
        <DialogHeader className="p-4 border-b border-border flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-bold pr-8">{title}</DialogTitle>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              className="absolute right-4 top-4"
              data-testid="button-close-pdf"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {/* Page navigation */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={pageNumber <= 1}
                className="min-h-11 h-11 px-3"
                data-testid="button-prev-page"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <span className="text-sm px-3 font-mono">
                {pageNumber} / {numPages || '?'}
              </span>
              <Button
                variant="outline"
                onClick={nextPage}
                disabled={pageNumber >= numPages}
                className="min-h-11 h-11 px-3"
                data-testid="button-next-page"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Zoom controls */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                onClick={zoomOut}
                disabled={scale <= 0.5}
                className="min-h-11 h-11 px-3"
                data-testid="button-zoom-out"
              >
                <ZoomOut className="w-5 h-5" />
              </Button>
              <span className="text-sm px-3 font-mono">{Math.round(scale * 100)}%</span>
              <Button
                variant="outline"
                onClick={zoomIn}
                disabled={scale >= 2.5}
                className="min-h-11 h-11 px-3"
                data-testid="button-zoom-in"
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
            </div>

            {/* Download button */}
            <Button
              onClick={handleDownload}
              className="ml-auto min-h-11 h-11"
              data-testid="button-download-pdf"
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
          </div>
        </DialogHeader>

        {/* PDF viewer */}
        <div 
          className="flex-1 overflow-auto p-4 bg-muted/20"
          data-testid="pdf-viewer-container"
        >
          <div className="flex justify-center">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-muted-foreground">Loading PDF...</div>
                </div>
              }
              error={
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-destructive">Error loading PDF. Please try downloading instead.</div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="shadow-lg"
              />
            </Document>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
