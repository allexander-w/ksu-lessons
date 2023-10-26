const fastify = require("./src/core/http"); 
const fs = require("node:fs"); 

(async (port) => {
    try {
        await fastify.listen({ port })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
})(8080);