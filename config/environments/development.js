module.exports = {
    PORT: process.env.PORT,
    DATABASE: {
        username: process.env.DB_USER_DEVELOPMENT,
        password: process.env.DB_PASS_DEVELOPMENT,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST_DEVELOPMENT,
        dialect: 'mssql',
        dialectOptions : {
            options: {
                encrypt: false,
                trustServerCertificate: true
            }
        },
        //logging: true
    }
}