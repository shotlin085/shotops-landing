import {
  GitBranch,
  Cpu,
  KeyRound,
  Database,
  Globe,
  ScrollText,
  RotateCcw,
  Activity,
  Terminal,
  HardDrive,
  Shield,
  Rocket,
  Building2,
  Users,
  GraduationCap,
  Wrench,
  FlaskConical,
} from "lucide-react";

/* ───────── brand ───────── */
export const brand = {
  name: "Opslin",
  tagline: "Deploy apps on your own VPS without becoming a DevOps team.",
  description:
    "Opslin is a beta DevOps control plane for Linux servers. Connect your server, deploy from GitHub, manage environment variables, databases, domains, SSL, logs, and rollbacks — from one dashboard.",
};

/* ───────── nav ───────── */
export const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Beta", href: "#beta" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* ───────── hero ───────── */
export const heroBadges = [
  "Private beta",
  "Outbound-only agent",
  "Apps stay on your infrastructure",
  "Built for developers and small teams",
];

export const heroLogs = [
  "agent connected   outbound",
  "buildpack detected node",
  "ssl cert queued    letsencrypt",
  "container promoted your-vps",
];

/* ───────── trust bar ───────── */
export const trustCards = [
  {
    title: "No fake testimonials",
    copy: "Public quotes will be added only after named beta users approve them.",
  },
  {
    title: "Beta limits are visible",
    copy: "Starter is free for six months while feedback is collected.",
  },
  {
    title: "Workloads stay on your VPS",
    copy: "Opslin manages deploy workflows — it does not host your apps.",
  },
  {
    title: "Outbound-only agent model",
    copy: "The agent connects outbound. No public management port is required.",
  },
  {
    title: "Built for Git-based deployments",
    copy: "Connect any GitHub repo or paste a Git URL to start deploying.",
  },
];

/* ───────── problem ───────── */
export const painPoints = [
  { title: "SSH into servers for every change", icon: "terminal" },
  { title: "Manual Docker & Nginx configuration", icon: "settings" },
  { title: "Env files scattered across servers", icon: "files" },
  { title: "SSL certificate mistakes & expiry", icon: "lock" },
  { title: "Database connection string confusion", icon: "database" },
  { title: "No rollback when deploys go wrong", icon: "undo" },
  { title: "No deployment history or timeline", icon: "clock" },
  { title: "No clear health checks", icon: "heart" },
  { title: "No unified dashboard", icon: "layout" },
];

/* ───────── solution ───────── */
export const solutionSteps = [
  { step: "Connect server", description: "Link your Linux VPS to Opslin." },
  { step: "Install agent", description: "One-line installer. Outbound connection only." },
  { step: "Connect repo", description: "Bring any GitHub repository or Git URL." },
  { step: "Deploy app", description: "Build, configure, and promote with one flow." },
  { step: "Manage env/db/domain/SSL", description: "Environment variables, databases, domains, and certificates." },
  { step: "Monitor and rollback", description: "Logs, metrics, status, and one-click rollback." },
];

/* ───────── how it works ───────── */
export const howItWorksSteps = [
  {
    title: "Connect your server",
    description: "Run one installer command on any Linux VPS you own or rent.",
  },
  {
    title: "Install Opslin agent",
    description: "The lightweight agent connects outbound to Opslin. No inbound port needed.",
  },
  {
    title: "Connect GitHub repo",
    description: "Link any GitHub repository or paste a Git URL. No code changes required.",
  },
  {
    title: "Deploy app",
    description: "Build, configure Nginx, issue SSL, and promote the release from one flow.",
  },
  {
    title: "Add environment variables and databases",
    description: "Manage env vars from the dashboard. Create Postgres, MySQL, or Redis services on your server.",
  },
  {
    title: "Attach domain and SSL",
    description: "Point your domain, and Opslin automates Let's Encrypt certificate provisioning.",
  },
  {
    title: "Monitor, update, rollback",
    description: "View logs, metrics, and deployment history. Roll back to any previous version with one click.",
  },
];

/* ───────── workflow pipeline ───────── */
export const workflowStages = [
  { label: "Repository connected", status: "done" as const },
  { label: "Runtime detected", status: "done" as const },
  { label: "Docker image building", status: "done" as const },
  { label: "Environment injected safely", status: "done" as const },
  { label: "Candidate container started", status: "done" as const },
  { label: "Health check running", status: "active" as const },
  { label: "Route promoted", status: "pending" as const },
  { label: "SSL issued", status: "pending" as const },
  { label: "Deployment live", status: "pending" as const },
  { label: "Rollback available", status: "pending" as const },
];

/* ───────── features ───────── */
export type FeatureStatus = "beta" | "planned";

