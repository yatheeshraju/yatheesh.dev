function Hero() {
	return (
		<div className="container mx-auto ">
			<div className="h-10 flex justify-between mt-4">
				<div className="flex justify-center items-center p-4">
					<a href="/" alt="Home">
						<img className="w-8 " src="/Y.gif" alt="logo" />
					</a>
				</div>
				{/* <div className="flex justify-center items-center p-4">
					<a href="/works" className="text-lg p-4">
						Works
					</a>
				</div> */}
			</div>
			<div className="flex flex-col justify-center items-center my-14">
				<img className="w-40 rounded-full inset-0" src="/yatheesh_photo.png" alt="yatheesh" />
				<h1 className="text-4xl font-bold mt-6">Hey , I'm Yatheesh !</h1>
				<p className="text-2xl text-gray-700 mt-4 text-center">
					I build web apps, and everything to make them good.
				</p>
				<div className="flex gap-4 mt-4">
					<a
						className="mx-1 md:mx-2 py-1 px-2 rounded bg-blue-300 hover:bg-blue-400 text-gray-800"
						href="https://www.linkedin.com/in/yatheeshkonduru/"
						alt="linkedin"
						target="_blank"
						rel="noreferrer"
					>
						Linkedin
					</a>
					<a
						className="mx-1 md:mx-2 py-1 px-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
						href="https://github.com/yatheeshraju"
						alt="GitHub"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
					<a
						className="mx-1 md:mx-2 py-1 px-2 rounded bg-yellow-300 hover:bg-yellow-400 text-gray-800"
						href="https://www.figma.com/@yatheesh"
						alt="Figma"
						target="_blank"
						rel="noreferrer"
					>
						Figma
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
