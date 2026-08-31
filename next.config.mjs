/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static: no server runtime needed, deploys as plain files.
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
