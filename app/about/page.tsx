import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About — JohnDera',
  description: 'The background, engineering approach and product principles behind Chidera Okonkwo’s frontend work.'
};

const timeline = [
  {
    period: 'Foundation',
    title: 'Teaching built the discipline.',
    copy: 'Working as a mathematics teacher strengthened my patience, communication, structured thinking and ability to break complex problems into understandable steps.'
  },
  {
    period: 'Growth',
    title: 'Frontend became product engineering.',
    copy: 'What began with responsive interfaces expanded into authentication, state management, data fetching, offline workflows, admin systems and business-facing product decisions.'
  },
  {
    period: 'Now',
    title: 'Building while studying Computer Science.',
    copy: 'I continue developing production-minded products while studying Computer Science at Lagos State University and deepening my engineering foundations.'
  }
];

const principles = [
  {
    title: 'Structure first',
    copy: 'Good interfaces remain maintainable because the component, state and data architecture beneath them is deliberate.'
  },
  {
    title: 'Responsive by design',
    copy: 'Mobile behavior, content priority and interaction constraints are considered from the beginning—not patched at the end.'
  },
  {
    title: 'Real workflows',
    copy: 'I prefer products with users, permissions, operations and measurable tasks over interfaces that exist only as decoration.'
  }
];

const stack = ['React', 'Next.js', 'Vue', 'TypeScript', 'JavaScript', 'React Native', 'Expo', 'Firebase', 'Supabase', 'Zustand', 'TanStack Query', 'GSAP', 'Framer Motion'];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <header className="shell nav">
        <a className="brand" href="/">john<span>dera</span>.</a>
        <nav className="nav-links mono" aria-label="Portfolio navigation">
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/github">GitHub</a>
          <a href="/about">About</a>
        </nav>
        <a className="text-link" href="mailto:chidera9713@gmail.com">Contact <ArrowUpRight size={14} /></a>
        <MobileMenu />
      </header>

      <section className={`shell ${styles.hero}`}>
        <span className="mono eyebrow">About / Chidera Okonkwo</span>
        <h1>Engineering with<br/><span className="serif">clarity and patience.</span></h1>
        <p>I’m a frontend engineer and mathematics teacher in Lagos. I build product interfaces with the same approach I use to explain difficult ideas: understand the structure, remove confusion and make every step intentional.</p>
      </section>

      <section className={styles.section}>
        <div className={`shell ${styles.story}`}>
          <span className="mono eyebrow">01 / The story</span>
          <div className={styles.storyCopy}>
            <p>I care about the interface people see and the engineering decisions that make it reliable.</p>
            <p>My work spans education platforms, mobile finance, booking systems, content management, hospitality products and precision interface implementation. I’m comfortable moving between product requirements, business conversations and detailed frontend execution.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className="section-head">
            <span className="mono eyebrow">02 / Progression</span>
            <h2>Experience that<br/><span className="serif">compounds.</span></h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <article className={styles.item} key={item.period}>
                <span className="mono eyebrow">{item.period}</span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className="section-head">
            <span className="mono eyebrow">03 / Principles</span>
            <h2>How I approach<br/><span className="serif">the work.</span></h2>
          </div>
          <div className={styles.principles}>
            {principles.map((principle, index) => (
              <article className={styles.principle} key={principle.title}>
                <span className="mono eyebrow">0{index + 1}</span>
                <div>
                  <strong>{principle.title}</strong>
                  <p>{principle.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className="section-head">
            <span className="mono eyebrow">04 / Working stack</span>
            <h2>Tools selected<br/><span className="serif">for the product.</span></h2>
          </div>
          <div className={styles.stack}>
            {stack.map((item) => <span className="mono" key={item}>{item}</span>)}
          </div>
        </div>
      </section>
    </main>
  );
}
