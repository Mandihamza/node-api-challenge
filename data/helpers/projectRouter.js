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

  //GET projects by user id
  router.get("/:id", async (req, res, next) => {
	try {
		const data = await db.get(req.params.id)
		res.status(200).json(data)
	} catch(err) {
        console.log(err)
        res.status(500).json({ message: "Error retrieving the projects with that id"})
		next(err)
	}
})

router.post("/:id", async (req, res, next) => {
    try {
        const {name, description} = req.body
        if (!req.body.name || !req.body.description) {
            throw new Error("Please enter a project name and description")
        } 
		const data = await db.insert(req.body)
        if (data) {
			res.status(201).json(data)
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: "Error adding the project",
        })
		next(err)
    }
})

router.put("/:id", async (req, res, next) => {
	try {
        const {id} = req.body
        if (!id) {
            throw new Error("Unable to locate project with that id")
        } 
		const data = await db.update(req.params.id, req.body)
        res.status(201).json(data)
	} catch(err) {
       console.log(err)
        res.status(500).json({
            message: "Error updating the project",
        })
		next(err)
    }
})

  module.exports = router;