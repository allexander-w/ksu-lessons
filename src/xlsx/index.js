const readXlsxFile = require('read-excel-file/node'); // импорт библиотеки для чтения xlsx

function DataBase(tableName) { // принимает имя таблицы с которой будет работать
  this.file = []; // пустой массив для данных из таблицы

  // промис
  readXlsxFile(__dirname + "/file.xlsx", { sheet: tableName }).then((rows) => {
      this.file = rows; // записывает данные в массив
  });
}

// извлечения данных из таблицы Excel, заданной столбцом (col) и строкой (row)
DataBase.prototype.range = function (col, row) {
    return this.week(this.file.slice(col[0], col[1]).map(el => el[row]));
}

// разбивает массив на подмассивы для дня недели
DataBase.prototype.week = function (array) {
    const result = []; //  будет содержать подмассивы данных
    let subArray = []; //  будет содержать данные для каждой недели

    // разбивает данные на недели
    array.forEach(el => {
        // если элемент пустой то заполняем subArray значением null
        if ( !el ) {
            subArray.push(null);
            return;
        }
        // если subArray уже содержит элементы, добавляем его в result
        if ( subArray.length ) result.push(subArray);
        subArray = [el]; // создает новый массив subArray, содержащий только текущий элемент el
    })

     // добавляем последний subArray в результат (result), если он не пустой
    if (subArray.length) {
        result.push(subArray);
    }

    return result;
}

module.exports = new DataBase("Бакалавриат 1 курс"); // экспортируется новый экземпляр объекта с именем таблицы с которой будем работать

// range startCol, endCol, startRow, endRow
// col