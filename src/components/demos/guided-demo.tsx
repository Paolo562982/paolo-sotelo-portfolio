"use client";

import { useEffect, useState } from "react";
import type { FeaturedDemoId } from "@/content/projects";

type DemoConfig = {
  shortName: string;
  prompt: string;
  options: { label: string; detail: string }[];
  secondPrompt: string;
  secondOptions: string[];
  resultTitle: string;
  resultText: (primary: string, secondary: string) => string;
};

const configs: Record<Exclude<FeaturedDemoId, "commercial-dive-bvi">, DemoConfig> = {
  scrubmarine: {
    shortName: "ScrubMarine service intake", prompt: "What needs attention?",
    options: [{ label: "Vessel care", detail: "Cleaning, anodes, propeller, or inspection." }, { label: "Dock inspection", detail: "Visual review of underwater components." }, { label: "Mooring service", detail: "Condition review, recovery, or re-mooring." }],
    secondPrompt: "How soon?", secondOptions: ["Routine", "This week", "Urgent"], resultTitle: "Service request staged",
    resultText: (a, b) => `${a} has been routed as a ${b.toLowerCase()} request. A real workflow would now review location, access, and evidence before confirming work.`,
  },
  "strawberry-vale": {
    shortName: "Family resource finder", prompt: "What are you looking for?",
    options: [{ label: "Program details", detail: "Hours, ages, approach, and daily routines." }, { label: "Registration", detail: "Forms and the steps families need to prepare." }, { label: "Policies & resources", detail: "Frequently used documents in one place." }],
    secondPrompt: "Who is this for?", secondOptions: ["Current family", "New family", "Community member"], resultTitle: "Best path found",
    resultText: (a, b) => `${b}: start with ${a.toLowerCase()}. The live site keeps this path short and pairs it with current documents and plain-language guidance.`,
  },
  tideway: {
    shortName: "Project-fit builder", prompt: "What would move the business forward?",
    options: [{ label: "New website", detail: "A focused presence built around a clear offer." }, { label: "Website refresh", detail: "Keep what works and fix the experience around it." }, { label: "Operational tool", detail: "Turn a repeated manual process into a useful system." }],
    secondPrompt: "Top priority", secondOptions: ["More inquiries", "Clearer story", "Less admin"], resultTitle: "Starter brief ready",
    resultText: (a, b) => `${a}, optimized for ${b.toLowerCase()}. This preview turns two useful choices into a clearer first conversation—without a generic form.`,
  },
  "maple-bay": {
    shortName: "Farm visit planner", prompt: "Choose an experience",
    options: [{ label: "Dome stay", detail: "A short countryside stay in the honeycomb dome." }, { label: "Petting zoo", detail: "A Sunday community visit by donation." }, { label: "Storage inquiry", detail: "Ask about current container availability." }],
    secondPrompt: "Party size", secondOptions: ["1–2 people", "3–4 people", "5+ people"], resultTitle: "Visit outline prepared",
    resultText: (a, b) => `${a} for ${b.toLowerCase()}. The real request flow would confirm dates and missing details before anything is sent.`,
  },
  "fifty-acres": {
    shortName: "Listing media builder", prompt: "What are you marketing?",
    options: [{ label: "Residential listing", detail: "A complete visual story for a home." }, { label: "Land or acreage", detail: "Scale, context, access, and aerial perspective." }, { label: "Premium property", detail: "A layered campaign across stills, motion, and staging." }],
    secondPrompt: "Primary asset", secondOptions: ["Photography", "Video", "Aerial media"], resultTitle: "Media direction selected",
    resultText: (a, b) => `${b} will lead the package for this ${a.toLowerCase()}. A real brief would next collect timing, access, and listing goals.`,
  },
};

declare global {
  interface Document {
    modelContext?: {
      registerTool: (tool: { name: string; title?: string; description: string; inputSchema: object; annotations?: { readOnlyHint?: boolean; untrustedContentHint?: boolean }; execute: (input: unknown) => unknown }, options?: { signal?: AbortSignal }) => void | Promise<void>;
    };
  }
}

export function GuidedDemo({ demoId }: { demoId: Exclude<FeaturedDemoId, "commercial-dive-bvi"> }) {
  const config = configs[demoId];
  const [primary, setPrimary] = useState(config.options[0].label);
  const [secondary, setSecondary] = useState(config.secondOptions[0]);
  const [complete, setComplete] = useState(false);
  const chosen = config.options.find((option) => option.label === primary) ?? config.options[0];

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const allowed = new Set(config.options.map((option) => option.label));
    void Promise.resolve(context.registerTool({
      name: `select_${demoId.replaceAll("-", "_")}_preview`, title: `Configure ${config.shortName}`,
      description: `Select an option in the visible ${config.shortName} sandbox. This changes browser-only preview state and sends nothing.`,
      inputSchema: { type: "object", properties: { option: { type: "string", enum: [...allowed] } }, required: ["option"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const option = typeof input === "object" && input !== null && "option" in input ? String(input.option) : "";
        if (!allowed.has(option)) throw new Error("Choose one of the documented preview options.");
        setPrimary(option); setComplete(false);
        return { project: demoId, selection: option, sandbox: true };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, [config, demoId]);

  function reset() { setPrimary(config.options[0].label); setSecondary(config.secondOptions[0]); setComplete(false); }

  return (
    <div className="guided-demo" aria-label={config.shortName}>
      <div className="guided-head"><div><span className="sandbox-indicator" /> Interactive preview</div><button type="button" onClick={reset}>Reset</button></div>
      <div className="guided-grid">
        <section><p className="step-label">01 / {config.prompt}</p><div className="choice-stack">
          {config.options.map((option) => <button type="button" key={option.label} className={primary === option.label ? "choice active" : "choice"} aria-pressed={primary === option.label} onClick={() => { setPrimary(option.label); setComplete(false); }}><strong>{option.label}</strong><span>{option.detail}</span></button>)}
        </div></section>
        <section className="guided-result"><p className="step-label">02 / {config.secondPrompt}</p><div className="chip-group">
          {config.secondOptions.map((option) => <button type="button" key={option} className={secondary === option ? "chip active" : "chip"} aria-pressed={secondary === option} onClick={() => { setSecondary(option); setComplete(false); }}>{option}</button>)}
        </div><div className="selection-preview"><span>Current selection</span><strong>{chosen.label}</strong><p>{chosen.detail}</p></div>
          <button type="button" className="demo-action" onClick={() => setComplete(true)}>Build preview</button>
          {complete ? <div className="demo-complete" aria-live="polite"><span>Preview only · nothing sent</span><h4>{config.resultTitle}</h4><p>{config.resultText(primary, secondary)}</p></div> : null}
        </section>
      </div>
    </div>
  );
}
