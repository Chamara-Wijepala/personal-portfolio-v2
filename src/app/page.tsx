import Project from '@/components/ui/project';
import SectionHeader from '@/components/ui/section-header';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { skills, majorProjects, minorProjects } from './data';

export default function Home() {
	return (
		<>
			<Header />

			<main className="flex flex-col gap-24 md:gap-32 py-24 md:py-32">
				<section className="max-w-[46rem] mx-auto px-4 md:px-0">
					<SectionHeader heading="About me" />
					<p className="mt-4 text-sm md:text-base">
						I&apos;m a self taught fullstack developer. I started learning how
						to code in 2020 and quickly discovered how much I loved it. For me,
						nothing is more satisfying than building something from scratch.
					</p>
				</section>

				<section className="w-full max-w-[46rem] mx-auto">
					<div className="bg-primary-800 border-t-4 border-accent-primary-400 p-4">
						<h2 className="text-xl my-4 md:mx-4">Skills</h2>
						<div className="grid items-center grid-cols-[repeat(auto-fit,minmax(100px,1fr))] grid-rows-[100px] auto-rows-[100px] md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-rows-[150px] md:auto-rows-[150px]">
							{skills.map(({ id, name, icon: Icon }) => (
								<div
									key={id}
									className="flex flex-col items-center flex-grow gap-2 p-4 group"
								>
									<Icon className="w-12 h-12 md:w-20 md:h-20 group-hover:text-accent-primary-300 transition-colors duration-300" />
									<span className="text-xs text-center text-secondary-200 group-hover:text-accent-primary-300 transition-colors duration-300">
										{name}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="w-full max-w-5xl mx-auto px-4 @container">
					<SectionHeader heading="Personal Projects" />
					<div className="flex flex-col gap-12 md:gap-32 mt-8">
						{majorProjects.map((project, index) => (
							<Project key={project.id} project={project} index={index} />
						))}
					</div>
				</section>

				<section className="w-full max-w-5xl mx-auto px-4">
					<SectionHeader heading="More Projects" />
					<div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
						{minorProjects.map((project, index) => (
							<div key={project.id} className="@container">
								<Project project={project} index={index} />
							</div>
						))}
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