export const features: {
  title: string;
  description: string;
  status: FeatureStatus;
  icon: typeof GitBranch;
}[] = [
  {
    title: "Git Deploys",
    description: "Connect GitHub and deploy from branches.",
    status: "beta",
    icon: GitBranch,
  },
  {
    title: "Auto Runtime Detection",
    description: "Detect Node, Python, Go, PHP, Ruby, Java, Rust, static sites, Dockerfile/Compose.",
    status: "beta",
    icon: Cpu,
  },
  {
    title: "Environment Variables",
    description: "Manage app environment variables from the dashboard. Public frontend and private runtime env handled separately.",
    status: "beta",
    icon: KeyRound,
  },
  {
    title: "Managed Databases",
    description: "Create Postgres, MySQL, or Redis services on your own server. Generated connection strings for deployed apps.",
    status: "beta",
    icon: Database,
  },
  {
    title: "Domains & SSL",
    description: "Attach custom domains and automate Let's Encrypt SSL when DNS and ports are ready.",
    status: "beta",
    icon: Globe,
  },
  {
    title: "Deployment Logs",
    description: "Understand build, deploy, and health states with detailed log output.",
    status: "beta",
    icon: ScrollText,
  },
  {
    title: "Rollback",
    description: "Return to previous deployments faster with one-click rollback.",
    status: "beta",
    icon: RotateCcw,
  },
  {
    title: "Server Monitoring",
    description: "View server health, app status, containers, CPU, memory, and disk usage.",
    status: "beta",
    icon: Activity,
  },
  {
    title: "Web Terminal",
    description: "Browser-based terminal for server access where enabled.",
    status: "beta",
    icon: Terminal,
  },
  {
    title: "Backups",
    description: "Automated database backups with restore capabilities.",
    status: "planned",
    icon: HardDrive,
  },
  {
    title: "Firewall Controls",
    description: "Manage server firewall rules from the dashboard.",
    status: "planned",
    icon: Shield,
  },
];

/* ───────── architecture ───────── */
export const architectureNodes = [
  {
    title: "YOUR VPS",
    subtitle: "Apps, databases, containers, proxy",
    description: "Your applications run here. Opslin never hosts your workloads.",
  },
  {
    title: "OPSLIN AGENT",
    subtitle: "Outbound connection only",
    description: "Lightweight binary. Connects outbound. No inbound management port required.",
  },
  {
    title: "OPSLIN CLOUD",
    subtitle: "Dashboard, API, control plane",
    description: "Deploys, logs, metrics, actions. The orchestration layer.",
  },
];

export const architectureTrustPoints = [
  "Apps run on your VPS",
  "Opslin runs the control plane only",
  "Agent connects outbound only",
  "Credentials are encrypted",
  "Actions are audit logged",
  "No inbound management port required",
];

/* ───────── security ───────── */
export const securityPoints = [
  {
    title: "Outbound-only agent",
    description: "The agent connects outbound to Opslin. Your server never exposes a management port.",
  },
  {
    title: "No public management port",
    description: "The management surface stays off the public internet.",
  },
  {
    title: "Environment variable separation",
    description: "Public frontend env and private runtime env are handled differently.",
  },
  {
    title: "Least-privilege direction",
    description: "Permissions are scoped and will tighten as the product matures.",
  },
  {
    title: "Encrypted credentials",
    description: "Database passwords and tokens are encrypted at rest using AES-256-GCM.",
  },
  {
    title: "Beta disclosure",
    description: "Beta users should review security posture before critical production use.",
  },
];

/* ───────── use cases ───────── */
export const useCases = [
  {
    title: "Indie hackers",
    description: "Launch MVPs on affordable VPS without DevOps overhead.",
    icon: Rocket,
  },
  {
    title: "Agencies",
    description: "Deploy client apps to dedicated servers with clear project separation.",
    icon: Building2,
  },
  {
    title: "Small teams",
    description: "Use VPS infrastructure to reduce cloud cost without losing deployment workflow.",
    icon: Users,
  },
  {
    title: "Students & builders",
    description: "Deploy side projects and learning experiments with real infrastructure.",
    icon: GraduationCap,
  },
  {
    title: "Internal tools",
    description: "Run admin dashboards, staging environments, and internal APIs on your own servers.",
    icon: Wrench,
  },
  {
    title: "Early-stage SaaS",
    description: "Prototype and validate SaaS products on cost-effective VPS before scaling.",
    icon: FlaskConical,
  },
];

/* ───────── comparison ───────── */
export const comparisonRows: { label: string; manual: string; paas: string; opslin: string }[] = [
  { label: "Cost control", manual: "Full control", paas: "Platform markup", opslin: "VPS pricing" },
  { label: "Server ownership", manual: "You own it", paas: "Platform owns it", opslin: "You own it" },
  { label: "Deployment workflow", manual: "Manual SSH", paas: "Git push", opslin: "Git push" },
  { label: "SSL & domains", manual: "Manual setup", paas: "Automatic", opslin: "Automatic (beta)" },
  { label: "Env & database management", manual: "Manual config", paas: "Dashboard", opslin: "Dashboard (beta)" },
  { label: "Rollback", manual: "Manual restore", paas: "Built-in", opslin: "One-click (beta)" },
  { label: "Complexity", manual: "High", paas: "Low", opslin: "Low" },
];

