import { useState } from "react"
import axios from "axios"

type ServiceNames = "go" | "node" | "python"

type PodCounts = Record<string, number>

const usePodCounts = () => {
	const [podCounts, setPodCounts] = useState<{
		go: PodCounts
		node: PodCounts
		python: PodCounts
	}>({
		go: {},
		node: {},
		python: {},
	})

	const [loading, setLoading] = useState({
		go: false,
		node: false,
		python: false,
	})

	const apiGatewayLocalUrl = import.meta.env.VITE_APIGATEWAY_LOCAL_URL

	const callService = async (service: ServiceNames) => {
		setLoading((prev) => ({
			...prev,
			[service]: true,
		}))

		try {
			const updatedCounts = { ...podCounts[service] }

			for (let i = 0; i < 100; i++) {
				const response = await axios.get(
					`${apiGatewayLocalUrl}/${service}`
				)
				const host = response.data.split("Host: ")[1] || "Unknown"
				updatedCounts[host] = (updatedCounts[host] || 0) + 1

				setPodCounts((prev) => ({
					...prev,
					[service]: { ...updatedCounts },
				}))
			}
		} catch (error) {
			console.error(`Error calling ${service} service`, error)
		} finally {
			setLoading((prev) => ({
				...prev,
				[service]: false,
			}))
		}
	}

	const getChartData = (service: ServiceNames) => {
		return Object.entries(podCounts[service]).map(([pod, count]) => ({
			pod,
			count,
		}))
	}

	return { loading, callService, getChartData }
}

export default usePodCounts
