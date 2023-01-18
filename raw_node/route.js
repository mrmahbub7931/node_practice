/**
 * title: Routes
 * description: Application routes
 */
const { aboutHandler } = require('./handlers/routehandlers/aboutHandlers');

const routes = {
    about: aboutHandler
}

module.exports = routes;