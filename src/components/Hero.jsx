"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Experience from "./helper/Experience";
import { motion } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { container } from "./helper/motion";

const subtitle = ["Full Stack Developer", "3D Enthusiast", "Coffee Aficionado"];

const Loading = ({ progress }) => {
    return <div suppressHydrationWarning>{progress}% Loading...</div>;
};

function Hero() {
    const { progress } = useProgress();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (progress >= 100) {
            setLoaded(true);
        }
    }, [progress]);

    return (
        <section
            className="max-w-[1280px] border-b border-zinc-600 
        my-24 lg:my-30 mx-auto px-5 pb-20 h-full"
        >
            <div
                id="hero-container"
                className="flex flex-wrap lg:flex-row flex-col items-center"
            >
                <div id="hero-text-wrapper" className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="text-center lg:text-left text-4xl lg:text-6xl font-thin tracking-tight lg:mt-16 text-zinc
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
                            Welcome to my digital playground! I’m a developer
                            who thrives on turning ideas into reality. Whether
                            it’s crafting elegant web applications or
                            experimenting with 3D elements, I’m always up for a
                            creative challenge. Starting with a blank canvas is
                            both exhilarating and daunting. But that’s where the
                            magic happens! Whether it’s a simple website or a 3D
                            scene, I love transforming emptiness into something
                            beautiful. Blender is my playground for 3D
                            creativity. Let’s bring that third dimension to the
                            browser! My go-to tools and frameworks include
                            React, Next.js, Tailwind CSS, and React Three Fiber.
                            And of course, no coding session is complete without
                            a cup of coffee by my side. Feel free to explore my
                            projects, drop me a message, or let’s grab a virtual
                            coffee! ☕ Let’s build something amazing together!
                            🚀✨
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
        </section>
    );
}

export default Hero;
