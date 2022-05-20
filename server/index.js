const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.json());


app.use(express.static(path.resolve(__dirname, '../client/dist')));


const port = 8701;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening from http://localhost:${port}`);
});
