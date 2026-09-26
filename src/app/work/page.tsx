import type { Metadata } from "next";
import { ProjectCatalog } from "@/components/project-catalog";
import { publishedProjects } from "@/content/projects";

export const metadata: Metadata = { title: "Work", description: "Client websites, products, AI workflows, automation, and practical tools built by Paolo Sotelo." };

export default function WorkPage() {
  return <main id="main-content" className="page-main shell"><header className="page-intro"><p className="eyebrow"><span aria-hidden="true" /> Project catalog</p><h1>Work built to be useful—not just impressive.</h1><p>Client websites, operational products, AI systems, and small tools. Every project starts with the real work someone is trying to do.</p></header><ProjectCatalog projects={publishedProjects} /></main>;
}
