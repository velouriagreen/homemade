const express = require('express');

const app = express();

app.use(express.json());



const port = 8701;
app.listen(port, () => {
  console.log(`Listening from localhost:${port}`);
});
