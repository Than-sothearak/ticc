/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com', 
          },

           {
            protocol: 'https',
            hostname: 'thearak-next-computer.s3.ap-southeast-1.amazonaws.com', 
          },
        ],

        domains: ['lh3.googleusercontent.com', 'photos.fife.usercontent.google.com'],
      },
};

export default nextConfig;
