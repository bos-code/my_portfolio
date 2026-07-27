import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import styles from './github.module.css';

export const metadata: Metadata = {
  title: 'GitHub Activity — JohnDera',
  description: 'Public repositories, contribution activity and engineering focus from the bos-code GitHub account.'
};

const achievements = [
  {
    title: 'Product systems',
    copy: 'Education, publishing, booking and finance products with real workflows beyond isolated interface exercises.'
  },
  {
    title: 'Mobile engineering',
    copy: 'React Native and Expo work covering offline data, device security, responsive layouts and native interaction patterns.'
  },
  {
    title: 'Frontend range',
    copy: 'Projects across React, Next.js, Vue, TypeScript, Firebase, Supabase, GSAP and API-driven interfaces.'
  },
  {
    title: 'Continuous building',
    copy: 'A growing repository history that documents experiments, client work, production products and ongoing technical development.'
  }
];

const selectedRepos = [
  ['finance_tracker', 'Expo, React Native, Supabase and offline-first personal finance'],
  ['blogger', 'Role-based CMS with TipTap and Firebase workflows'],
  ['stream-vibe-movies', 'Media discovery experience powered by TMDB'],
  ['pin-strength', 'Security-focused PIN interaction and interface work'],
  ['my_portfolio', 'This Next.js portfolio and case-study system']
] as const;

export default function GitHubPage() {
  return (
    <main className={styles.page}>
      <header className="shell nav">
        <a className="brand" href="/">john<span>dera</span>.</a>
        <nav className="nav-links mono" aria-label="Portfolio navigation">
          <a href="/">Home</a>
          <a href="/work">Work</a>
          <a href="/github">GitHub</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="text-link" href="https://github.com/bos-code" target="_blank" rel="noreferrer">Open profile <ArrowUpRight size={14} /></a>
      </header>

      <section className={`shell ${styles.hero}`}>
        <span className="mono eyebrow">Public engineering record / bos-code</span>
        <h1>Code, commits<br/><span className="serif">and products.</span></h1>
        <p>This page keeps the development record inside the portfolio while linking to the original public repositories whenever deeper code inspection is useful.</p>
      </section>

      <section className={`shell ${styles.stats}`} aria-label="GitHub repository summary">
        <article className={styles.stat}><span className="mono eyebrow">Owned repositories</span><strong>41</strong></article>
        <article className={styles.stat}><span className="mono eyebrow">Public repositories</span><strong>30</strong></article>
        <article className={styles.stat}><span className="mono eyebrow">Primary focus</span><strong>UI</strong></article>
        <article className={styles.stat}><span className="mono eyebrow">Profile</span><strong>@bos-code</strong></article>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.heading}>
            <span className="mono eyebrow">01 / Contribution grid</span>
            <h2>Activity over<br/><span className="serif">the year.</span></h2>
          </div>
          <div className={`${styles.chartFrame} ${styles.scroll}`}>
            <a href="https://github.com/bos-code" target="_blank" rel="noreferrer" aria-label="Open bos-code GitHub profile">
              <img src="https://ghchart.rshah.org/5a79ff/bos-code" alt="bos-code public GitHub contribution chart" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.heading}>
            <span className="mono eyebrow">02 / GitHub trophies</span>
            <h2>Public activity,<br/><span className="serif">summarized.</span></h2>
          </div>
          <div className={`${styles.trophyFrame} ${styles.scroll}`}>
            <img src="https://github-profile-trophy.vercel.app/?username=bos-code&theme=darkhub&no-frame=true&no-bg=true&margin-w=10&row=2&column=4" alt="bos-code GitHub profile trophies" loading="lazy" />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.heading}>
            <span className="mono eyebrow">03 / Engineering signals</span>
            <h2>What the repository<br/><span className="serif">history represents.</span></h2>
          </div>
          <div className={styles.achievements}>
            {achievements.map((achievement, index) => (
              <article className={styles.achievement} key={achievement.title}>
                <span className="mono eyebrow">0{index + 1}</span>
                <div>
                  <strong>{achievement.title}</strong>
                  <p>{achievement.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="shell">
          <div className={styles.heading}>
            <span className="mono eyebrow">04 / Selected public repositories</span>
            <h2>Code worth<br/><span className="serif">opening.</span></h2>
          </div>
          <div className={styles.repos}>
            {selectedRepos.map(([name, description]) => (
              <a className={styles.repo} href={`https://github.com/bos-code/${name}`} target="_blank" rel="noreferrer" key={name}>
                <strong>{name}</strong>
                <span>{description}</span>
                <ArrowUpRight size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
