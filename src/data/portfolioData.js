export const PERSONAL_INFO = {
  name: "C R MOHUL RAM",
  shortName: "MOHUL.",
  initials: "CR",
  headline: "BUILDING IDEAS INTO DIGITAL EXPERIENCES.",
  subheadline:
    "Computer Science Engineering student building full-stack applications, AI-powered systems and experimental digital products.",
  role: "Computer Science Engineering Student | Full Stack Developer | AI/ML & Biomedical DSP | Aspiring Software Engineer",
  location: "Tamil Nadu, India",
  timezone: "IST (UTC+5:30)",
  email: "mohulram07@gmail.com",
  phone: "+91 6381761164",
  phoneFormatted: "+91 63817 61164",
  github: "https://github.com/mohul-inventions",
  githubUsername: "mohul-inventions",
  linkedin: "https://linkedin.com/in/c-r-mohul-ram-a373823ab",
  linkedinDisplay: "linkedin.com/in/c-r-mohul-ram-a373823ab",
  youtube: "https://youtube.com/@mohulram-u3r?si=Lx59Lr80ZQ2HGbM0",
  education: {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Nagercoil Campus",
    year: "Undergraduate (2025 – 2029)",
    status: "Currently Pursuing"
  },
  status: "OPEN FOR OPPORTUNITIES",
  availability: "Available for Hackathons, Internships & Software Projects",
  metaTags: ["CSE", "Full Stack", "TypeScript", "AI/ML", "Biomedical DSP", "Multi-Agent Systems"]
};

export const STATS = [
  {
    number: "02+",
    label: "Years of Engineering Journey",
    sublabel: "Dedicated core CS & software development"
  },
  {
    number: "36+",
    label: "Public GitHub Repositories",
    sublabel: "Biomedical DSP, multi-agents, AI & full-stack"
  },
  {
    number: "10+",
    label: "Hackathons & Sprints",
    sublabel: "Built high-stakes systems under pressure"
  },
  {
    number: "∞",
    label: "Ideas to Build",
    sublabel: "Relentless curiosity & execution"
  }
];

export const TECH_STACK = {
  languages: [
    { name: "Java", level: "Proficient", icon: "Coffee", note: "NPTEL Elite Gold" },
    { name: "TypeScript", level: "Proficient", icon: "Code2", note: "Type-Safe Full Stack" },
    { name: "Python", level: "Proficient / ML", icon: "Terminal", note: "SciPy, Streamlit, YOLOv8" },
    { name: "JavaScript", level: "Proficient", icon: "Code2", note: "ES6+, Async, React" },
    { name: "C / C++", level: "Algorithms", icon: "Boxes", note: "OOP & Data Structures" }
  ],
  frontend: [
    { name: "React", level: "Proficient", icon: "Atom", note: "Hooks, SPA, State" },
    { name: "TypeScript", level: "Advanced", icon: "Code2", note: "Strict Typing, Interfaces" },
    { name: "Tailwind CSS", level: "Proficient", icon: "Wind", note: "Modern Utility-First" },
    { name: "HTML5 / CSS3", level: "Advanced", icon: "Layout", note: "Semantic Structure & FX" },
    { name: "Vite", level: "Proficient", icon: "Zap", note: "Fast Build Tooling" }
  ],
  backend: [
    { name: "Node.js", level: "Proficient", icon: "Server", note: "Express, REST APIs, Auth" },
    { name: "FastAPI", level: "Proficient", icon: "Terminal", note: "Python Async Microservices" },
    { name: "Prisma ORM", level: "Proficient", icon: "Layers", note: "Type-Safe DB Client" },
    { name: "PostgreSQL / SQLite", level: "Proficient", icon: "Database", note: "Relational Schemas" },
    { name: "MongoDB", level: "Proficient", icon: "Database", note: "NoSQL, Mongoose" },
    { name: "MySQL", level: "Proficient", icon: "HardDrive", note: "ACID Transactions, Stored Procs" }
  ],
  tools: [
    { name: "Git", level: "Essential", icon: "GitBranch", note: "Version Control" },
    { name: "GitHub", level: "Workflow", icon: "Github", note: "36+ Public Repos & CI" },
    { name: "Android Phyphox", level: "Telemetry", icon: "Activity", note: "Sensor Data Telemetry" },
    { name: "Docker", level: "Containers", icon: "Boxes", note: "Containerized Workflows" },
    { name: "Vercel", level: "Deployment", icon: "Cloud", note: "Edge Hosting & CI/CD" }
  ],
  concepts: [
    { name: "Multi-Agent Systems", level: "Advanced", icon: "Network", note: "Autonomous Agent Grids" },
    { name: "Biomedical DSP", level: "Core", icon: "Activity", note: "Chest Excursions, SQI" },
    { name: "Priority Queues (Binary Max-Heap)", level: "Core", icon: "Binary", note: "O(log n) Emergency Triage" },
    { name: "Computer Vision", level: "Core", icon: "Eye", note: "YOLOv8 & OpenCV Detection" },
    { name: "Object-Oriented Programming", level: "Core", icon: "Component", note: "Design Patterns, Clean OOP" }
  ]
};

