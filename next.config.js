/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: `@import "./src/styles/_variables.scss";`,
  },
};

module.exports = nextConfig;