/* ───────── beta transparency ───────── */
export const betaGoodFor = [
  "MVPs and prototypes",
  "Test and staging apps",
  "Side projects",
  "Internal tools",
  "Early adopters who understand beta risk",
  "Learning and experimentation",
];

export const betaCautionFor = [
  "Critical production workloads",
  "Regulated or compliance-sensitive data",
  "High-scale applications",
  "Apps requiring SLA guarantees",
];

/* ───────── pricing ───────── */
export const pricingPlans = [
  {
    name: "Free Beta",
    price: "₹0",
    period: "/mo",
    summary: "Get started with limited usage",
    features: [
      "1 server",
      "3 apps",
      "Git deploys",
      "Basic logs",
      "Community support",
      "No credit card required",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Starter",
    price: "₹299",
    period: "/mo",
    summary: "Free for 6 months during beta",
    features: [
      "1 server",
      "5 apps",
      "SSL automation",
      "Git deploys",
      "Basic monitoring",
      "Managed databases",
      "No credit card during beta",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹799",
    period: "/mo",
    summary: "More servers, more apps",
    features: [
      "3 servers",
      "15 apps",
      "All Starter features",
      "Backups",
      "Extended logs",
      "Priority support",
    ],
    cta: "Choose Pro",
    popular: false,
  },
];

/* ───────── faq ───────── */
export const faqItems = [
  {
    question: "What is Opslin?",
    answer:
      "Opslin is a DevOps control plane that turns your Linux VPS into a managed deployment platform. You connect your server, deploy apps from GitHub, and manage environment variables, databases, domains, SSL, logs, and rollbacks from one browser dashboard.",
  },
  {
    question: "Is Opslin hosting my app?",
    answer:
      "No. Opslin is a control plane only. Your applications run on your own VPS. Opslin manages the deployment workflow, not the hosting.",
  },
  {
    question: "Do my apps stay on my server?",
    answer:
      "Yes. Your apps, databases, and containers remain on your own infrastructure. Opslin orchestrates deployments but never hosts your workloads.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Node.js, Python, Go, PHP, Ruby, Java, Rust, static sites, and any project with a Dockerfile or docker-compose file. Runtime detection happens automatically via buildpacks.",
  },
  {
    question: "Is SSL automatic?",
    answer:
      "Yes. When your domain DNS and server ports are properly configured, Opslin automates Let's Encrypt certificate provisioning and renewal.",
  },
  {
    question: "Does it support databases?",
    answer:
      "Yes. You can create Postgres, MySQL, and Redis database services on your own server from the Opslin dashboard. Connection strings are generated automatically.",
  },
  {
    question: "Is Opslin production-ready?",
    answer:
      "Opslin is currently in beta. It is suitable for MVPs, test apps, staging environments, side projects, and internal tools. Critical production workloads should be evaluated carefully, with your own backups and validation in place.",
  },
  {
    question: "What does beta mean?",
    answer:
      "Beta means some features may have bugs, incomplete edge-case handling, downtime, or breaking changes. We are actively improving deployment reliability, database workflows, SSL automation, buildpack support, and dashboard UX.",
  },
  {
    question: "Can I use it for client projects?",
    answer:
      "Yes, for appropriate workloads. Agencies and freelancers can deploy client MVPs, staging apps, and internal tools. For client production workloads, evaluate beta limitations carefully.",
  },
  {
    question: "How is this different from Vercel, Render, or Railway?",
    answer:
      "Those platforms host your app on their infrastructure. Opslin keeps your apps on your own VPS, giving you full server ownership and VPS-level pricing while providing a similar deployment workflow.",
  },
  {
    question: "Do I need Docker knowledge?",
    answer:
      "No. Opslin uses buildpacks to detect your project runtime automatically. Docker knowledge is not required, though you can use a Dockerfile if you prefer.",
  },
  {
    question: "What happens if something fails?",
    answer:
      "Failed deployments are logged with detailed output. You can view error logs, fix the issue, and redeploy. Rollback to a previous working deployment is available with one click.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email hello@shotlin.in for support, feedback, or questions. During beta, response times may vary.",
  },
];

/* ───────── footer ───────── */
export const footerColumns = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Architecture", href: "#architecture" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  resources: [
    { label: "Documentation", href: "https://docshotops.shotlin.in/docs" },
    { label: "Changelog", href: "https://docshotops.shotlin.in/docs" },
    { label: "Beta Status", href: "#beta" },
  ],
  company: [
    { label: "About", href: "#product" },
    { label: "Contact", href: "mailto:hello@shotlin.in" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
