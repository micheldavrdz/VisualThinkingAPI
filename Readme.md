# Visual Thinking API

This is a simple API that recieves an already established JSON file and lets the enduser use endpoints to recieve:

* All students (all fields)
* All students emails (if they're certified)
* All students with a credits number above X

Total coding time: Around 1 effective hour

## Prerequisites

You'll need NodeJS installed on your local machine

* NodeJS: [Official Website](https://nodejs.org/en/)

## Installing

To use the project on your local machine you just need to download the repository and follow these instructions

1. Either download the .zip file from this repo or use git
   ```
   git clone https://github.com/micheldavrdz/VisualThinkingAPI.git
   ```

## Usage

The API needs the server to be running on a local port (by default this project runs on port 3000), so on the project's root folder run:

```
npm run server
```

## API

To use the API follow the following endpoints:

### All Students

This endpoint will show all students and all their fields

```
localhost:3000/v1/students
```

```
[
    {
        "id": "6264d5d89f1df827eb84bb23",
        "name": "Warren",
        "email": "Todd@visualpartnership.xyz",
        "credits": 508,
        "enrollments":
        [
            "Visual Thinking Intermedio",
            "Visual Thinking Avanzado"
        ],
        "previousCourses": 1,
        "haveCertification": true
    }
]
```

### Certified Students Emails

This endpoint will show emails of all students that are certified (`haveCertification: true`)

```
localhost:3000/v1/students/certified/emails
```

```
[
    "Todd@visualpartnership.xyz",
    "Sexton@visualpartnership.xyz",
    "Sharlene@visualpartnership.xyz",
    "Howell@visualpartnership.xyz",
    "Haynes@visualpartnership.xyz",
    "Montoya@visualpartnership.xyz",
    "Benton@visualpartnership.xyz"
]
```

### Students with credits above X

This endpoint will show all students with credits above x number ( replace `number` with an actual number [e.g. 500] )

```
localhost:3000/v1/students/credits/number
```

```
[
    {
        "id": "6264d5d89f1df827eb84bb23",
        "name": "Warren",
        "email": "Todd@visualpartnership.xyz",
        "credits": 508,
        "enrollments":
        [
            "Visual Thinking Intermedio",
            "Visual Thinking Avanzado"
        ],
        "previousCourses": 1,
        "haveCertification": true
    }
]
```

## **Components**

### Reader

```
const fs = require('fs');

class Reader {
  static readJsonfile(filePath) {
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
  }
}

module.exports = Reader;
```

Reader class recieves a JSON file and parses it (turns it into JS)

### StudentService

```
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
```

StudentService class has 3 static methods, which do the following:

* getStudents() returns all students and their fields
* getCertifiedStudentsEmails() returns emails of all students with `haveCertification: true`.
* getStudentsCreditsAboveCredits() returns all students with a credits number above an unspecified number

### StudentController

```
const Reader = require('../utils/Reader');
const StudentService = require('../services/StudentService');

class StudentController {
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

module.exports = StudentController;

```

StudentController is used to "merge" Reader and StudentService, uses 3 static methods:

* getStudentAllFields() reads the JSON file and returns all students.
* getAllCertifiedStudentsEmails() reads the JSON file and returns all certified students (`haveCertification: true`).
* getAllStudentsAboveCredits() reads the JSON file and returns all students with credits number above `credits` param.

## Built With

* [NodeJS (16.14.2)](https://nodejs.org/en/) - Runtime enviroment
* [Express (4.18.1)](https://expressjs.com/) - Web framework
* [Jest (28.1.0)](https://jestjs.io/) - JS unit testing
* [ESLint (8.2.0)](https://eslint.org/) - JS Linter
* [eslint-config-airbnb-base (15.0.0)](https://www.npmjs.com/package/eslint-config-airbnb-base) - ESLint Airbnb style guide config
* [Github Actions](https://github.com/features/actions) - Automated Jest testing on each push
