export const PERSONAL_INFO = {
  name: "C R MOHUL RAM",
  shortName: "MOHUL.",
  initials: "CR",
  headline: "BUILDING IDEAS INTO DIGITAL EXPERIENCES.",
  subheadline:
    "Computer Science Engineering student building full-stack applications, AI-powered systems and experimental digital products.",
  role: "Computer Science Engineering Student | Full Stack Developer | AI/ML Enthusiast | Problem Solver",
  location: "Tamil Nadu, India",
  timezone: "IST (UTC+5:30)",
  email: "mohulram07@gmail.com",
  phone: "+91 6381761164",
  phoneFormatted: "+91 63817 61164",
  github: "https://github.com/mohul-inventions",
  githubUsername: "mohul-inventions",
  linkedin: "https://linkedin.com/in/c-r-mohul-ram-a373823ab",
  linkedinDisplay: "linkedin.com/in/c-r-mohul-ram-a373823ab",
  education: {
    degree: "B.Tech – Computer Science Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Nagercoil Campus",
    year: "2nd Year Undergraduate (2024 – 2028)",
    status: "Currently Pursuing"
  },
  status: "OPEN FOR OPPORTUNITIES",
  availability: "Available for Hackathons, Internships & Software Projects",
  metaTags: ["CSE", "Full Stack", "AI/ML", "Hackathons", "Systems"]
};

export const STATS = [
  {
    number: "02+",
    label: "Years of Engineering Journey",
    sublabel: "Dedicated core CS & software development"
  },
  {
    number: "10+",
    label: "Technical Projects & Builds",
    sublabel: "From vision AI to full-stack platforms"
  },
  {
    number: "Multiple",
    label: "Hackathons & Tech Events",
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
    { name: "C", level: "Foundations", icon: "Cpu", note: "Low-level Systems" },
    { name: "C++", level: "Algorithms", icon: "Boxes", note: "OOP & Data Structures" },
    { name: "Python", level: "Basics / ML", icon: "Terminal", note: "OpenCV, YOLOv8" }
  ],
  frontend: [
    { name: "HTML5", level: "Advanced", icon: "Layout", note: "Semantic Structure" },
    { name: "CSS3", level: "Advanced", icon: "Palette", note: "Modern layouts & FX" },
    { name: "JavaScript", level: "Proficient", icon: "Code2", note: "ES6+, Async, DOM" },
    { name: "React", level: "Proficient", icon: "Atom", note: "Hooks, SPA, State" },
    { name: "Tailwind CSS", level: "Proficient", icon: "Wind", note: "Modern Utility-First" }
  ],
  backend: [
    { name: "Node.js", level: "Proficient", icon: "Server", note: "Express, APIs, Auth" },
    { name: "MongoDB", level: "Proficient", icon: "Database", note: "NoSQL, Mongoose" },
    { name: "MySQL", level: "Proficient", icon: "HardDrive", note: "Relational Schemas, Queries" }
  ],
  tools: [
    { name: "Git", level: "Essential", icon: "GitBranch", note: "Version Control" },
    { name: "GitHub", level: "Workflow", icon: "Github", note: "Open Source & CI" },
    { name: "VS Code", level: "Primary IDE", icon: "FileCode", note: "Developer Tooling" },
    { name: "Vercel", level: "Deployment", icon: "Cloud", note: "Edge Hosting & CI/CD" }
  ],
  concepts: [
    { name: "Data Structures", level: "Core", icon: "Binary", note: "Trees, Graphs, Arrays" },
    { name: "Object-Oriented Programming", level: "Core", icon: "Component", note: "Classes, Inheritance, Polymorphism" },
    { name: "Problem Solving", level: "Core", icon: "Lightbulb", note: "Algorithmic thinking" },
    { name: "Debugging", level: "Essential", icon: "Bug", note: "Root-cause diagnosis" }
  ]
};

