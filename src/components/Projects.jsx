import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/context/LoadingContext";

function Projects() {
    const { language } = useContext(LanguageContext);
    return (
        <section id="projects" className=" h-full w-full pb-16 mx-auto my-10 overflow-hidden">
            <h2 className=" text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
                {projects.title[language]}
            </h2>
            <div className="flex flex-wrap justify-center w-full overflow-hidden">
                {projects.projects.map((project, index) => (
                    <motion.div
                        key={`project-${index}`}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        transition={{
                            duration: index + 1,
                        }}
                        className="w-[360px] mx-3 mb-10"
                    >
                        <div className="header w-full   text-center text-2xl p-2 text-cyan-600 font-bold rounded-lg mb-5">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="image w-full h-[150px] overflow-hidden rounded-lg">
                            <Image src={project.image ?? ""} />
                        </div>
                        <div className="date my-3">
                            <span className="italic">{project.year}</span> -{" "}
                            <Link
                                href={project.link}
                                target="_blank"
                                className="text-orange-400 hover:text-cyan-500"
                            >
                                Projekt-Link
                            </Link>
                        </div>
                        <div className="body w-full my-3 text-justify">
                            {project.description[language]}
                        </div>
                        <div className="footer w-full h-full">
                            {project.stack.map((stack, index) => (
                                <span className="mr-2 rounded bg-zinc-950 px-2 py-1 text-sm font-bold text-cyan-600">
                                    {stack}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-1/2 h-1 border-b border-dashed border-zinc-600 mx-auto"></div>
        </section>
    );
}

export default Projects;
