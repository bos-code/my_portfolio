import { ArrowDownRight, ArrowUpRight, Code2, Layers3, MoveUpRight, Sparkles } from 'lucide-react';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects, projects } from '@/data/projects';

const capabilities = [
  {
    icon: <Code2 size={22} />,
    title: 'Frontend engineering',
    copy: 'React, Next.js, Vue and TypeScript systems built for maintainability, speed and real product requirements.'
  },
  {
    icon: <Layers3 size={22} />,
    title: 'Product interfaces',
    copy: 'Complex dashboards, admin environments, booking flows, education platforms and responsive web applications.'
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Motion and polish',
    copy: 'Purposeful interaction using GSAP, Framer Motion and detailed responsive implementation—not decoration for its own sake.'
  }
];

export default function Home() {
  const archive = projects.filter((project) => !project.featured);

  return (
    <main>
      <header className="shell nav">
        <a className="brand" href="#top">john<span>dera</span>.</a>
        <nav className="nav-links mono" aria-label="Primary navigation">
          <a href="/work">Work</a>
          <a href="/github">GitHub</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="status mono"><span className="status-dot" /><span>Available for opportunities</span></div>
      </header>

      <section className="shell hero" id="top">
        <div>
          <div className="hero-kicker mono eyebrow">Frontend engineer / Lagos, Nigeria</div>
          <h1>Digital products<span className="serif">built precisely.</span></h1>
          <p className="hero-copy">I’m Chidera Okonkwo. I turn ambitious product ideas and detailed interfaces into responsive, reliable frontend systems.</p>
          <div className="hero-actions">
            <a className="button" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
            <a className="button secondary" href="/work">View all products <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <aside className="hero-side" aria-label="Portfolio introduction visual">
          <div className="hero-card">
            <div className="hero-card-grid" />
            <div className="hero-card-copy">
              <div><span className="mono eyebrow">Current focus</span><br/><strong>Build.</strong></div>
              <MoveUpRight size={34} />
            </div>
          </div>
        </aside>
      </section>

      <section className="section" id="work">
        <div className="shell">
          <div className="section-head">
            <div className="mono eyebrow">01 / Selected work</div>
            <div>
              <h2>Products with real <span className="serif">depth.</span></h2>
              <p>A selection of substantial platforms and interface engineering work spanning education, personal finance, hospitality, mobile tickets and business operations.</p>
            </div>
          </div>
          <div className="featured-list">
            {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
          </div>
          <div className="hero-actions">
            <a className="button secondary" href="/work">Explore the complete project index <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="shell">
          <div className="section-head">
            <div className="mono eyebrow">02 / Capabilities</div>
            <h2>Design awareness.<br/><span className="serif">Engineering discipline.</span></h2>
          </div>
          <div className="capabilities">
            {capabilities.map((item, index) => (
              <article className="capability" key={item.title}>
                <div className="mono eyebrow">0{index + 1}</div>
                <div style={{marginTop:24}}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div className="mono eyebrow">03 / More products</div>
            <div>
              <h2>Every project gets<br/><span className="serif">its own context.</span></h2>
              <p>These entries now open internal pages explaining what each product does, its current status, the implementation approach and the relevant public or live links.</p>
            </div>
          </div>
          <table className="archive">
            <tbody>
              {archive.map((project) => (
                <tr key={project.title}>
                  <td><a href={`/work/${project.slug}`}>{project.title}</a></td>
                  <td>{project.category}</td>
                  <td className="mono">{project.status ?? project.year}</td>
                  <td><a href={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`}><ArrowUpRight size={20}/></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="about">
        <div className="shell about-grid">
          <div className="mono eyebrow">04 / About</div>
          <div>
            <p className="about-copy">A frontend engineer who cares about the structure beneath the interface <span className="serif">as much as the interface itself.</span></p>
            <div className="about-meta">
              <p>I work across product-facing and business-facing environments, translating requirements into clean architecture, reusable components and strong responsive experiences.</p>
              <p>Core tools include React, Next.js, Vue, JavaScript, TypeScript, React Native, Firebase, Supabase, Zustand, TanStack Query, GSAP and Framer Motion.</p>
            </div>
            <div className="hero-actions">
              <a className="button secondary" href="/about">Read the full story <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="shell">
          <div className="mono eyebrow">05 / Start a conversation</div>
          <h2>Let’s build<br/><span>something sharp.</span></h2>
          <div className="contact-bottom">
            <p>Open to frontend engineering roles, product collaborations and technically ambitious web projects.</p>
            <a className="button" href="/contact">Open contact page <ArrowUpRight size={17}/></a>
          </div>
        </div>
      </section>
    </main>
  );
}
