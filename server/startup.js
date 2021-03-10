/*class StartUp {

    constructor({
        server
    }) {
        this.server = server;

    }

    async start() {
        await this.server.start();
    }
}*/

const server = require('./server');

const init = async () => {
  await server.initServer();
};

init();
