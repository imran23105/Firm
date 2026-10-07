// Kshetry & Co. — Law Firm Demo Content & Data Stores

export const navLinks = [
  { id: 'home', label: 'HOME' },
  { id: 'firm', label: 'ABOUT US' },
  { id: 'practice', label: 'PRACTICE AREAS' },
  { id: 'network', label: 'OUR NETWORK' },
  { id: 'awards', label: 'AWARDS & RECOGNITION' },
  { id: 'insights', label: 'INSIGHTS' },
  { id: 'careers', label: 'CAREERS' },
  { id: 'contact', label: 'CONTACT US' },
];

export const heroData = {
  eyebrow: "LEGAL SOLUTIONS BEYOND BORDERS",
  titlePrimary: "Trusted Legal Advisors",
  titleSecondary: "for a Global Tomorrow",
  paragraph: "Kshetry & Co. is a multi-jurisdictional law firm providing strategic, practical and solution-oriented legal services to businesses, investors and individuals across India, the UAE and key international markets.",
  disciplines: [
    "ADVISORY",
    "LITIGATION",
    "TRANSACTIONS",
    "REGULATORY",
    "DISPUTE RESOLUTION"
  ]
};

export const firmData = {
  eyebrow: "THE FIRM",
  heading: "A Global Perspective. A Personal Approach.",
  description: "Kshetry & Co. combines legal knowledge with commercial understanding to advise individuals, businesses, institutions and international stakeholders navigating increasingly complex legal and business environments.",
  journeyHeading: "From a Vision in 2009 to a Global Legal Practice",
  journeyTagline: "PEOPLE | PERSPECTIVE | PROGRESS",
  timeline: [
    {
      year: "2009",
      title: "FOUNDATION",
      description: "Established with a vision to provide trusted, high-quality legal counsel in India, built on integrity, analytical rigour and relentless client advocacy."
    },
    {
      year: "2015",
      title: "GROWING EXPERTISE",
      description: "Expanded across litigation, corporate and commercial law, real estate, regulatory and dispute resolution, serving a diverse client base of conglomerates and emerging enterprises."
    },
    {
      year: "2020",
      title: "A GLOBAL OUTLOOK",
      description: "Developed an international perspective advising on cross-border matters spanning India, the UAE, the UK, the US and Thailand, bridging divergent legal frameworks."
    },
    {
      year: "TODAY",
      title: "TODAY AND BEYOND",
      description: "Continues to grow as a full-service global law firm, combining deep jurisdictional expertise with sharp commercial understanding for an evolving international landscape."
    }
  ],
  definingPrinciples: [
    {
      number: "01",
      title: "CLARITY",
      description: "Cutting through jurisdictional and regulatory ambiguities to deliver definitive, actionable counsel."
    },
    {
      number: "02",
      title: "CROSS-BORDER PERSPECTIVE",
      description: "Bridging diverse legal systems seamlessly across Asia, the Middle East, Europe, and the Americas."
    },
    {
      number: "03",
      title: "DISCRETION",
      description: "Guarding our clients' commercial imperatives and reputations with absolute confidentiality and restraint."
    },
    {
      number: "04",
      title: "COMMERCIAL THINKING",
      description: "Aligning legal risk management directly with long-term enterprise value, liquidity, and strategic growth."
    }
  ],
  counters: [
    { value: 2009, suffix: "", label: "Founded" },
    { value: 5, suffix: "+", label: "Jurisdictions" },
    { value: 12, suffix: "", label: "Practice Areas" }
  ]
};

