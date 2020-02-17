/* eslint-disable no-console */
import express from 'express';
import path from 'path';

// same as const express = require('express')
const app = express();
// set the port
const PORT = 3000;

app.get('/', (_request, response) => {
  console.log(`Example app listening on port ${PORT} `);
  response.send(`Hello from the GET Request`);
});

// speakers
app.get('/speakers', (_request, response) => {
  console.log(`Example app listening on port ${PORT} `);
  response.send(`Hello from the GET Request for Speakers`);
});

app.listen(PORT, (_request, _response) => {
  console.log(`Server is listening on port ${PORT}!`);
});
