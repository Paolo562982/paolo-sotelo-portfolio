import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "How Paolo Sotelo approaches products, websites, automation, and the people who use them." };

const principles = [
  ["Start with the real work", "I look past the requested feature to understand the decision, friction, or repeated effort underneath it."],
  ["Make safety visible", "Privacy, permissions, confirmations, and recovery paths are part of the experience—not notes added at the end."],
  ["Build the useful version", "I prefer a working, understandable slice that proves value over a large system nobody can confidently operate."],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main shell">
      <header className="about-hero"><p className="eyebrow"><span aria-hidden="true" /> About Paolo</p><h1>I’m interested in what happens when technology meets the messiness of real life.</h1><div className="about-lede"><p>I design and build websites, operational tools, AI workflows, and small systems that help people understand what matters and act with confidence.</p><p>My work moves between strategy, writing, interface design, engineering, and the unglamorous reliability details that make a tool trustworthy. I’m happiest where those disciplines overlap.</p></div></header>
      <section className="about-story"><div className="story-marker">PS / VI</div><div><h2>A practical path</h2><p>I’ve built for marine-service businesses, community organizations, proposal teams, and my own daily work. That range taught me that good software is rarely about adding the most features. It is about noticing the shape of the work, respecting the people doing it, and removing uncertainty one decision at a time.</p><p>I’m based on Vancouver Island. Outside the screen, I’m drawn to hands-on problems, local businesses, learning how systems fit together, and making complicated things feel less intimidating.</p></div></section>
      <section className="principles-section"><p className="eyebrow"><span aria-hidden="true" /> Working principles</p><div className="principles-grid">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
      <section className="about-cta"><p>Have a project that needs both clear thinking and hands-on building?</p><a className="button button-primary" href="mailto:paolosotelo@outlook.com">Start a conversation</a><Link className="text-link" href="/work">Or explore the work ↗</Link></section>
    </main>
  );
}
