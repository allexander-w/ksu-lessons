const scheduleController = require("../controllers/schedule"); // импорт обработчиков для событий

module.exports = (fastify) => {

    /* get schedule */
    // обработка url /schedule
    fastify.get('/schedule', scheduleController.get);
    
}