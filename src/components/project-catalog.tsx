"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import type { PortfolioProject, ProjectCategory } from "@/content/projects";

const filters: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All work", value: "all" }, { label: "Client work", value: "client" }, { label: "Products", value: "product" }, { label: "AI & automation", value: "ai-automation" }, { label: "Tools", value: "tool" },
];

export function ProjectCatalog({ projects }: { projects: PortfolioProject[] }) {
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.toLowerCase());
  const visible = projects.filter((project) => (category === "all" || project.category === category) && `${project.title} ${project.summary} ${project.capabilities.join(" ")}`.toLowerCase().includes(deferredQuery));

  return (
    <div>
      <div className="catalog-controls">
        <div className="filter-row" role="group" aria-label="Filter projects by category">{filters.map((filter) => <button type="button" key={filter.value} className={category === filter.value ? "filter active" : "filter"} aria-pressed={category === filter.value} onClick={() => setCategory(filter.value)}>{filter.label}</button>)}</div>
        <label className="search-field"><span className="sr-only">Search projects</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects or capabilities" /></label>
      </div>
      <p className="result-count" aria-live="polite">{visible.length} project{visible.length === 1 ? "" : "s"}</p>
      {visible.length ? <div className="catalog-list">{visible.map((project, index) => <Link className="catalog-item" href={`/work/${project.slug}`} key={project.slug}><span className="catalog-index">{String(index + 1).padStart(2, "0")}</span><div><span className="card-status">{project.category.replace("ai-automation", "AI & automation")} · {project.status}</span><h2>{project.title}</h2><p>{project.summary}</p></div><span className="catalog-arrow" aria-hidden="true">↗</span></Link>)}</div> : <div className="empty-state"><h2>No matching projects</h2><p>Try a different phrase or show all work.</p><button type="button" onClick={() => { setCategory("all"); setQuery(""); }}>Reset filters</button></div>}
    </div>
  );
}
