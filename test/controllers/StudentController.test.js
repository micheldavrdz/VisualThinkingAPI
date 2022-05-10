const StudentController = require('../../app/lib/controllers/StudentController');

describe('Unit test for StudentService class', () => {
  test('Test case 1 - Return all students', () => {
    const students = StudentController.getStudentsAllFields();

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
  });

  test('Test case 2 - Return all certified students', () => {
    const students = StudentController.getAllCertifiedStudentsEmails();

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
    expect(students).toHaveLength(29);
  });

  test('Test case 3 - Return all students with more than 500 credits', () => {
    const students = StudentController.getAllStudentsAboveCredits(500);

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
    expect(students).toHaveLength(27);
  });
});
