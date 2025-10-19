export default {
	async fetch(request) {
		const url = new URL(request.url);

		const fetchData = async (type: "sm" | "vm", id?: string) => {
			try {
				const fetchUrl = id
					? `https://data.foli.fi/siri/${type}/${id}`
					: `https://data.foli.fi/siri/${type}`;

				const response = await fetch(fetchUrl);
				const data = await response.json();

				return new Response(JSON.stringify(data), {
					status: response.status,
					headers: { "Content-Type": "application/json" },
				});
			} catch (error) {
				return new Response("Error fetching data", { status: 500 });
			}
		};

		// SM path (with optional id)
		const smPattern = new URLPattern({ pathname: "/api/sm/:id?" });
		const smMatch = smPattern.exec(url);
		if (smMatch) {
			const { id } = smMatch.pathname.groups;
			return fetchData("sm", id);
		}

		// VM path (always static)
		if (url.pathname === "/api/vm") {
			return fetchData("vm");
		}

		return new Response("Not found", { status: 404 });
	},
} satisfies ExportedHandler;
