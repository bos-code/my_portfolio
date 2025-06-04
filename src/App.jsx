import "primeicons/primeicons.css";
import "./App.css";
import React from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/viva-dark/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: true }}>
      <Nav />
    </PrimeReactProvider>
  );
}

function Nav() {
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
      <ul className="flex space-x-4">
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
    </nav>
  );
}

export default App;
