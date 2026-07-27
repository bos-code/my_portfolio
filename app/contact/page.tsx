import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — JohnDera',
  description: 'Contact Chidera Okonkwo for frontend engineering roles, product collaborations and web projects.'
};

export default function ContactPage() {
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
        <div className="status mono"><span className="status-dot" /><span>Available for opportunities</span></div>
      </header>

      <section className={`shell ${styles.hero}`}>
        <div>
          <span className="mono eyebrow">Contact / Start a conversation</span>
          <h1>Let’s build<br/><span>something sharp.</span></h1>
          <p className={styles.intro}>Open to frontend engineering roles, product collaborations, client work and technically ambitious interface projects.</p>
        </div>

        <div className={styles.options}>
          <a className={styles.option} href="mailto:chidera9713@gmail.com">
            <span className="mono eyebrow">Primary contact</span>
            <strong>chidera9713@gmail.com</strong>
            <div className={styles.optionFooter}><span>Send an email</span><Mail size={23} /></div>
          </a>
          <a className={styles.option} href="https://github.com/bos-code" target="_blank" rel="noreferrer">
            <span className="mono eyebrow">Development profile</span>
            <strong>github.com/bos-code</strong>
            <div className={styles.optionFooter}><span>Review public code</span><ArrowUpRight size={23} /></div>
          </a>
        </div>
      </section>

      <section className={`shell ${styles.meta}`}>
        <article>
          <span className="mono eyebrow">Location</span>
          <strong><MapPin size={17} /> Lagos, Nigeria</strong>
        </article>
        <article>
          <span className="mono eyebrow">Positioning</span>
          <strong>Frontend Engineer</strong>
        </article>
        <article>
          <span className="mono eyebrow">Work environment</span>
          <strong>Product and business-facing teams</strong>
        </article>
      </section>
    </main>
  );
}
