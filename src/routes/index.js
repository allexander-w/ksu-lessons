const scheduleController = require("../controllers/schedule"); 

module.exports = (fastify) => {

    /* get schedule */
    fastify.get('/schedule', scheduleController.get);
    
}