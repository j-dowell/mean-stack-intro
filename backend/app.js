const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('middleware');
  next();
});

app.use((req, res, next) => {
  res.send("Hi from express");
});

module.exports = app;
