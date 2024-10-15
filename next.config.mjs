/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'i.ibb.co' },
            { hostname: 'streamable.com'}
        ],
    },
};

export default nextConfig;
