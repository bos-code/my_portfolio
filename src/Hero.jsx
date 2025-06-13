import { ChipDemo, NameAnimation, FloatingCards } from "./App";

export function Hero() {
  return (
    <div className="hero--wrapper  mt-20">
      <div className="textbox">
        <ChipDemo />

        <NameAnimation />
        <p className="text-2xl">
          A passionate front-end developer skilled in React, JavaScript, and
          modern web technologies. I love building responsive, user-friendly
          interfaces and always enjoy learning new things.
        </p>
        <div className="btns mt-5 flex gap-4">
          <button
            className="btn   transform active:scale-[.8] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            style={{ border: "none" }}
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Chidera_Okonkwo_Resume.pdf";
              link.download = "/Chidera_Okonkwo_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <i className="pi pi-download"></i>
            Download CV
          </button>
          <button className="btn  contact">contact me</button>
        </div>
      </div>

      <div className=" flex justify-center items-center">
        <FloatingCards />
      </div>
    </div>
  );
}
