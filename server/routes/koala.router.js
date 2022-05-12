const express = require('express');
const koalaRouter = express.Router();

let pack = [];

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res)=>{
  console.log('in /koalas POST:', req.body);
  pack.push(req.body);
  res.sendStatus(201);
});

// PUT


// DELETE

module.exports = koalaRouter;