export const practiceAreas = [
  {
    number: "01",
    title: "Corporate & Commercial Advisory",
    description: "Corporate structuring, business advisory, commercial arrangements, governance and strategic counsel.",
    scope: ["Entity Formation & Reorganisations", "Joint Ventures & Shareholder Pacts", "Corporate Governance Protocols", "Commercial Supply & Licensing Agreements"],
    imageTheme: "Executive boardroom & corporate registry records"
  },
  {
    number: "02",
    title: "Cross-Border Transactions & Investments",
    description: "International investments, joint ventures, M&A, due diligence and transaction structuring.",
    scope: ["Cross-Border M&A & FDI Compliance", "Bilateral Investment Treaty Counsel", "Multi-Jurisdiction Due Diligence", "Escrow & Closing Mechanics"],
    imageTheme: "International financial transaction documents"
  },
  {
    number: "03",
    title: "Real Estate, Construction & Infrastructure",
    description: "Property transactions, development, leasing, EPC, FIDIC, infrastructure projects and construction disputes.",
    scope: ["FIDIC & EPC Contract Negotiation", "Commercial Property Acquisitions & Leases", "Infrastructure Project Finance", "Construction Claims & Adjudication"],
    imageTheme: "Architectural blueprint and skyline development"
  },
  {
    number: "04",
    title: "Contracts & Commercial Agreements",
    description: "Drafting, negotiation, review and risk management of domestic and international contracts.",
    scope: ["High-Value Procurement Contracts", "Distribution & Agency Agreements", "Master Services & SLA Frameworks", "Indemnity & Liability Allocation"],
    imageTheme: "Bespoke legal manuscript & fountain pen seal"
  },
  {
    number: "05",
    title: "Litigation, Arbitration & Dispute Resolution",
    description: "Civil and commercial litigation, arbitration, mediation, contractual disputes and strategic representation.",
    scope: ["High Courts & Supreme Court Advocacy", "International Arbitration (LCIA, SIAC, DIAC)", "Commercial Injunctions & Asset Freezes", "Alternative Dispute Resolution"],
    imageTheme: "High court chamber & arbitration tribunal"
  },
  {
    number: "06",
    title: "UAE & GCC Business Advisory",
    description: "Mainland and Free Zone structuring, corporate advisory, real estate, regulatory matters and India-UAE/GCC business interests.",
    scope: ["DIFC & ADGM Common Law Structuring", "UAE Mainland Commercial Licensing", "Bilateral India-UAE CEPA Opportunities", "GCC Regional Headquarters Setup"],
    imageTheme: "DIFC Dubai Gate archway & maritime trade route"
  },
  {
    number: "07",
    title: "Regulatory, Compliance & Corporate Governance",
    description: "Regulatory advisory, compliance frameworks, governance, investigations and legal risk management.",
    scope: ["Statutory Compliance Audits", "Internal Investigations & Whistleblower Counsel", "Anti-Bribery & AML Compliance", "Director Fiduciary Liabilities"],
    imageTheme: "Regulatory seal & compliance governance ledger"
  },
  {
    number: "08",
    title: "International Business & Market Entry",
    description: "Legal support for businesses entering or expanding across India, the UAE, the UK, the US and Thailand.",
    scope: ["Market Entry Feasibility & Licensing", "Foreign Exchange Regulations (FEMA)", "Repatriation of Capital Protocols", "Cross-Border Regulatory Filings"],
    imageTheme: "Global trade routes & diplomatic gateway"
  },
  {
    number: "09",
    title: "Employment, Immigration & Mobility",
    description: "Employment advisory, executive arrangements, immigration, expatriate mobility and international workforce support.",
    scope: ["Executive Compensation & Non-Competes", "Global Mobility & Golden Visa Structuring", "Workplace Policy & Disciplinary Codes", "Cross-Border Secondment Agreements"],
    imageTheme: "Global passport seal & corporate mobility documents"
  },
  {
    number: "10",
    title: "Intellectual Property, Technology & Cyber Law",
    description: "IP protection, licensing, technology contracts, digital businesses, data protection and cyber-law advisory.",
    scope: ["Trademark & Patent Portfolio Strategy", "Data Privacy & Cross-Border Data Transfers", "Software Licensing & SaaS Terms", "Cyber Incident Response & Liability"],
    imageTheme: "Digital patent matrix & intellectual property register"
  },
  {
    number: "11",
    title: "Tax, Financial & Regulatory Advisory",
    description: "Tax-related legal advisory, financial and regulatory considerations and transaction structuring, in coordination with relevant professionals.",
    scope: ["DTAA & Withholding Tax Legalities", "Transfer Pricing Controversy Support", "Banking & Structured Finance Documentation", "Restructuring & Insolvency Counsel"],
    imageTheme: "Financial ledger & sovereign revenue statutes"
  },
  {
    number: "12",
    title: "Private Client, NRI & Family Business Advisory",
    description: "Cross-border private wealth, property, succession, NRI matters and family business advisory.",
    scope: ["Family Constitutions & Governance", "Cross-Border Estate & Trust Structuring", "NRI Ancestral Property Resolution", "Philanthropic & Foundation Setup"],
    imageTheme: "Family heritage estate deed & private seal"
  }
];

