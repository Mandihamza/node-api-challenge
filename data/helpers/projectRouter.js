const express = require('express')
const router = express.Router()
const db = require('./projectModel')

router.get('/', (req, res, next) => {
    db.get()
    .then((projects) => {
      res
      .status(200)
      .json(projects)
    }).catch((err) => {
      //console.log(err)
      res.status(500).json({ message: "Error retrieving the projects"})
      next()
    });
  });

  module.exports = router;