export const FEATURED_PROJECTS = [
  {
    id: "respirasense-ai",
    number: "01",
    title: "RespiraSense AI",
    subtitle: "Biomedical Respiratory Signal Telemetry & DSP Platform",
    category: "Biomedical DSP & AI",
    technologies: ["Python", "SciPy", "Streamlit", "Android Phyphox", "TypeScript"],
    description:
      "Smartphone-assisted non-invasive respiratory telemetry estimating breathing patterns from chest motion micro-accelerations and angular rates.",
    detailedOverview:
      "RespiraSense AI is a full-stack biomedical engineering prototype designed for non-invasive respiratory telemetry. By analyzing triaxial micro-accelerations and angular rates captured from an Android smartphone resting on a subject's sternum via Android Phyphox over Wi-Fi/Hotspot (port 8080), RespiraSense AI isolates periodic chest-wall excursions, assesses Signal Quality Index (SQI), and identifies movement and cough interference with strict acoustic gating (>250 Hz). Complete with an 8-step activity-aware decision engine to prevent exertion misclassification, a journal manuscript package, and 17 passing automated verification tests.",
    features: [
      "Non-invasive respiratory telemetry using Android Phyphox micro-accelerations",
      "Signal Quality Index (SQI) and automated movement artifact rejection",
      "Strict acoustic cough detection (>250 Hz) and transient blast gating",
      "8-step activity-aware decision engine preventing exertion misclassification",
      "Complete research manuscript package and 17 automated verification tests"
    ],
    repository: "respirasense-AI",
    githubUrl: "https://github.com/mohul-inventions/respirasense-AI",
    accentColor: "from-rose-500/20 to-orange-500/10",
    badge: "Biomedical Engineering Build",
    systemStats: {
      telemetry: "Phyphox Android Accelerometer (8080/TCP)",
      dspEngine: "SciPy Butterworth Filtering & Peak Counting",
      sqiGating: "Dynamic Thresholding & Artifact Suppression",
      testSuite: "17 Automated Verification Cases (100% Pass)"
    }
  },
  {
    id: "aran",
    number: "02",
    title: "ARAN",
    subtitle: "Autonomous Multi-Agent Climate Disaster Response Coordination Grid",
    category: "Multi-Agent Systems & GIS",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Leaflet", "Framer Motion"],
    description:
      "Decentralized multi-agent coordination grid for high-stakes climate emergency triage, flash floods, and disaster response.",
    detailedOverview:
      "Developed under Team NaalvarX, ARAN is an autonomous multi-agent disaster response coordination grid built for climate emergency triage (flash floods, cyclones, building collapses). Powered by 7 specialized autonomous agents—Signal Intel (LoRa mesh 868MHz + Tamil/English NLP), Geo Intel (GIS elevation & flood polygons), Distress Fusion (DBSCAN spatio-temporal clustering), Criticality Assessment (dynamic medical triage 0-100), Resource Orchestration (Hungarian algorithm matching), Route Intelligence (hazard-aware pathfinding), and Resilience & Sync (CRDT state replication & LoRa gossip). Includes tactical basemap and live crisis simulation.",
    features: [
      "7 Specialized Autonomous Agents coordinating triage and resource allocation",
      "Sub-GHz LoRa mesh telemetry simulation with Tamil/English NLP signal parsing",
      "Spatial GIS hazard-aware pathfinding avoiding submerged bridges and hazards",
      "Offline-first CRDT state replication with peer-to-peer gossip synchronization",
      "Full-screen tactical command center with live disaster crisis simulation"
    ],
    repository: "aran",
    githubUrl: "https://github.com/mohul-inventions/aran",
    liveDemo: "https://aran-ten.vercel.app/",
    accentColor: "from-amber-500/20 to-yellow-500/10",
    badge: "Multi-Agent Tactical Grid",
    systemStats: {
      agents: "7 Autonomous Agents (Signal, Geo, Fusion, Triage, Resource, Route, Sync)",
      meshProtocol: "LoRa 868MHz / Offline CRDT State Sync",
      spatialEngine: "Leaflet GIS & DBSCAN Spatio-temporal Clustering",
      deployment: "Vercel Edge (aran-ten.vercel.app)"
    }
  },
  {
    id: "smart-traffic",
    number: "03",
    title: "AI-Based Smart Traffic System",
    subtitle: "Computer Vision & Autonomous Signal Optimization",
    category: "AI / Computer Vision",
    technologies: ["Python", "OpenCV", "YOLOv8"],
    description:
      "An AI-based traffic monitoring and signal optimization system designed to analyze road traffic and improve traffic flow and safety.",
    detailedOverview:
      "Engineered to tackle severe urban gridlocks, this system leverages YOLOv8 real-time object detection models to accurately identify vehicles, categorize classes (cars, buses, trucks, motorcycles, ambulances), evaluate lane density dynamically, and intelligently adjust signal timings while granting immediate preemptive priority to approaching emergency vehicles.",
    features: [
      "Real-time vehicle detection & multi-class classification",
      "Dynamic traffic density estimation per intersection lane",
      "Adaptive signal timing algorithm based on real-time vehicle queueing",
      "Automated ambulance priority detection for uninterrupted emergency transit",
      "Traffic flow optimization designed to minimize intersection bottleneck delays"
    ],
    repository: "AI-based-Smart-Traffic-System",
    githubUrl: "https://github.com/mohul-inventions/AI-based-Smart-Traffic-System",
    accentColor: "from-amber-500/20 to-orange-500/10",
    badge: "Featured AI Project",
    systemStats: {
      model: "YOLOv8 Object Detection",
      latency: "~28ms inference",
      classes: "Cars, Trucks, Buses, Ambulances, Bikes",
      pipeline: "Frame Capture → Tensor Preprocessing → Inference → Signal State"
    }
  },
  {
    id: "needbridge",
    number: "04",
    title: "NEEDBRIDGE",
    subtitle: "Multi-Agent Collective Demand Intelligence & Procurement Network",
    category: "FinTech & Multi-Agent Network",
    technologies: ["React 19", "TypeScript", "Python FastAPI", "Tailwind CSS", "PostgreSQL"],
    description:
      "Enterprise multi-agent collective purchasing network aggregating fragmented demand into high-volume institutional discount campaigns.",
    detailedOverview:
      "NEEDBRIDGE is an AI-powered collective procurement platform that aggregates fragmented purchasing requirements across institutions, non-profits, and buyers into high-volume collective campaigns with verified institutional discounts. Engineered with 7 specialized AI agents (Demand Intelligence, Community Discovery, Procurement Optimization, Alternative Product, Financial Intelligence, Risk & Trust, Procurement Coordinator), a FastAPI async backend with 19 relational tables, JWT authentication, and a PayPal Sandbox escrow workflow with cryptographic transaction ledgers.",
    features: [
      "7 Specialized AI Agents orchestrating demand aggregation & trust scoring",
      "FastAPI async backend structured across 19 relational database tables",
      "PayPal Sandbox escrow authorization workflow & transaction ledger",
      "Collective campaign lifecycle management with volume milestone pricing",
      "Clean React 19 / Tailwind CSS v4 dashboard with live campaign analytics"
    ],
    repository: "needbridge",
    githubUrl: "https://github.com/mohul-inventions/needbridge",
    liveDemo: "https://needbridge-sigma.vercel.app/",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badge: "FinTech Multi-Agent Build",
    systemStats: {
      backend: "Python FastAPI Async Engine (19 Relational Tables)",
      agents: "7 Multi-Agent Procurement Nodes",
      escrow: "PayPal Sandbox API & Cryptographic Ledger",
      deployment: "Vercel Edge (needbridge-sigma.vercel.app)"
    }
  },
  {
    id: "brandguard-ai",
    number: "05",
    title: "BrandGuard AI",
    subtitle: "Intelligent Brand Governance & Content Compliance Platform",
    category: "Enterprise AI & Compliance",
    technologies: ["React", "TypeScript", "Node.js", "Prisma ORM", "Vector RAG"],
    description:
      "Real-time compliance scanner before publication against corporate guidelines, ground-truth facts, and disclaimers.",
    detailedOverview:
      "Built for the CodeStar 30 Hackathon — Round 3 Final Submission (Inkloom AI challenge) as author and solo builder. BrandGuard AI provides real-time compliance scanning for digital content prior to publication against corporate guidelines, ground-truth facts, tone rules, and regulatory disclaimers. Features a Chrome Extension (Manifest V3) for in-situ scanning in Google Docs, WordPress Gutenberg, and LinkedIn, Semantic RAG using 128-dimensional vector embeddings with cosine similarity, CMS pre-publish webhook gates (Strapi, HubSpot, Contentful), and a dual-layer review architecture combining deterministic regex with LLM adapters.",
    features: [
      "Chrome Extension (Manifest V3) for in-situ scanning in Docs, WordPress, LinkedIn",
      "Semantic RAG engine using 128-dimensional vector embeddings & cosine similarity",
      "CMS pre-publish webhook gates for Strapi, HubSpot, and Contentful with HMAC signatures",
      "Dual-layer review architecture: deterministic offline rules + LLM verification adapters",
      "Full-stack dashboard with Prisma ORM, SQLite/PostgreSQL, and Docker Compose"
    ],
    repository: "brandguard-ai",
    githubUrl: "https://github.com/mohul-inventions/brandguard-ai",
    accentColor: "from-purple-500/20 to-violet-500/10",
    badge: "CodeStar 30 Hackathon Build",
    systemStats: {
      hackathon: "CodeStar 30 — Round 3 Final Submission",
      extension: "Chrome Manifest V3 (Google Docs, WordPress)",
      semanticRAG: "128-dim Vector Embeddings + Cosine Similarity",
      orm: "Prisma 5.22 / SQLite / PostgreSQL / Docker"
    }
  },
  {
    id: "emergency-dispatch",
    number: "06",
    title: "A.E.G.I.S. Dispatch Center",
    subtitle: "Real-Time Binary Max-Heap Priority Queue Emergency Response Dashboard",
    category: "Algorithms & Emergency Systems",
    technologies: ["JavaScript", "HTML5", "CSS3", "Python Streamlit", "Web Audio API"],
    description:
      "Smart ambulance dispatch system overcoming FIFO delays with custom Binary Max-Heap priority queues and NLP auto-triage.",
    detailedOverview:
      "A.E.G.I.S. is an emergency dispatch and command center system engineered to overcome traditional First-Come-First-Served ambulance dispatching bottlenecks. Utilizes a custom Binary Max-Heap class achieving O(log n) insertion and extraction with O(1) peek operations and strict chronological FIFO tie-breaking for equal severity calls. Complemented by an NLP Auto-Triage Engine in Python Streamlit that parses plain-text caller transcripts with fuzzy string matching to auto-categorize 5 critical urgency tiers, presented in a cyberpunk tactical glassmorphism HUD with Web Audio API alert sound synthesizers.",
    features: [
      "Custom Binary Max-Heap achieving O(log n) queue operations & O(1) peek",
      "Strict chronological FIFO tie-breaking preserving fair dispatch order",
      "NLP Auto-Triage Engine parsing caller distress transcripts with fuzzy matching",
      "Procedural Web Audio API sound synthesizers for emergency alert klaxons",
      "Interactive incoming emergency simulator with live telemetry metrics"
    ],
    repository: "emergency-dispatch-command-center",
    githubUrl: "https://github.com/mohul-inventions/emergency-dispatch-command-center",
    accentColor: "from-red-500/20 to-amber-500/10",
    badge: "Core Algorithms & DSA Project",
    systemStats: {
      queueType: "Binary Max-Heap with Chronological Tie-Breaking",
      complexity: "O(log n) Insert/Extract, O(1) Peek",
      nlpTriage: "Python Streamlit Fuzzy Matching (5 Urgency Tiers)",
      audioEngine: "Procedural Web Audio API Synthesizers"
    }
  },
  {
    id: "make-insure",
    number: "07",
    title: "Make Insure",
    subtitle: "AI Insurance Claim Audit Platform & Policy Management",
    category: "Full Stack & Azure AI",
    technologies: ["React", "Node.js", "Azure Document Intelligence", "MongoDB"],
    description:
      "Full-stack insurance management and AI claim auditing platform built for the GitHub DevDays Hackathon.",
    detailedOverview:
      "Built and enhanced for the GitHub DevDays Hackathon (Make-Insure-New), this platform automates claims triage and policy management. Integrates Microsoft Azure Document Intelligence SDK for deep optical document analysis, metadata fraud scanning, and dynamic price gouging detection, coupled with modular vehicle and health insurance tier engines and authenticated claim workflows.",
    features: [
      "AI claims auditing with Azure Document Intelligence document parsing",
      "Metadata manipulation detection and price-gouging flagging",
      "Modular vehicle and health insurance policy engines",
      "Dynamic real-time premium calculation and claim lifecycle tracking",
      "Secure REST backend built with Node.js, Express, and MongoDB"
    ],
    repository: "Make-Insure / Make-Insure-New",
    githubUrl: "https://github.com/mohul-inventions/Make-Insure-New",
    accentColor: "from-teal-500/20 to-emerald-500/10",
    badge: "GitHub DevDays Build",
    systemStats: {
      aiIntegration: "Azure Document Intelligence SDK",
      stack: "MERN Stack (React + Node + Express + MongoDB)",
      verification: "Image Metadata & Price-Gouging Triage",
      context: "GitHub DevDays Hackathon"
    }
  },
  {
    id: "project-aura",
    number: "08",
    title: "Project-AURA",
    subtitle: "Atmospheric Dynamic User Experience & Interactive Engine",
    category: "Interactive Systems / UI",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    description:
      "An atmospheric digital interface experiment exploring dynamic ambient luminance, kinetic spring mechanics, responsive states, and modern aesthetic design systems.",
    detailedOverview:
      "Engineered to explore the intersection of creative frontend engineering and performance, Project-AURA investigates fluid spatial layouts, reactive lighting shaders, tactile micro-interactions, and state management architectures without compromising frame rates or accessibility.",
    features: [
      "Dynamic ambient luminance & reactive lighting effects",
      "Physics-based spring motion animations and tactile feedback",
      "Modular component system with clean architectural boundaries",
      "Responsive multi-device viewport scaling and 60fps performance"
    ],
    repository: "Project-AURA",
    githubUrl: "https://github.com/mohul-inventions/Project-AURA",
    accentColor: "from-amber-400/20 to-violet-500/10",
    badge: "Interactive UI Engine",
    systemStats: {
      rendering: "Hardware-accelerated CSS GPU Layers",
      physics: "Spring Dynamics & Kinetic Interpolation",
      architecture: "Modular Design Token System",
      framerate: "60 FPS Smooth Rendering"
    }
  }
];

