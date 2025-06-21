import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const techStack = [
  "html5", "css3", "sass", "javascript", "react",
  "nodejs", "express", "python", "tailwindcss",
  "git", "github", "firebase", "supabase", "vercel",
  "wordpress", "vscode", "npm"
];

export default function BiDirectionalStack() {
  const iconTrack = useRef();
  const nameTrack = useRef();
  const iconTween = useRef();
  const nameTween = useRef();

  useEffect(() => {
    const iconEl = iconTrack.current;
    const nameEl = nameTrack.current;

    iconEl.innerHTML += iconEl.innerHTML;
    nameEl.innerHTML += nameEl.innerHTML;

    iconTween.current = gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
      .to(iconEl, { xPercent: -50, duration: 20 })
      .to(iconEl, { xPercent: 0, duration: 20 });

    nameTween.current = gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
      .to(nameEl, { xPercent: 50, duration: 20 })
      .to(nameEl, { xPercent: 0, duration: 20 });

    Draggable.create(iconEl, {
      type: "x",
      inertia: true,
      onPress: () => iconTween.current.pause(),
      onRelease: () => iconTween.current.play(),
    });

    Draggable.create(nameEl, {
      type: "x",
      inertia: true,
      onPress: () => nameTween.current.pause(),
      onRelease: () => nameTween.current.play(),
    });
  }, []);

  const pauseAll = () => {
    iconTween.current?.pause();
    nameTween.current?.pause();
  };

  const resumeAll = () => {
    iconTween.current?.play();
    nameTween.current?.play();
  };

  return (
    <div className="w-full overflow-hidden py-8 select-none space-y-6">
      <h2 className="text-4xl font-bold flex text-center justify-center item-center pb-3 text-white px-4"> My Tech Stack</h2>

      {/* Icons */}
      <div className="relative w-full">
        <div
          ref={iconTrack}
          className="flex gap-10 whitespace-nowrap will-change-transform"
        >
          {techStack.map((tech, i) => (
            <div
              key={`icon-${tech}-${i}`}
              onMouseEnter={pauseAll}
              onMouseLeave={resumeAll}
              className="flex-none min-w-[80px] h-[80px] flex items-center justify-center  bg-gray-800 rounded-lg shadow  transition duration-300"
            >
              <i className={`devicon-${tech}-plain colored text-4xl`} title={tech}></i>
            </div>
          ))}
        </div>
      </div>

      {/* Names */}
      <div className="relative w-full">
        <div
          ref={nameTrack}
          className="flex gap-10 whitespace-nowrap will-change-transform"
        >
          {techStack.map((tech, i) => (
            <div
              key={`name-${tech}-${i}`}
              onMouseEnter={pauseAll}
              onMouseLeave={resumeAll}
              className="flex-none min-w-[80px] h-[40px] flex items-center justify-center  border-opacity-20 bg-gray-800 text-white text-sm rounded-md shadow-2xl hover:text-black transition"
            >
              {tech.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
