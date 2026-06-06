export const personal = {
  name: "Anupam Abhay",
  title: "Software Developer",
  tagline: "Software Developer specializing in building performant, scalable applications with clean architecture. Turning complex problems into elegant, maintainable solutions.",
  email: "anupamabhay2001@gmail.com",
  resumeUrl: "https://docs.google.com/document/d/1Y8qQb-UMlyVz_Nncnn8RGQ2OF56Ldf7k/edit?usp=sharing&ouid=112329673717758319134&rtpof=true&sd=true",
  social: {
    github: "https://github.com/anupamabhay",
    linkedin: "https://linkedin.com/in/anupamabhay",
  },
}

export const about = {
  bio: [
    "I build backend systems that handle real traffic without breaking a sweat. My work sits at the intersection of microservices, GenAI, and high-throughput APIs — the kind that have to stay fast while getting smarter. I've built order infrastructure processing 2,000+ daily deliveries and real-time AI avatars serving 500+ concurrent sessions. Every millisecond, every edge case, every query matters.",
    "At GoGiver AI, I work with Spring Boot microservices and Python LLM orchestration to power interactive AI avatars. Before that, I built the order lifecycle and delivery tracking pipeline at Speedbae. I use Java, Spring Boot, Kafka, Redis, and whatever else it takes to ship reliable systems. I care about clean architecture, solid test coverage, and code that doesn't need a tour guide.",
  ],
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Concurrent Sessions", value: "500+" },
    { label: "Daily Orders", value: "2K+" },
    { label: "API Uptime", value: "99.5%" },
  ],
}

export const techStack = [
  "JAVA", "PYTHON", "JAVASCRIPT", "C++", "SPRING BOOT", "SPRING SECURITY",
  "HIBERNATE/JPA", "MICROSERVICES", "REST APIS", "WEBSOCKET", "KAFKA",
  "LLMS", "OPENAI", "CLAUDE", "GEMINI", "PYDANTIC AI", "RAG PIPELINES",
  "PROMPT ENGINEERING", "PYTORCH", "TENSORFLOW", "OPENCV",
  "MODEL EVALUATION", "SCIKIT-LEARN", "MYSQL",
  "POSTGRESQL", "SQL SERVER", "CASSANDRA", "REDIS", "DOCKER", "KUBERNETES", "JENKINS",
  "CI/CD", "AWS", "GCP", "GIT", "BITBUCKET", "JUNIT", "MOCKITO", "SWAGGER",
  "POSTMAN", "INSOMNIA", "JIRA", "AGILE/SCRUM", "REACT NATIVE",
  "REACT.JS", "HTML5", "CSS3",
]

export const experience = [
  {
    company: "GoGiver AI Private Limited (AssistArmy)",
    role: "Backend Developer",
    period: "Feb 2025 — Present",
    highlights: [
      "Engineered a hybrid backend architecture with Spring Boot microservices and Python LLM orchestration, powering real-time AI avatars across 500+ concurrent sessions.",
      "Implemented Java WebSocket module with Spring Security (JWT, RBAC), 80+ JUnit tests, and 99.5%+ API uptime.",
    ],
    tags: ["#Java", "#SpringBoot", "#Python", "#LLMs", "#GenAI", "#WebSocket"],
  },
  {
    company: "Speedbae Digital Private Limited",
    role: "Backend Developer",
    period: "Jan 2024 — Dec 2024",
    highlights: [
      "Built an end-to-end Order Lifecycle service processing 2,000+ daily orders; reduced order API p95 latency from 800ms to 180ms.",
      "Engineered inventory reservation service handling 5,000+ SKUs and a real-time delivery tracking pipeline on Cassandra.",
    ],
    tags: ["#Java", "#SpringBoot", "#Microservices", "#Cassandra", "#React"],
  },
  {
    company: "Speedbae Digital Private Limited",
    role: "Backend Intern",
    period: "July 2023 — Dec 2023",
    highlights: [
      "Built CRUD modules and data validations for checkout and order placement workflows.",
      "Optimized MySQL schemas, refactored inefficient queries, and generated API documentation using Swagger.",
    ],
    tags: ["#Java", "#SpringBoot", "#MySQL", "#Swagger"],
  },
]

export const projects = [
  {
    title: "AR Product Visualization Pipelines",
    description: "AI-powered computer vision pipeline for realistic 2D product visualization. Uses SAM for zero-shot wall segmentation and Stable Diffusion with ControlNet for depth-aware image generation.",
    tech: ["Python", "PyTorch", "OpenCV", "Stable Diffusion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=375&fit=crop",
    github: "https://github.com/anupamabhay/AR_Preview",
    live: null,
    tag: "COMPUTER VISION",
  },
  {
    title: "Agent Zero",
    description: "Autonomous AI assistant framework built on a cyclic LangGraph architecture with multi-model orchestration (Gemini, Claude, GPT) and Docker-sandboxed execution.",
    tech: ["Python", "LangGraph", "Docker", "Pydantic"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=375&fit=crop",
    github: "https://github.com/anupamabhay/agent-zero",
    live: null,
    tag: "AUTONOMOUS AI",
  },
]
