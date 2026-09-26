import Link from "next/link";
import { CommercialDiveDemo } from "@/components/demos/commercial-dive-demo";
import { featuredProjects } from "@/content/projects";

const disciplines = ["Product systems", "Web experiences", "AI workflows", "Automation"];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span aria-hidden="true" /> Designer · developer · systems builder</p>
          <h1 id="hero-title">I turn complicated work into tools people can actually use.</h1>
          <p className="hero-lede">I’m Paolo Sotelo. I build practical digital products, polished websites, and thoughtful automation—from the first messy problem to a working system.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore the work</a>
            <Link className="button button-secondary" href="/about">My approach</Link>
          </div>
          <ul className="discipline-list" aria-label="Capabilities">
            {disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}
          </ul>
        </div>

        <aside className="signal-card" aria-label="Current practice overview">
          <div className="signal-topline"><span>Practice signal</span><span>2026</span></div>
          <div className="signal-orbit" aria-hidden="true">
            <span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="signal-dot" />
          </div>
          <div className="signal-readout"><span>Building at the intersection of</span><strong>business clarity + technical craft</strong></div>
        </aside>
      </section>

      <section className="workbench-section" id="work" aria-labelledby="workbench-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow"><span aria-hidden="true" /> Interactive case study</p><h2 id="workbench-title">Don’t just read about the work. Try it.</h2></div>
            <p>This safe preview uses sample data and cannot send, save, or change anything outside your browser.</p>
          </div>
          <CommercialDiveDemo />
        </div>
      </section>
      <section className="featured-section shell" aria-labelledby="featured-title">
        <div className="section-heading"><div><p className="eyebrow"><span aria-hidden="true" /> Selected client work</p><h2 id="featured-title">Different businesses. The same standard of care.</h2></div><Link className="text-link" href="/work">View all projects <span aria-hidden="true">↗</span></Link></div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Link className="project-card" href={`/work/${project.slug}`} key={project.slug}>
              <span className="card-number">0{index + 1}</span><span className="card-status">{project.status}</span>
              <h3>{project.title}</h3><p>{project.summary}</p>
              <div className="tag-row">{project.capabilities.slice(0, 2).map((item) => <span key={item}>{item}</span>)}</div>
              <span className="card-link">Open case study <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="philosophy-section shell">
        <p className="large-statement">Good technology should make the work feel <em>lighter</em>, the decision feel <em>clearer</em>, and the next step feel <em>possible</em>.</p>
        <Link className="button button-secondary" href="/about">How I work</Link>
      </section>
    </main>
  );
}