export const ADDITIONAL_PROJECTS = [
  {
    name: "Transit Tracker",
    tech: "HTML5 / CSS3 / JavaScript",
    category: "Civic Tech & Safety",
    description: "Transportation and road-safety monitoring project built for the prestigious IIT Madras Road Safety Hackathon.",
    repo: "Transit-Tracker",
    githubUrl: "https://github.com/mohul-inventions/Transit-Tracker",
    badge: "IIT Madras Hackathon"
  },
  {
    name: "CampusTrack",
    tech: "React / Node.js / MySQL 8.0",
    category: "DBMS Capstone",
    description: "Campus lost and found platform with normalized relational schema, stored procedures, ACID transactions, and row-level locking.",
    repo: "Campus-Track",
    githubUrl: "https://github.com/mohul-inventions/Campus-Track"
  },
  {
    name: "NEXORA AI",
    tech: "React / Vite / Tailwind CSS / Python",
    category: "Smart Campus & AI",
    description: "Modern smart campus web platform featuring AI student assistant, HVAC microgrid balancing telemetry, and safety alerts.",
    repo: "nexora-ai",
    githubUrl: "https://github.com/mohul-inventions/nexora-ai",
    liveDemo: "https://nexora-ai-mr1487.vercel.app/"
  },
  {
    name: "Crop Production Prediction in India",
    tech: "Python / Scikit-learn / Pandas",
    category: "Machine Learning",
    description: "Predictive ML modeling of agricultural crop yields across Indian states using Random Forest Regressor and meteorological metrics.",
    repo: "Prediction-of-Agriculture-Crop-Production-in-India",
    githubUrl: "https://github.com/mohul-inventions/Prediction-of-Agriculture-Crop-Production-in-India"
  },
  {
    name: "MemoryVerse AI",
    tech: "JavaScript / Algorithmic Recall",
    category: "Cognitive AI Tools",
    description: "Cognitive memory retention and thematic verse exploration tool utilizing active recall mechanisms.",
    repo: "Memoryverse-AI",
    githubUrl: "https://github.com/mohul-inventions/Memoryverse-AI"
  },
  {
    name: "Run, Bro, Run! 💀",
    tech: "JavaScript / HTML5 Canvas",
    category: "Interactive Gaming",
    description: "Fast-paced 2D/pseudo-3D arcade endless runner browser game with procedural obstacles and collision physics.",
    repo: "run-bro-run",
    githubUrl: "https://github.com/mohul-inventions/run-bro-run"
  },
  {
    name: "Ambulance Command Center (Python)",
    tech: "Python / Streamlit / NLP",
    category: "Emergency Systems",
    description: "NLP auto-triage emergency dispatch console with fuzzy string matching and priority queue tier assignment.",
    repo: "Ambulance-Command-Center",
    githubUrl: "https://github.com/mohul-inventions/Ambulance-Command-Center"
  },
  {
    name: "Student Management System",
    tech: "JavaScript / CRUD Architecture",
    category: "Information Systems",
    description: "Academic records administration project handling student enrollment, metric tracking, and query dossiers.",
    repo: "Student-Management-System",
    githubUrl: "https://github.com/mohul-inventions/Student-Management-System"
  },
  {
    name: "TruthLens AI",
    tech: "Next.js / AI / Cybersecurity",
    category: "Cybersecurity & AI",
    description: "Advanced cybersecurity verification and digital evidence investigation platform to combat synthetic media.",
    repo: "truth_lens",
    githubUrl: "https://github.com/kalakonda-akshay/truth_lens",
    liveDemo: "https://truthlens-5us5u9y4m-kalakonda-akshays-projects.vercel.app/",
    badge: "CRAFT Collaborative Build"
  },
  {
    name: "OmniSafe-Edu",
    tech: "TypeScript / Web APIs",
    category: "Campus Safety",
    description: "Educational institution emergency broadcast and campus safety alert portal.",
    repo: "OmniSafe-Edu",
    githubUrl: "https://github.com/mohul-inventions/OmniSafe-Edu"
  },
  {
    name: "Kiddo",
    tech: "HTML5 / CSS3 / JavaScript",
    category: "Interactive EdTech",
    description: "Interactive early-learning educational web application designed for young learners.",
    repo: "kiddo",
    githubUrl: "https://github.com/mohul-inventions/kiddo"
  },
  {
    name: "Blog-App",
    tech: "React / Node.js / Express",
    category: "Web Application",
    description: "Full-featured publishing application with markdown content rendering and REST APIs.",
    repo: "Blog-App",
    githubUrl: "https://github.com/mohul-inventions/Blog-App"
  },
  {
    name: "E-Commerce-App",
    tech: "React / JavaScript / CSS3",
    category: "Commerce",
    description: "Online storefront application featuring dynamic catalog filtering, search, and cart state.",
    repo: "E-Commerce-App",
    githubUrl: "https://github.com/mohul-inventions/E-Commerce-App"
  },
  {
    name: "Task-Manager",
    tech: "JavaScript / Local Storage",
    category: "Productivity",
    description: "Productivity tool for task prioritization, state tracking, and deadlines (ISC License).",
    repo: "Task-Manager",
    githubUrl: "https://github.com/mohul-inventions/Task-Manager"
  },
  {
    name: "EduTrack OOP Mini Project",
    tech: "Java / OOP Architecture",
    category: "Object-Oriented",
    description: "Academic progress tracking application emphasizing clean object-oriented design patterns.",
    repo: "EduTrack-oops-miniproject",
    githubUrl: "https://github.com/mohul-inventions/EduTrack-oops-miniproject"
  },
  {
    name: "Library Management System",
    tech: "Java / MySQL & C++",
    category: "Database Systems",
    description: "Book inventory and loan tracker implementing relational database schemas and C++ console ports.",
    repo: "Library-Management-System-C-",
    githubUrl: "https://github.com/mohul-inventions/Library-Management-System-C-"
  },
  {
    name: "Bank Management App",
    tech: "C++ / OOP Principles",
    category: "Core Systems",
    description: "Console/GUI banking transaction simulator with balance ledgers and account structures.",
    repo: "Bank-Management-App-C-",
    githubUrl: "https://github.com/mohul-inventions/Bank-Management-App-C-"
  },
  {
    name: "Mini Game Project",
    tech: "C++ / JavaScript",
    category: "Interactive",
    description: "Interactive browser and console game focusing on loop optimization and collisions.",
    repo: "Mini-Game-Project-C-",
    githubUrl: "https://github.com/mohul-inventions/Mini-Game-Project-C-"
  },
  {
    name: "Amrita Campus Website Mini Project",
    tech: "HTML5 / CSS3 / JavaScript",
    category: "Web Mini-Project",
    description: "Amrita Nagercoil Campus responsive web design project.",
    repo: "amrita-website-mini-project",
    githubUrl: "https://github.com/mohul-inventions/amrita-website-mini-project"
  },
  {
    name: "Internship Board & REST API",
    tech: "HTML5 / JavaScript / Node.js",
    category: "Web Services",
    description: "Responsive internship opportunities board powered by a custom REST API backend.",
    repo: "responsive-internship-board",
    githubUrl: "https://github.com/mohul-inventions/responsive-internship-board"
  }
];

