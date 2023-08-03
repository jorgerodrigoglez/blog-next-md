/** @type {import('next').NextConfig} */
//const nextConfig = {}
//module.exports = nextConfig

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // indica la carprta en la que tiene que guardar los archivos estáticos
  output: "export",
};

module.exports = withContentlayer(nextConfig);

