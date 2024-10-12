"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
