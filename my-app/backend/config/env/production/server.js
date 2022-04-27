module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://flexi-pedikura.herokuapp.com'),
    app: { 
      keys: env.array("APP_KEYS", ["6CeclRvwBc8pA3bkvXLX+g==", "OVcCQAUDpwRnq9VUpl55qw==", "p7Jqd6uG/eBJ+tfviv2CVw==", "Msr/R6uvQscHK8zW75Bi5w=="]),
    },
  })