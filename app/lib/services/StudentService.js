class StudentService {
  static getStudents(students) {
    return students;
  }

  static getCertifiedStudentsEmails(students) {
    const studentsCertified = students.filter((student) => student.haveCertification);
    return studentsCertified.map((student) => student.email);
  }

  static getStudentsCreditsAboveCredits(students, credits) {
    return students.filter((student) => student.credits > credits);
  }
}

module.exports = StudentService;
