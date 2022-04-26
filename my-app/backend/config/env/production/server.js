module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://flexi-pedikura.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })