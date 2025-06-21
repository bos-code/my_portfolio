import { ChipDemo, NameAnimation } from "./App";
import dev from "./assets/dev.jpg";
import StarRating from "./start";
import StackIcons from "./techStack";

export function AboutMe() {
  return (
    <div className=" bg-base-100  min-h-screen  mt-[20vh]">
      <div className=" text-center flex flex-col items-center justify-center gap-2  p-6">
        <ChipDemo>
          <div className="inline-grid *:[grid-area:1/1] pr-2">
            <div className=" status status-lg status-success  animate-ping"></div>
            <div className="status status-lg status-success"></div>
          </div>{" "}
          Frontend developer
        </ChipDemo>{" "}
        <NameAnimation text="Swift Dev, ">JohnDera</NameAnimation>
        <p className="pt-2 text-lg">
          Brief intro about myself, my skills, and my passion for web
          development.
        </p>
      </div>
      <div className="content flex  flex-col md:flex-row items-center justify-center gap-6 p-6">
        <div className="card profile-card bg-base-200 shadow-4xl  flex flex-col items-start justify-center gap-4 ">
          <figure className="w-full relative h-[500px] object-top bg-blue-100  rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              loading="lazy"
              className=" w-full object-contain grayscale-75 "
              src={dev}
              alt="Profile"
            />
          </figure>
          <div className="inline-grid *:[grid-area:1/1] pr-2 absolute right-7">
            <div className="absolute w-3 h-3 rounded-full bg-green-700 opacity-75 animate-ping"></div>

            <div className="relative w-3 h-3 rounded-full bg-green-600"></div>
          </div>
          <div className="textbox--cd flex-2/3">
            <NameAnimation text="Hello, i'm">JohnDera</NameAnimation>
            <p className="text-lg">Frontend developer based in Nigeria</p>
            <div className="card-body socials flex flex-row items-center gap-3">
              <span className="bg-base-300 p-8 rounded-full hover:bg-base-200 transition-colors  relative">
                <i
                  className="pi pi-facebook"
                  style={{
                    color: "white",
                    position: "absolute",
                    fontSize: "1.5rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></i>
              </span>
              <div className="divider divider-horizontal"></div>

              <span className="bg-base-300 p-8 rounded-full hover:bg-base-200 transition-colors relative">
                <i
                  className="pi pi-whatsapp"
                  style={{
                    color: "white",
                    position: "absolute",
                    fontSize: "1.5rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></i>
              </span>
              <div className="divider divider-horizontal "></div>

              <span className="bg-base-300 p-8 rounded-full hover:bg-base-200 transition-colors relative">
                <i
                  className="pi pi-github"
                  style={{
                    color: "white",
                    position: "absolute",
                    fontSize: "1.5rem",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></i>
              </span>
            </div>
            <div className="divider divider-vertical"></div>
            <button className="btn  contact ">contact me</button>
          </div>
        </div>
        <div className="card flex-1 stack card-bordered bg-base-100 shadow-2xl">
          <div className="card-body">
            <p className="text-2xl font-bold text-center">
              I am a passionate frontend developer with a keen interest in
              creating beautiful and functional web applications. I love
              exploring new technologies and continuously improving my skills.
            </p>
            <p className="text-lg">
              My journey in web development started with a fascination for how
              things work behind the scenes, and it has grown into a
              full-fledged passion for building user-friendly interfaces.
            </p>
            <div className=" divider divide-accent"></div>

            <StackIcons />
            <div className=" divider divide-accent"></div>
                <h2 className="text-4xl font-bold flex text-center justify-center item-center pb-3 px-4 capitalize"> rate me</h2>
            <StarRating onRate = '10'/>

          </div>
        </div>
      </div>
    </div>
  );
}
