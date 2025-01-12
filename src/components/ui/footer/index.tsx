'use client';

import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import { LuClipboardPenLine } from 'react-icons/lu';
import SectionHeader from '@/components/ui/section-header';

const email = 'chamarawijepala00@gmail.com';

export default function Footer() {
	const tooltipRef = useRef<HTMLSpanElement>(null);

	return (
		<footer className="bg-primary-800">
			<section className="max-w-5xl mx-auto px-4 py-12">
				<div className="md:max-w-[40%] mb-8">
					<SectionHeader heading="Let's connect" />
				</div>
				<div className="flex flex-col gap-8 md:flex-row">
					<div className="flex flex-col gap-2 flex-grow">
						<div className="flex gap-4 items-center">
							<a
								href={`mailto:${email}`}
								className="underline underline-offset-4 decoration-2 flex items-center gap-2 text-sm normal-case md:text-base hover:text-accent-primary-300 transition-colors duration-300"
							>
								<IoIosMail />
								{email}
							</a>

							<button
								onClick={() => {
									navigator.clipboard.writeText(email);
									if (tooltipRef.current) {
										tooltipRef.current.textContent = 'Copied email';
									}
								}}
								onMouseEnter={() => {
									if (tooltipRef.current) {
										tooltipRef.current.style.transition = 'opacity 0.3s ease';
										tooltipRef.current.style.opacity = '1';
									}
								}}
								onMouseLeave={() => {
									if (tooltipRef.current) {
										// Set duration to 0 to prevent text changing before element fully disappears
										tooltipRef.current.style.transition = 'opacity 0s ease';
										tooltipRef.current.style.opacity = '0';
										tooltipRef.current.textContent = 'Copy to clipboard';
									}
								}}
								className="relative"
							>
								<span
									ref={tooltipRef}
									className="absolute left-1/2 translate-x-[-50%] translate-y-[-125%] p-1 text-xs bg-accent-primary-400 text-nowrap opacity-0 transition-opacity duration-300"
								>
									Copy to clipboard
								</span>
								<span className="hover:text-accent-primary-300 transition-colors duration-300">
									<LuClipboardPenLine className="w-6 h-6" />
								</span>
							</button>
						</div>
						<p className="flex items-center gap-2 text-sm md:text-base">
							<AiFillPhone />
							+94 71 177 8813
						</p>
					</div>
					<div className="flex gap-4 flex-grow">
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
			</section>
		</footer>
	);
}
