function MiniWorkItems({ data }) {
	return (
		<a
			aria-label={data.name}
			className="focus group border bg-white rounded-md overflow-hidden flex flex-col transform transition-transform ease-in-out duration-100 hover:border-gray-400 hidden md:flex"
			href={data.path}
		>
			<div className="flex flex-1 flex-col justify-between">
				<div className="p-4 pb-0">
					<div className="font-semibold text-gray-800 group-hover:text-gray-700">{data.name}</div>
					<div className="text-s"></div>
					<div className="text-sm text-gray-700">{data.shortDesc}</div>
				</div>
			</div>
		</a>
	);
}
MiniWorkItems.propTypes = {
	data: {},
};

export default MiniWorkItems;
