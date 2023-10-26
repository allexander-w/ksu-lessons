const db = require("../xlsx/index");  

module.exports = {
    

    getAll(colRange, rowIndex) {
        return db.range(colRange, rowIndex);
    },


}