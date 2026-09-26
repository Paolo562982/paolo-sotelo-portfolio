import type { MetadataRoute } from "next";
import { publishedProjects } from "@/content/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://paolo-sotelo-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/about"].map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  return [...staticRoutes, ...publishedProjects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: project.featured ? 0.8 : 0.6 }))];
}
