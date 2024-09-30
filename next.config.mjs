/** @type {import('next').NextConfig} */

export default {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com"],
  },
  compiler: {
    styledComponents: true, // For enabling styled-components support
  },
};
