const fastify = require('fastify')({ logger: true });
const registerRoutes = require('../routes/index');

registerRoutes(fastify);

module.exports = fastify;