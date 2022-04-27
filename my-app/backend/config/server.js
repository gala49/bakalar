module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ["6CeclRvwBc8pA3bkvXLX+g==", "OVcCQAUDpwRnq9VUpl55qw==", "p7Jqd6uG/eBJ+tfviv2CVw==", "Msr/R6uvQscHK8zW75Bi5w=="]),
  },
});