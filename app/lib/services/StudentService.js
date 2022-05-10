class StudentService {
    static getStudents(students) {
        return students;
    }

    static getCertifiedStudents(students) {
        return students.filter(student => student.haveCertification === true);
    }

    static getStudentsCreditsAbove500(students) {
        return students.filter(student => student.credits > 500);
    }
}

module.exports = StudentService;