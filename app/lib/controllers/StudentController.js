const Reader = require('../utils/Reader');
const StudentService = require('../services/StudentService');

class ExplorerController {
  static getStudentsAllFields() {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getStudents(students);
  }

  static getAllCertifiedStudents() {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getCertifiedStudents(students);
  }

  static getAllStudentsCreditsAbove500() {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getStudentsCreditsAbove500(students);
  }
}

module.exports = ExplorerController;
