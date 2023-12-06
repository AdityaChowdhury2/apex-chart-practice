import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

function App() {
	return (
		<>
			<div>
				<h2 className="text-3xl font-bold text-center">React Apex Chart</h2>
				<br />
				<br />
				<div className="container">
					<Tabs
						defaultFocus
						selectedTabClassName="bg-red-200 border-cyan-300 rounded-t-md text-red-800"
						onSelect={(index, lastIndex, e) => {
							console.log(index, lastIndex, e);
						}}
						className="border-4 w-full "
					>
						<TabList>
							<Tab>Bar Chart</Tab>
							<Tab>Pie Chart</Tab>
						</TabList>

						<TabPanel>
							<BarChart />
						</TabPanel>
						<TabPanel>
							<PieChart />
						</TabPanel>
					</Tabs>
				</div>
			</div>
		</>
	);
}

export default App;
