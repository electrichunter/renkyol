 "use client";
import React, { useState } from "react"; 
import "./menu.css"; // Import your CSS file for styling
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="navbar">
        <div className="container">
          <a href='/'><div className="logo">RenkYol</div></a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="aboutus">Hakkımızda</a>
            <a href="hizmetler">Hizmetler</a>
            <a href="galeri">Galeri</a>
            <a href="iletisim">İletişim</a>
          </nav>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>
    </>
  );
}
