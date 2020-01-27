const express = require('express');
const server = express();

server.use(express.json());

server.post('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'success' })
})

module.exports = server;