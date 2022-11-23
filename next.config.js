/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'imdb-api.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'i.discogs.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'st.discogs.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**'
      },
    ]
  }
}

module.exports = nextConfig
