module.exports = {
  PORT: process.env.PORT,
  DATABASE: {
    username: process.env.DB_USER_QA,
    password: process.env.DB_PASS_QA,
    database: process.env.DB_NAME_QA,
    host: process.env.DB_HOST_QA,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  },
};
