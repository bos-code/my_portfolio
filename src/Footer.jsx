export function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-20">
      <nav className="grid grid-flow-col gap-4">
        <a
          href="#about"
          className="link link-hover text-lg md:text-xl"
          title="About Me"
        >
          About
        </a>
        <a
          href="#projects"
          className="link link-hover text-lg md:text-xl"
          title="My Projects"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="link link-hover text-lg md:text-xl"
          title="Contact Me"
        >
          Contact
        </a>
        <a
          href="#resume"
          className="link link-hover text-lg md:text-xl"
          title="View Resume"
        >
          Resume
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-6 mt-4">
          <a
            href="https://twitter.com/chideraokonkwo"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            aria-label="Twitter"
          >
            <i className="pi pi-twitter text-3xl md:text-4xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/chideraokonkwo"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <i className="pi pi-github text-3xl md:text-4xl hover:text-gray-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/chideraokonkwo"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <i className="pi pi-linkedin text-3xl md:text-4xl hover:text-blue-600 transition" />
          </a>
        </div>
      </nav>

      <button
        className="btn btn-ghost mt-4 text-lg md:text-xl"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to Top"
      >
        <i className="pi pi-arrow-up" /> Back to Top
      </button>

      <aside className="mt-4">
        <p className="text-base md:text-lg">
          © {new Date().getFullYear()} Chidera Okonkwo &mdash; Crafted with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          using <span className="font-bold">React</span>
        </p>
      </aside>
    </footer>
  );
}
