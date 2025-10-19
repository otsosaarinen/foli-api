import "./App.css";

import Endpoint from "./components/Endpoint";

function App() {
	return (
		<>
			<div className="flex h-screen flex-col items-center justify-start gap-10 bg-neutral-800 text-yellow-300">
				<h1 className="mt-20 text-9xl font-bold">FÖLI API</h1>
				<div className="font-medium text-white">
					This website wraps the official TSJL data interface and
					exposes it as a simple proxy
				</div>
				<h2 className="flex flex-col gap-3 text-center">
					<div className="text-2xl font-medium">Endpoints</div>
					<Endpoint
						method="GET"
						path="/api/sm"
						description="Returns list of all bus stops"
					/>
					<Endpoint
						method="GET"
						path="/api/sm/:id"
						description="Returns details of the specified bus stop"
					/>
					<Endpoint
						method="GET"
						path="/api/vm"
						description="Returns list of all buses"
					/>
				</h2>
				<h3 className="w-200 text-center font-medium">
					API datasource: Public transport operation and timetable
					data of the Turku region. The dataset is maintained by the
					City of Turku Public Transport Office. The data was
					downloaded from{" "}
					<a
						href="http://data.foli.fi/"
						target="_blank"
						className="underline"
					>
						http://data.foli.fi/
					</a>{" "}
					under the Creative Commons Attribution 4.0 International (CC
					BY 4.0) license.
				</h3>
			</div>
		</>
	);
}

export default App;