export const networkData = {
  eyebrow: "OUR NETWORK",
  heading: "Local Knowledge. Global Perspective.",
  subheading: "CONNECTED ACROSS JURISDICTIONS",
  description: "Modern legal matters rarely remain confined to one jurisdiction. Through our international network and cross-border practice capabilities, Kshetry & Co. assists clients navigating legal and commercial matters involving multiple jurisdictions.",
  offices: [
    { country: "India", cities: "Kolkata, Delhi, Mumbai, Bengaluru", type: "OFFICES", status: "Primary Jurisdictional Hubs" },
    { country: "UAE", cities: "Dubai (Downtown & DIFC Corridor)", type: "OFFICES", status: "Middle East Operations" }
  ],
  networkLocations: [
    { country: "UAE Free Zones", description: "DIFC, ADGM, DMCC & Airport Freezone advisory presence", type: "NETWORK LOCATIONS" },
    { country: "United Kingdom", description: "London partner liaison for English law & LCIA arbitrations", type: "NETWORK LOCATIONS" },
    { country: "United States", description: "New York & Delaware corporate structuring network", type: "NETWORK LOCATIONS" },
    { country: "Thailand", description: "Bangkok regional nexus for ASEAN inward investments", type: "NETWORK LOCATIONS" }
  ],
  affiliatedNetwork: [
    "Independent correspondent legal counsel across 24 international capitals",
    "Active participant in leading international arbitration roundtables (LCIA, SIAC, DIAC)",
    "Bilateral business council and multinational chamber advisory affiliations"
  ],
  mapNodes: [
    { id: "usa", label: "USA", city: "New York", x: 195, y: 155, lat: "40.71° N", lon: "74.00° W", details: "Delaware Corporate & NY Transactions" },
    { id: "uk", label: "UK", city: "London", x: 425, y: 125, lat: "51.50° N", lon: "0.12° W", details: "English Law & European Arbitration" },
    { id: "uae", label: "UAE", city: "Dubai", x: 575, y: 195, lat: "25.20° N", lon: "55.27° E", details: "DIFC / Mainland & MENA Hub" },
    { id: "india", label: "India", city: "Kolkata / Delhi", x: 670, y: 205, lat: "22.57° N", lon: "88.36° E", details: "HQ & Supreme Court / High Courts" },
    { id: "thailand", label: "Thailand", city: "Bangkok", x: 725, y: 235, lat: "13.75° N", lon: "100.50° E", details: "Southeast Asia / ASEAN Gateway" }
  ]
};

