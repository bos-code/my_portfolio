import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function SizeDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card md:hidden flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className={`fixed left-5 top-1/2 -translate-y-1/2 w-[400px] h-[60vh] bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-white/20 overflow-hidden flex flex-col justify-center items-center
          transition-all duration-500 ease-in
          ${
            visible
              ? "translate-x-0 block opacity-100"
              : "-translate-x-full opacity-0 hidden pointer-events-none"
          }
          hover:border-blue-400`}
        showCloseIcon={false}
        style={{
          maxWidth: "90vw",
          maxHeight: "100vh",
          padding: 0,
        }}
        maskClassName="bg-black/40"
      >
        {/* Custom close icon top right */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full glass backdrop-blur-md shadow-lg hover:bg-white/60  border border-white/30 text-2xl text-gray-800 transition-transform hover:scale-115"
          style={{
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <ul className="space-y-4 w-full flex flex-col items-center">
          <li className="">
            <Button
              label="Projects"
              className="nav-links w-full transition-transform hover:scale-115 border border-transparent hover:border-blue-400"
              text
              raised
            />
          </li>
          <li className="">
            <Button
              label="About"
              className="nav-links w-full transition-transform hover:scale-105 border border-transparent hover:border-blue-400"
              text
              raised
            />
          </li>
          <li className="">
            <Button
              label="Contact"
              className="nav-links w-full transition-transform hover:scale-115 border border-transparent hover:border-blue-400"
              text
              raised
            />
          </li>
        </ul>
      </Sidebar>
      <Button
        icon="pi pi-bars"
        onClick={() => setVisible(true)}
        className="md:hidden transition-transform hover:scale-115"
        aria-label="Open Menu"
      />
    </div>
  );
}
