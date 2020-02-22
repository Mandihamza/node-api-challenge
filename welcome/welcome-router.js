const express = require("express")

const router = express.Router()

router.get("", (req, res) => {
    res.status(200).json({
        message: process.envPORT || "Server is running on port 4000",
    })
})

module.exports = router