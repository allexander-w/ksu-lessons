const scheduleService = require("../services/schedule"); 
const db = require("../xlsx/index");

module.exports = {
    
    async get(request, reply) {
        const colRange = request.query.colRange;
        const rowIndex = request.query.rowIndex; 
        if (!colRange || !rowIndex) {
            reply.code(400).send({ error: 'Invalid parameters' });
            return;
        }
        const colRangeArray = colRange.split('-').map(Number);
        const rowIndexNumber = Number(rowIndex);
        const data = await scheduleService.getAll(colRangeArray, rowIndexNumber);
        return { data };
    }

}