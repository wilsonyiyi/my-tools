import { defineConfig } from "umi";

export default defineConfig({
  base: '/my-tools/',
  outputPath: "docs",
  hash: true,
  routes: [
    { path: "/", redirect: 'parse-cookie' },
    { path: "/parse-cookie", component: "parse-cookie" },
  ],
  npmClient: 'npm',
});
