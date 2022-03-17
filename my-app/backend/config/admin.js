module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c8192861f496507cc39cbce41ccddd8'),
  },
});