export const HACKATHONS = [
  {
    id: "medathon-2026",
    title: "MED-AI-thon ’26 (50h National MedTech Makeathon)",
    organizer: "R Shivakumar Foundation & StartupTN · Trichy SRM Medical College",
    status: "🏆 Grand Finale Prize Winner",
    badgeType: "winner",
    year: "2026",
    highlight: "Grand Finale Prize Winner with Team COGNYX; built Self-Healing Medication Administration Record (Software track PS2), advancing from Top 50 nationwide through Top 10 to Grand Finale victory",
    category: "National MedTech Makeathon"
  },
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    organizer: "Govt. of India / MoE",
    status: "Shortlisted",
    badgeType: "shortlisted",
    year: "2025",
    highlight: "Nationwide innovation initiative solving real-world civic challenges",
    category: "National Hackathon"
  },
  {
    id: "iris-27-iitm",
    title: "IRIS 27 — International Conference on Computer Vision",
    organizer: "IIT Madras",
    status: "Call for Papers",
    badgeType: "participant",
    year: "2026",
    highlight: "Participated in Call for Papers research presentation on computer vision architectures (Team Sumoh)",
    category: "International Research Conference"
  },
  {
    id: "hack-hustle",
    title: "Hack Hustle 2.0",
    organizer: "Saveetha Engineering College (SEC), Chennai",
    status: "Shortlisted & Participant",
    badgeType: "shortlisted",
    year: "2026",
    highlight: "24-hour offline innovation marathon; shortlisted to pitch and build live prototype solutions in Fintech, Logistics, and Healthcare domains",
    category: "Offline 24h Hackathon"
  },
  {
    id: "ggits-devdays",
    title: "GitHub DevDays Hackathon",
    organizer: "Gyan Ganga Institute of Tech & Sciences",
    status: "Shortlisted & Participant",
    badgeType: "shortlisted",
    year: "2026",
    highlight: "Open-source toolchains and developer ecosystem sprint; shortlisted and participated in high-velocity challenge",
    category: "Open Source Hackathon"
  },
  {
    id: "iitm-road-safety",
    title: "Road Safety Hackathon",
    organizer: "IIT Madras",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Built Transit Tracker tackling transport safety, road hazards, and commuter routing",
    category: "Safety & Mobility"
  },
  {
    id: "nit-trichy",
    title: "ThinkRoot × Vortex ’26",
    organizer: "NIT Trichy",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "High-intensity technical challenge and algorithmic hackathon",
    category: "Technical Event"
  },
  {
    id: "hackxpertise",
    title: "HackXpertise 3.0",
    organizer: "VIT / Technical Forum",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Flagship competitive hackathon building rapid product prototypes under time pressure",
    category: "Hackathon"
  },
  {
    id: "iit-mandi",
    title: "Data Science Contest",
    organizer: "IIT Mandi",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Exploratory data analysis and predictive pattern evaluation",
    category: "Technical Event"
  },
  {
    id: "psg-hack",
    title: "PSG Hackathon",
    organizer: "PSG Institutions",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Prototyping software solutions for regional community and industry challenges",
    category: "Hackathon"
  },
  {
    id: "thoothukudi-hack",
    title: "Thoothukudi Hackathon",
    organizer: "District Technology Forum",
    status: "Participant",
    badgeType: "participant",
    year: "2025",
    highlight: "Rapid technological prototyping sprint focused on localized solutions",
    category: "Hackathon"
  },
  {
    id: "codestar-30",
    title: "CodeStar 30 Hackathon",
    organizer: "Inkloom AI / Tech Challenge",
    status: "Round 3 Finalist",
    badgeType: "shortlisted",
    year: "2026",
    highlight: "Built BrandGuard AI — intelligent brand governance and compliance platform with Chrome Extension and semantic vector RAG",
    category: "AI & Innovation Sprint"
  },
  {
    id: "psna-ideathon",
    title: "PSNA College Ideathon Arena",
    organizer: "PSNA College of Engg & Tech",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Ideation, technical feasibility pitch, and engineering architecture defense",
    category: "Ideathon"
  }
];

