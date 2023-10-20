const readXlsxFile = require('read-excel-file/node');

function DataBase(tableName) {
  this.file = [];

  readXlsxFile(__dirname + "/file.xlsx", { sheet: tableName }).then((rows) => {
      this.file = rows;
  });
}

DataBase.prototype.range = function (col, row) {
    return this.week(this.file.slice(col[0], col[1]).map(el => el[row]));
}

DataBase.prototype.week = function (array) {
    const result = [];
    let subArray = [];

    array.forEach(el => {
        if ( !el ) {
            subArray.push(null);
            return;
        }

        if ( subArray.length ) result.push(subArray);
        subArray = [el];
    })

    if (subArray.length) {
        result.push(subArray);
    }

    return result;
}

module.exports = new DataBase("Бакалавриат 1 курс");