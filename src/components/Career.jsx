import { experiences_de } from "@/data/experience";
// import React from "react";
import {motion} from 'framer-motion';

function Career() {
    return (
        <section
            id="career-experience"
            className="max-w-[1280px] border-b border-zinc-600 
        my-20 lg:my-30 mx-auto px-5 pb-20 h-full text-lg"
        >
            <h2 className="my-24 text-center text-4xl text-orange-600 text-bold uppercase tracking-wider">
                Experience
            </h2>
            <div className="experience-container">
                {experiences_de.map((experience, index) => (
                    <article
                        key={`exp-item-${index}`}
                        className="flex flex-wrap mb-8 lg: justify-center"
                    >
                        <div className="w-full lg:w-1/4">
                            <p
                                aria-labelledby="year"
                                className="mb-2 text-lg text-zinc-100"
                            >
                                {experience.year}
                            </p>
                        </div>
                        <motion.div
                            whileInView={{
                                x: 0,
                                opacity: 1,
                            }}
                            initial={{
                                x: 100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            className="w-full lg:w-3/4 mb-10"
                        >
                            <h6
                                aria-labelledby="role"
                                className="mb-2 font-semibold"
                            >
                                {experience.role} -{" "}
                                <span className="italic text-cyan-400">
                                    {experience.company}
                                </span>
                            </h6>
                            <div aria-labelledby="description">
                                <ul className="list-disc ml-5">
                                    {experience.description.map(
                                        (item, index) => (
                                            <li
                                                key={`desc-item-${index}`}
                                                className="text-zinc-100"
                                            >
                                                {item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <p aria-labelledby="technologies" className="mt-4">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        key={`tech-item-${index}`}
                                        className="mr-2 rounded bg-zinc-950 px-2 py-1 text-sm font-bold text-cyan-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </p>
                        </motion.div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Career;
