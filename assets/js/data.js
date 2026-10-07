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
  availability: "Open to collaborations",
  email: "anushkagurav532@gmail.com",
  resume: "assets/resume.pdf",       // replace this file to update the resume

  /* Animated character on the hero dashboard.
     She follows the cursor, blinks, and says these lines in a speech bubble
     (one every few seconds, or when someone clicks her). enabled: false hides her. */
  girl: {
    enabled: true,
    lines: [
      "Hey! Welcome to Anushka's portfolio.",
      "Two Cisco internships. ✨",
      "500+ problems solved. Bugs don't stand a chance.",
      "Ask me about RAG pipelines.",
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
      degree: "B.Tech in Computer Engineering",
      school: "MKSSS's Cummins College of Engineering for Women, Pune",
      period: "2024 – 2027",
      score: "CGPA 8.9",
      details: [
        "Coursework: Data Engineering, Cloud Computing, Cybersecurity",
        "Selected for the Cisco Women Program (CWIP)",
        "Selected among the top 100 students nationwide for the IIT Bombay Bootcamp"
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      school: "Government Polytechnic, Karad",
      period: "2021 – 2024",
      score: "94.74%",
      details: [
        "Coursework: Python, Java, C++, Data Structures, JavaScript, Android Development"
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
      duration: "4 months",
      logo: "assets/img/cisco-logo.png",
      location: "Bengaluru, Karnataka",
      points: [
        "Built an AI-powered proof of concept that writes context-aware comments and docstrings for Python test scripts using hierarchical intent analysis, following the team's documentation format",
        "Automated 100% of eligible comment and docstring blocks, passing Git checks and cutting manual documentation effort by about 70%",
        "Enriched inputs for internal RAG systems, enabling more contextual blueprint generation, stronger root-cause analysis and more accurate bug-fix recommendations"
      ],
      awards: [
        {
          title: "Play to Win",
          detail: "Recognized for the work on the Intent-Aware AI Comment Generation PoC",
          date: "Aug 2026",
          by: "Lakshminarayana Reddy B N",
          image: "assets/img/award-ai-poc.png"
        },
        {
          title: "Play to Win",
          detail: "Recognized for the contribution to the Qubit article",
          date: "Sep 2026",
          by: "Satvinder Gunsi",
          image: "assets/img/award-qubit.png"
        }
      ],
      tech: ["Python", "LLMs", "RAG", "Git"]
    },
    {
      role: "Technical Intern I",
      company: "Cisco",
      period: "Jun 2025 – Aug 2025",
      duration: "2 months",
      logo: "assets/img/cisco-logo.png",
      location: "Bengaluru, Karnataka",
      points: [
        "Worked on load balancing, improving performance in high-throughput environments",
        "Fixed flaky test cases in the Load Balancing General and Hashing Characterization modules by analysing logs and finding root causes",
        "Raised detailed PRs with a 100% merge rate, backed by thorough testing"
      ],
      awards: [
        {
          title: "Think Really Big",
          detail: "Recognized for excellent work in the Cisco Load Balancing team",
          date: "Aug 2025",
          by: "Prince Kumar",
          image: "assets/img/award-lb.png"
        }
      ],
      tech: ["IOS-XR", "LB", "Git", "Debugging"]
    }
  ],

  /* ---------- Projects ----------
     category is used by the filter buttons. image is optional — leave ""
     to get a generated cover. Put screenshots in assets/img/. */
  projects: [
    {
      title: "RAG-Based Document Intelligence System",
      category: "AI",
      description:
        "A Retrieval-Augmented Generation agent that ingests PDFs from Google Drive, generates vector embeddings and stores them in Pinecone. Users query their documents through Telegram and get context-aware, document-grounded answers, all orchestrated with n8n.",
      tech: ["n8n", "RAG", "LLM", "Embedding", "Vector Database", "Git"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/Rag_Agent",
      featured: true
    },
    {
      title: "AI-Powered Production Failure Analyser",
      category: "AI",
      description:
        "An intelligent failure analysis system that simulates live system metrics and logs, with injectable failures such as memory leaks, database timeouts and disk exhaustion. It uses the Groq API to examine metrics, logs and uploaded PDFs, then produces severity ratings, root causes and actionable fix recommendations.",
      tech: ["Python", "FastAPI", "Groq API", "JavaScript", "PyPDF2", "Git"],
      image: "",
      live: "",
      code: ""
    },
    {
      title: "Training & Placement Application",
      category: "Android",
      description:
        "An Android application for managing college placement activities and analysis: track company recruitment processes, maintain students' interview experiences and monitor placement progress through a placement tracker.",
      tech: ["Java", "XML", "Firebase", "Android", "Git"],
      image: "",
      live: "",
      code: "https://github.com/Anushka-Gurav/Placement_App"
    }
  ],

  /* ---------- Achievements ---------- */
  achievements: [
    { highlight: "1st", title: "Avishkar Coding Competition", detail: "Government College of Engineering, Karad" },
    { highlight: "Top 100", title: "IIT Bombay Bootcamp", detail: "Selected among the top 100 students nationwide" },
    { highlight: "CWIP", title: "Cisco Women Program", detail: "Selected for Cisco's women in tech program" },
    { highlight: "2nd", title: "IEEE MMCOE Ideathon", detail: "Second rank" },
    { highlight: "2nd", title: "TechTangle", detail: "Second rank in the case study competition" },
    { highlight: "3rd", title: "Atlas Copco Case Study Competition", detail: "Third rank" },
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
      username: "Anushka0201",
      url: "https://leetcode.com/u/Anushka0201/",
      stat: 500, suffix: "+", statLabel: "problems solved",
      extra: "Combined with GeeksforGeeks",
      progress: 72,
      color: "#FFA116"
    },
    {
      platform: "GeeksforGeeks",
      username: "anushkagughj",
      url: "https://www.geeksforgeeks.org/profile/anushkagughj",
      stat: null, statLabel: "",
      extra: "Practice problems and DSA",
      progress: 70,
      color: "#2F8D46"
    },
    {
      platform: "YouTube",
      username: "AnushkaGurav-j7i",
      url: "https://www.youtube.com/@AnushkaGurav-j7i",
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
    youtube: "https://www.youtube.com/@AnushkaGurav-j7i",
    medium: "https://medium.com/@anushkagurav532",
    twitter: ""                       // leave "" to hide
  },

  /* Contact form: create a free form at https://formspree.io and paste the
     ID (the part after /f/). Leave "" and the form opens the visitor's
     email app instead. */
  formspreeId: ""
};
