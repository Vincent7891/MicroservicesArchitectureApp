import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts"

interface ServiceGraphProps {
	service: string
	loading: boolean
	callService: () => void
	data: { pod: string; count: number }[]
	color: string
}

const ServiceGraph = ({
	service,
	loading,
	callService,
	data,
	color,
}: ServiceGraphProps) => (
	<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm flex flex-col items-center">
		<h2 className="text-xl font-semibold text-gray-700 mb-4">{`${service} Service`}</h2>
		<button
			className={`w-full py-2 px-4 mb-6 rounded-md text-white ${
				loading
					? "bg-gray-500 cursor-not-allowed"
					: "bg-green-500 hover:bg-green-600"
			} transition duration-200`}
			onClick={callService}
			disabled={loading}
		>
			{loading ? "Loading..." : `Call ${service} Service (100x)`}
		</button>
		<ResponsiveContainer width="100%" height={300}>
			<BarChart
				data={data}
				margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis
					dataKey="pod"
					tick={false}
					label={{ value: "Pods", position: "insideBottom" }}
				/>
				<YAxis
					label={{
						value: "Count",
						angle: -90,
						position: "insideLeft",
					}}
				/>
				<Tooltip />
				<Legend />
				<Bar
					dataKey="count"
					fill={color}
					name={`${service} Service Requests`}
				/>
			</BarChart>
		</ResponsiveContainer>
	</div>
)

export default ServiceGraph
