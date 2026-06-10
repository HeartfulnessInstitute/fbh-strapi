// @ts-nocheck
module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            process.env.CSP_IMG_SRC_1 || '',
            process.env.CSP_IMG_SRC_2 || '',
          ].filter(Boolean),
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            process.env.CSP_IMG_SRC_1 || '',
            process.env.CSP_IMG_SRC_2 || '',
          ].filter(Boolean),
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];