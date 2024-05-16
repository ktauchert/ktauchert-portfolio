/** @type {import('next').NextConfig} */
const nextConfig = {
    skipTrailingSlashRedirect: true,
    trailingSlash: true,
    output: "export",
    images: { unoptimized: true },
};

export default nextConfig;
