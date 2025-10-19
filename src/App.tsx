import "./App.css";

function App() {
	return (
		<>
			<div className="flex h-screen flex-col items-center justify-start gap-10 bg-neutral-800 text-yellow-300">
				<h1 className="mt-20 text-9xl font-bold">FÖLI API</h1>

				<h2 className="text-white">
					<div className="text-xl font-medium">Endpoints</div>
					<div className="my-2 h-0.5 w-200 bg-yellow-300"></div>
					<div className="flex flex-col gap-1 text-lg font-medium">
						<div>
							<div>
								{" "}
								<span className="rounded-lg bg-green-600 px-3 py-0.5">
									GET
								</span>{" "}
								/api/sm
							</div>
							<div className="text-base italic">
								Returns a list of Föli bus stops
							</div>
						</div>
						<div>
							<div>
								{" "}
								<span className="rounded-lg bg-green-600 px-3 py-0.5">
									GET
								</span>{" "}
								/api/sm/:id
							</div>
							<div className="text-base italic">
								Returns details of the specified bus stop, like
								the arriving buses and their coordinates
							</div>
						</div>
						<div>
							<div>
								{" "}
								<span className="rounded-lg bg-green-600 px-3 py-0.5">
									GET
								</span>{" "}
								/api/vm
							</div>
							<div className="text-base italic">
								Returns a list of all Föli buses and their
								detailed information
							</div>
						</div>
					</div>
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
