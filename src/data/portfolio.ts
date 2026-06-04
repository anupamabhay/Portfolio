export const personal = {
  name: "Alex Chen",
  title: "Senior Software Engineer",
  tagline: "Senior Software Engineer specializing in distributed systems, low-latency architectures, and developer tooling. Building the invisible infrastructure that powers modern high-performance enterprises.",
  email: "hello@architect.io",
  location: "San Francisco, CA",
  resumeUrl: "#",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}

export const about = {
  bio: [
    "I approach engineering as the art of building digital foundations that are both invisible and indestructible. My focus lies at the intersection of distributed systems and high-performance computing, where every millisecond of latency and every byte of overhead matters. I believe that great infrastructure shouldn't just work; it should empower the entire organization to move faster with confidence.",
    "As a Principal Systems Engineer, I specialize in architecting zero-copy protocols, optimizing kernel-level interactions, and designing resilient microservices meshes. My work is driven by the challenge of scaling systems to handle millions of concurrent events while maintaining strict consistency and reliability across global edge networks.",
  ],
  stats: [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Technologies Used", value: "25+" },
    { label: "Happy Clients", value: "20+" },
  ],
}

export const techStack = [
  "RUST", "GO", "KUBERNETES", "TYPESCRIPT", "AWS",
  "GRPC", "DOCKER", "TERRAFORM", "POSTGRESQL", "REDIS",
]

export const skills = {
  Frontend: [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Redux",
    "React Query", "Storybook", "Vitest",
  ],
  Backend: [
    "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis",
    "GraphQL", "REST APIs", "Prisma",
  ],
  "DevOps & Cloud": [
    "AWS", "Docker", "GitHub Actions", "Terraform",
    "Kubernetes", "Nginx",
  ],
  Tools: [
    "Git", "ESLint", "Prettier", "Webpack", "Vite",
    "Figma", "Notion", "Linear",
  ],
}

export const experience = [
  {
    company: "Neoscale",
    role: "Principal Systems Engineer",
    period: "2021 — NOW",
    location: "San Francisco, CA",
    highlights: [
      "Architecting core infrastructure for a global edge network. Reduced latency by 40% through custom implementation of zero-copy protocols in Rust.",
      "Mentoring a team of 12 distributed systems engineers.",
    ],
    tags: ["#DistributedSystems", "#Rust", "#Infrastructure"],
  },
  {
    company: "Velocity Data",
    role: "Lead Backend Architect",
    period: "2018 — 2021",
    location: "Remote",
    highlights: [
      "Built and scaled a real-time analytics platform handling 500k queries per second.",
      "Migrated legacy monolith to a Kubernetes-native microservices mesh using Go and gRPC.",
    ],
    tags: ["#GoLang", "#K8s", "#CloudNative"],
  },
  {
    company: "Quantify Solutions",
    role: "Software Engineer",
    period: "2015 — 2018",
    location: "Los Angeles, CA",
    highlights: [
      "Developed core algorithmic trading infrastructure using C++.",
      "Optimized order execution pipelines for low-latency market access.",
    ],
    tags: ["#C++", "#FinTech", "#HFT"],
  },
]

export const projects = [
  {
    title: "Vortex Engine",
    description: "High-throughput event processing engine capable of handling 2M+ events/sec with sub-millisecond latency. Built for real-time financial data streaming.",
    tech: ["Rust", "WASM"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=375&fit=crop",
    github: "https://github.com",
    live: null,
    tag: "RUST / WASM",
  },
  {
    title: "Lumina DB",
    description: "A distributed key-value store emphasizing strong consistency and horizontal scalability across multiple availability zones.",
    tech: ["Go", "etcd"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=375&fit=crop",
    github: "https://github.com",
    live: null,
    tag: "GO / ETCD",
  },
]
