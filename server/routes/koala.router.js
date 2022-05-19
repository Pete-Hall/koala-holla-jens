const express = require('express');
const koalaRouter = express.Router();

//let pack = [];

// DB CONNECTION
const pool = require('../routes/pool');

// GET
koalaRouter.get('/', (req, res)=>{
  console.log('in /koalas GET');
  const queryString = `SELECT * FROM koalas ORDER BY id ASC;`;
  pool.query(queryString).then((result)=>{
    res.send(result.rows);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
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
koalaRouter.put('/', (req, res)=>{
  console.log('in /koalas PUT:', req.query);
  let queryString = `UPDATE koalas SET ready_for_transfer=true WHERE id=$1;`;
  let values = [req.query.id];
  pool.query(queryString, values).then((results)=>{
    res.sendStatus(200);
  }).catch((err)=>{
    console.log(err);
    res.sendStatus(500);
  })
})

// DELETE

module.exports = koalaRouter;