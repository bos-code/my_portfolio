import { Button } from "primereact/button";
import React from "react";
import SizeDemo from "./HeadlessDemo";
export function Nav() {
  return (
    <nav className="nav p-4 gap-2 flex items-center justify-between">
      <div className="logo">
        <a
          href="#"
          className="capitalize text-3xl text-[#ffffff98] font-bold  tracking-wide"
        >
          <span>dera</span>
        </a>
      </div>
      <ul className="md:flex space-x-4 hidden ">
        <li>
          <Button label="Projects" className="nav-links" text raised />
        </li>
        <li>
          <Button label="About" className="nav-links" text raised />
        </li>
        <li>
          <Button label="Contact" className="nav-links" text raised />
        </li>
      </ul>
      <SizeDemo />
    </nav>
  );
}
