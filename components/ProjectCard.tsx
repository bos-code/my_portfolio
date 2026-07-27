import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="featured-card">
      <div className="featured-info">
        <div>
          <div className="mono eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tags">
            {project.stack.map((item) => <span className="tag mono" key={item}>{item}</span>)}
          </div>
        </div>
        <div className="project-links">
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
            <span className="mono eyebrow" style={{display:'inline-flex', alignItems:'center', gap:8}}>
              <LockKeyhole size={13} /> Private case study
            </span>
          )}
        </div>
      </div>
      <div className="featured-visual" data-index={String(index + 1).padStart(2, '0')} aria-hidden="true" />
    </article>
  );
}
