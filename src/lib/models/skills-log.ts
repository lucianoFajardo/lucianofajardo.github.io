interface SkillCategory {
    id: number;
    category: string;
    file: string;
    skillsList: string[];
}

export const skills: SkillCategory[] = [
    {
        id: 1,
        category: "frontend",
        file: "frontend.sh",
        skillsList: ["React", "Astro", "Tailwind CSS", "TypeScript"],
    },
    {
        id: 2,
        category: "backend",
        file: "backend.sh",
        skillsList: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL"],
    },
    {
        id: 3,
        category: "devops",
        file: "devops.sh",
        skillsList: ["Docker", "CI/CD"],
    },
    {
        id: 4,
        category: "tools",
        file: "tools.sh",
        skillsList: ["Git", "Webpack", "GitHub", "VS Code", "Postman"],
    },
];