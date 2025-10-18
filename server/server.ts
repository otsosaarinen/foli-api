import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const port = 3000;

app.use(cors());

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Föli API",
			version: "1.0.0",
			description: "API wrapper for Föli transportation data",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
			{ url: "https://data.foli.fi/siri" },
		],
	},
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/sm", async (req, res) => {
	const response = await fetch("https://data.foli.fi/siri/sm");
	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(404).json({ error: "Data not found" });
	}
});

app.get("/sm/:id", async (req, res) => {
	const id = req.params.id;
	const response = await fetch(`https://data.foli.fi/siri/sm/${id}`);

	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(404).json({ error: "Data not found" });
	}
});

app.get("/vm", async (req, res) => {
	const response = await fetch("https://data.foli.fi/siri/vm");
	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(404).json({ error: "Data not found" });
	}
});

app.get("/vm/:id", async (req, res) => {
	const id = req.params.id;
	const response = await fetch(`https://data.foli.fi/siri/vm/${id}`);

	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(404).json({ error: "Data not found" });
	}
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
