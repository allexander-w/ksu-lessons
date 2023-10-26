const db = require("../xlsx/index");  // импорт базы данных

module.exports = {
    

    getAll(colRange, rowIndex) {
        return db.range(colRange, rowIndex);
    },


}