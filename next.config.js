/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "cdn.sanity.io",
      "avatarart.io",
      "lh4.googleusercontent.com",
      "bvote.vn",
    ],
  },
};
module.exports = nextConfig;
