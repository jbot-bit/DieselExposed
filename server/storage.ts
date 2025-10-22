import { type Violation, type Evidence, type InsertViolation, type InsertEvidence } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Violations
  getAllViolations(): Promise<Violation[]>;
  getViolation(id: string): Promise<Violation | undefined>;
  createViolation(violation: InsertViolation): Promise<Violation>;
  
  // Evidence
  getAllEvidence(): Promise<Evidence[]>;
  getEvidenceByCategory(category: string): Promise<Evidence[]>;
  getEvidence(id: string): Promise<Evidence | undefined>;
  createEvidence(evidence: InsertEvidence): Promise<Evidence>;
}

export class MemStorage implements IStorage {
  private violations: Map<string, Violation>;
  private evidence: Map<string, Evidence>;

  constructor() {
    this.violations = new Map();
    this.evidence = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed violations - organized by Customer Corruption vs Business/Tax Corruption
    const violationData: InsertViolation[] = [
      // CUSTOMER CORRUPTION
      {
        date: "May 2025",
        title: "Damaged Vehicle Component - Broken Driveshaft",
        category: "customer-corruption",
        severity: "critical",
        description: "Vehicle delivered to mechanic in perfect working condition. Customer retrieved vehicle with broken driveshaft requiring $3,500+ repair. Mechanic claimed damage occurred 'when disturbed' during exhaust installation, despite customer never experiencing issues before service. Vehicle became undrivable and required towing to another mechanic.",
        evidence: ["3", "4", "11"],
        sortOrder: 1,
      },
      {
        date: "May 2025",
        title: "ECU and DSG Tunes Not Supplied - Invoice Manipulation",
        category: "customer-corruption",
        severity: "critical",
        description: "Customer charged $1,200 for ECU Remap and $900 for DSG Remap (total $2,100) on Invoice INV-0315. Services never completed. DSG service 'zeroed out' on Invoice INV-0321 with manipulated notation claiming customer 'wishes to pick up vehicle in current state'—customer never declined service. Invoice manipulation to avoid refund despite non-completion.",
        evidence: ["1", "2"],
        sortOrder: 2,
      },
      {
        date: "May 2025",
        title: "Locked Alientech Tuning Tool - $650 Unusable Product",
        category: "customer-corruption",
        severity: "critical",
        description: "Customer charged $650 for 'Alientech Personal Tuner Tool' per Invoice INV-0315. Tool delivered in locked state, rendering it completely useless. Customer unable to use or transfer tool due to proprietary locking mechanism, making this a $650 charge for non-functional equipment.",
        evidence: ["1"],
        sortOrder: 3,
      },
      {
        date: "May 2025",
        title: "Inflated Engine Service - $600+ 'Glorified Oil Change'",
        category: "customer-corruption",
        severity: "high",
        description: "Customer charged $602.10 for basic engine oil service marketed as comprehensive service. Invoice INV-0321 shows standard oil, filter, spark plugs totaling under $300 in parts, with inflated labor charges pushing total above $600 for routine maintenance work.",
        evidence: ["2"],
        sortOrder: 4,
      },
      {
        date: "May 2025",
        title: "Police-Required Vehicle Retrieval - Keys Withheld",
        category: "customer-corruption",
        severity: "critical",
        description: "Despite full payment of both invoices (INV-0315: $11,166.21 + INV-0321: $1,629.34 = $12,795.55 total), mechanic refused to return vehicle keys, forcing customer to involve police to retrieve their own property. Vehicle returned with broken driveshaft not present when dropped off.",
        evidence: ["1", "2", "5"],
        sortOrder: 5,
      },
      {
        date: "May 2025",
        title: "Uncharged Parts Disposal Fee",
        category: "customer-corruption",
        severity: "high",
        description: "Customer charged $80 'disposal of old parts' fee per Invoice INV-0321. Photographic evidence shows parts were never disposed - they were placed in customer's vehicle boot and returned with the car, proving customer paid for service never rendered.",
        evidence: ["2", "6"],
        sortOrder: 6,
      },
      {
        date: "May 2025",
        title: "Coercion via Multiple Communications",
        category: "customer-corruption",
        severity: "critical",
        description: "Multiple emails and communications attempting to coerce customer into waiving rights, deleting reviews, and accepting substandard repairs despite full payment. Pattern of intimidation and rights suppression documented across email chain.",
        evidence: ["5", "7"],
        sortOrder: 7,
      },
      {
        date: "May 2025",
        title: "$40,000 Defamation Lawsuit Threat - Legal Intimidation",
        category: "customer-corruption",
        severity: "critical",
        description: "Business threatened $40,000 defamation lawsuit via QCAT to silence customer complaints. QCAT has no jurisdiction over defamation (only Queensland Supreme Court). Customer's truthful statements cannot be defamatory under Australian law. Frivolous legal threat weaponizing court system for intimidation and suppression of truthful consumer warnings.",
        evidence: ["7"],
        sortOrder: 8,
      },
      
      // BUSINESS/TAX CORRUPTION
      {
        date: "2017-Present",
        title: "Cancelled ABN - 8 Years of Invalid Trading",
        category: "business-corruption",
        severity: "critical",
        description: "Australian Business Number (ABN 41 628 818 815) cancelled in 2017, yet business continued operating and issuing tax invoices under 'Sunshine Coast Diesel Tuning' name through 2025. All customer invoices show cancelled ABN, making them potentially invalid tax documents.",
        evidence: ["1", "2", "8"],
        sortOrder: 9,
      },
      {
        date: "June 2023-Present",
        title: "Post-Resignation Trading - 2 Years Unauthorized",
        category: "business-corruption",
        severity: "critical",
        description: "Owner resigned as director of Kaioken Holdings Pty Ltd in June 2023 but continued issuing invoices, accepting payments, and operating business as authorized company representative through May 2025. All 2025 invoices issued without proper authorization under resigned directorship.",
        evidence: ["1", "2", "9"],
        sortOrder: 10,
      },
      {
        date: "2017-2025",
        title: "Trading Name Mismatch - Identity Concealment",
        category: "business-corruption",
        severity: "critical",
        description: "Business traded as 'SC Diesel Tuning' but only 'Sunshine Coast Diesel Tuning' was registered. Different trading name used from registered name, concealing true business identity. Made ABN/company searches ineffective. Customers unable to verify legitimate business registration when searching for 'SC Diesel Tuning'.",
        evidence: ["1", "2", "8", "10"],
        sortOrder: 11,
      },
      {
        date: "2025",
        title: "Invalid Tax Invoices - GST Compliance Risk",
        category: "business-corruption",
        severity: "critical",
        description: "All tax invoices issued with cancelled ABN (41 628 818 815) and by resigned director. Invoices claim 'INCLUDES GST 10%' totaling $1,011.80 (INV-0315) and $145.64 (INV-0321), but may be invalid tax documents if ABN cancelled. Potential unauthorized GST collection without remittance to ATO.",
        evidence: ["1", "2", "8"],
        sortOrder: 12,
      },
    ];

    violationData.forEach((v) => {
      const id = randomUUID();
      this.violations.set(id, { ...v, id });
    });

    // Seed evidence with redacted real documents
    const evidenceData: InsertEvidence[] = [
      {
        title: "Invoice INV-0315 - $11,166.21 Fully Paid",
        type: "invoice",
        description: "Tax invoice dated 2 May 2025 showing charges for Alientech tool ($650), ECU remap ($1,200), DSG remap ($900), and parts. Total $11,130.00 + credit card fee $36.21 = $11,166.21 paid in full. Shows cancelled ABN 41 628 818 815. Personal information redacted from attached PDF.",
        timestamp: "2 May 2025",
        category: "Invoices",
        imageUrl: "/attached_assets/INV-0315_1761041278235.pdf",
      },
      {
        title: "Invoice INV-0321 - $1,629.34 Fully Paid",
        type: "invoice",
        description: "Tax invoice dated 6 May 2025 showing engine service ($277.50) and note that 'DSG Service has been zeroed out' and 'wishes to pick up vehicle in current state.' Includes warning about broken prop shaft and payment requirement before vehicle release. Total $1,602.10 + credit card fee $27.24 = $1,629.34 paid in full. Personal information redacted from attached PDF.",
        timestamp: "6 May 2025",
        category: "Invoices",
        imageUrl: "/attached_assets/INV-0321_1761041278235.pdf",
      },
      {
        title: "Recorded Call Transcript - $3,500 Damage Admission",
        type: "message",
        description: "Transcribed phone call where mechanic admits driveshaft damage and quotes $2,924.30 wholesale ($3,500 retail) for replacement. States bearings 'fall out' when 'disturbed' during exhaust install. Customer had no prior issues with driveshaft before service. Full transcript available in attached_assets/call_ben_transcribed_full_1761041666000.txt with personal names redacted.",
        timestamp: "May 2025",
        category: "Communications",
        imageUrl: null,
      },
      {
        title: "Photo - Broken Driveshaft Component",
        type: "photo",
        description: "Photographic evidence of damaged driveshaft received back from mechanic. Vehicle delivered in perfect working condition, returned with critical component failure requiring towing to another workshop. Image file: attached_assets/scdieseltuning_brokenshaft_1761041697118.jpg",
        timestamp: "May 2025",
        category: "Physical Evidence",
        imageUrl: "/attached_assets/scdieseltuning_brokenshaft_1761041697118.jpg",
      },
      {
        title: "Coercion Email Chain",
        type: "message",
        description: "Series of emails attempting to coerce customer into waiving rights, deleting reviews, and accepting inadequate remedies despite full payment of all invoices ($12,795.55 total). Pattern of intimidation tactics documented. Personal email addresses and names redacted.",
        timestamp: "May 2025",
        category: "Communications",
        imageUrl: null,
      },
      {
        title: "Photo - Parts in Boot Not Disposed",
        type: "photo",
        description: "Parts allegedly 'disposed of' for $80 fee (Invoice INV-0321 line item) were actually placed in customer's boot and returned with vehicle. Photographic proof of charging for services never rendered. Image file: attached_assets/parts_in_boot-min_1761041304073.jpg",
        timestamp: "May 2025",
        category: "Physical Evidence",
        imageUrl: "/attached_assets/parts_in_boot-min_1761041304073.jpg",
      },
      {
        title: "$40,000 Defamation Lawsuit Threat",
        type: "message",
        description: "Communication threatening $40,000 defamation lawsuit via QCAT to silence customer. QCAT has no defamation jurisdiction (only Supreme Court). Frivolous legal threat weaponizing court system for intimidation. Customer's truthful statements cannot be defamatory.",
        timestamp: "May 2025",
        category: "Communications",
        imageUrl: null,
      },
      {
        title: "ABN Lookup - Cancelled Since 2017",
        type: "registry",
        description: "Australian Business Register search results showing ABN 41 628 818 815 cancelled in 2017. Business continued operating and issuing tax invoices with cancelled ABN through 2025.",
        timestamp: "2025",
        category: "Business Records",
        imageUrl: null,
      },
      {
        title: "ASIC Company Extract - Resigned Director",
        type: "registry",
        description: "Company registration records showing director resignation from Kaioken Holdings Pty Ltd in June 2023. Former director continued issuing invoices and operating business through May 2025 without authority.",
        timestamp: "2025",
        category: "Business Records",
        imageUrl: null,
      },
      {
        title: "Ben Fearnehough Personal ABN - Cancelled 2017",
        type: "registry",
        description: "Australian Business Register showing Benjamin John Fearnehough's individual/sole trader ABN 25 510 379 182 cancelled 14 November 2017. Not registered for GST. Shows pattern of operating with cancelled business registrations across multiple ABNs. Document file: ABNCurrentDetails_25510379182_ben_cancelled_abn_1761042682989.pdf",
        timestamp: "2017",
        category: "Business Records",
        imageUrl: "/attached_assets/ABNCurrentDetails_25510379182_ben_cancelled_abn_1761042682989.pdf",
      },
    ];

    evidenceData.forEach((e, index) => {
      const id = (index + 1).toString();
      const evidence: Evidence = {
        ...e,
        id,
        imageUrl: e.imageUrl ?? null,
        timestamp: e.timestamp ?? null,
      };
      this.evidence.set(id, evidence);
    });
  }

  async getAllViolations(): Promise<Violation[]> {
    return Array.from(this.violations.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getViolation(id: string): Promise<Violation | undefined> {
    return this.violations.get(id);
  }

  async createViolation(insertViolation: InsertViolation): Promise<Violation> {
    const id = randomUUID();
    const violation: Violation = { ...insertViolation, id };
    this.violations.set(id, violation);
    return violation;
  }

  async getAllEvidence(): Promise<Evidence[]> {
    return Array.from(this.evidence.values());
  }

  async getEvidenceByCategory(category: string): Promise<Evidence[]> {
    return Array.from(this.evidence.values()).filter(e => e.category === category);
  }

  async getEvidence(id: string): Promise<Evidence | undefined> {
    return this.evidence.get(id);
  }

  async createEvidence(insertEvidence: InsertEvidence): Promise<Evidence> {
    const id = randomUUID();
    const evidence: Evidence = {
      ...insertEvidence,
      id,
      imageUrl: insertEvidence.imageUrl ?? null,
      timestamp: insertEvidence.timestamp ?? null,
    };
    this.evidence.set(id, evidence);
    return evidence;
  }
}

export const storage = new MemStorage();
