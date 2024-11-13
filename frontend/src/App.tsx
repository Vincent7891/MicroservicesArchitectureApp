import usePodCounts from "./hooks/usePodCounts"
import ServiceGraph from "./components/ServiceGraph"

const App = () => {
	const { loading, callService, getChartData } = usePodCounts()

	return (
		<div className="p-6 bg-gray-100 min-h-screen font-sans">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
				Microservices load balancing visualisation
			</h1>

			<div className="flex flex-wrap justify-center gap-4">
				<ServiceGraph
					service="Go"
					loading={loading.go}
					callService={() => callService("go")}
					data={getChartData("go")}
					color="#8884d8"
				/>
				<ServiceGraph
					service="Node.js"
					loading={loading.node}
					callService={() => callService("node")}
					data={getChartData("node")}
					color="#82ca9d"
				/>
				<ServiceGraph
					service="Python"
					loading={loading.python}
					callService={() => callService("python")}
					data={getChartData("python")}
					color="#ffc658"
				/>
			</div>
		</div>
	)
}

export default App
