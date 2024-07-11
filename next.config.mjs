/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com', 
          },
        ],

        domains: ['lh3.googleusercontent.com', 'photos.fife.usercontent.google.com'],
      },
};

export default nextConfig;