export const awardsData = [
  {
    id: "award-1",
    year: "2026",
    title: "Distinguished Cross-Border Practice Award",
    organisation: "International Legal Review — Asia-Pacific & Middle East",
    category: "Cross-Border Commercial Advisory",
    recipient: "Kshetry & Co. — Cross-Border Practice Group",
    summary: "Recognized for seamless inter-jurisdictional advisory bridging the Indo-Gulf corridor and delivering client-focused transactional solutions.",
    details: "Conferred following extensive peer and in-house counsel appraisals evaluating transaction speed, multijurisdictional regulatory synthesis, and high client retention rates across India and the GCC."
  },
  {
    id: "award-2",
    year: "2025",
    title: "Excellence in Commercial Dispute Resolution",
    organisation: "Global Law Counsel Benchmark",
    category: "Litigation & Commercial Arbitration",
    recipient: "Dispute Resolution Practice",
    summary: "Commended for strategic advocacy in complex, high-stakes contractual disputes and institutional arbitrations.",
    details: "Shortlisted and commended by an independent benchmark jury for innovative evidentiary strategy and rigorous advocacy before institutional arbitral forums and appellate courts."
  },
  {
    id: "award-3",
    year: "2025",
    title: "Regional Firm of the Year — India & UAE Corridor",
    organisation: "Transnational Trade & Legal Forum",
    category: "Bilateral Corporate Structuring",
    recipient: "Corporate & Investment Practice",
    summary: "Honored for pioneering advisory on bilateral investment structuring under current CEPA agreements.",
    details: "Acknowledged for strategic foresight in assisting family conglomerates, high-growth tech ventures, and institutional investors transitioning operations between Indian metros and UAE Free Zones."
  },
  {
    id: "award-4",
    year: "2024",
    title: "Client Trust & Ethical Advocacy Citation",
    organisation: "Commonwealth Legal Standards Observatory",
    category: "Professional Ethics & Governance",
    recipient: "Kshetry & Co. Partnership",
    summary: "Awarded in recognition of exceptional professional integrity, discreet client representation, and pro bono community engagements.",
    details: "Granted by the observatory for exemplary adherence to international conflict-of-interest standards, confidentiality safeguards, and mentoring emerging legal scholars."
  }
];

export const insightsCategories = [
  "All",
  "Legal Updates",
  "Editorials",
  "Transactions",
  "Cross-Border",
  "Construction",
  "Real Estate",
  "UAE & GCC",
  "India",
  "Thought Leadership"
];

export const featuredInsight = {
  id: "featured-1",
  title: "Beyond the Black Letter",
  subtitle: "Legal developments. Commercial consequences. Strategic perspective.",
  eyebrow: "FEATURED EDITORIAL",
  author: "Senior Editorial Board",
  designation: "Partner, Cross-Border Practice",
  date: "October 2026",
  practiceArea: "Cross-Border",
  jurisdiction: "India • UAE • Global",
  readingTime: "6 min read",
  category: "Thought Leadership",
  excerpt: "In an era of fragmenting regulatory regimes, successful transnational enterprise hinges on anticipating how statutory changes in one jurisdiction ripple across supply chains, IP rights, and corporate liability in others.",
  content: "Legal counsel can no longer function purely as a reactive postscript to commercial transactions. As cross-border compliance demands escalate across South Asia and the GCC, businesses must harmonize local operational reality with multinational fiduciary standards."
};

export const insightsArticles = [
  {
    id: "insight-2",
    title: "Navigating FIDIC Contracts in Major Infrastructure Projects",
    excerpt: "Essential dispute avoidance mechanisms and risk apportionment provisions under the 2017 FIDIC Rainbow Suite for EPC contractors and sponsors.",
    author: "Infrastructure Advisory Team",
    designation: "Counsel, Projects & Construction",
    date: "September 2026",
    practiceArea: "Construction",
    jurisdiction: "India & Middle East",
    readingTime: "5 min read",
    category: "Construction",
    tags: ["Construction", "Contracts", "Cross-Border"]
  },
  {
    id: "insight-3",
    title: "Structuring India-UAE Corporate Reorganisations under CEPA",
    excerpt: "Examining tax efficiency, Free Zone vs. Mainland advantages, and intellectual property holding structures for expanding Indian enterprises.",
    author: "Corporate Transactions Group",
    designation: "Senior Associate, UAE Practice",
    date: "August 2026",
    practiceArea: "Corporate",
    jurisdiction: "UAE & GCC",
    readingTime: "4 min read",
    category: "UAE & GCC",
    tags: ["UAE & GCC", "Transactions", "Legal Updates"]
  },
  {
    id: "insight-4",
    title: "Enforceability of Foreign Arbitral Awards in Indian Courts",
    excerpt: "A tactical analysis of Section 48 of the Arbitration and Conciliation Act, public policy exceptions, and recent judicial precedents.",
    author: "Dispute Resolution Cell",
    designation: "Partner, Commercial Litigation",
    date: "July 2026",
    practiceArea: "Dispute Resolution",
    jurisdiction: "India",
    readingTime: "7 min read",
    category: "Legal Updates",
    tags: ["India", "Legal Updates", "Editorials"]
  },
  {
    id: "insight-5",
    title: "Private Wealth Succession & Cross-Border Trusts for NRIs",
    excerpt: "Resolving statutory conflict of laws across UK, US, and Indian assets through coordinated testamentary wills and private family trusts.",
    author: "Private Client Division",
    designation: "Principal, Private Client Practice",
    date: "June 2026",
    practiceArea: "Private Client",
    jurisdiction: "Global / Cross-Border",
    readingTime: "5 min read",
    category: "Cross-Border",
    tags: ["Cross-Border", "Real Estate", "Thought Leadership"]
  }
];

