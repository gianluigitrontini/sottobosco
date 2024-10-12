"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      className={`z-10 fixed top-0 w-full transition duration-500 border-b ${
        scrolled
          ? "bg-white  border-slate-200"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <img src="/logo.png" alt="" className="py-4 max-w-[100px] w-full" />
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <a href="#chi-siamo">Chi Siamo</a>
            </li>
            <li>
              <a href="#marketplace">Marketplace</a>
            </li>
            <li>
              <a href="#produttori">Per i Produttori</a>
            </li>
            <li>
              <a href="#corsi-e-laboratori">Corsi e Laboratori</a>
            </li>
            <li>
              <a href="#comunita">Rimani Aggiornato</a>
            </li>
          </ul>
        </nav>
        {/* Hamburger menu icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden w-full fixed inset-0 bg-white">
          <ul className="flex flex-col gap-8 p-4 text-xl text-center">
            <li>
              <a href="#chi-siamo" onClick={() => toggleMenu()}>
                Chi Siamo
              </a>
            </li>
            <li>
              <a href="#marketplace" onClick={() => toggleMenu()}>
                Marketplace
              </a>
            </li>
            <li>
              <a href="#produttori" onClick={() => toggleMenu()}>
                Per i Produttori
              </a>
            </li>
            <li>
              <a href="#corsi-e-laboratori" onClick={() => toggleMenu()}>
                Corsi e Laboratori
              </a>
            </li>
            <li>
              <a href="#comunita" onClick={() => toggleMenu()}>
                Rimani Aggiornato
              </a>
            </li>
            <li>
              <button onClick={() => toggleMenu()} className="btn-outline">
                Chiudi
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
