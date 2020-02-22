require("dotenv").config()
const express = require("express")
const welcomeRouter = require("./welcome/welcome-router.js")
const projectRouter = require("./data/helpers/projectRouter.js")

const server = express()
// .env file includes PORT="4000" variable
const port = process.env.PORT || 4000 

server.use(express.json())
server.use("/", welcomeRouter)
server.use("/api/projects", projectRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})