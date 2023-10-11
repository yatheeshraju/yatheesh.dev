function WorkItem({ data }) {
	return (
		<a
			href={data.path}
			className="focus group border bg-white rounded-md overflow-hidden flex flex-col transform transition-transform ease-in-out duration-100 hover:border-gray-400 shadow-sm hover:-translate-y-1 focus:-translate-y-1"
		>
			<div className="pb-2/3 bg-gray-100 relative border-b overflow-hidden">
				<img src={data.img} alt="demo" className="object-cover h-full w-full" />
			</div>
			<div className="flex flex-1 flex-col justify-between">
				<div className="p-4 ">
					<div className="font-semibold text-gray-800 group-hover:text-gray-700">{data.name}</div>
					<div className="text-gray-700">{data.shortDesc}</div>
				</div>
			</div>
		</a>
	);
}
WorkItem.propTypes = {
	data: {},
};

export default WorkItem;
