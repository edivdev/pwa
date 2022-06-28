module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env:{
    newsletterService:process.env.NEWSLETTER_SERVICE,
    newsletterTemplate:process.env.NEWSLETTER_TEMPLATE_ID,
    newsletterKey:process.env.NEWSLETTER_PUBLIC_K
  }
}
