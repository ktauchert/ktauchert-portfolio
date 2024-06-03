"use client";
import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { LanguageContext } from "@/context/LoadingContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Flag from "react-flagkit";
import { RiArrowUpWideFill } from "react-icons/ri";

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLangButton = () => {
    if (language === "de") {
      setLanguage("en");
    } else {
      setLanguage("de");
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <Hero />

      <About />

      <Technologies />

      <Career />

      {/* Projects */}
      <Projects />

      <Contact />

      <div className="fixed bottom-3 right-3 text-4xl rounded-full text-orange-600">
        <Link href="#brand-icon">
          <RiArrowUpWideFill />
        </Link>
        <button
          title="Change Language"
          className="ml-1"
          onClick={handleLangButton}
        >
          <Flag country={language === "de" ? "US" : "DE"} />
        </button>
      </div>
    </div>
  );
}
