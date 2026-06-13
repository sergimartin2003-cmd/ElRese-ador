/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permitimos servir las imágenes placeholder de Unsplash con next/image.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