export const careerFilters = {
  locations: ["All", "India", "UAE", "Thailand", "International"],
  practices: [
    "All",
    "Legal",
    "Corporate",
    "Litigation",
    "Contracts",
    "Operations",
    "Business Development",
    "Technology"
  ],
  experiences: ["All", "Entry", "Mid-level", "Senior", "Leadership"]
};

export const careerOpenings = [
  {
    id: "job-1",
    position: "Senior Associate — Cross-Border Corporate & M&A",
    location: "UAE",
    practice: "Corporate",
    experience: "Senior",
    type: "Full-Time • Dubai Office / Hybrid",
    description: "Seeking an experienced corporate attorney with 6-8 years PQE advising on cross-border venture deals, Free Zone corporate structuring, and commercial contracts.",
    qualifications: "Dual-qualified (Bar Council of India / English Bar or DIFC registered) preferred. Proven experience with institutional PE/VC transactions."
  },
  {
    id: "job-2",
    position: "Litigation & Dispute Resolution Counsel",
    location: "India",
    practice: "Litigation",
    experience: "Mid-level",
    type: "Full-Time • Kolkata / Delhi Chambers",
    description: "Focus on commercial suits before the High Courts, NCLT proceedings, and section 11/34 applications under the Arbitration Act.",
    qualifications: "4-6 years PQE in trial and appellate advocacy. Outstanding legal research and drafting fundamentals."
  },
  {
    id: "job-3",
    position: "Contracts & Infrastructure Specialist",
    location: "India",
    practice: "Contracts",
    experience: "Mid-level",
    type: "Full-Time • Mumbai Hub",
    description: "Advising infrastructure developers, EPC contractors, and concessionaires on project documentation, tenders, and concession agreements.",
    qualifications: "3-5 years PQE with specialized expertise in standard FIDIC suites and infrastructure statutory frameworks."
  },
  {
    id: "job-4",
    position: "Practice Operations & International Client Liaison",
    location: "UAE",
    practice: "Operations",
    experience: "Mid-level",
    type: "Full-Time • Dubai",
    description: "Overseeing multijurisdictional workflow execution, client onboarding KYC compliance, and court registry docket synchronization.",
    qualifications: "Strong background in legal ops or legal executive administration within an international or multinational law firm."
  },
  {
    id: "job-5",
    position: "ASEAN Regional Legal Associate",
    location: "Thailand",
    practice: "Legal",
    experience: "Senior",
    type: "Full-Time • Bangkok",
    description: "Leading regional client advisory for inward investment from India and the Middle East into Thailand and ASEAN markets.",
    qualifications: "5+ years PQE with background in cross-border trade, FDI, and international commercial arbitration."
  }
];