export const FEATURED_PROJECTS = [
  {
    id: "smart-traffic",
    number: "01",
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
    id: "make-insure",
    number: "02",
    title: "Make Insure",
    subtitle: "Full-Stack Insurance Management Application",
    category: "Full Stack Web",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
    description:
      "A full-stack insurance platform with vehicle and health insurance modules, user history tracking and dynamic insurance offer displays.",
    detailedOverview:
      "Designed to streamline policy discovery and issuance, Make Insure provides a unified modern digital hub where users can compare customizable insurance tiers, calculate dynamic premium offers, manage policy lifecycles, and track their claims and payment history seamlessly through a secure RESTful API backend.",
    features: [
      "Modular vehicle insurance and health insurance policy engines",
      "Dynamic real-time insurance premium and offer calculation",
      "Authenticated user dashboard with complete historical policy tracking",
      "Secure REST backend built with Node.js and MongoDB document store",
      "Responsive React interface optimized for desktop and mobile workflows"
    ],
    repository: "Make-Insure / Make-Insure-New",
    githubUrl: "https://github.com/mohul-inventions/Make-Insure",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    badge: "Full Stack Platform",
    systemStats: {
      architecture: "MERN Stack (React + Node + Express + Mongo)",
      modules: "Vehicle, Health, Claims, User History",
      auth: "Token-based Session / User Management",
      dataStore: "MongoDB Document Collections"
    }
  },
  {
    id: "transit-tracker",
    number: "03",
    title: "Transit Tracker",
    subtitle: "Road Safety & Transportation Monitoring",
    category: "Civic Tech & Safety",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A transportation and road-safety focused project developed as part of the prestigious IIT Madras Road Safety Hackathon.",
    detailedOverview:
      "Created under strict hackathon deadlines at the IIT Madras Road Safety Challenge, Transit Tracker offers intuitive monitoring tools for transport fleets, route visualization, hazard spotting, and passenger commuter awareness to reduce road accidents and enhance public mobility reliability.",
    features: [
      "Built for the competitive IIT Madras Road Safety Hackathon",
      "Interactive commuter route navigation and transit tracking interface",
      "Safety-first visual alert system for hazardous transit sections",
      "Lightweight, responsive design utilizing performant vanilla web standards"
    ],
    repository: "Transit-Tracker",
    githubUrl: "https://github.com/mohul-inventions/Transit-Tracker",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    badge: "IIT Madras Hackathon Build",
    systemStats: {
      initiative: "IIT Madras Road Safety Hackathon",
      focus: "Urban Fleet & Commuter Safety Monitoring",
      footprint: "Zero Dependency Client-side Engine"
    }
  },
  {
    id: "memoryverse-ai",
    number: "04",
    title: "MemoryVerse AI",
    subtitle: "Cognitive Memory & Verse Exploration Tool",
    category: "AI & Cognitive Tools",
    technologies: ["JavaScript"],
    description:
      "An intelligent interactive application developed for contextual verse exploration, memory retention, and cognitive learning.",
    detailedOverview:
      "Engineered to facilitate efficient memorization and exploration, MemoryVerse AI utilizes algorithmic recall mechanisms to assist users in studying, reviewing, and indexing thematic verse content with structured feedback loops.",
    features: [
      "Clean algorithmic user interface for structured verse study",
      "Interactive memory drills and active recall mechanisms",
      "Structured navigation for easy categorization and retrieval",
      "Client-side persistence for seamless revision sessions"
    ],
    repository: "Memoryverse-AI",
    githubUrl: "https://github.com/mohul-inventions/Memoryverse-AI",
    accentColor: "from-purple-500/20 to-violet-500/10",
    badge: "AI Web Tool",
    systemStats: {
      domain: "Cognitive Retention & Memory Systems",
      engine: "JavaScript Logic & State Management",
      ui: "Minimalist Focus-Centric Layout"
    }
  },
  {
    id: "kiddo",
    number: "05",
    title: "Kiddo",
    subtitle: "Interactive Educational Experience",
    category: "EdTech & Interactive UI",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "An interactive educational application concept designed for young learners with engaging activities and learning-focused interactions.",
    detailedOverview:
      "Kiddo reimagines early digital learning with vibrant visual cues, gamified micro-tasks, and accessible interaction patterns that teach fundamental cognitive concepts in a playful, rewarding environment without cognitive overload.",
    features: [
      "Engaging interactive learning activities designed specifically for kids",
      "Vibrant animations and audio-visual reinforcement",
      "Distraction-free, accessible layout with large touch targets",
      "Pure front-end implementation with high framerate responsiveness"
    ],
    repository: "kiddo",
    githubUrl: "https://github.com/mohul-inventions/kiddo",
    accentColor: "from-amber-400/20 to-yellow-500/10",
    badge: "Interactive Experience",
    systemStats: {
      target: "Early Childhood Digital Literacy",
      interactions: "Gamified Touch & Click Feedback",
      rendering: "DOM-based Lightweight Animation"
    }
  },
  {
    id: "student-management-system",
    number: "06",
    title: "Student Management System",
    subtitle: "Academic Records & Data Administration",
    category: "Information Systems",
    technologies: ["JavaScript"],
    description:
      "A student management project focused on organizing, validating, and handling student-related records and administrative workflows.",
    detailedOverview:
      "Engineered to solve academic clerical inefficiencies, this project provides a systematic data structure to register students, update semester course enrollments, track evaluation metrics, and query student dossiers cleanly.",
    features: [
      "CRUD operations for comprehensive student record management",
      "Input validation and data structure integrity checks",
      "Search, filter, and sorting utilities by roll number and department",
      "Streamlined UI tailored for administrative speed and clarity"
    ],
    repository: "Student-Management-System",
    githubUrl: "https://github.com/mohul-inventions/Student-Management-System",
    accentColor: "from-cyan-500/20 to-blue-500/10",
    badge: "Core System",
    systemStats: {
      core: "Data Processing & CRUD Management",
      schema: "Structured Academic Records",
      interface: "Real-time Filter & Search"
    }
  }
];

