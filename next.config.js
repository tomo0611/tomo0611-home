/** @type {import('next').NextConfig} */
const nextConfig = {
    presets: ['@next/babel'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomer.ch-random.net',
                port: '',
                pathname: '/assets/**',
            },
        ],
    },
}

module.exports = nextConfig
