module.exports = {
    PORT: process.env.PORT,
    DATABASE: {
        username: process.env.DB_USER_PRODUCTION,
        password: process.env.DB_PASS_PRODUCTION,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST_PRODUCTION,
        dialect: 'mssql',
        dialectOptions: {
            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        }
    }
}