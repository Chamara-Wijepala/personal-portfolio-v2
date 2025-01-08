import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<>
			<section className="min-h-[100svh] flex flex-col justify-between">
				<div className="flex flex-col flex-grow justify-center items-center gap-4">
					<div className="text-center">
						<p className="sm:text-xl md:text-3xl">Hi, I&apos;m Chamara</p>
						<h1 className="text-5xl sm:text-7xl md:text-9xl">
							<div className="text-accent-secondary">Fullstack</div>
							<div>Developer</div>
						</h1>
					</div>
					<div className="flex gap-4">
						<a href="https://www.github.com/Chamara-Wijepala" target="_blank">
							<span className="sr-only">github</span>
							<FaGithub className="w-8 h-8 md:w-12 md:h-12 hover:text-accent-primary-300 transition-colors" />
						</a>
						<a
							href="https://www.linkedin.com/in/chamara-wijepala"
							target="_blank"
						>
							<span className="sr-only">linkedin</span>
							<FaLinkedin className="w-8 h-8 md:w-12 md:h-12 hover:text-accent-primary-300 transition-colors" />
						</a>
					</div>
				</div>
				<header className="bg-primary-800">
					{/* set to 46rem to align with the hero text at large screens */}
					<div className="max-w-[46rem] mx-auto">
						<nav className="flex text-center">
							<a
								href="#about"
								className="hover:bg-accent-primary-300 p-4 flex-grow transition-colors hidden sm:block"
							>
								About
							</a>
							<a
								href="#skills"
								className="hover:bg-accent-primary-300 p-4 flex-grow transition-colors"
							>
								Skills
							</a>
							<a
								href="#projects"
								className="hover:bg-accent-primary-300 p-4 flex-grow transition-colors"
							>
								Projects
							</a>
							<a
								href="#contact"
								className="hover:bg-accent-primary-300 p-4 flex-grow transition-colors"
							>
								Contact
							</a>
						</nav>
					</div>
				</header>
			</section>
		</>
	);
}
