const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
    
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: "ec2-54-228-32-29.eu-west-1.compute.amazonaws.com",
        port: 5432,
        database: "d40k4graseor9v",
        user: "lalzwwmvxmfcor",
        password: "92b6f303b25861d63c21a5beddcce1f0507469d0c5ddccd2fbf6053cfcb06162",
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });