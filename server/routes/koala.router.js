const express = require('express');
const koalaRouter = express.Router();

//let pack = [];

// DB CONNECTION
const pool = require('../routes/pool');

// GET
koalaRouter.get('/', (req, res)=>{
  console.log('in /koalas GET');
})

// POST
koalaRouter.post('/', (req, res)=>{
  console.log('in /koalas POST:', req.body);
  const queryString = `INSERT INTO koalas (age, gender, ready_for_transfer, notes, koala_name) VALUES ($1, $2, $3, $4, $5);`
  const values = [req.body.age, req.body.gender, req.body.readyForTransfer, req.body.notes, req.body.name];
  pool.query(queryString, values).then((result)=>{
    res.sendStatus(201);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
});

// PUT


// DELETE

module.exports = koalaRouter;