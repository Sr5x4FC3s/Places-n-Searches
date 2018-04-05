const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = 8081;

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, `../dist`)));

app.get('/', (req, res) => {
  cosole.log('this has gotten this far into the process');
})

app.listen(port, () => console.log(`server is live on ${port}`));