export type ProjectCategory = "client" | "product" | "ai-automation" | "tool";
export type ProjectStatus = "shipped" | "prototype" | "concept";
export type FeaturedDemoId = "commercial-dive-bvi" | "scrubmarine" | "strawberry-vale" | "tideway" | "maple-bay" | "fifty-acres";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  role: string;
  capabilities: string[];
  technologies: string[];
  featured: boolean;
  publish: boolean;
  demoId?: FeaturedDemoId;
};

export const projects: PortfolioProject[] = [
  {
    slug: "commercial-dive-bvi", title: "Commercial Dive BVI", category: "client", status: "prototype", featured: true, publish: true, demoId: "commercial-dive-bvi",
    summary: "A modern, editable client-review website for a specialist commercial-diving company in the British Virgin Islands.",
    problem: "Specialist services, technical credibility, and urgent customer needs had to become clear without turning a serious marine business into generic marketing.",
    approach: "I redesigned the customer journey, organized services around real decisions, built an image-led Next.js experience, and created safe content and inquiry workflows for client review.",
    outcome: "A responsive review site with clearer service discovery, structured project proof, managed content, and a controlled path toward production forms and publishing.",
    role: "Strategy, UX, visual design, full-stack engineering", capabilities: ["Content architecture", "Responsive design", "CMS integration", "Safe form design"], technologies: ["Next.js", "TypeScript", "Sanity", "Vercel"],
  },
  {
    slug: "scrubmarine", title: "ScrubMarine", category: "client", status: "shipped", featured: true, publish: true, demoId: "scrubmarine",
    summary: "A public marine-services website paired with a working service-intake and operations prototype.",
    problem: "Customers needed a simpler way to understand marine services, while the business needed a path from first request through estimate, scheduling, field work, and reporting.",
    approach: "I connected a conversion-focused public site to a synthetic, mobile-first workflow that demonstrates intake, job routing, estimates, and customer history without touching live operations.",
    outcome: "A practical digital service journey and a validated product direction for managing repeat marine work from one workspace.",
    role: "Product strategy, UX, prototyping, engineering", capabilities: ["Service design", "Workflow modeling", "Mobile UX", "Offline prototypes"], technologies: ["HTML", "CSS", "TypeScript", "IndexedDB"],
  },
  {
    slug: "strawberry-vale-osc", title: "Strawberry Vale OSC", category: "client", status: "shipped", featured: true, publish: true, demoId: "strawberry-vale",
    summary: "An accessible, maintainable website and document hub for a community out-of-school-care society.",
    problem: "Families needed current program information and forms quickly, while staff needed a manageable publishing workflow that did not make the site fragile.",
    approach: "I built clear program routes, searchable resources, document workflows, and an optional visual editing portal with a local-content fallback.",
    outcome: "A responsive information system that makes common family tasks easier and gives the organization a safer way to keep content current.",
    role: "Information architecture, UX, engineering", capabilities: ["Accessible content", "Document systems", "CMS workflows", "Progressive enhancement"], technologies: ["Next.js", "TypeScript", "Sanity", "Vercel"],
  },
  {
    slug: "tideway-web-co", title: "Tideway Web Co.", category: "client", status: "concept", featured: true, publish: true, demoId: "tideway",
    summary: "A conversion-focused studio concept for Vancouver Island businesses that need clear, dependable web work.",
    problem: "Small organizations often face vague packages, unclear timelines, and sites that look polished but do not support a business goal.",
    approach: "I translated a scalable service model into a straightforward offer, project-fit flow, and concise brief-building experience.",
    outcome: "A complete agency concept that demonstrates positioning, packaging, lead qualification, and restrained editorial design.",
    role: "Business modeling, brand direction, design, development", capabilities: ["Offer design", "Conversion strategy", "Brand systems", "Static sites"], technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "maple-bay-farm", title: "Maple Bay Farm", category: "client", status: "prototype", featured: true, publish: true, demoId: "maple-bay",
    summary: "A warm, responsive farm refresh centered on short stays, community visits, and availability requests.",
    problem: "The site needed to retire outdated offers, introduce new experiences honestly, and preserve the farm’s existing identity and heritage.",
    approach: "I reorganized the experience around three current visitor goals, reused verified public imagery, and designed structured request paths around known information gaps.",
    outcome: "A grounded, mobile-friendly concept that communicates what is available while clearly separating confirmed details from items still awaiting owner input.",
    role: "Content strategy, UX, visual design, development", capabilities: ["Content migration", "Trust design", "Responsive layout", "Request flows"], technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "50-acres-media", title: "50 Acres Media", category: "client", status: "concept", featured: true, publish: true, demoId: "fifty-acres",
    summary: "A visual service concept for real-estate photography, video, aerial media, and home staging.",
    problem: "Property professionals need to compare services quickly and understand how a media package supports a specific listing.",
    approach: "I designed a portfolio-led experience with useful service filtering, package comparison, and a brief that starts with the property rather than a generic contact form.",
    outcome: "A focused concept site that demonstrates visual storytelling, service packaging, and a low-friction route from browsing to a useful project brief.",
    role: "Positioning, UX, visual design, development", capabilities: ["Portfolio UX", "Package design", "Visual hierarchy", "Lead qualification"], technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "codex-agentic-os", title: "Codex Agentic OS", category: "ai-automation", status: "prototype", featured: false, publish: true,
    summary: "A privacy-bounded, read-only command center for understanding a multi-project AI workspace.", problem: "A growing workspace made priority, project location, and safe next actions difficult to see at a glance.", approach: "I created a validated snapshot model, visual workspace map, project search, and explicit no-write boundaries.", outcome: "A local dashboard that makes the workspace legible without exposing live files or granting action capability.", role: "Product design, systems architecture, engineering", capabilities: ["AI systems", "Information architecture", "Privacy boundaries"], technologies: ["React", "TypeScript", "Vinext"],
  },
  {
    slug: "bidstruct", title: "BidStruct", category: "product", status: "prototype", featured: false, publish: true,
    summary: "A governed workspace for turning complex solicitations into evaluator-aligned proposal plans.", problem: "RFP teams lose time tracing requirements, amendments, evidence, approvals, and response readiness across disconnected files.", approach: "I designed a structured opportunity model, evaluation matrix, evidence map, amendment register, approval gates, and professional document export.", outcome: "A private enterprise pilot with explicit security boundaries and a controlled path to production identity, scanning, and hosting.", role: "Product strategy, UX, full-stack engineering", capabilities: ["Enterprise workflows", "Document generation", "AI governance"], technologies: ["React", "TypeScript", "Cloudflare D1", "R2"],
  },
  {
    slug: "operateahead", title: "OperateAhead", category: "product", status: "prototype", featured: false, publish: true,
    summary: "A mobile-first operations platform for service businesses, first modeled around marine work.", problem: "Requests, jobs, crews, customer communication, inspections, invoices, and repeat work often live in separate tools.", approach: "I modeled the full service lifecycle and built a role-aware front-end vertical slice using synthetic business data.", outcome: "A functional product prototype covering CRM, scheduling, field work, documents, and financial planning with clear production milestones.", role: "Founder, product designer, engineer", capabilities: ["CRM design", "Operational workflows", "Role-based UX"], technologies: ["TypeScript", "IndexedDB", "PWA"],
  },
  {
    slug: "project-planner", title: "Project Planner", category: "tool", status: "shipped", featured: false, publish: true,
    summary: "A local-first planner combining priorities, scheduling, follow-ups, reflection, and private financial planning.", problem: "Planning tools rarely reflect irregular work, recurring responsibilities, safe local data, and the need to recover from conflicting edits.", approach: "I built revision-checked atomic saves, backups, import/export, recurring schedules, dry-run calendar sync, and separated sensitive finance storage.", outcome: "A dependable loopback-only tool with tested recovery paths and deliberate boundaries around accounts, calendars, and financial actions.", role: "Product design, reliability engineering", capabilities: ["Local-first software", "Data integrity", "Safety design"], technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    slug: "codexvoice", title: "CodexVoice", category: "ai-automation", status: "shipped", featured: false, publish: true,
    summary: "A local wake-word service and animated desktop companion for hands-free Codex interaction.", problem: "Voice access needed to be fast and always available without continuously sending room audio to a cloud service.", approach: "I combined local wake-word detection and transcription with half-duplex speech, explicit approval handling, an animated GTK interface, and failure-closed interaction rules.", outcome: "A boot-automatic voice system and desktop app with verified animation, input, cleanup, and privacy behavior.", role: "Systems design, Python engineering, interaction design", capabilities: ["Voice interfaces", "Linux services", "Privacy engineering"], technologies: ["Python", "GTK", "PipeWire", "Sherpa-ONNX"],
  },
  {
    slug: "assistant-ops", title: "Assistant Ops", category: "ai-automation", status: "prototype", featured: false, publish: true,
    summary: "A safe preview-and-confirm operations layer for assistant-driven CRM work.", problem: "Account-connected automation needs to remain useful without silently changing remote systems.", approach: "I implemented a local workflow that separates data inspection, exact change previews, credential handling, and confirmed commits.", outcome: "A tested control pattern for keeping consequential CRM actions reviewable and intentionally authorized.", role: "Workflow design, safety engineering", capabilities: ["Human-in-the-loop systems", "CRM automation", "Auditability"], technologies: ["Python", "HubSpot API"],
  },
  {
    slug: "sotelo-works", title: "Sotelo Works", category: "client", status: "shipped", featured: false, publish: true,
    summary: "A live, responsive small-business website with a practical follow-up path for form delivery verification.", problem: "A service business needed a credible public presence that remained lightweight and maintainable.", approach: "I created a focused marketing experience and documented the remaining operational check for inquiry notifications.", outcome: "A deployed site with its next reliability step made explicit rather than hidden behind a launch claim.", role: "Design and development", capabilities: ["Small-business websites", "Responsive design"], technologies: ["HTML", "CSS", "Netlify"],
  },
  {
    slug: "operateahead-services", title: "OperateAhead Services", category: "client", status: "prototype", featured: false, publish: true,
    summary: "A service-business website and launch system for turning technical capability into a clear commercial offer.", problem: "The business needed a coherent story, service structure, and protected review process before public launch.", approach: "I built a concise site around outcomes, proof, and clear next steps, then connected it to a controlled Vercel review workflow.", outcome: "A verified preview ready for final operating details, privacy review, and an explicitly approved public launch.", role: "Strategy, copy structure, design, engineering", capabilities: ["Go-to-market sites", "Review workflows"], technologies: ["Next.js", "Vercel"],
  },
  {
    slug: "gnome-panel-timer", title: "GNOME Panel Timer", category: "tool", status: "shipped", featured: false, publish: true,
    summary: "A compact countdown utility built for the GNOME desktop panel.", problem: "A lightweight, always-visible timer was more useful than a separate productivity application.", approach: "I packaged a focused extension around a small interaction surface and native desktop conventions.", outcome: "A retained, packaged utility that demonstrates practical Linux desktop integration.", role: "Design and development", capabilities: ["Desktop utilities", "Linux integration"], technologies: ["JavaScript", "GNOME Shell"],
  },
];

export const publishedProjects = projects.filter((project) => project.publish);
export const featuredProjects = publishedProjects.filter((project) => project.featured);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}
