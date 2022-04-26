const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
    
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: ec2-63-32-248-14.eu-west-1.compute.amazonaws.com,
        port: 5432,
        database: d3qii2evpu21qc,
        user: nnefynmkrvrobq,
        password: 2415127c6a3ebb478fd34faf45341be2187e697558b2e9389b2870188c400e57,
        ssl: {
          rejectUnauthorized: false
        },
      },
      debug: false,
    },
  });