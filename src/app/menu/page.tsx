"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./menu.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            RenkYol
          </Link>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Link href="/" className="nav-link">
              Ana Sayfa
            </Link>
            <Link href="/aboutus" className="nav-link">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="nav-link">
              İletişim
            </Link>
          </nav>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </header>
    </>
  );
}
