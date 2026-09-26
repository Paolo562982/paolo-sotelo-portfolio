"use client";

import { useEffect, useState } from "react";

const services = [
  { id: "inspection", label: "Underwater inspection", detail: "Visual condition reporting for vessels, docks, and marine infrastructure." },
  { id: "maintenance", label: "Vessel maintenance", detail: "In-water cleaning, anodes, propeller work, and practical service records." },
  { id: "commercial", label: "Commercial diving", detail: "A clear route from an urgent marine problem to a qualified field response." },
] as const;

export function CommercialDiveDemo() {
  const [selected, setSelected] = useState<(typeof services)[number]>(services[0]);
  const [briefOpen, setBriefOpen] = useState(false);

  function reset() { setSelected(services[0]); setBriefOpen(false); }

  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const allowed = new Set(services.map((service) => service.id));
    void Promise.resolve(context.registerTool({
      name: "select_commercial_dive_service_preview",
      title: "Choose a Commercial Dive service",
      description: "Select a marine service in the visible sandbox. This changes browser-only preview state and sends nothing.",
      inputSchema: { type: "object", properties: { service: { type: "string", enum: [...allowed] } }, required: ["service"], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const id = typeof input === "object" && input !== null && "service" in input ? String(input.service) : "";
        const service = services.find((item) => item.id === id);
        if (!service) throw new Error("Choose one of the documented preview services.");
        setSelected(service); setBriefOpen(false);
        return { project: "commercial-dive-bvi", selection: service.label, sandbox: true };
      },
    }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  return (
    <article className="demo-frame">
      <div className="demo-chrome">
        <div className="demo-dots" aria-hidden="true"><span /><span /><span /></div>
        <span className="demo-address">preview / commercial-dive-bvi</span><span className="demo-badge">Sandbox</span>
      </div>
      <div className="demo-layout">
        <div className="demo-story">
          <p className="project-index">01 / Commercial Dive BVI</p>
          <h3>A modern client journey for complex marine work.</h3>
          <p>The redesign turns specialist services into an experience customers can understand, trust, and act on—without flattening the technical depth behind the work.</p>
          <dl className="project-facts">
            <div><dt>Role</dt><dd>Strategy, design, engineering</dd></div><div><dt>Focus</dt><dd>Clarity, credibility, conversion</dd></div>
          </dl>
        </div>

        <div className="demo-product" aria-label="Commercial Dive BVI service explorer">
          <div className="demo-product-head">
            <div><span className="mini-mark">CD</span><strong>Find the right service</strong></div><button type="button" onClick={reset}>Reset</button>
          </div>
          <div className="service-picker" role="group" aria-label="Choose a marine service">
            {services.map((service) => (
              <button className={selected.id === service.id ? "service-option active" : "service-option"} key={service.id} onClick={() => { setSelected(service); setBriefOpen(false); }} type="button" aria-pressed={selected.id === service.id}>
                <span>{service.label}</span><span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className="service-result" aria-live="polite">
            <p>Selected service</p><h4>{selected.label}</h4><p>{selected.detail}</p>
            <button className="demo-action" type="button" onClick={() => setBriefOpen((value) => !value)}>{briefOpen ? "Close sample brief" : "Build a sample brief"}</button>
            {briefOpen && <div className="sample-brief"><strong>Brief ready for review</strong><span>Service: {selected.label}</span><span>Location: Road Town, Tortola · sample</span><small>Preview only—nothing has been submitted.</small></div>}
          </div>
        </div>
      </div>
    </article>
  );
}
