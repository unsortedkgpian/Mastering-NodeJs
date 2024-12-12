import fs from "fs";

import express from 'express'

const app = express();
const port = 8000;


app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/about', (req, res) => {
  console.log(req.query);
  res.send('About page\n' + `query ${req.query.name}`);
});
app.get('/call', (req, res) => {
  res.send('Call page');
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});