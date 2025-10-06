/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // active la prise en charge du dossier app
  },
  // permet à Next.js de reconnaître les routes API dans src/app
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig
