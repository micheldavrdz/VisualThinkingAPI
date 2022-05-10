const Reader = require('../../app/lib/utils/Reader');
const StudentService = require('../../app/lib/services/StudentService');

describe('Unit test for StudentService class', () => {
  test('Test case 1 - Return all students', () => {
    const visualpartners = Reader.readJsonfile('visualpartners.json');
    const students = StudentService.getStudents(visualpartners);

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
  });

  test('Test case 2 - Return all certified students', () => {
    const visualpartners = Reader.readJsonfile('visualpartners.json');
    const students = StudentService.getCertifiedStudents(visualpartners);

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
    expect(students).toHaveLength(29);
  });

  test('Test case 3 - Return all students with more than 500 credits', () => {
    const visualpartners = Reader.readJsonfile('visualpartners.json');
    const students = StudentService.getStudentsCreditsAbove500(visualpartners);

    expect(students).toBeDefined();
    expect(students.length).toBeGreaterThan(0);
    expect(students).toHaveLength(27);
  });
});
