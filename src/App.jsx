import "primeicons/primeicons.css";

import { useEffect, useRef, useLayoutEffect, Children } from "react";
import { gsap } from "gsap";
import "./App.css";
import "primereact/resources/themes/lara-dark-indigo/theme.css"; // or any theme you prefer
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { ScreenshotViewer } from "./ScreenshotViewer";

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <Nav />
      <Hero />
      <MainComponent />
    </PrimeReactProvider>
  );
}

function MainComponent() {
  return (
    <div className="mx-20 mt-40">
      <ScreenshotViewer />
    </div>
  );
}

export function NameAnimation() {
  const nameRef = useRef();
  const nameText = "John Dera";

  useEffect(() => {
    const type = () => {
      const el = nameRef.current;
      el.innerHTML = nameText
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");

      const spans = el.querySelectorAll("span");

      gsap.set(spans, { opacity: 0, y: 9 });
      const tl = gsap.timeline();

      tl.to(spans, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.09,
        ease: "ease",
      });
    };

    type();

    const interval = setInterval(() => {
      type();
    }, 10000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <h1 className="text-4xl  font-bold">
      Hello, I'm{" "}
      <span
        ref={nameRef}
        className="aniName text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        {nameText}
      </span>
    </h1>
  );
}

export function ChipDemo({ children }) {
  return (
    <div className="badge p-5 rounded-full text-xl capitalize badge-ghost">
      {children || "frontEnd developer"}
    </div>
  );
}

export const FloatingCards = () => {
  const cardTexts = [
    "A card component has a figure, a body part, and inside body there are title and actions parts",
    "React makes UI development fun and efficient.",
    "React makes UI development fun and efficient.",
    "React makes UI development fun and efficient.",
    "GSAP enables smooth, performant animations.",
    "GSAP enables smooth, performant animations.",
  ];
  const containerRef = useRef();
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    // Only animate cards that are mounted
    cardRefs.current.filter(Boolean).forEach((card) => {
      const float = () => {
        const cardRect = card.getBoundingClientRect();
        const maxX = containerRect.width - cardRect.width;
        const maxY = containerRect.height - cardRect.height;

        gsap.to(card, {
          x: gsap.utils.random(0, maxX),
          y: gsap.utils.random(0, maxY),
          duration: gsap.utils.random(6, 10),
          ease: "back",
          onComplete: float,
        });
      };

      float();
    });
  }, [cardTexts.length]);

  return (
    <div
      ref={containerRef}
      className="boxes p-6 relative  w-full h-full overflow-hidden"
    >
      {cardTexts.map((text, i) => (
        <div
          key={i}
          ref={(el) => (cardRefs.current[i] = el)}
          className="card absolute p-4 w-[15rem] bg-base-100 card-xs shadow-xl"
        >
          <div className="card-body text-lg">
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
