import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import {
	SiNextdotjs,
	SiTypescript,
	SiExpress,
	SiTailwindcss,
	SiMongodb,
	SiPostgresql,
	SiPrisma,
	SiMongoose,
	SiEjs,
} from 'react-icons/si';

export const skills = [
	{ id: 1, name: 'React', icon: FaReact },
	{ id: 2, name: 'Next.js', icon: SiNextdotjs },
	{ id: 3, name: 'TypeScript', icon: SiTypescript },
	{ id: 4, name: 'Node', icon: FaNodeJs },
	{ id: 5, name: 'Express.js', icon: SiExpress },
	{ id: 6, name: 'Tailwind CSS', icon: SiTailwindcss },
	{ id: 7, name: 'Sass/SCSS', icon: FaSass },
	{ id: 8, name: 'MongoDB', icon: SiMongodb },
	{ id: 9, name: 'PostgreSQL', icon: SiPostgresql },
	{ id: 10, name: 'Prisma', icon: SiPrisma },
	{ id: 11, name: 'Mongoose', icon: SiMongoose },
	{ id: 12, name: 'EJS', icon: SiEjs },
];

export const majorProjects = [
	{
		id: 1,
		name: 'Positivus',
		imageUrl: '/positivus.png',
		alt: 'positivus landing page',
		description: 'Demo landing page for a digital marketing agency.',
		builtWith: ['React', 'Tailwind'],
		demoUrl: 'https://chamara-wijepala.github.io/positivus/',
		repoUrl: 'https://github.com/Chamara-Wijepala/positivus',
	},
	{
		id: 2,
		name: 'FakeStore',
		imageUrl: '/fakestore.png',
		alt: 'fakestore homepage',
		description: 'React SPA e-commerce site with CRUD functionality.',
		builtWith: ['React', 'React Router', 'Zustand'],
		demoUrl: 'https://chamara-wijepala.github.io/shopping-cart-v2/',
		repoUrl: 'https://github.com/Chamara-Wijepala/shopping-cart-v2',
	},
	{
		id: 3,
		name: 'Where in the world?',
		imageUrl: '/where-in-the-world.png',
		alt: 'where in the world country list',
		description:
			'API project that displays a list of countries and lets users view details about each country. Also has searching functionality.',
		builtWith: ['React', 'React Router'],
		demoUrl: 'https://whereintheworld.onrender.com/',
		repoUrl: 'https://github.com/Chamara-Wijepala/where-in-the-world',
	},
];

export const minorProjects = [
	{
		id: 1,
		name: 'Monstercat clone',
		imageUrl: '/monstercat.png',
		alt: 'monstercat album release page',
		description: 'A clone of the Monstercat album release page.',
		builtWith: ['Sass/SCSS'],
		demoUrl: 'https://monstercat-release-page-clone.onrender.com/',
		repoUrl: 'https://github.com/Chamara-Wijepala/monstercat-release-clone',
	},
	{
		id: 2,
		name: 'Dogventures',
		imageUrl: '/dogventures.png',
		alt: 'dogventures landing page',
		description: 'Demo landing page for a travel agency.',
		builtWith: ['Tailwind'],
		demoUrl: 'https://chamara-wijepala.github.io/dogventures/',
		repoUrl: 'https://github.com/Chamara-Wijepala/dogventures',
	},
];
