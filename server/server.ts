import express from "express";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
	const response = await fetch("https://data.foli.fi/siri/sm/pretty");
	const data = await response.json();

	res.send(data);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
