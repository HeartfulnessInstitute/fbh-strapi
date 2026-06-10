// @ts-nocheck
module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
        baseUrl: env('CDN_URL'),
      },
      actionOptions: {
        upload: { ACL: null },
        uploadStream: { ACL: null },
        delete: {},
      },
    },
  },
});