import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GuidedDemo } from "./guided-demo";

describe("GuidedDemo", () => {
  afterEach(() => { delete document.modelContext; });

  it("builds and resets a synthetic preview", () => {
    render(<GuidedDemo demoId="scrubmarine" />);
    fireEvent.click(screen.getByRole("button", { name: /dock inspection/i }));
    fireEvent.click(screen.getByRole("button", { name: /urgent/i }));
    fireEvent.click(screen.getByRole("button", { name: /build preview/i }));
    expect(screen.getByText("Service request staged")).toBeInTheDocument();
    expect(screen.getByText(/nothing sent/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.queryByText("Service request staged")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /vessel care/i })).toHaveAttribute("aria-pressed", "true");
  });

  it("registers a bounded WebMCP sandbox tool when the browser supports it", async () => {
    const registerTool = vi.fn();
    document.modelContext = { registerTool };
    render(<GuidedDemo demoId="tideway" />);
    expect(registerTool).toHaveBeenCalledOnce();
    const tool = registerTool.mock.calls[0][0];
    expect(tool.name).toBe("select_tideway_preview");
    expect(tool.annotations.readOnlyHint).toBe(false);
    expect(tool.execute({ option: "New website" })).toEqual({ project: "tideway", selection: "New website", sandbox: true });
    expect(() => tool.execute({ option: "Send a real form" })).toThrow(/documented preview options/i);
  });
});
