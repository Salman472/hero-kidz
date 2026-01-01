/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        // port: '',
        // pathname: 'p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg',
        // search: '',
      },
    ],
  },
  // 
};

export default nextConfig;
