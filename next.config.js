module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["educacion-diversa.s3.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
  },
  env: {
    newsletterService: process.env.NEWSLETTER_SERVICE,
    newsletterTemplate: process.env.NEWSLETTER_TEMPLATE_ID,
    newsletterKey: process.env.NEWSLETTER_PUBLIC_K,
    volunteersTemplate: process.env.VOLUNTEERS_TEMPLATE_ID,
    contactFormTemplate: process.env.CONTACT_FORM_TEMPLATE,
    backendUrl: process.env.BACKEND_URL,
  },
};
