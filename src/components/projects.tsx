import { ExternalLink, Github } from 'lucide-react';
import { personalInfo, projectsData } from '@/lib/data';
import { SectionHeading } from './section-heading';
import { SectionShell } from './section-shell';

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
};

type ProjectCard = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
};

function getGithubUsername(profileUrl: string): string | null {
  try {
    const parsed = new URL(profileUrl);
    const username = parsed.pathname.replaceAll('/', '').trim();
    return username || null;
  } catch {
    return null;
  }
}

async function getLatestProjects(): Promise<ProjectCard[]> {
  const username = getGithubUsername(personalInfo.github);
  if (!username) return projectsData;

  const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?type=owner&sort=updated&per_page=6`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return projectsData;

    const repos = (await response.json()) as GithubRepo[];
    if (!Array.isArray(repos) || repos.length === 0) return projectsData;

    return repos.map((repo) => {
      const tech = [
        ...(repo.language ? [repo.language] : []),
        ...((repo.topics ?? []).slice(0, 3)),
      ];

      return {
        title: repo.name,
        description: repo.description ?? 'Public repository on GitHub.',
        tech: tech.length > 0 ? tech : ['Open Source'],
        githubUrl: repo.html_url,
        liveUrl: repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : '#',
      };
    });
  } catch {
    return projectsData;
  }
}

export async function Projects() {
  const latestProjects = await getLatestProjects();

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Latest GitHub Repositories"
        description="Most recently updated public repositories from my GitHub profile."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {latestProjects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/55 p-5 shadow-xl shadow-slate-950/15 hover:border-white/20 hover:bg-slate-900/75 sm:p-6"
          >
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-4 pt-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-slate-50"
              >
                <Github size={15} /> Code
              </a>
              {project.liveUrl !== '#' ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-slate-300 hover:text-slate-50"
                >
                  <ExternalLink size={15} /> Live
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
