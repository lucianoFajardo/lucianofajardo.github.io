export interface ExternalProject {
    title: string;
    image: string;
    description: string;
    subtitle: string;
    tags: string[];
    href: string;
}

export async function getGithubRepos(username: string): Promise<ExternalProject[]> {
    if (!username) return [];
    const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`,
    );
    if (!response.ok) {
        console.error("Error fetching github repos");
        return [];
    }
    const repos = await response.json();
    return repos
        .filter((repo: any) => !repo.fork)
        .map((repo: any) => {
            return {
                title: repo.name.replace(/-/g, " "),
                image: repo.owner.avatar_url,
                description: repo.description || "Sin descripción disponible.",
                subtitle: repo.language || "Código",
                tags:
                    repo.topics && repo.topics.length > 0
                        ? repo.topics
                        : repo.language
                        ? [repo.language]
                        : ["Código"],
                href: repo.html_url,
            };
        });
}