const express = require('express');
const path = require('path');
const app = express();

const config = require('../config/environments');

const routerIndex = require('../routes/index.routes');

app.use(routerIndex);

const initServer = async () => {
  return new Promise((resolve, reject) => {
    const httpServer = app.listen(config.PORT, () => {
      console.log(`Server Tracking Bus listening on port ${config.PORT}`);
      resolve();
    });
  });
};

/*class Server {
    constructor({
        config,
        router
    }) 
        this.config = config;
        this.express = express();
        this.express.use(router);
        //this.applyConfiguration();
    }

    start() {
        return new Promise((resolve, reject) => {
            const http = this.express.listen(this.config.PORT, () => {
                const {
                    port
                } = http.address();
                console.log(`Server Tms-App-Services listening in port: ${port}`);
                resolve();
            });
        });
    }

    // apply middleware
    /*applyConfiguration() {
        
        this.express.use(logger('dev'));
        this.express.use(express.json());
        this.express.use(cookieParser());
        this.express.use(express.static(path.join(__dirname, 'public')));
        this.express.set('view engine', 'pug');
        this.express.set('views', path.join(__dirname, 'views'));
        this.express.use( (req, res, next) =>  {
            next(createError(404));
        });
        this.express.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
        });
    }

}*/

module.exports = { initServer };
