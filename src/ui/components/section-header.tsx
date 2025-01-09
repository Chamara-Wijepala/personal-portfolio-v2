function SectionHeader({ heading }: { heading: string }) {
	return (
		<div className="flex items-end gap-2">
			<h2 className="leading-4 md:leading-5 text-xl md:text-2xl text-accent-primary-400">
				{heading}
			</h2>
			<span className="flex-grow h-[4px] bg-gradient-to-r from-accent-primary-400 from-80% to-transparent to-100%"></span>
		</div>
	);
}

export default SectionHeader;
