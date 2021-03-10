module.exports = {
  PORT: process.env.PORT,
  DATABASE: {
    username: process.env.DB_USER_LOCAL,
    password: process.env.DB_PASS_LOCAL,
    database: process.env.DB_NAME_LOCAL,
    host: process.env.DB_HOST_LOCAL,
    dialect: 'mssql',
    dialectOptions: {
      /* options: {
        encrypt: true,
        trustServerCertificate: true,
      }, */
    },
    //logging: true
  },
  AZURE_BLOB_STORAGE: {
    containerCarrier: process.env.AZURE_CONTAINER_NAME_FILES_CARRIER_DEVELOPMENT,
    containerUniTransport: process.env.AZURE_CONTAINER_NAME_FILES_UNIT_TRANSPORT_DEVELOPMENT,
    containerOperation: process.env.AZURE_CONTAINER_NAME_FILES_OPERATION_DEVELOPMENT,
    conecctionString: process.env.AZURE_BLOB_STORAGE_CONECCTION_STRING,
  },
  API_SMS_TWILIO: {
    acoountSid: process.env.TWILIO_ACCOUNT_SID_DEVELOPMENT,
    authToken: process.env.TWILIO_AUTH_TOKEN_DEVELOPMENT,
    phoneFrom: process.env.TWILIO_PHONE_FROM_DEVELOPMENT,
  },
};