import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { SiX, SiFacebook, SiLinkedin } from 'react-icons/si';

interface ShareButtonsProps {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function ShareButtons({ variant = 'outline', size = 'default', showLabel = true, className }: ShareButtonsProps) {
  // Ensure minimum 44px height for mobile touch targets
  const buttonClassName = `min-h-11 h-11 ${className || ''}`;
  const shareText = "SC Diesel Tuning violations documented - $12,795.55 paid, broken driveshaft, 8 years cancelled ABN";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SC Diesel Tuning Violations',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled');
      }
    }
  };

  // Check if Web Share API is available
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Native Share (mobile) */}
      {canShare && (
        <Button
          variant={variant}
          size={size}
          onClick={shareNative}
          className={buttonClassName}
          data-testid="button-share-native"
        >
          <Share2 className="w-5 h-5 mr-2" />
          {showLabel && 'Share'}
        </Button>
      )}

      {/* X/Twitter */}
      <Button
        variant={variant}
        size={size}
        onClick={shareOnTwitter}
        className={buttonClassName}
        data-testid="button-share-twitter"
      >
        <SiX className="w-5 h-5 mr-2" />
        {showLabel && 'X'}
      </Button>

      {/* Facebook */}
      <Button
        variant={variant}
        size={size}
        onClick={shareOnFacebook}
        className={buttonClassName}
        data-testid="button-share-facebook"
      >
        <SiFacebook className="w-5 h-5 mr-2" />
        {showLabel && 'Facebook'}
      </Button>

      {/* LinkedIn */}
      <Button
        variant={variant}
        size={size}
        onClick={shareOnLinkedIn}
        className={buttonClassName}
        data-testid="button-share-linkedin"
      >
        <SiLinkedin className="w-5 h-5 mr-2" />
        {showLabel && 'LinkedIn'}
      </Button>
    </div>
  );
}
