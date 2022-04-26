module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dax9eijus'),
          api_key: env('841284692463956'),
          api_secret: env('SUh8YsjqurWma3zcTHDYz3caN9s'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });