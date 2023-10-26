const fastify = require('fastify')({ logger: true }); //  создаем экземпляр Fastify приложения
const registerRoutes = require('../routes/index');  // маршрутизация

registerRoutes(fastify); // передаем экземпляр в функцию

module.exports = fastify; 