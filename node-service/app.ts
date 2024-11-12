import express from "express"
import os from "os"

const app = express()

app.get("/", (req, res) => {
	res.send(`Hello from Node.js service! Host: ${os.hostname()}`)
})

app.listen(8080, () => {
	console.log("Node.js service listening on port 8080")
})
