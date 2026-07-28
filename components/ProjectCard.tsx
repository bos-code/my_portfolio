import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const projectIndex = String(index + 1).padStart(2, '0');

  return (
    <article className="featured-card">
      <div className="featured-info">
        <div>
          <div className="project-meta-row">
            <div className="mono eyebrow">{projectIndex} / {project.category}</div>
            {project.status && <span className="project-status mono">{project.status}</span>}
          </div>
          <h3><a href={`/work/${project.slug}`}>{project.title}</a></h3>
          <p>{project.summary}</p>
          <div className="tags">
            {project.stack.map((item) => <span className="tag mono" key={item}>{item}</span>)}
          </div>
        </div>
        <div className="project-links">
          <a className="text-link" href={`/work/${project.slug}`}>
            Read case study <ArrowUpRight size={14} />
          </a>
          {project.liveUrl && (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              Live project <ArrowUpRight size={14} />
            </a>
          )}
          {project.repoUrl && !project.privateRepo && (
            <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={14} />
            </a>
          )}
          {project.privateRepo && !project.liveUrl && (
            <span className="mono eyebrow private-note">
              <LockKeyhole size={13} /> Private source
            </span>
          )}
        </div>
      </div>

      <div className={`featured-visual${project.liveUrl ? ' has-live-preview' : ''}`} data-index={projectIndex}>
        {project.liveUrl && (
          <div className="featured-live-preview" aria-label={`${project.title} live interface preview`}>
            <iframe
              src={project.liveUrl}
              title={`${project.title} live interface preview`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              referrerPolicy="no-referrer"
              tabIndex={-1}
            />
          </div>
        )}
        {project.liveUrl && <span className="featured-preview-label mono">Live interface</span>}
        <a className="featured-visual-link" href={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`} />
      </div>
    </article>
  );
}
