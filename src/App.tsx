import "./App.css";

function App() {
	return (
		<>
			<div className="flex h-screen flex-col items-center justify-start gap-10 bg-neutral-800 text-yellow-400">
				<h1 className="mt-20 text-8xl font-bold">FÖLI API</h1>
				<h2 className="text-md w-200 text-center font-medium">
					All data on this website originates from the public
					transport operations and timetable data of the Turku region.
					The dataset is maintained by the Public Transport Office of
					the City of Turku. The data has been downloaded from{" "}
					<a href="http://data.foli.fi/" className="underline">
						http://data.foli.fi/
					</a>{" "}
					under the Creative Commons Attribution 4.0 International (CC
					BY 4.0) license.
				</h2>
			</div>
		</>
	);
}

export default App;
