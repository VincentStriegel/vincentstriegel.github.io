import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";

import ProjectCard from "./ProjectCard.astro";

test("ProjectCard renders with valid project data", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ProjectCard, {
    props: {
      project: {
        title: "Test Project",
        code: "test-project",
        shortDescription: "A test description",
        coverImage: "test.jpg",
      },
    },
  });

  expect(result).toContain("Test Project");
  expect(result).toContain("A test description");
  expect(result).toContain('src="/images/test.jpg"');
  expect(result).toContain('alt="Test Project"');
  expect(result).toContain('href="/project/test-project"');
  console.log(result);
});

test("ProjectCard uses placeholder when coverImage is empty", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(ProjectCard, {
    props: {
      project: {
        title: "Test",
        code: "test",
        shortDescription: "Hello World",
        coverImage: "",
      },
    },
  });

  expect(result).toContain('src="placeholder.svg"');
});
