import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
    return (
        <section
            id="projects"
            className="max-w-[1280px] h-full w-full border-b border-zinc-600 pb-16 mx-auto "
        >
            <h2 className="my-20 text-center text-4xl text-orange-600 text-bold uppercase tracking-wider">
                Projects
            </h2>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <motion.div
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        initial={{
                            opacity: 0,
                            y: 300,
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
                            {project.description}
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
        </section>
    );
}

export default Projects;
