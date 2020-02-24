const express = require('express')
const router = express.Router()
const db = require('./projectModel')

router.get('/', async (req, res, next) => {
        try {
            const data = await db.get()
            res.status(200).json(data)
        } catch(err) {
      console.log(err)
      res.status(500).json({ message: "Error retrieving the projects"})
      next(err)
    }
  });



  module.exports = router;