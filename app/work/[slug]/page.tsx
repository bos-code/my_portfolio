import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { DeviceShowcase } from '@/components/DeviceShowcase';
import { getProject, projects } from '@/data/projects';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} — JohnDera`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-study">
      <header className="shell case-nav">
        <a className="brand" href="/">john<span>dera</span>.</a>
        <a className="mono eyebrow back-link" href="/work"><ArrowLeft size={14} /> Back to all work</a>
      </header>

      <section className="shell case-hero">
        <div className="case-heading-meta">
          <div className="mono eyebrow">{project.year} / {project.category}</div>
          {project.status && <span className="project-status mono">{project.status}</span>}
        </div>
        <h1>{project.title}</h1>
        <div className="case-intro">
          <p>{project.summary}</p>
          <div>
            <span className="mono eyebrow">My role</span>
            <p>{project.role}</p>
          </div>
        </div>
      </section>

      <div className="shell">
        <DeviceShowcase title={project.title} />
      </div>

      <section className="shell case-details">
        <article>
          <span className="mono eyebrow">01 / The challenge</span>
          <h2>What needed to be solved.</h2>
          <p>{project.challenge}</p>
        </article>
        <article>
          <span className="mono eyebrow">02 / The approach</span>
          <h2>How I structured the solution.</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="shell case-highlights">
        <div>
          <span className="mono eyebrow">03 / Product highlights</span>
          <h2>Built around the product, not decoration.</h2>
        </div>
        <ol>
          {project.highlights.map((highlight, index) => (
            <li key={highlight}>
              <span className="mono">{String(index + 1).padStart(2, '0')}</span>
              <strong>{highlight}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell case-footer">
        <div className="tags">
          {project.stack.map((item) => <span className="tag mono" key={item}>{item}</span>)}
        </div>
        <div className="project-links">
          {project.liveUrl && <a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Open live project <ArrowUpRight size={16} /></a>}
          {project.repoUrl && !project.privateRepo && <a className="button secondary" href={project.repoUrl} target="_blank" rel="noreferrer">View public GitHub <ArrowUpRight size={16} /></a>}
          {project.privateRepo && !project.liveUrl && <span className="mono eyebrow private-note"><LockKeyhole size={14} /> Source repository is private</span>}
        </div>
      </section>

      <section className="shell next-project">
        <span className="mono eyebrow">Next product</span>
        <a href={`/work/${nextProject.slug}`}>
          <strong>{nextProject.title}</strong>
          <ArrowUpRight size={34} />
        </a>
      </section>
    </main>
  );
}
