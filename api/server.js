const express = require('express');
const git = require('simple-git')('~/test_projects/scp-fe');
const server = express();

server.use(express.json());

server.post('/', (req, res) => {
  console.log(req.body);
  git().pull('origin','master');
  res.json({ message: 'success' });
})

module.exports = server;