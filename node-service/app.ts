import express from "express"
import os from "os"

const app = express()

app.get("/", (req, res) => {
	res.send(`Hello from Node.js service! Host: ${os.hostname()}`)
})