export const CERTIFICATIONS = [
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL / IIT Kharagpur",
    grade: "Elite Gold — 92%",
    status: "Verified Credential",
    featured: true,
    accent: "gold",
    description:
      "Prestigious Elite Gold certification signifying top-tier mastery in Java, JVM architecture, multithreading, collections framework, and OOP principles."
  },
  {
    id: "hindi-praveen",
    title: "Hindi Course – Praveen Poorvardh",
    issuer: "Dakshina Bharat Hindi Prachar Sabha",
    grade: "Completed",
    status: "Certified",
    featured: false,
    accent: "silver",
    description:
      "Advanced linguistic qualification reflecting multilingual proficiency, dedication, and cultural fluency."
  }
];

export const CLUB_AFFILIATION = {
  clubName: "CRAFT",
  fullName: "Council for Real-world Applications & Future Tech",
  department: "Department of Computer Science and Engineering",
  institution: "Amrita Vishwa Vidyapeetham, Nagercoil Campus",
  role: "Operations & Logistics Coordinator",
  memberId: "NC.SC.U4CSE25012",
  passId: "CLB-20260724-7758",
  since: "2026",
  website: "https://craft.ncamrita.in/",
  focus: "Event Operations & Member Support",
  quote: "Ensures smooth execution of every CRAFT event from planning to wrap-up. Manages logistics, supports event execution, and keeps member operations running smoothly.",
  skills: ["Coordination", "Logistics", "Teamwork", "Event Operations"]
};

