import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Selected Work — JohnDera',
  description: 'Product platforms, mobile applications, business websites and interface engineering by Chidera Okonkwo.'
};

export default function WorkPage() {
  return (
    <main>
      <header className="shell nav">
        <a className="brand" href="/">john<span>dera</span>.</a>
        <nav className="nav-links mono" aria-label="Portfolio navigation">
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/github">GitHub</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="status mono"><span className="status-dot" /><span>Available for opportunities</span></div>
        <MobileMenu />
      </header>

      <section className="shell page-hero">
        <div className="mono eyebrow">Project index / {projects.length} documented products</div>
        <h1>Work with<br/><span className="serif">context.</span></h1>
        <p>Each project opens as an internal case study explaining what the product does, the problem it addresses, my role, the technical direction and its present state.</p>
      </section>

      <section className="shell section">
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-card" key={project.slug}>
              <div>
                <div className="work-card-top">
                  <span className="mono eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</span>
                  {project.status && <span className="project-status mono">{project.status}</span>}
                </div>
                <h2><a href={`/work/${project.slug}`}>{project.title}</a></h2>
                <p>{project.summary}</p>
                <div className="tags">
                  {project.stack.slice(0, 4).map((item) => <span className="tag mono" key={item}>{item}</span>)}
                </div>
              </div>
              <div className="work-card-footer">
                <span className="mono eyebrow">{project.year} / {project.role}</span>
                <a className="text-link" href={`/work/${project.slug}`}>View product <ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
