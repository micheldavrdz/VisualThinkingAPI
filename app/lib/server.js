const express = require('express');

const app = express();

app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Visual Partner-Ship Students API',
  });
});

app.listen(port, () => {
  console.log(`Visual Partner-Ship Student API on port: ${port}`);
});
