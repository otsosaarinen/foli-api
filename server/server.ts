import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();
const port = 3000;

const swaggerOptions = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Föli API",
			version: "1.0.0",
			description: "Public API wrapper for Föli transport data",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
			{ url: "https://data.foli.fi/siri/sm" },
		],
	},
	apis: ["./server/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /pretty:
 *   get:
 *     description: Fetch the transporation data of all bus stops.
 *     responses:
 *       200:
 *         description: Returns a list of all bus stops.
 *       404:
 *         description: Error while fetching data.
 */

app.use(cors());

app.get("/", async (req, res) => {
	const response = await fetch("https://data.foli.fi/siri/sm/pretty");
	if (response.ok) {
		const data = await response.json();
		res.status(200).json(data);
	} else {
		res.status(404).json({ error: "Data not found" });
	}
});

/**
 * @openapi
 * /{id}/pretty:
 *   get:
 *     description: Fetch a transportation data of a single bus stop by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a timetable for a specific bus stop.
 *       404:
 *         description: Error while fetching data. */
app.get("/:id", async (req, res) => {
	const id = req.params.id;
	const response = await fetch(`https://data.foli.fi/siri/sm/${id}/pretty`);

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
