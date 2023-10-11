function Acheivements() {
	return (
		<div className="container mx-auto my-8 p-4">
			<h1 className="text-4xl font-bold">Acheivements</h1>
			<p className="text-2xl text-gray-600">Things I Have Acheived</p>
			<div>
				<div className="flex items-center my-8 animate-enter achievement-notion">
					<svg
						viewBox="0 0 170 170"
						fill-rule="evenodd"
						clip-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="1.414"
						className="w-10 md:w-24"
					>
						<path fill="none" d="M0 0h170v170H0z"></path>
						<clipPath id="trophy_svg__a">
							<path d="M0 0h170v170H0z"></path>
						</clipPath>
						<g clip-path="url(#trophy_svg__a)">
							<circle cx="85" cy="85" r="85" fill="#FFFAF0"></circle>
							<path
								d="M106.868 123c0-4.828-3.919-8.747-8.747-8.747H71.879c-4.828 0-8.747 3.919-8.747 8.747h43.736z"
								fill="#FBD38D"
							></path>
							<path d="M80.626 103.756V123h8.748v-19.244h-8.748z" fill="#FBD38D"></path>
							<clipPath id="trophy_svg__b">
								<path d="M45.638 61.77h17.494v17.494H45.638z"></path>
							</clipPath>
							<g clip-path="url(#trophy_svg__b)">
								<circle cx="63.132" cy="61.77" r="17.494" fill="#FBD38D"></circle>
							</g>
							<clipPath id="trophy_svg__c">
								<path d="M106.868 61.77h17.494v17.494h-17.494z"></path>
							</clipPath>
							<g clip-path="url(#trophy_svg__c)">
								<circle cx="106.868" cy="61.77" r="17.494" fill="#FBD38D"></circle>
							</g>
							<path
								d="M106.868 53.022H63.132v30.616c0 12.069 9.799 21.868 21.868 21.868 12.069 0 21.868-9.799 21.868-21.868V53.022z"
								fill="#ED8936"
							></path>
							<path
								d="M85 65.398l2.806 8.638h9.082l-7.347 5.338 2.806 8.637L85 82.673l-7.347 5.338 2.806-8.637-7.347-5.338h9.082L85 65.398z"
								fill="#fff"
							></path>
						</g>
					</svg>
					<h4 className="flex-1 mx-4">
						<div className="font-semibold">Product of the day – Feedback Fish</div>
						<main className="notion">
							<p className="notion-text">
								Built{' '}
								<a className="notion-link" href="https://feedback.fish/">
									Feedback Fish
								</a>{' '}
								in{' '}
								<a className="notion-link" href="https://productweekend.live/">
									a weekend
								</a>{' '}
								with friends. Got awarded with{' '}
								<a className="notion-link" href="https://www.producthunt.com/posts/feedback-fish">
									#1 Product of the Day
								</a>
								.
							</p>
						</main>
					</h4>
					<div>
						<div className="py-6 flex items-center group relative h-6 w-20 md:w-24 cursor-default border-l pl-2 ml-2">
							<div className="absolute transform -translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out">
								<span>22</span> <span className="text-gray-600">y/o</span>
							</div>
							<br />
							<div className="absolute transform group-hover:translate-y-8 transition-all duration-200 ease-in-out opacity-100 group-hover:opacity-0">
								<span className="text-gray-600">Jul</span>{' '}
								<span className="transform group-hover:translate-x-3">2020</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Acheivements;
