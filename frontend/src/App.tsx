import { useState } from "react"
import axios from "axios"

type ServiceResponses = {
	go: string
	node: string
	python: string
}

const App = () => {
	const [responses, setResponses] = useState<ServiceResponses>({
		go: "",
		node: "",
		python: "",
	})
	const apiGatewayLocalUrl = import.meta.env.VITE_APIGATEWAY_LOCAL_URL

	const callService = async (service: keyof ServiceResponses) => {
		try {
			const response = await axios.get(`${apiGatewayLocalUrl}/${service}`)
			setResponses((prev) => ({
				...prev,
				[service]: response.data,
			}))
		} catch (error) {
			console.error(`Error calling ${service} service`, error)
			setResponses((prev) => ({
				...prev,
				[service]: `Failed to contact ${
					service.charAt(0).toUpperCase() + service.slice(1)
				} Service`,
			}))
		}
	}

	return (
		<div>
			<h1>Microservices</h1>

			<div className="mb-5">
				<button onClick={() => callService("go")}>
					Call Go Service
				</button>
				<p>{responses.go}</p>
			</div>

			<div className="mb-5">
				<button onClick={() => callService("node")}>
					Call Node.js Service
				</button>
				<p>{responses.node}</p>
			</div>

			<div className="mb-5">
				<button onClick={() => callService("python")}>
					Call Python Service
				</button>
				<p>{responses.python}</p>
			</div>
		</div>
	)
}

export default App
