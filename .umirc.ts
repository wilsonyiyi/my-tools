import { defineConfig } from "umi";

export default defineConfig({
  base: '/my-tools',
  publicPath: '/my-tools/',
  outputPath: "docs",
  hash: true,
  routes: [
    { path: "/", redirect: 'cookie' },
    { path: "/cookie", component: "parse-cookie" },
  ],
  npmClient: 'npm',
});
