import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { MobileMenu } from '@/components/MobileMenu';
import { ContactForm } from '@/components/ContactForm';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact — JohnDera',
  description: 'Contact Chidera Okonkwo for frontend engineering roles, product collaborations and web projects.'
};

export default function ContactPage() {
  const phone = process.env.CONTACT_PHONE_NUMBER;
  const whatsappNumber = phone?.replace(/[^\d]/g, '');

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
        <MobileMenu />
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

      <section className={`shell ${styles.formSection}`}>
        <div className={styles.formPanel}>
          <span className="mono eyebrow">Send a message</span>
          <h2>I read every message myself.</h2>
          <ContactForm />
        </div>
        <div className={styles.quickPanel}>
          <span className="mono eyebrow">Other ways to reach me</span>
          {phone ? (
            <>
              <a className={styles.quickLink} href={`tel:${phone}`}>
                <div>
                  <span className="mono eyebrow">Call or text</span>
                  <strong>{phone}</strong>
                </div>
                <Phone size={22} />
              </a>
              <a
                className={styles.quickLink}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <span className="mono eyebrow">WhatsApp</span>
                  <strong>Message me</strong>
                </div>
                <MessageCircle size={22} />
              </a>
            </>
          ) : (
            <p className={styles.quickNote}>
              Phone and WhatsApp are available on request — send a message above and I’ll share them.
            </p>
          )}
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
