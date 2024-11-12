import express from "express"
import axios from "axios"

const app = express()

app.get("/", async (req, res) => {
	try {
		res.send("Welcome to the API gateway")
	} catch (err) {
		res.status(500).send("Error connecting to API gateway")
	}
})

app.get("/go", async (req, res) => {
	try {
		const response = await axios.get("http://go-service")
		res.send(response.data)
	} catch (err) {
		res.status(500).send("Error connecting to Go service")
	}
})

app.get("/node", async (req, res) => {
	try {
		const response = await axios.get("http://node-service")
		res.send(response.data)
	} catch (err) {
		res.status(500).send("Error connecting to Node service")
	}
})

app.get("/python", async (req, res) => {
	try {
		const response = await axios.get("http://python-service")
		res.send(response.data)
	} catch (err) {
		res.status(500).send("Error connecting to Python service")
	}
})

app.listen(8080, () => {
	console.log("API Gateway listening on port 8080")
})