export const ADDITIONAL_PROJECTS = [
  {
    name: "Ambulance Command Center",
    tech: "JavaScript / Full Stack",
    category: "Emergency Systems",
    description: "Emergency dispatch and priority coordination interface for critical transit.",
    repo: "Ambulance-Command-Center",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Sentinel-X",
    tech: "JavaScript / Security",
    category: "System Monitoring",
    description: "Real-time safety, surveillance, and automated hazard detection suite.",
    repo: "Sentinel-X",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "OmniSafe-Edu",
    tech: "Web / JavaScript",
    category: "Campus Safety",
    description: "Educational institution emergency broadcast and campus safety portal.",
    repo: "OmniSafe-Edu",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Project-AURA",
    tech: "Web / UI",
    category: "Experimental UI",
    description: "Atmospheric user interface experiment exploring modern aesthetic designs.",
    repo: "Project-AURA",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Blog-App",
    tech: "React / Node.js",
    category: "Web Application",
    description: "Full-featured publishing application with markdown content rendering.",
    repo: "Blog-App",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "E-Commerce-App",
    tech: "React / JavaScript",
    category: "Commerce",
    description: "Online storefront application featuring product filters and cart state.",
    repo: "E-Commerce-App",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Task-Manager",
    tech: "JavaScript",
    category: "Productivity",
    description: "Productivity tool for prioritization, state tracking, and deadlines.",
    repo: "Task-Manager",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "EduTrack OOP Mini Project",
    tech: "Java / OOP",
    category: "Object-Oriented",
    description: "Academic progress tracking application emphasizing clean OOP principles.",
    repo: "EduTrack",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Library Management System",
    tech: "Java / MySQL",
    category: "Database Systems",
    description: "Book inventory and loan tracker implementing relational database schemas.",
    repo: "Library-Management-System",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Bank Management App",
    tech: "C++ / OOP",
    category: "Core Systems",
    description: "Console/GUI banking transaction simulator with balance ledgers.",
    repo: "Bank-Management-App",
    githubUrl: "https://github.com/mohul-inventions"
  },
  {
    name: "Mini Game Project",
    tech: "JavaScript",
    category: "Interactive",
    description: "Interactive browser-based game focusing on loop optimization and collisions.",
    repo: "Mini-Game-Project",
    githubUrl: "https://github.com/mohul-inventions"
  }
];

