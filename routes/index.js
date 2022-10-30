const accountsRouter = require('./accounts');

function route(app) {
    app.use('/auth', accountsRouter);
}

module.exports = route;
