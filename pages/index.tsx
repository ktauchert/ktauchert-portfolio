import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import godzillaPic from "../assets/cat-logo_transparent-gb.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
            <Head>
                <title>KTauchert - Dev - Portfolio</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            {/* Experience */}
            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-center">
                <Skills />
            </section>

            <section id="projects" className="snap-center">
                <Projects />
            </section>

            <section id="contact" className="snap-center">
                <Contact />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <Image
                            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                            src={godzillaPic}
                            alt="dd"
                            height={79}
                            width={79}
                        />
                    </div>
                </footer>
            </Link>
        </div>
    );
}
