class StudentService {
  static getStudents(students) {
    return students;
  }

  static getCertifiedStudentsEmails(students) {
    return students.filter((student) => student.haveCertification === true)
      .map((student) => student.email);
  }

  static getStudentsCreditsAbove500(students) {
    return students.filter((student) => student.credits > 500);
  }
}

module.exports = StudentService;
