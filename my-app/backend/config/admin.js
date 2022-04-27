module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0cc04264-cbce-4fb9-a281-283108a47970'),
  },
});
