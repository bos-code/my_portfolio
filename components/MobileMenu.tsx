import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/github', label: 'GitHub' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary aria-label="Toggle navigation menu">
        <Menu className="mobile-menu-open-icon" size={22} aria-hidden="true" />
        <X className="mobile-menu-close-icon" size={22} aria-hidden="true" />
      </summary>
      <nav className="mobile-menu-panel mono" aria-label="Mobile navigation">
        {links.map((link, index) => (
          <a href={link.href} key={link.href}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
