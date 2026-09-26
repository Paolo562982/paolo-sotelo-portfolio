import { CommercialDiveDemo } from "@/components/demos/commercial-dive-demo";
import { GuidedDemo } from "@/components/demos/guided-demo";
import type { FeaturedDemoId } from "@/content/projects";

export function ProjectDemo({ demoId }: { demoId: FeaturedDemoId }) {
  return demoId === "commercial-dive-bvi" ? <CommercialDiveDemo /> : <GuidedDemo demoId={demoId} />;
}
