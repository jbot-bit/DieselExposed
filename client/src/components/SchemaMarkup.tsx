import { useEffect, useState } from 'react';

export function SchemaMarkup() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const origin = window.location.origin;
  const currentUrl = window.location.href;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SC Diesel Tuning Violations Documentation",
    "alternateName": ["Sunshine Coast Diesel Tuning Violations", "scdieseltuning complaints"],
    "url": origin,
    "description": "Documented evidence of SC Diesel Tuning (Sunshine Coast Diesel Tuning) violations: $12,795.55 paid, broken driveshaft, 8 years cancelled ABN, police-required vehicle retrieval",
    "about": {
      "@type": "Thing",
      "name": "SC Diesel Tuning",
      "alternateName": "Sunshine Coast Diesel Tuning",
      "sameAs": "scdieseltuning"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "SC Diesel Tuning",
      "alternateName": "Sunshine Coast Diesel Tuning",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Queensland",
        "addressCountry": "AU"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "1",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Verified Customer"
    },
    "reviewBody": "Paid $12,795.55 in full. Received broken driveshaft requiring $3,500 repair, locked $650 tool, unprovided $2,100 tunes. Police required to retrieve vehicle. Business operated 8 years with cancelled ABN.",
    "datePublished": "2025-05-01"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SC Diesel Tuning Documentation",
        "item": currentUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happened to the customer's vehicle at SC Diesel Tuning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vehicle delivered to SC Diesel Tuning (Sunshine Coast Diesel Tuning) in perfect working condition. Customer paid $12,795.55 in full for services. Received vehicle back with broken driveshaft requiring $3,500+ repair, $650 locked unusable tool, $2,100 in services never completed (ECU/DSG tunes), and parts allegedly 'disposed of' for $80 but found in boot. Required police intervention to retrieve vehicle after keys withheld despite full payment."
        }
      },
      {
        "@type": "Question",
        "name": "How long did SC Diesel Tuning operate with cancelled ABN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABN 41 628 818 815 cancelled in 2017. Business continued operating and issuing tax invoices through May 2025—8 continuous years of trading with cancelled business registration. All customer invoices show cancelled ABN. Owner's personal ABN (25 510 379 182) also cancelled November 2017. Pattern of operating with multiple cancelled business registrations."
        }
      },
      {
        "@type": "Question",
        "name": "What was the $40,000 lawsuit threat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SC Diesel Tuning threatened a $40,000 defamation lawsuit via QCAT to silence customer's truthful complaints. QCAT has zero jurisdiction over defamation claims—only Queensland Supreme Court hears defamation. This was a frivolous legal threat weaponizing the court system for intimidation and suppression of truthful consumer warnings."
        }
      },
      {
        "@type": "Question",
        "name": "What is the total financial damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Customer paid $12,795.55 in full (INV-0315: $11,166.21 + INV-0321: $1,629.34). Received: $3,500 driveshaft damage, $2,100 services never provided (ECU/DSG tunes), $650 locked unusable tool, $602.10 inflated oil change, $80 charged for parts disposal that didn't occur. Vehicle required police retrieval and towing. Total: $12,795.55 paid + $3,500 repairs + towing = $16,295.55 minimum documented damages."
        }
      },
      {
        "@type": "Question",
        "name": "What is the trading name mismatch issue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Business traded as 'SC Diesel Tuning' but only 'Sunshine Coast Diesel Tuning' was registered. Used different trading name from registered name, concealing true business identity. Made ABN/company searches ineffective—customers couldn't verify legitimate registration when searching for 'SC Diesel Tuning'."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
