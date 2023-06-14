/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['res.cloudinary.com', "fakestoreapi.com"]
  },
  env:{
    public_key: process.env.NEXT_STRIPE_PUBLIC,
    secret_key: process.env.NEXT_STRIPE_SECRET_KEY
  }
}

module.exports = nextConfig
