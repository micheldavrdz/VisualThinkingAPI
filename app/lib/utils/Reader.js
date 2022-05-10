const fs = require('fs');

class Reader {
  static readJsonfile(filePath) {
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
  }
}

module.exports = Reader;
