export const tags = {
  csharp: { image: "/images/skills/csharp.svg", title: "C#", width: 12 },
  angular: { image: "/images/skills/angular.svg", title: "Angular", width: 12 },
  nestjs: { image: "/images/skills/nestjs.svg", title: "NestJs", width: 12 },
  react: { image: "/images/skills/react.svg", title: "React", width: 12 },
  nextjs: { image: "/images/skills/next.svg", title: "NextJs", width: 12 },
  nodejs: { image: "/images/skills/nodejs.svg", title: "NodeJs", width: 12 },
  tailwind: {
    image: "/images/skills/tailwindcss.svg",
    title: "Tailwind",
    width: 12,
  },
  mongodb: { image: "/images/skills/mongodb.svg", title: "MongoDB", width: 7 },
  mysql: { image: "/images/skills/mysql.svg", title: "MySql", width: 12 },
  sqlserver: {
    image: "/images/skills/sql-server.svg",
    title: "Sql Server",
    width: 15,
  },
  javascript: {
    image: "/images/skills/javascript.svg",
    title: "JavaScript",
    width: 12,
  },
  typescript: {
    image: "/images/skills/typescript.svg",
    title: "TypeScript",
    width: 12,
  },
  html5: { image: "/images/skills/html5.svg", title: "HTML5", width: 12 },
  css: { image: "/images/skills/css.svg", title: "CSS3", width: 12 },
  git: { image: "/images/skills/git.svg", title: "Git", width: 12 },
  aws: { image: "/images/skills/aws.svg", title: "AWS", width: 12 },
} as const;

export type TagKey = keyof typeof tags;
