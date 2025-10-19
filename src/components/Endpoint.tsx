function Endpoint({
	method,
	path,
	description,
}: {
	method: string;
	path: string;
	description: string;
}) {
	return (
		<>
			<div className="flex flex-col items-center justify-center font-medium text-white">
				<div className="flex flex-row gap-2 text-xl">
					<div className="text-green-500">{method}</div>
					<div>{path}</div>
				</div>
				<div className="text-sm italic">{description}</div>
			</div>
		</>
	);
}

export default Endpoint;
