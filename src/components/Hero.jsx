"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Experience from "./helper/Experience";
import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { container } from "./helper/motion";
import { LanguageContext } from "@/context/LoadingContext";
import { hero } from "@/data/hero";

const subtitle = ["Full Stack Developer", "3D Enthusiast", "Coffee Aficionado"];

const Loading = ({ progress }) => {
    return <div suppressHydrationWarning>{progress}% Loading...</div>;
};

function Hero() {
    const { progress } = useProgress();
    const [loaded, setLoaded] = useState(false);

    const {language} = useContext(LanguageContext);
    console.log(language);

    useEffect(() => {
        if (progress >= 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <section className=" w-full h-full">
            <div
                id="hero-container"
                className="flex flex-wrap lg:flex-row flex-col items-center justify-center my-10"
            >
                <div id="hero-text-wrapper" className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="text-center lg:text-left text-5xl lg:text-6xl font-thin tracking-tight lg:mt-16 text-zinc
                            -100 w-full overflow-hidden"
                        >
                            Karsten Tauchert
                        </motion.h1>
                        <motion.p
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="py-10 bg-gradient-to-r from-orange-500 via-zinc-500 to-cyan-500 bg-clip-text text-transparent text-4xl animate-[pulse_6s_linear_infinite]"
                        >
                            <Typewriter
                                words={subtitle}
                                loop="infinite"
                                cursor={true}
                                cursorStyle="|"
                                cursorBlinking={true}
                                typeSpeed={50}
                                deleteSpeed={80}
                                delaySpeed={1300}
                            />
                        </motion.p>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            id="hero-text"
                        >
                            {hero[language].text}
                        </motion.p>
                    </div>
                </div>
                <div
                    id="hero-image-wrapper"
                    className="w-[80%] lg:w-1/2 aspect-square flex items-center justify-center"
                >
                    {/* Image ir three js Scene */}
                    <motion.div
                        className="w-full h-full"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 1,
                        }}
                    >
                        <Suspense fallback={null}>
                            {loaded ? (
                                // <div>Suspens not</div>
                                <Experience />
                            ) : (
                                <Loading
                                    suppressHydrationWarning
                                    progress={progress}
                                />
                            )}
                        </Suspense>
                    </motion.div>
                </div>
            </div>
            <div className="w-1/2 h-1 border-b mt-20 border-dashed border-zinc-600 mx-auto"></div>
        </section>
    );
}

export default Hero;
