import { describe, expect, it } from "vitest";
import { publishedProjects } from "./projects";

describe("public portfolio content", () => {
  it("has unique URL-safe slugs", () => {
    const slugs = publishedProjects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9-]+$/.test(slug))).toBe(true);
  });

  it("contains six featured sandbox demos", () => {
    const demos = publishedProjects.filter((project) => project.featured && project.demoId);
    expect(demos).toHaveLength(6);
  });

  it("does not expose local paths or sensitive project names", () => {
    const serialized = JSON.stringify(publishedProjects).toLowerCase();
    expect(serialized).not.toContain("/home/");
    expect(serialized).not.toContain("icbc");
    expect(serialized).not.toContain("debt dispute");
    expect(serialized).not.toContain("account number");
  });
});