export const HACKATHONS = [
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    organizer: "Govt. of India / MoE",
    status: "Shortlisted",
    badgeType: "shortlisted",
    year: "2024",
    highlight: "Nationwide innovation initiative solving real-world civic challenges",
    category: "National Hackathon"
  },
  {
    id: "iitm-road-safety",
    title: "Road Safety Hackathon",
    organizer: "IIT Madras",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
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
    id: "vit-wehack",
    title: "WE Hack 5.0",
    organizer: "VIT Vellore",
    status: "Participant",
    badgeType: "participant",
    year: "2025",
    highlight: "Flagship hackathon building rapid product prototypes under time pressure",
    category: "Hackathon"
  },
  {
    id: "cit-hackfusion",
    title: "Hack Fusion 2026",
    organizer: "Chennai Institute of Technology",
    status: "Participant",
    badgeType: "participant",
    year: "2026",
    highlight: "Collaborative problem-solving across modern software engineering stacks",
    category: "Hackathon"
  },
  {
    id: "ggits-devdays",
    title: "GitHub DevDays Hackathon",
    organizer: "Gyan Ganga Institute of Tech & Sciences",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
    highlight: "Open-source toolchains and developer ecosystem sprint",
    category: "Open Source Hackathon"
  },
  {
    id: "iit-mandi",
    title: "Data Science Contest",
    organizer: "IIT Mandi",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
    highlight: "Exploratory data analysis and predictive pattern evaluation",
    category: "Technical Event"
  },
  {
    id: "psg-hack",
    title: "PSG Hackathon",
    organizer: "PSG Institutions",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
    highlight: "Prototyping software solutions for regional community and industry challenges",
    category: "Hackathon"
  },
  {
    id: "thoothukudi-hack",
    title: "Thoothukudi Hackathon",
    organizer: "District Technology Forum",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
    highlight: "Rapid technological prototyping sprint focused on localized solutions",
    category: "Hackathon"
  },
  {
    id: "psna-ideathon",
    title: "PSNA College Ideathon Arena",
    organizer: "PSNA College of Engg & Tech",
    status: "Participant",
    badgeType: "participant",
    year: "2024",
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

export const JOURNEY = [
  {
    period: "2024 — PRESENT",
    title: "B.Tech in Computer Science Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Nagercoil Campus",
    role: "2nd Year Undergraduate",
    description:
      "Deepening core computer science foundations including Data Structures & Algorithms, Object-Oriented Programming, Database Management, and Operating Systems while actively leading engineering projects.",
    focusAreas: ["Core CS", "Algorithm Design", "Software Architecture"]
  },
  {
    period: "2024 — 2025",
    title: "High-Pressure Hackathons & Technical Competitions",
    institution: "IIT Madras, NIT Trichy, VIT Vellore, SIH & Regional Summits",
    role: "Hackathon Competitor & System Builder",
    description:
      "Tested technical capabilities under real-world time pressure, architecting solutions like Transit Tracker and competing in SIH (Shortlisted), discovering passion for high-velocity software engineering.",
    focusAreas: ["Rapid Prototyping", "Team Engineering", "Systems Under Pressure"]
  },
  {
    period: "2024 — 2026+",
    title: "Computer Vision & Autonomous AI Experiments",
    institution: "Independent Exploration & Research Builds",
    role: "Vision AI & ML Enthusiast",
    description:
      "Applied computer vision models (OpenCV, YOLOv8) to real-world physical systems, culminating in the AI-Based Smart Traffic System with priority routing for emergency vehicles.",
    focusAreas: ["Object Detection", "YOLOv8", "Preemptive Routing"]
  },
  {
    period: "CONTINUOUS",
    title: "Modern Full-Stack Applications & Product Craft",
    institution: "Open Source & Web Architecture",
    role: "Full Stack Builder",
    description:
      "Building production-grade web applications utilizing React, Tailwind CSS, Node.js, and MongoDB, emphasizing clean component boundaries, reactive states, and sleek developer UX.",
    focusAreas: ["React Architecture", "REST APIs", "Modern Developer Tooling"]
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