export const contactLocations = [
  {
    id: "india",
    label: "INDIA",
    headline: "Central Chambers & Regional Metros",
    address: "Kshetry & Co. House, Chambers Row, Legal District, Kolkata & Barakhamba Road, Connaught Place, New Delhi",
    phone: "+91 (0) 33 22XX XXXX / +91 (0) 11 41XX XXXX [Demo Placeholder]",
    generalEmail: "contact.india@kshetrylaw.demo",
    legalEmail: "counsel.in@kshetrylaw.demo",
    hrEmail: "careers.india@kshetrylaw.demo",
    hours: "Monday – Friday: 09:30 – 18:30 IST | Saturday: By Prior Consultation",
    jurisdictionScope: "Supreme Court of India, State High Courts, NCLAT, CCI & National Arbitral Tribunals"
  },
  {
    id: "uae",
    label: "UAE",
    headline: "Gulf & Middle East Practice Hub",
    address: "Level 18, Commercial Tower One, Sheikh Zayed Road & DIFC Gateway District, Dubai, UAE",
    phone: "+971 4 3XX XXXX [Demo Placeholder]",
    generalEmail: "contact.dubai@kshetrylaw.demo",
    legalEmail: "counsel.uae@kshetrylaw.demo",
    hrEmail: "careers.middleeast@kshetrylaw.demo",
    hours: "Monday – Friday: 09:00 – 18:00 GST",
    jurisdictionScope: "DIFC Courts, ADGM, UAE Mainland & GCC Commercial Free Zones"
  },
  {
    id: "uk",
    label: "UK",
    headline: "European & Common Law Liaison",
    address: "Temple Chambers, Fleet Street Corridor, London EC4Y, United Kingdom",
    phone: "+44 20 79XX XXXX [Demo Placeholder]",
    generalEmail: "contact.london@kshetrylaw.demo",
    legalEmail: "counsel.uk@kshetrylaw.demo",
    hrEmail: "careers.europe@kshetrylaw.demo",
    hours: "Monday – Friday: 09:00 – 17:30 GMT",
    jurisdictionScope: "LCIA International Arbitration, English Commercial Court Liaison & Inward UK Investment"
  },
  {
    id: "usa",
    label: "USA",
    headline: "Transatlantic & North America Desk",
    address: "Midtown Legal Plaza, Avenue of the Americas, New York, NY 10020, United States",
    phone: "+1 212 5XX XXXX [Demo Placeholder]",
    generalEmail: "contact.ny@kshetrylaw.demo",
    legalEmail: "counsel.us@kshetrylaw.demo",
    hrEmail: "careers.americas@kshetrylaw.demo",
    hours: "Monday – Friday: 09:00 – 17:00 EST",
    jurisdictionScope: "Delaware Corporate Entities, Federal Regulatory Filings & US-India Investment Desks"
  },
  {
    id: "thailand",
    label: "THAILAND",
    headline: "Southeast Asia & ASEAN Desk",
    address: "Sathorn Square Office Tower, North Sathorn Road, Silom, Bangrak, Bangkok 10500, Thailand",
    phone: "+66 2 1XX XXXX [Demo Placeholder]",
    generalEmail: "contact.bangkok@kshetrylaw.demo",
    legalEmail: "counsel.asean@kshetrylaw.demo",
    hrEmail: "careers.asean@kshetrylaw.demo",
    hours: "Monday – Friday: 09:00 – 17:30 ICT",
    jurisdictionScope: "Board of Investment (BOI) Approvals, ASEAN Market Entry & Cross-Border Joint Ventures"
  }
];

export const practiceAreaDropdownOptions = [
  "Corporate & Commercial Advisory",
  "Cross-Border Transactions & Investments",
  "Real Estate, Construction & Infrastructure",
  "Contracts & Commercial Agreements",
  "Litigation, Arbitration & Dispute Resolution",
  "UAE & GCC Business Advisory",
  "Regulatory, Compliance & Corporate Governance",
  "International Business & Market Entry",
  "Employment, Immigration & Mobility",
  "Intellectual Property, Technology & Cyber Law",
  "Tax, Financial & Regulatory Advisory",
  "Private Client, NRI & Family Business Advisory",
  "General Multi-Jurisdictional Query"
];
