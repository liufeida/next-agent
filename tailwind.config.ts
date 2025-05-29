module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // This might be too broad
    // It will match `packages/**/node_modules` too
    // '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
};
