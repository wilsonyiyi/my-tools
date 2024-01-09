import { defineConfig } from "umi";
const publicPath = process.env.NODE_ENV === "production" ? "/my-tools/" : "/"

export default defineConfig({
  base: "/my-tools",
  publicPath,
  outputPath: "docs",
  hash: true,
  routes: [
    { path: "/", redirect: "cookie" },
    { path: "/cookie", component: "parse-cookie" },
  ],
  npmClient: "npm",
});