export const JOURNEY = [
  {
    period: "2026",
    title: "MED-AI-thon ’26 — Grand Finale Prize Winner 🏆",
    institution: "R Shivakumar Foundation & StartupTN · Trichy SRM Medical College",
    role: "Team Lead & Builder — Team COGNYX",
    description:
      "Clinched Grand Finale Prize victory in a grueling 50-Hour National MedTech Makeathon with Team COGNYX representing Amrita Vishwa Vidyapeetham. Engineered the Self-Healing Medication Administration Record (MAR) software system, progressing from Top 50 nationwide through Top 10 to final prize recognition.",
    focusAreas: ["MedTech Engineering", "Healthcare Software", "50h Crucible Sprint", "Team Leadership"]
  },
  {
    period: "2026 — PRESENT",
    title: "Operations & Logistics Coordinator — CRAFT Club",
    institution: "Council for Real-world Applications & Future Tech · Amrita Vishwa Vidyapeetham",
    role: "Core Operations Coordinator",
    description:
      "Serving as Operations & Logistics Coordinator for CRAFT (craft.ncamrita.in), a student-run Tech Radar in the CSE Department. Ensure smooth execution of 90-minute Build-Along workshops, event operations, venue management, and cohort workflows for 150+ student builders moving from classroom theory to shipped code.",
    link: "https://craft.ncamrita.in/",
    focusAreas: ["Event Operations", "Logistics", "Technical Community", "Build-Alongs"]
  },
  {
    period: "MAY 2026 — SEP 2026",
    title: "Data Science & Machine Learning Intern",
    institution: "AICTE × The IoT Academy × upSkill Campus × UniConverge Technologies",
    role: "ML Intern (4-Month Program)",
    description:
      "Completed a rigorous 4-month industry internship focused on practical data pipelines, machine learning model architectures, exploratory data analysis, and predictive models evaluated across real-world datasets.",
    focusAreas: ["Machine Learning", "Data Pipelines", "Scikit-learn", "Statistical Modeling"]
  },
  {
    period: "OCT 2026",
    title: "AI Web Development Intern",
    institution: "InAmigos Foundation (IAF)",
    role: "AI & Frontend Engineering Intern",
    description:
      "Engineered NEXORA AI (nexora-ai-mr1487.vercel.app), designed full-featured NGO web experiences in Figma, and authored a comprehensive 20-page technical audit on UI/UX, responsiveness, and web accessibility.",
    focusAreas: ["React & Vite", "AI Campus Platform", "UI/UX Architecture", "Accessibility Audit"]
  },
  {
    period: "2025 — 2029",
    title: "B.Tech in Computer Science Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Nagercoil Campus",
    role: "Undergraduate Scholar",
    description:
      "Mastering core computational foundations including Data Structures & Algorithms, Object-Oriented Programming, Database Management, and Operating Systems while actively leading engineering projects and hackathon teams.",
    focusAreas: ["Core CS", "Algorithm Design", "Software Architecture"]
  },
  {
    period: "CONTINUOUS",
    title: "Autonomous Multi-Agents, Biomedical DSP & Open Source",
    institution: "Open Source & Engineering Builds (mohul-inventions)",
    role: "System Builder & Researcher",
    description:
      "Architecting production systems across 36+ public repositories: from RespiraSense AI non-invasive biomedical telemetry to ARAN multi-agent climate disaster triage grids and AI-based smart traffic systems.",
    focusAreas: ["Biomedical DSP", "Multi-Agent Grids", "YOLOv8 & OpenCV", "Full-Stack TypeScript"]
  }
];

export const CREATIVE_INTERESTS = [
  {
    title: "Exploring New Technology",
    description: "Deep-diving into emerging AI models, edge runtimes, and developer tooling ecosystems.",
    icon: "Compass"
  },
  {
    title: "Building Experimental Projects",
    description: "Translating late-night conceptual sketches into working repositories and prototypes.",
    icon: "Code2"
  },
  {
    title: "Participating in Hackathons",
    description: "Thriving in 24-48 hour crucible sprints where quick decisions build working products.",
    icon: "Flame"
  },
  {
    title: "Designing Web Experiences",
    description: "Obsessing over typography hierarchy, micro-interactions, dark themes, and buttery frame rates.",
    icon: "Sparkles"
  },
  {
    title: "Creating Digital Content",
    description: "Documenting architectural breakdowns, writing engineering notes, and sharing code artifacts.",
    icon: "PenTool"
  }
];
