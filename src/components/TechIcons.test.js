import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test, describe } from "vitest";

import TechIcons from "./TechIcons.astro";

describe("TechIcons component", () => {
  test("renders multiple tech icons", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(TechIcons, {
      props: {
        techIcons: ["React", "TypeScript", "Node.js"],
      },
    });

    expect(result).toContain('class="icons-container"');
    expect(result).toContain('alt="React"');
    expect(result).toContain('alt="TypeScript"');
    expect(result).toContain('alt="Node.js"');
    expect(result).toContain('title="React"');
    expect(result).toContain('title="TypeScript"');
    expect(result).toContain('title="Node.js"');
  });

  test("renders empty container when no icons provided", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(TechIcons, {
      props: {
        techIcons: [],
      },
    });

    expect(result).toContain('class="icons-container"');
  });

  test("converts icon names to correct file paths", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(TechIcons, {
      props: {
        techIcons: ["JavaScript", "Spring Boot"],
      },
    });

    expect(result).toContain("javascript");
    expect(result).toContain("spring_boot");
  });

  test("handles icons with spaces in names", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(TechIcons, {
      props: {
        techIcons: ["Visual Studio Code"],
      },
    });

    expect(result).toContain('alt="Visual Studio Code"');
    expect(result).toContain('title="Visual Studio Code"');
  });

  test("renders single tech icon", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(TechIcons, {
      props: {
        techIcons: ["Python"],
      },
    });

    expect(result).toContain('class="tech-icon"');
    expect(result).toContain('alt="Python"');
    expect(result).toContain('title="Python"');
  });
});
