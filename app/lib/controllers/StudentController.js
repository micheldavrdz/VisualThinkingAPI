const Reader = require('../utils/Reader');
const StudentService = require('../services/StudentService');

class ExplorerController {
  static getStudentsAllFields() {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getStudents(students);
  }

  static getAllCertifiedStudentsEmails() {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getCertifiedStudentsEmails(students);
  }

  static getAllStudentsAboveCredits(credits) {
    const students = Reader.readJsonfile('visualpartners.json');
    return StudentService.getStudentsCreditsAboveCredits(students, credits);
  }
}

module.exports = ExplorerController;
