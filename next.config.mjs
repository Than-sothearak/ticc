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

            {
            protocol: 'https',
            hostname: 'ticc-2026.s3.ap-southeast-1.amazonaws.com', 
          },
            {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com', 
          },
           {
            protocol: 'https',
            hostname: 'marvel-b1-cdn.bc0a.com', 
          },
        ],

        domains: ['lh3.googleusercontent.com', 'photos.fife.usercontent.google.com'],
      },
};

export default nextConfig;
