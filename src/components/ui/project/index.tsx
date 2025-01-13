import Image from 'next/image';
import clsx from 'clsx';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

export default function Project({
	project,
	index,
}: {
	project: Project;
	index: number;
}) {
	return (
		<div>
			<div className="flex">
				<h3
					className={clsx(
						'bg-accent-primary-500 py-1 px-2 md:text-lg relative after:absolute after:-z-10 after:bg-accent-primary-500 after:block after:w-full after:h-full after:top-0 after:left-0 after:origin-top-left after:skew-x-[40deg] skew-y-0',
						index % 2 !== 0 && '@[800px]:ml-auto @[800px]:after:skew-x-[-40deg]'
					)}
				>
					{project.name}
				</h3>
				<span className="min-h-full aspect-square bg-accent-primary-400"></span>
			</div>
			<div
				className={clsx(
					'bg-primary-800 flex flex-col @[800px]:flex-row',
					index % 2 !== 0 && '@[800px]:flex-row-reverse'
				)}
			>
				<div className="relative w-full aspect-video">
					<Image
						src={project.imageUrl}
						fill={true}
						alt={project.alt}
						sizes="(max-width:832px) 100vw, 600px"
					/>
				</div>
				<div className="flex flex-col gap-4 p-6 w-full @[800px]:max-w-[40%]">
					<div className="font-semibold normal-case">
						<p>{project.description}</p>
						<p className="mt-2">Built with:</p>
						<ul className="list-disc pl-5">
							{project.builtWith.map((tech) => (
								<li key={`${project.id}-${tech}`}>{tech}</li>
							))}
						</ul>
					</div>
					<div className="flex gap-4 mt-auto">
						<a
							href={project.demoUrl}
							target="_blank"
							className="hover:text-accent-primary-300 transition-colors duration-300 text-sm md:text-base flex gap-2 items-center"
						>
							<FaExternalLinkAlt />
							Demo
						</a>
						<a
							href={project.repoUrl}
							target="_blank"
							className="hover:text-accent-primary-300 transition-colors duration-300 text-sm md:text-base flex gap-2 items-center"
						>
							<FaGithub />
							Code
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
