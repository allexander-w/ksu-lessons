const db = require("../xlsx/index");

module.exports = {

    getAll() {
        return db.range([8, 100], 0);
    }

}