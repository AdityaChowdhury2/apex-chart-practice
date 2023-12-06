import ReactApexChart from 'react-apexcharts';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function App() {
	const state = {
		series: [
			{
				name: 'Net Profit',
				data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
			},
			{
				name: 'Revenue',
				data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
			},
			{
				name: 'Free Cash Flow',
				data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
			},
		],
		options: {
			chart: {
				type: 'bar',
				height: 350,
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent'],
			},
			xaxis: {
				categories: [
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
				],
			},
			yaxis: {
				title: {
					text: '$ (thousands)',
				},
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return '$ ' + val + ' thousands';
					},
				},
			},
		},
	};

	return (
		<>
			<div>
				<h2
					style={{
						textAlign: 'center',
					}}
				>
					React Apex Chart
				</h2>
				<br />
				<br />
				<Tabs>
					<TabList>
						<Tab>Bar Chart</Tab>
						<Tab>Pie Chart</Tab>
					</TabList>

					<TabPanel>
						<h2>Bar Chart</h2>
						<ReactApexChart
							options={state.options}
							series={state.series}
							type="bar"
							height={350}
						/>
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
				</Tabs>
			</div>
		</>
	);
}

export default App;
