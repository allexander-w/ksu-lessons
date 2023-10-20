const scheduleService = require("../services/schedule");
const db = require("../xlsx/index");

module.exports = {

    async get(request, reply) {
        const data = scheduleService.getAll();
        return { data };
    }

}