import { projects } from "./projects";
import { tags } from "../helpers/tagsList";

// TODO: ajusta estos datos con tu información real.
export const profile = {
  name: "Jesús Ospino Arroyo",
  username: "Jesus.Ospino25",
  role: "Desarrollador Full Stack",
  location: "Colombia",
  avatar: "/images/me.webp",
  bio: [
    "🚀 Construyo productos web de punta a punta",
    "💻 Desarrollador de software",
    "💪🏻 Con honor hasta el final"
  ],
  cvUrl: "/pdf/CV_JESUS_OSPINO.pdf",
  contactEmail: "mailto:jesus2515ospino@gmail.com",
  stats: {
    posts: projects.length,
    experience: "+5",
    technologies: Object.keys(tags).length,
  },
};
