const express = require('express');
const StudentController = require('./controllers/StudentController');

const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Visual Partner-Ship Students API',
  });
});

app.get('/v1/students/', (req, res) => {
  const students = StudentController.getStudentsAllFields();
  res.json(students);
});

app.get('/v1/students/certified/emails', (req, res) => {
  const students = StudentController.getAllCertifiedStudentsEmails();
  res.json(students);
});

app.get('/v1/students/credits/:credits', (req, res) => {
  const number = req.params.credits;
  const students = StudentController.getAllStudentsAboveCredits(number);
  res.json(students);
});

app.listen(port, () => {
  console.log(`Visual Partner-Ship Student API on port: ${port}`);
});
