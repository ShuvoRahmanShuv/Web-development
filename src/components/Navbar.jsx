// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-black p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-600">NETFLIX</h1>
      <nav className="space-x-4 text-sm">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          TV Shows
        </a>
        <a href="#" className="hover:underline">
          Movies
        </a>
        <a href="#" className="hover:underline">
          New & Popular
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
