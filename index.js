const fastify = require("./src/core/http"); // импорт приложения
const fs = require("node:fs"); // file system

(async (port) => {
    try {
        await fastify.listen({ port })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})(8080);