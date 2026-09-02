import type { TagKey } from "../helpers/tagsList";

export interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: TagKey[];
  favorite: boolean;
  date: string;
  likes: number;
  comments: number;
  demoUrl: string;
  githubUrl: string;
}

// TODO: reemplaza estos proyectos placeholder con tu portafolio real
// (título, descripción, tags, enlaces).
export const projects: Project[] = [
  {
    id: "app-egresados",
    title: "App Egresados",
    image: "/images/projects/app-egresados.svg",
    description:
      "Aplicación para la gestión y comunicación con la comunidad de egresados de una institución educativa.",
    tags: ["react", "nodejs", "mongodb"],
    favorite: true,
    date: "2024",
    likes: 128,
    comments: 12,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "inmobiliaria",
    title: "Plataforma Inmobiliaria",
    image: "/images/projects/inmobiliaria.svg",
    description:
      "Sitio web para publicación y búsqueda de propiedades inmobiliarias con filtros avanzados.",
    tags: ["nextjs", "tailwind", "sqlserver"],
    favorite: true,
    date: "2024",
    likes: 96,
    comments: 8,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "juanxxiii",
    title: "Institución Juan XXIII",
    image: "/images/projects/juanxxiii.svg",
    description:
      "Sitio institucional para colegio, con información académica y gestión de contenidos.",
    tags: ["angular", "csharp", "sqlserver"],
    favorite: false,
    date: "2023",
    likes: 74,
    comments: 5,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "page-egresados",
    title: "Portal de Egresados",
    image: "/images/projects/page-egresados.svg",
    description:
      "Portal web informativo enfocado en la vinculación de egresados con nuevas oportunidades.",
    tags: ["react", "nodejs", "mysql"],
    favorite: true,
    date: "2023",
    likes: 110,
    comments: 9,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pumarejo",
    title: "Institución Pumarejo",
    image: "/images/projects/pumarejo.svg",
    description:
      "Plataforma institucional con módulos de gestión académica y administrativa.",
    tags: ["angular", "nestjs", "mongodb"],
    favorite: false,
    date: "2023",
    likes: 63,
    comments: 4,
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "santa-rosa",
    title: "Institución Santa Rosa",
    image: "/images/projects/santaRosa.svg",
    description:
      "Sitio web institucional con enfoque en accesibilidad y experiencia responsiva.",
    tags: ["nextjs", "tailwind", "mysql"],
    favorite: false,
    date: "2022",
    likes: 58,
    comments: 3,
    demoUrl: "#",
    githubUrl: "#",
  },
];
