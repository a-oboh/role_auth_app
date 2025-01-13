const dotenv = require('dotenv');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  development: {
    use_env_variable: 'DEV_DATABASE_URL',
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    // dialect: "postgres",
    dialectOptions: {
      ssl: isProduction,
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
        require: isProduction,
        rejectUnauthorized: !isProduction,
      },
    },
  },
};