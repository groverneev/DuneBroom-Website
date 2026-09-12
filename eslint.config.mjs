import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

// Flat config: Next.js 16 removed `next lint`, and ESLint 10 no longer reads
// .eslintrc.json, so the ruleset is composed directly here.
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default config;
