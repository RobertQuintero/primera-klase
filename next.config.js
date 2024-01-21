/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // appDir: true,
        // serverActions: true
    },
    images: {
        domains: ['cdn.sanity.io'],
        remotePatterns: [
            {
            hostname:'utfs.io'
            }
        ],
    },
}

module.exports = nextConfig
