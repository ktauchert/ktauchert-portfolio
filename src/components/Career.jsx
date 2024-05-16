import { LanguageContext } from "@/context/LoadingContext";
import { experiences } from "@/data/experience";
// import React from "react";
import {motion} from 'framer-motion';
import { useContext } from "react";

function Career() {
    const {language} = useContext(LanguageContext);
    return (
        <section
            id="career-experience"
            className="mx-auto px-5 h-full text-lg my-10"
        >
            <h2 className=" text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
                Experience
            </h2>
            <div className="experience-container">
                {experiences[language].experiences.map((experience, index) => (
                    <article
                        key={`exp-item-${index}`}
                        className="flex flex-wrap mb-8 lg:justify-center"
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
                                x: 50,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            className="w-full lg:w-3/4"
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
            <div className="w-1/2 h-1 border-b mt-20 border-dashed border-zinc-600 mx-auto"></div>
        </section>
    );
}

export default Career;
