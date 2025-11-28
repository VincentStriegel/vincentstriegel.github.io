/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    // Exclude Playwright tests
    exclude: ["node_modules", "tests/**/*"],
  },
});
