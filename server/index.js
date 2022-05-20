const express = require('express');
const http = require('http');

const app = express();

app.use(express.json());



const port = 8701;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening from localhost:${port}`);
});
