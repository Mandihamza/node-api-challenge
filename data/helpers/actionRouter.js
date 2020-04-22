const express = require('express')
const router = express.Router()
const db = require('./actionModel')

//GET all actions => /api/actions/
router.get('/', async (req, res, next) => {
        try {
            const data = await db.get()
            res.status(200).json(data)
        } catch(err) {
      console.log(err)
      res.status(500).json({ message: "Error retrieving the actions"})
      next(err)
    }
  });

  //GET actions by id => /api/actions/:project_id/:id
  router.get("/:project_id/:id", async (req, res, next) => {
    const { project_id } = req.params
	try {
		const data = await db.get(req.params.id)
		res.status(200).json(data)
	} catch(err) {
        console.log(err)
        res.status(500).json({ message: "Error retrieving the actions with that id"})
		next(err)
	}
})

//Post new action /api/actions/:project_id/
router.post("/:project_id/", async (req, res, next) => {
        //const { project_id } = req.params
        const { description, notes } = req.body
    try {
        if (!req.body.description || !req.body.notes) {
            throw new Error("Please enter the action name and notes")
        } 
		const data = await db.insert(req.body)
        if (data) {
			res.status(201).json({message: "Action added"})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: "Error adding the action",
        })
		next(err)
    }

})

// PUT /api/actions/:project_id/:id
router.put("/:project_id/:id", async (req, res, next) => {
	try {
        const { project_id, id } = req.params
        if (!project_id || !id) {
            throw new Error(`Unable to locate action with id: ${id} in project with the id ${project_id}`)
        } 
		const data = await db.update(req.params.id, req.body)
        res.status(201).json(data)
	} catch(err) {
       console.log(err)
        res.status(500).json({
            message: "Error updating the action",
        })
		next(err)
    }
})

// DELETE api/actions/:project_id/:id
router.delete("/:project_id/:id", async (req, res, next) => {
	try {
		const data = await db.remove(req.params.id)
        res.status(200).json({ message: 'The action has been deleted' })
	} catch(err) {
       console.log(err)
        res.status(500).json({
            message: "Error removing the action",
        })
		next(err)
    }
})

  module.exports = router;