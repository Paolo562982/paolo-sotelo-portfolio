import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDemo } from "@/components/project-demo";
import { getProject, publishedProjects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return publishedProjects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <main id="main-content" className="case-main">
      <header className="case-hero shell">
        <Link className="back-link" href="/work">← All work</Link><p className="eyebrow"><span aria-hidden="true" /> {project.category.replace("ai-automation", "AI & automation")} · {project.status}</p>
        <h1>{project.title}</h1><p className="case-summary">{project.summary}</p>
        <div className="case-meta"><div><span>My role</span><strong>{project.role}</strong></div><div><span>Built with</span><strong>{project.technologies.join(" · ")}</strong></div></div>
      </header>
      <section className="case-narrative shell" aria-label="Case study">
        <div><span>01</span><h2>The problem</h2><p>{project.problem}</p></div><div><span>02</span><h2>The approach</h2><p>{project.approach}</p></div><div><span>03</span><h2>The outcome</h2><p>{project.outcome}</p></div>
      </section>
      {project.demoId ? <section className="case-demo"><div className="shell"><div className="section-heading"><div><p className="eyebrow"><span aria-hidden="true" /> Safe sandbox</p><h2>Try a limited preview.</h2></div><p>Explore a representative workflow using synthetic data. It does not submit forms, save records, or connect to a real business system.</p></div><ProjectDemo demoId={project.demoId} /></div></section> : <section className="system-section shell" aria-labelledby="system-title"><p className="eyebrow"><span aria-hidden="true" /> System view</p><h2 id="system-title">From friction to a working tool.</h2><div className="system-map"><article><span>Input</span><strong>Real-world constraint</strong><p>{project.problem}</p></article><i aria-hidden="true">→</i><article><span>System</span><strong>{project.capabilities[0]}</strong><p>{project.approach}</p></article><i aria-hidden="true">→</i><article><span>Result</span><strong>Useful outcome</strong><p>{project.outcome}</p></article></div></section>}
      <section className="capability-band shell"><p className="eyebrow"><span aria-hidden="true" /> Capabilities demonstrated</p><div>{project.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div></section>
      <nav className="case-next shell" aria-label="More work"><span>Keep exploring</span><Link href="/work">See every project <span aria-hidden="true">↗</span></Link></nav>
    </main>
  );
}
