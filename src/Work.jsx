import MiniWorkItems from './MiniWorkItems';
import WorkItem from './WorkItem';
import { recentWork, minirecentWork } from './work';

function Work() {
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-4xl font-bold">Work</h1>
			<p className="text-2xl text-gray-600">Things I Have Made in the Past.</p>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
				{recentWork.map((item) => (
					<WorkItem key={item.id} data={item} />
				))}
			</div>
			<div className="md:grid mt-4 grid-cols-2 sm:grid-cols-4 gap-4 ">
				{minirecentWork.map((item) => (
					<MiniWorkItems key={item.id} data={item} />
				))}
				<div className="flex flex-col items-center justify-center text-center py-4">
					<div className="text-lg font-bold text-gray-800">Want to see more?</div>
					<div className="text-gray-600">Explore more of my work</div>
					<a
						className="mt-3 bg-gray-800 hover:bg-gray-700 text-gray-100 py-1 px-6 rounded-md"
						href="https://github.com/yatheeshraju"
					>
						View all
					</a>
				</div>
			</div>
		</div>
	);
}

export default Work;
