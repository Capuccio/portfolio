import ReactJS from '../components/icons/ReactJS.astro';
import NextJS from '../components/icons/NextJS.astro';
import Expo from '../components/icons/Expo.astro';
import Tailwind from '../components/icons/Tailwind.astro';
import StyledComponents from '../components/icons/Styledcomponents.astro';
import Express from '../components/icons/Express.astro';
import NestJS from '../components/icons/NestJS.astro';
import PostgreSQL from '../components/icons/PostgreSQL.astro';

export const TAGS = {
	REACT: {
		name: "React",
		class: "bg-react text-white",
		icon: ReactJS
	},
	EXPRESS: {
		name: "Express",
		class: "bg-express text-white",
		icon: Express
	},
	NEXTJS: {
		name: "Next.js",
		class: "bg-nextjs text-white",
		icon: NextJS
	},
	EXPO: {
		name: "Expo",
		class: "bg-white",
		icon: Expo
	},
	TAILWIND: {
		name: "Tailwind",
		class: "bg-tailwind text-white",
		icon: Tailwind
	},
	STYLEDCOMPONENTS: {
		name: "Styled Components",
		class: "bg-styledcomponents text-white",
		icon: StyledComponents
	},
	NESTJS: {
		name: "NestJS",
		class: "bg-nestjs text-white",
		icon: NestJS
	},
	POSTGRESQL: {
		name: "Postgres",
		class: "bg-postgresql text-white",
		icon: PostgreSQL
	}
}