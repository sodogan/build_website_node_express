/* eslint-disable no-console */
import express from 'express';
import path from 'path';

// same as const express = require('express')
const app = express();
// set the port
const PORT = 3000;
// set the static paths
const STATIC_DIR_PATH = path.join(__dirname, './static');
const INDEX_PATH = path.join(STATIC_DIR_PATH, 'index.html');
const SPEAKERS_PATH = path.join(STATIC_DIR_PATH, 'speakers.html');

// eslint-disable-next-line no-console
console.log(`Index path is: ${INDEX_PATH} `);

// middleware to set the static dir
app.use(express.static(STATIC_DIR_PATH));

app.get('/', (_request, response) => {
  console.log(`Example app listening on port ${PORT} `);
  response.sendFile(`${INDEX_PATH}`);
});

// speakers
app.get('/speakers', (_request, response) => {
  console.log(`Example app listening on port ${PORT} `);
  response.sendFile(`${SPEAKERS_PATH}`);
});

app.listen(PORT, (_request, _response) => {
  console.log(`Server is listening on port ${PORT}!`);
});
