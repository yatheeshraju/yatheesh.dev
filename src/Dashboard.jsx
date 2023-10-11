import Hero from './Hero';
import Work from './Work';
import Footer from './Footer';

function Dashboard() {
	return (
		<div>
			<div className="flex flex-col gap-2">
				<div className="bg-slate-100">
					<Hero />
				</div>
				<div className="bg-white">
					<Work />
				</div>
				<div className="bg-white">
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
