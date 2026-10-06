/* ==========================================================================
   YOUR CONTENT LIVES HERE
   Edit this one file to update the portfolio. Every section on the page
   is built from the data below — no HTML editing needed.
   ========================================================================== */

const PORTFOLIO = {
  /* ---------- Basics ---------- */
  name: "Anushka Gurav",              // shown as the animated particle name
  shortName: "AG",                   // used in the logo + skills orbit
  roles: [                           // typed one after another in the hero
    "Software engineer",
    "AI & automation builder",
    "SWE intern at Cisco",
    "Problem solver"
  ],
  tagline:
    "I love turning complex technical problems into simple, practical solutions — lately with LLMs, RAG pipelines and automation.",
  location: "Pune, India",
  availability: "Open to internships and collaborations",
  email: "anushkagurav532@gmail.com",
  resume: "assets/resume.pdf",       // replace this file to update the resume

  /* Animated character on the hero dashboard.
     She follows the cursor, blinks, and says these lines in a speech bubble
     (one every few seconds, or when someone clicks her). enabled: false hides her. */
  girl: {
    enabled: true,
    lines: [
      "Hey! Welcome to Anushka's portfolio.",
      "Two Cisco internships and counting. ✨",
      "500+ problems solved. Bugs don't stand a chance.",
      "Ask me about RAG pipelines. Actually, ask Anushka.",
      "Scroll down. The projects are the fun part.",
      "Try moving your cursor through the name."
    ]
  },

  /* Quick numbers shown on the hero dashboard (they count up on load) */
  stats: [
    { value: 2, suffix: "", label: "Internships at Cisco" },
    { value: 500, suffix: "+", label: "Problems solved" },
    { value: 35, suffix: "+", label: "GitHub repositories" }
  ],

  /* ---------- Education (newest first) ---------- */
  education: [
    {
      degree: "B.E. in Computer Engineering",
      school: "MKSSS's Cummins College of Engineering for Women, Pune",
      period: "2024 – 2027",
      score: "CGPA 8.9",
      details: [
        "Coursework: Data Structures & Algorithms, DBMS, Object-Oriented Programming, Computer Networks, Operating Systems",
        "Selected for the Cisco Women Program (CWIP)",
        "Selected among the top 100 students nationwide for the IIT Bombay Bootcamp"
      ]
    }
  ],

  /* ---------- Skills ----------
     icon = a Devicon class (browse https://devicon.dev), or "" for a
     lettered badge. level = 0–100 (your own estimate — adjust freely). */
  skills: {
    Languages: [
      { name: "Java", icon: "devicon-java-plain colored", level: 88 },
      { name: "Python", icon: "devicon-python-plain colored", level: 85 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 80 },
      { name: "SQL", icon: "devicon-azuresqldatabase-plain colored", level: 78 },
      { name: "C++", icon: "devicon-cplusplus-plain colored", level: 75 },
      { name: "C", icon: "devicon-c-plain colored", level: 72 }
    ],
    "AI & Data": [
      { name: "LLMs", icon: "", level: 80 },
      { name: "RAG pipelines", icon: "", level: 82 },
      { name: "Vector databases", icon: "", level: 75 },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 78 },
      { name: "MySQL", icon: "devicon-mysql-plain colored", level: 75 },
      { name: "Firebase", icon: "devicon-firebase-plain colored", level: 80 }
    ],
    Web: [
      { name: "React", icon: "devicon-react-original colored", level: 78 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 75 },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 70 },
      { name: "HTML5", icon: "devicon-html5-plain colored", level: 90 },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: 85 },
      { name: "PHP", icon: "devicon-php-plain colored", level: 65 }
    ],
    Tools: [
      { name: "Git", icon: "devicon-git-plain colored", level: 88 },
      { name: "Pytest", icon: "devicon-pytest-plain colored", level: 80 },
      { name: "n8n", icon: "", level: 82 },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored", level: 78 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 90 },
      { name: "Eclipse", icon: "devicon-eclipse-plain colored", level: 75 },
      { name: "Figma", icon: "devicon-figma-plain colored", level: 65 },
      { name: "ElevenLabs", icon: "", level: 70 }
    ]
  },

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: "Software Engineering Intern I",
      company: "Cisco",
      period: "Jun 2026 – Sep 2026",
      location: "Bengaluru, Karnataka",
      points: [
        "Built an AI-powered proof of concept that writes context-aware comments and docstrings for Python test scripts using hierarchical intent analysis, following the team's documentation format",
        "Automated 100% of eligible comment and docstring blocks, passing Git checks and cutting manual documentation effort by about 70%",
        "Enriched inputs for internal RAG systems, enabling more contextual blueprint generation, stronger root-cause analysis and more accurate bug-fix recommendations"
      ],
      tech: ["Python", "LLMs", "RAG", "Git"]
    },
    {
      role: "Technical Intern I",
      company: "Cisco",
      period: "Jun 2025 – Aug 2025",
      location: "Bengaluru, Karnataka",
      points: [
        "Worked on load balancing, improving performance in high-throughput environments",
        "Fixed flaky test cases in the Load Balancing General and Hashing Characterization modules by analysing logs and finding root causes",
        "Raised detailed PRs with a 100% merge rate, backed by thorough testing"
      ],
      tech: ["Load balancing", "Test automation", "Debugging", "Git"]
    }
  ],

  /* ---------- Projects ----------
     category is used by the filter buttons. image is optional — leave ""
     to get a generated cover. Put screenshots in assets/img/. */
  projects: [
    {
      title: "EchoCraft",
      category: "AI",
      description:
        "An AI podcast generator: turn a topic or script into multilingual, lifelike podcast audio with segment-wise playback and automatic merging into one final file.",
      tech: ["React", "Node.js", "Firebase", "Gemini API", "Murf AI"],
      image: "",
      live: "https://famous-trifle-7f1eb6.netlify.app/",
      code: "https://github.com/Anushka-Gurav/EchoCraft",
      featured: true
    },
    {
      title: "RAG Document Intelligence",
      category: "AI",
      description:
        "An AI agent that ingests PDFs from Google Drive, embeds them into Pinecone and answers questions about them over Telegram with document-grounded replies.",
      tech: ["n8n", "RAG", "LLM", "Pinecone"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/Rag_Agent"
    },
    {
      title: "Smart ML Model Trainer",
      category: "Full-stack",
      description:
        "Upload a dataset, then train, compare and export ML models from one dashboard with automated preprocessing and live training progress. Built as a team.",
      tech: ["React", "FastAPI", "MongoDB", "scikit-learn"],
      image: "",
      live: "https://ml-model-trainer.netlify.app/",
      code: "https://github.com/Anushka-Gurav/Tech_Titans_ML_Model_Trainer"
    },
    {
      title: "Training & Placement App",
      category: "Android",
      description:
        "An Android app for college placements: track company recruitment rounds, share interview experiences and follow placement progress.",
      tech: ["Java", "XML", "Firebase", "Android"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/Placement_App"
    },
    {
      title: "Library System",
      category: "Java",
      description:
        "A library management system for books, members and issue/return records.",
      tech: ["Java", "OOP"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/Library-System"
    },
    {
      title: "Custom Data Structures",
      category: "Java",
      description:
        "Data structures implemented from scratch in Java.",
      tech: ["Java", "DSA"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/SY_95_Custom_DataStructure"
    }
  ],

  /* ---------- Achievements ---------- */
  achievements: [
    { highlight: "1st", title: "Avishkar Coding Competition", detail: "Government College of Engineering, Karad" },
    { highlight: "Top 100", title: "IIT Bombay Bootcamp", detail: "Selected among the top 100 students nationwide" },
    { highlight: "CWIP", title: "Cisco Women Program", detail: "Selected for Cisco's women in tech program" },
    { highlight: "2nd", title: "IEEE MMCOE Ideathon", detail: "Second rank" },
    { highlight: "2nd", title: "TechTangle", detail: "Second rank in the case study competition" },
    { highlight: "500+", title: "Problems solved", detail: "Across LeetCode, GeeksforGeeks and more" }
  ],

  /* ---------- Coding profiles ----------
     stat = headline number (or null), suffix = e.g. "+", progress = 0–100 for the ring.
     A profile with url "" is shown but not clickable. */
  codingProfiles: [
    {
      platform: "GitHub",
      username: "Anushka-Gurav",
      url: "https://github.com/Anushka-Gurav",
      stat: 35, statLabel: "repositories",
      extra: "Pull Shark ×2, Quickdraw, YOLO",
      progress: 80,
      color: "#C9D1FF"
    },
    {
      platform: "LeetCode",
      username: "",                    // TODO: add username + url
      url: "",
      stat: 500, suffix: "+", statLabel: "problems solved",
      extra: "Combined with GeeksforGeeks",
      progress: 72,
      color: "#FFA116"
    },
    {
      platform: "YouTube",
      username: "tech.withana",
      url: "https://www.youtube.com/@tech.withana",
      stat: null, statLabel: "",
      extra: "Tech videos and tutorials",
      progress: 65,
      color: "#FF5A5A"
    },
    {
      platform: "Medium",
      username: "anushkagurav532",
      url: "https://medium.com/@anushkagurav532",
      stat: null, statLabel: "",
      extra: "Writing about tech and projects",
      progress: 60,
      color: "#6CF0D2"
    }
  ],

  /* ---------- Contact & socials ---------- */
  socials: {
    github: "https://github.com/Anushka-Gurav",
    linkedin: "https://www.linkedin.com/in/anushka-gurav-39066a314/",
    instagram: "https://www.instagram.com/tech.withana",
    youtube: "https://www.youtube.com/@tech.withana",
    medium: "https://medium.com/@anushkagurav532",
    twitter: ""                       // leave "" to hide
  },

  /* Contact form: create a free form at https://formspree.io and paste the
     ID (the part after /f/). Leave "" and the form opens the visitor's
     email app instead. */
  formspreeId: ""
};
